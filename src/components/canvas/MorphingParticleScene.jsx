import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import faceParticlesData from '../../utils/faceParticles.json';

export default function MorphingParticleScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1e1e22, 0.0028);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 82;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x1e1e22, 1);
    container.appendChild(renderer.domElement);

    // 2. High-Density Particle Setup (8,500 Face Particles + 700 Ambient)
    const FACE_COUNT = faceParticlesData.length; // 8,500
    const AMBIENT_COUNT = 700;
    const TOTAL_PARTICLES = FACE_COUNT + AMBIENT_COUNT; // 9,200

    const geometry = new THREE.BufferGeometry();
    const currentPositions = new Float32Array(TOTAL_PARTICLES * 3);
    const posHero = new Float32Array(TOTAL_PARTICLES * 3);
    const posStatement = new Float32Array(TOTAL_PARTICLES * 3);
    const posGlobe = new Float32Array(TOTAL_PARTICLES * 3);
    const posBeacon = new Float32Array(TOTAL_PARTICLES * 3);
    const posWave = new Float32Array(TOTAL_PARTICLES * 3);
    const colors = new Float32Array(TOTAL_PARTICLES * 3);

    const colorMuted = new THREE.Color(0x4a4e4c);

    // Populate Particles
    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      const i3 = i * 3;

      if (i < FACE_COUNT) {
        // --- 1. DENSE 3D AVATAR PARTICLES (Full Height on Right Side) ---
        const [px, py, pz, cr, cg, cb] = faceParticlesData[i];

        posHero[i3] = px;
        posHero[i3 + 1] = py;
        posHero[i3 + 2] = pz;

        // Rich colors from face inspection
        colors[i3] = cr;
        colors[i3 + 1] = cg;
        colors[i3 + 2] = cb;
      } else {
        // --- 2. AMBIENT DRIFTING STARS (Far Away, Zero Text Obstruction) ---
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const r = 60 + Math.random() * 30;

        const x = r * Math.sin(phi) * Math.cos(theta);
        // Push ambient particles away from text region (left center)
        posHero[i3] = x > -15 && x < 8 ? (x < 0 ? x - 28 : x + 28) : x;
        posHero[i3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.75;
        posHero[i3 + 2] = -25 + (Math.random() - 0.5) * 40;

        colors[i3] = colorMuted.r * 0.5;
        colors[i3 + 1] = colorMuted.g * 0.5;
        colors[i3 + 2] = colorMuted.b * 0.5;
      }

      currentPositions[i3] = posHero[i3];
      currentPositions[i3 + 1] = posHero[i3 + 1];
      currentPositions[i3 + 2] = posHero[i3 + 2];

      // --- Shape 1: Statement Vortex ---
      const angleVortex = (i / TOTAL_PARTICLES) * Math.PI * 22 + Math.random() * 0.4;
      const radiusVortex = 8 + (i / TOTAL_PARTICLES) * 40;
      posStatement[i3] = Math.cos(angleVortex) * radiusVortex * 1.3;
      posStatement[i3 + 1] = Math.sin(angleVortex) * radiusVortex * 0.6 + (Math.random() - 0.5) * 5;
      posStatement[i3 + 2] = ((i / TOTAL_PARTICLES) - 0.5) * 36;

      // --- Shape 2: Maritime Globe (Rotating sphere with trade routes) ---
      const lat = (Math.random() - 0.5) * Math.PI;
      const lon = Math.random() * Math.PI * 2;
      const rGlobe = 26;
      const isRing = Math.random() < 0.48;
      const ringLat = isRing ? Math.round(lat * 5) / 5 : lat;
      posGlobe[i3] = rGlobe * Math.cos(ringLat) * Math.sin(lon);
      posGlobe[i3 + 1] = rGlobe * Math.sin(ringLat);
      posGlobe[i3 + 2] = rGlobe * Math.cos(ringLat) * Math.cos(lon);

      // --- Shape 3: Origins Beacon (Concentric Radar Rings - Kerala Anchor) ---
      const ringIdx = i % 6;
      const ringRad = 5 + ringIdx * 7.5;
      const ringAngle = Math.random() * Math.PI * 2;
      posBeacon[i3] = Math.cos(ringAngle) * ringRad + (Math.random() - 0.5) * 1.5;
      posBeacon[i3 + 1] = Math.sin(ringAngle) * ringRad * 0.45 + (Math.random() - 0.5) * 1.5;
      posBeacon[i3 + 2] = (Math.random() - 0.5) * 5;

      // --- Shape 4: Selected Works Wave Matrix ---
      const cols = 96;
      const row = Math.floor(i / cols);
      const col = i % cols;
      const gridW = 130;
      const gridH = 80;
      posWave[i3] = (col / cols - 0.5) * gridW;
      posWave[i3 + 1] = -14 + (Math.random() - 0.5) * 3;
      posWave[i3 + 2] = (row / (TOTAL_PARTICLES / cols) - 0.5) * gridH;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Crisp high-definition circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.35, 'rgba(255,255,255,0.75)');
    grad.addColorStop(0.7, 'rgba(255,255,255,0.2)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    // High-density material: crisp size 1.25, high definition opacity
    const material = new THREE.PointsMaterial({
      size: 1.25,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Tracking for 3D Gaze Rotation & Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', onResize);

    // 3. Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Camera parallax
      camera.position.x = mouse.x * 3.5;
      camera.position.y = mouse.y * 2.5;
      camera.lookAt(0, 0, 0);

      // Scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;

      const positions = geometry.attributes.position.array;

      for (let i = 0; i < TOTAL_PARTICLES; i++) {
        const i3 = i * 3;
        let tx = 0, ty = 0, tz = 0;

        if (scrollProgress < 0.18) {
          // --- HERO STAGE: Dense 3D Avatar on Right Side ---
          const t = scrollProgress / 0.18;
          let hx = posHero[i3];
          let hy = posHero[i3 + 1];
          let hz = posHero[i3 + 2];

          // 3D Gaze & Head Tracking for Avatar points
          if (i < FACE_COUNT) {
            const rotY = mouse.x * 0.32;
            const rotX = -mouse.y * 0.22;
            const cosY = Math.cos(rotY);
            const sinY = Math.sin(rotY);
            const cosX = Math.cos(rotX);
            const sinX = Math.sin(rotX);

            // Pivot relative to face center (x: 33.3, y: 1.0, z: 0)
            const dx = hx - 33.3;
            const dy = hy - 1.0;
            const dz = hz;

            const rx1 = dx * cosY + dz * sinY;
            const rz1 = -dx * sinY + dz * cosY;

            const ry2 = dy * cosX - rz1 * sinX;
            const rz2 = dy * sinX + rz1 * cosX;

            hx = 33.3 + rx1;
            hy = 1.0 + ry2;
            hz = rz2;
          }

          tx = hx * (1 - t) + posStatement[i3] * t;
          ty = hy * (1 - t) + posStatement[i3 + 1] * t;
          tz = hz * (1 - t) + posStatement[i3 + 2] * t;
        } else if (scrollProgress < 0.40) {
          // Statement -> Globe
          const t = (scrollProgress - 0.18) / 0.22;
          tx = posStatement[i3] * (1 - t) + posGlobe[i3] * t;
          ty = posStatement[i3 + 1] * (1 - t) + posGlobe[i3 + 1] * t;
          tz = posStatement[i3 + 2] * (1 - t) + posGlobe[i3 + 2] * t;
        } else if (scrollProgress < 0.65) {
          // Globe -> Origins Beacon
          const t = (scrollProgress - 0.40) / 0.25;
          tx = posGlobe[i3] * (1 - t) + posBeacon[i3] * t;
          ty = posBeacon[i3 + 1] * (1 - t) + posBeacon[i3 + 1] * t;
          tz = posGlobe[i3 + 2] * (1 - t) + posBeacon[i3 + 2] * t;
        } else {
          // Origins Beacon -> Wave Matrix
          const t = Math.min((scrollProgress - 0.65) / 0.35, 1);
          tx = posBeacon[i3] * (1 - t) + posWave[i3] * t;
          ty = posBeacon[i3 + 1] * (1 - t) + (posWave[i3 + 1] + Math.sin(elapsedTime * 1.5 + posWave[i3] * 0.1) * 3.5) * t;
          tz = posBeacon[i3 + 2] * (1 - t) + (posWave[i3 + 2] + Math.cos(elapsedTime * 1.2 + posWave[i3] * 0.08) * 2.5) * t;
        }

        const noise = Math.sin(elapsedTime * 0.7 + i * 0.1) * 0.1;
        positions[i3] += (tx + noise - positions[i3]) * 0.09;
        positions[i3 + 1] += (ty + noise - positions[i3 + 1]) * 0.09;
        positions[i3 + 2] += (tz + noise - positions[i3 + 2]) * 0.09;
      }

      geometry.attributes.position.needsUpdate = true;

      // Rotating Globe
      if (scrollProgress >= 0.20 && scrollProgress < 0.52) {
        particles.rotation.y = elapsedTime * 0.22;
        particles.rotation.x = 0.22;
      } else {
        particles.rotation.y = elapsedTime * 0.015;
        particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.04;
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden"
    />
  );
}

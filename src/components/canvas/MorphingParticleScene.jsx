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
    scene.fog = new THREE.FogExp2(0x1e1e22, 0.003);

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

    // 2. Particle Geometry Setup
    const TOTAL_PARTICLES = 3200;
    const FACE_COUNT = Math.min(faceParticlesData.length, 2500);

    const geometry = new THREE.BufferGeometry();
    const currentPositions = new Float32Array(TOTAL_PARTICLES * 3);
    const posHero = new Float32Array(TOTAL_PARTICLES * 3);
    const posStatement = new Float32Array(TOTAL_PARTICLES * 3);
    const posGlobe = new Float32Array(TOTAL_PARTICLES * 3);
    const posBeacon = new Float32Array(TOTAL_PARTICLES * 3);
    const posWave = new Float32Array(TOTAL_PARTICLES * 3);
    const colors = new Float32Array(TOTAL_PARTICLES * 3);

    // Colors
    const colorGold = new THREE.Color(0xf4ce15);
    const colorEmerald = new THREE.Color(0x379777);
    const colorChampagne = new THREE.Color(0xf0f2f0);
    const colorMuted = new THREE.Color(0x525654);

    // Populate Particles
    for (let i = 0; i < TOTAL_PARTICLES; i++) {
      const i3 = i * 3;

      if (i < FACE_COUNT) {
        // --- 1. FACE PARTICLES (Towards Right Empty Side of Hero) ---
        const [px, py, pz, cr, cg, cb] = faceParticlesData[i];
        
        posHero[i3] = px;
        posHero[i3 + 1] = py;
        posHero[i3 + 2] = pz;

        // Colors from face sampling (toned to warm graphite & champagne)
        colors[i3] = cr * 0.9;
        colors[i3 + 1] = cg * 0.9;
        colors[i3 + 2] = cb * 0.9;
      } else {
        // --- 2. AMBIENT DRIFTING PARTICLES (Distant & Non-obstructive) ---
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const r = 55 + Math.random() * 35;
        
        // Push ambient particles away from center/left text region
        const x = r * Math.sin(phi) * Math.cos(theta);
        posHero[i3] = x > -15 && x < 10 ? (x < 0 ? x - 25 : x + 25) : x;
        posHero[i3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
        posHero[i3 + 2] = -20 + (Math.random() - 0.5) * 40;

        // Faint muted color
        colors[i3] = colorMuted.r * 0.6;
        colors[i3 + 1] = colorMuted.g * 0.6;
        colors[i3 + 2] = colorMuted.b * 0.6;
      }

      // Initialize current position to hero
      currentPositions[i3] = posHero[i3];
      currentPositions[i3 + 1] = posHero[i3 + 1];
      currentPositions[i3 + 2] = posHero[i3 + 2];

      // --- Shape 1: Statement Vortex (Pulling into energetic core) ---
      const angleVortex = (i / TOTAL_PARTICLES) * Math.PI * 18 + Math.random() * 0.4;
      const radiusVortex = 10 + (i / TOTAL_PARTICLES) * 36;
      posStatement[i3] = Math.cos(angleVortex) * radiusVortex * 1.25;
      posStatement[i3 + 1] = Math.sin(angleVortex) * radiusVortex * 0.6 + (Math.random() - 0.5) * 5;
      posStatement[i3 + 2] = ((i / TOTAL_PARTICLES) - 0.5) * 35;

      // --- Shape 2: Maritime Globe (Rotating sphere with trade routes) ---
      const lat = (Math.random() - 0.5) * Math.PI;
      const lon = Math.random() * Math.PI * 2;
      const rGlobe = 25;
      const isRing = Math.random() < 0.45;
      const ringLat = isRing ? Math.round(lat * 4) / 4 : lat;
      posGlobe[i3] = rGlobe * Math.cos(ringLat) * Math.sin(lon);
      posGlobe[i3 + 1] = rGlobe * Math.sin(ringLat);
      posGlobe[i3 + 2] = rGlobe * Math.cos(ringLat) * Math.cos(lon);

      // --- Shape 3: Origins Beacon (Concentric Radar Rings - Kerala Anchor) ---
      const ringIdx = i % 5;
      const ringRad = 6 + ringIdx * 8;
      const ringAngle = Math.random() * Math.PI * 2;
      posBeacon[i3] = Math.cos(ringAngle) * ringRad + (Math.random() - 0.5) * 1.5;
      posBeacon[i3 + 1] = Math.sin(ringAngle) * ringRad * 0.45 + (Math.random() - 0.5) * 1.5;
      posBeacon[i3 + 2] = (Math.random() - 0.5) * 5;

      // --- Shape 4: Selected Works Wave Matrix (Undulating 3D plane) ---
      const cols = 64;
      const row = Math.floor(i / cols);
      const col = i % cols;
      const gridW = 120;
      const gridH = 70;
      posWave[i3] = (col / cols - 0.5) * gridW;
      posWave[i3 + 1] = -14 + (Math.random() - 0.5) * 3;
      posWave[i3 + 2] = (row / (TOTAL_PARTICLES / cols) - 0.5) * gridH;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Refined, subtle circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,0.95)');
    grad.addColorStop(0.3, 'rgba(255,255,255,0.6)');
    grad.addColorStop(0.7, 'rgba(255,255,255,0.15)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    // Adjusted material: non-obstructive size (1.35) and controlled opacity (0.65)
    const material = new THREE.PointsMaterial({
      size: 1.4,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Tracking for Parallax & 3D Face Rotation
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
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
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Camera parallax
      camera.position.x = mouse.x * 4;
      camera.position.y = mouse.y * 3;
      camera.lookAt(0, 0, 0);

      // Scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;

      const positions = geometry.attributes.position.array;

      for (let i = 0; i < TOTAL_PARTICLES; i++) {
        const i3 = i * 3;
        let tx = 0, ty = 0, tz = 0;

        if (scrollProgress < 0.18) {
          // --- HERO STAGE (Augastin's Face Point Cloud on Right Side) ---
          const t = scrollProgress / 0.18;
          let hx = posHero[i3];
          let hy = posHero[i3 + 1];
          let hz = posHero[i3 + 2];

          // For the face particles, apply subtle 3D head-tracking toward cursor
          if (i < FACE_COUNT) {
            const rotY = mouse.x * 0.28;
            const rotX = -mouse.y * 0.20;
            const cosY = Math.cos(rotY);
            const sinY = Math.sin(rotY);
            const cosX = Math.cos(rotX);
            const sinX = Math.sin(rotX);

            // Pivot relative to face center (x: 24, y: 2, z: 0)
            const dx = hx - 24.0;
            const dy = hy - 2.0;
            const dz = hz;

            const rx1 = dx * cosY + dz * sinY;
            const rz1 = -dx * sinY + dz * cosY;

            const ry2 = dy * cosX - rz1 * sinX;
            const rz2 = dy * sinX + rz1 * cosX;

            hx = 24.0 + rx1;
            hy = 2.0 + ry2;
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

        // Micro organic breathing
        const noise = Math.sin(elapsedTime * 0.7 + i * 0.1) * 0.12;
        positions[i3] += (tx + noise - positions[i3]) * 0.09;
        positions[i3 + 1] += (ty + noise - positions[i3 + 1]) * 0.09;
        positions[i3 + 2] += (tz + noise - positions[i3 + 2]) * 0.09;
      }

      geometry.attributes.position.needsUpdate = true;

      // Rotate whole particle system during Globe section
      if (scrollProgress >= 0.20 && scrollProgress < 0.52) {
        particles.rotation.y = elapsedTime * 0.22;
        particles.rotation.x = 0.22;
      } else {
        particles.rotation.y = elapsedTime * 0.02;
        particles.rotation.x = Math.sin(elapsedTime * 0.04) * 0.05;
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

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function MorphingParticleScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1e1e22, 0.002);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 85;

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
    const PARTICLE_COUNT = 3200;
    const geometry = new THREE.BufferGeometry();

    const currentPositions = new Float32Array(PARTICLE_COUNT * 3);
    const posHero = new Float32Array(PARTICLE_COUNT * 3);
    const posStatement = new Float32Array(PARTICLE_COUNT * 3);
    const posGlobe = new Float32Array(PARTICLE_COUNT * 3);
    const posBeacon = new Float32Array(PARTICLE_COUNT * 3);
    const posWave = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const baseColors = new Float32Array(PARTICLE_COUNT * 3);

    // Primary Ingrassia Colors: Gold (#f4ce15), Jade Emerald (#379777), Champagne (#f0f2f0), Slate (#8b8f8c)
    const colorGold = new THREE.Color(0xf4ce15);
    const colorEmerald = new THREE.Color(0x379777);
    const colorChampagne = new THREE.Color(0xf0f2f0);
    const colorMuted = new THREE.Color(0x707371);

    // Generate Shapes
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      // Color distribution: 60% champagne/slate, 25% gold, 15% jade emerald
      const randColor = Math.random();
      let c;
      if (randColor < 0.22) {
        c = colorGold;
      } else if (randColor < 0.38) {
        c = colorEmerald;
      } else if (randColor < 0.75) {
        c = colorChampagne;
      } else {
        c = colorMuted;
      }
      baseColors[i3] = c.r;
      baseColors[i3 + 1] = c.g;
      baseColors[i3 + 2] = c.b;

      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;

      // --- Shape 0: Hero Ambient Cosmos (Spherical shell & drifting nebula) ---
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const rCosmos = 45 + Math.random() * 40;
      posHero[i3] = rCosmos * Math.sin(phi) * Math.cos(theta);
      posHero[i3 + 1] = rCosmos * Math.sin(phi) * Math.sin(theta) * 0.7;
      posHero[i3 + 2] = rCosmos * Math.cos(phi);

      // Initialize current position to hero
      currentPositions[i3] = posHero[i3];
      currentPositions[i3 + 1] = posHero[i3 + 1];
      currentPositions[i3 + 2] = posHero[i3 + 2];

      // --- Shape 1: Statement Vortex (Concentrated elliptical halo) ---
      const angleVortex = (i / PARTICLE_COUNT) * Math.PI * 16 + Math.random() * 0.5;
      const radiusVortex = 12 + (i / PARTICLE_COUNT) * 35;
      posStatement[i3] = Math.cos(angleVortex) * radiusVortex * 1.3;
      posStatement[i3 + 1] = Math.sin(angleVortex) * radiusVortex * 0.6 + (Math.random() - 0.5) * 6;
      posStatement[i3 + 2] = ((i / PARTICLE_COUNT) - 0.5) * 40;

      // --- Shape 2: Maritime Globe (Rotating sphere with latitude lines & shipping routes) ---
      const lat = (Math.random() - 0.5) * Math.PI;
      const lon = Math.random() * Math.PI * 2;
      const rGlobe = 26;
      // Snap 40% of particles to distinct latitude trade rings
      const isRing = Math.random() < 0.45;
      const ringLat = isRing ? Math.round(lat * 4) / 4 : lat;
      posGlobe[i3] = rGlobe * Math.cos(ringLat) * Math.sin(lon);
      posGlobe[i3 + 1] = rGlobe * Math.sin(ringLat);
      posGlobe[i3 + 2] = rGlobe * Math.cos(ringLat) * Math.cos(lon);

      // --- Shape 3: Origins Beacon (Concentric Radar Rings - Thrissur / Kerala Anchor) ---
      const ringIdx = i % 5;
      const ringRad = 7 + ringIdx * 8;
      const ringAngle = Math.random() * Math.PI * 2;
      posBeacon[i3] = Math.cos(ringAngle) * ringRad + (Math.random() - 0.5) * 2;
      posBeacon[i3 + 1] = Math.sin(ringAngle) * ringRad * 0.4 + (Math.random() - 0.5) * 2;
      posBeacon[i3 + 2] = (Math.random() - 0.5) * 6;

      // --- Shape 4: Selected Works Wave Matrix (Undulating 3D engineering plane) ---
      const cols = 64;
      const row = Math.floor(i / cols);
      const col = i % cols;
      const gridW = 120;
      const gridH = 70;
      posWave[i3] = (col / cols - 0.5) * gridW;
      posWave[i3 + 1] = -15 + (Math.random() - 0.5) * 4;
      posWave[i3 + 2] = (row / (PARTICLE_COUNT / cols) - 0.5) * gridH;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture (Smooth circular falloff)
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.35, 'rgba(255,255,255,0.7)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 2.2,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Tracking for Parallax & Ripple
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

      // Parallax camera rotation
      camera.position.x = mouse.x * 6;
      camera.position.y = mouse.y * 4;
      camera.lookAt(0, 0, 0);

      // Calculate scroll progress (0.0 to 1.0)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;

      // Map scroll progress to 4 interpolation stages:
      // Stage 0 -> 1: Hero (0.0) to Statement (0.18)
      // Stage 1 -> 2: Statement (0.18) to Maritime Globe (0.40)
      // Stage 2 -> 3: Globe (0.40) to Origins Beacon (0.62)
      // Stage 3 -> 4: Beacon (0.62) to Selected Works Wave (1.0)

      const positions = geometry.attributes.position.array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        let tx = 0, ty = 0, tz = 0;

        if (scrollProgress < 0.20) {
          // Hero -> Statement
          const t = scrollProgress / 0.20;
          tx = posHero[i3] * (1 - t) + posStatement[i3] * t;
          ty = posHero[i3 + 1] * (1 - t) + posStatement[i3 + 1] * t;
          tz = posHero[i3 + 2] * (1 - t) + posStatement[i3 + 2] * t;
        } else if (scrollProgress < 0.42) {
          // Statement -> Globe
          const t = (scrollProgress - 0.20) / 0.22;
          tx = posStatement[i3] * (1 - t) + posGlobe[i3] * t;
          ty = posStatement[i3 + 1] * (1 - t) + posGlobe[i3 + 1] * t;
          tz = posStatement[i3 + 2] * (1 - t) + posGlobe[i3 + 2] * t;
        } else if (scrollProgress < 0.65) {
          // Globe -> Origins Beacon
          const t = (scrollProgress - 0.42) / 0.23;
          tx = posGlobe[i3] * (1 - t) + posBeacon[i3] * t;
          ty = posGlobe[i3 + 1] * (1 - t) + posBeacon[i3 + 1] * t;
          tz = posGlobe[i3 + 2] * (1 - t) + posBeacon[i3 + 2] * t;
        } else {
          // Origins Beacon -> Wave Matrix
          const t = Math.min((scrollProgress - 0.65) / 0.35, 1);
          tx = posBeacon[i3] * (1 - t) + posWave[i3] * t;
          ty = posBeacon[i3 + 1] * (1 - t) + (posWave[i3 + 1] + Math.sin(elapsedTime * 1.5 + posWave[i3] * 0.1) * 4) * t;
          tz = posBeacon[i3 + 2] * (1 - t) + (posWave[i3 + 2] + Math.cos(elapsedTime * 1.2 + posWave[i3] * 0.08) * 3) * t;
        }

        // Add subtle continuous organic noise
        const noise = Math.sin(elapsedTime * 0.8 + i) * 0.15;
        positions[i3] += (tx + noise - positions[i3]) * 0.08;
        positions[i3 + 1] += (ty + noise - positions[i3 + 1]) * 0.08;
        positions[i3 + 2] += (tz + noise - positions[i3 + 2]) * 0.08;
      }

      geometry.attributes.position.needsUpdate = true;

      // Rotate whole particle system slowly based on scroll stage
      if (scrollProgress >= 0.20 && scrollProgress < 0.55) {
        // Continuous globe rotation during Maritime section
        particles.rotation.y = elapsedTime * 0.22;
        particles.rotation.x = 0.25;
      } else {
        particles.rotation.y = elapsedTime * 0.04;
        particles.rotation.x = Math.sin(elapsedTime * 0.05) * 0.08;
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

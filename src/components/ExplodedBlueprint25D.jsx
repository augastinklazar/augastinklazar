import { useEffect, useRef, useState } from 'react';
import { Layers, Shield, Zap, Cpu, Waves, Activity, Radio, Compass, Eye, Terminal } from 'lucide-react';
import anime from 'animejs';
import { sound } from '../utils/audio';

export default function ExplodedBlueprint25D() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);

  const [activeLayer, setActiveLayer] = useState(null);
  const [hoveredLayer, setHoveredLayer] = useState(null);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  // Scroll reveal: Explode layers from 0px to 80px and 160px
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let hasExploded = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasExploded) {
            hasExploded = true;

            // Animate layer 2 to translateZ(80px) and layer 3 to translateZ(160px)
            anime({
              targets: layer2Ref.current,
              translateZ: [0, 80],
              opacity: [0.4, 0.9],
              duration: 1200,
              easing: 'easeOutExpo',
              delay: 200,
            });

            anime({
              targets: layer3Ref.current,
              translateZ: [0, 160],
              opacity: [0.3, 0.95],
              duration: 1400,
              easing: 'easeOutExpo',
              delay: 350,
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Mouse Parallax across the section: +/- 10 degrees max
  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Smooth tilt angles
    setMouseTilt({
      x: -y * 14, // tilt rotateX
      y: x * 14,  // tilt rotateY
    });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
    setHoveredLayer(null);
  };

  return (
    <section
      id="exploded-blueprint"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen py-24 bg-vantablack text-white overflow-hidden flex flex-col justify-center border-t border-b border-neutral-900"
    >
      {/* Background Blueprint Grid on Vantablack */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-ember font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[1px] bg-ember" />
              <span>03 // 2.5D ARCHITECTURAL DISSECTION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Exploded Isometric <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember via-signal to-white text-glow-ember">
                Blueprint Stack
              </span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-steel max-w-sm space-y-1">
            <div className="text-signal font-semibold flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-signal" />
              <span>3-TIER VOLUMETRIC ISOMETRIC SCHEMATIC</span>
            </div>
            <p className="text-steel-dark">
              Move cursor to tilt the 2.5D isometric matrix. Hover over individual layers to activate real-time telemetry decoders.
            </p>
          </div>
        </div>

        {/* 2-Column Interstitial Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Volumetric 2.5D Isometric Stage */}
          <div className="lg:col-span-8 flex justify-center items-center py-10">
            
            {/* Perspective Viewport Container */}
            <div
              className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] flex items-center justify-center select-none"
              style={{ perspective: '1100px' }}
            >
              {/* Central Isometric Stack Frame */}
              <div
                ref={stageRef}
                className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] transition-transform duration-300 ease-out will-change-transform"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${58 + mouseTilt.x}deg) rotateZ(${-45 + mouseTilt.y}deg)`,
                }}
              >
                
                {/* ════════════════════════════════════════════════════════════════════
                    LAYER 01 (Bottom): translateZ(0px)
                    LNGC Hull & Cryogenic Cargo Containment
                   ════════════════════════════════════════════════════════════════════ */}
                <div
                  ref={layer1Ref}
                  onMouseEnter={() => {
                    sound.playHover();
                    setHoveredLayer('layer1');
                  }}
                  onMouseLeave={() => setHoveredLayer(null)}
                  onClick={() => {
                    sound.playClick();
                    setActiveLayer(activeLayer === 'layer1' ? null : 'layer1');
                  }}
                  className={`absolute inset-0 rounded-2xl cursor-pointer transition-all duration-300 ${
                    hoveredLayer === 'layer1' || activeLayer === 'layer1'
                      ? 'shadow-[0_0_45px_#FFB000] border-[#FFB000]'
                      : 'border-[#FF5722]/50 hover:border-[#FFB000]'
                  }`}
                  style={{
                    transform: 'translateZ(0px)',
                    background: 'rgba(28, 25, 23, 0.85)',
                    backdropFilter: 'blur(10px)',
                    borderWidth: '1px',
                  }}
                  data-cursor="INSPECT_L1"
                >
                  {/* Layer Header */}
                  <div className="absolute top-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-steel">
                    <span className="text-[#FF5722] font-bold">LAYER_01 // HULL & CRYOGENICS</span>
                    <span>-162°C LNG</span>
                  </div>

                  {/* SVG Schematics: Ship Hull & Cryo Tanks */}
                  <svg className="w-full h-full p-8 overflow-visible" viewBox="0 0 200 200" fill="none">
                    {/* Double hull vector contour */}
                    <path
                      d="M 20 50 L 180 50 L 160 160 L 40 160 Z"
                      stroke="#FF5722"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                    <path
                      d="M 35 65 L 165 65 L 150 145 L 50 145 Z"
                      stroke="rgba(255, 87, 34, 0.4)"
                      strokeWidth="1"
                    />

                    {/* Cryogenic Tank Spheres / Membranes */}
                    <circle cx="75" cy="105" r="28" stroke="#FFB000" strokeWidth="1.2" />
                    <circle cx="75" cy="105" r="20" stroke="rgba(255, 176, 0, 0.3)" strokeWidth="0.8" />
                    <circle cx="125" cy="105" r="28" stroke="#FFB000" strokeWidth="1.2" />
                    <circle cx="125" cy="105" r="20" stroke="rgba(255, 176, 0, 0.3)" strokeWidth="0.8" />

                    {/* Sensor Loop Lines */}
                    <line x1="75" y1="40" x2="75" y2="77" stroke="#FF5722" strokeWidth="1" />
                    <line x1="125" y1="40" x2="125" y2="77" stroke="#FF5722" strokeWidth="1" />
                    <circle cx="75" cy="40" r="2" fill="#FFB000" />
                    <circle cx="125" cy="40" r="2" fill="#FFB000" />
                  </svg>

                  {/* Hover Telemetry HUD Bubble */}
                  <div
                    className={`absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-vantablack/95 border border-[#FFB000] text-[#FFB000] font-mono text-[10px] whitespace-nowrap shadow-[0_0_20px_rgba(255,176,0,0.5)] transition-opacity duration-200 pointer-events-none ${
                      hoveredLayer === 'layer1' || activeLayer === 'layer1' ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    SYSTEM: ONLINE // 0x4F2A &bull; CRYOGENIC CARGO -162°C
                  </div>
                </div>

                {/* ════════════════════════════════════════════════════════════════════
                    LAYER 02 (Middle): translateZ(80px)
                    High-Voltage 6.6kV Switchgear & PMS Bus Matrix
                   ════════════════════════════════════════════════════════════════════ */}
                <div
                  ref={layer2Ref}
                  onMouseEnter={() => {
                    sound.playHover();
                    setHoveredLayer('layer2');
                  }}
                  onMouseLeave={() => setHoveredLayer(null)}
                  onClick={() => {
                    sound.playClick();
                    setActiveLayer(activeLayer === 'layer2' ? null : 'layer2');
                  }}
                  className={`absolute inset-0 rounded-2xl cursor-pointer transition-all duration-300 ${
                    hoveredLayer === 'layer2' || activeLayer === 'layer2'
                      ? 'shadow-[0_0_45px_#FFB000] border-[#FFB000]'
                      : 'border-[#FF5722]/60 hover:border-[#FFB000]'
                  }`}
                  style={{
                    transform: 'translateZ(80px)',
                    background: 'rgba(28, 25, 23, 0.85)',
                    backdropFilter: 'blur(10px)',
                    borderWidth: '1px',
                  }}
                  data-cursor="INSPECT_L2"
                >
                  <div className="absolute top-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-steel">
                    <span className="text-signal font-bold">LAYER_02 // 6.6kV MAIN SWITCHBOARD</span>
                    <span>VCB 1250A</span>
                  </div>

                  {/* SVG Schematics: 3-Phase Busbar & Circuit Breakers */}
                  <svg className="w-full h-full p-8 overflow-visible" viewBox="0 0 200 200" fill="none">
                    {/* 3 Main Heavy Busbars */}
                    <line x1="25" y1="70" x2="175" y2="70" stroke="#FF6D00" strokeWidth="2.5" />
                    <line x1="25" y1="100" x2="175" y2="100" stroke="#FFB000" strokeWidth="2" />
                    <line x1="25" y1="130" x2="175" y2="130" stroke="#FF5722" strokeWidth="2" />

                    {/* Vacuum Circuit Breakers (VCB) Symbols */}
                    {[50, 100, 150].map((x, i) => (
                      <g key={i}>
                        <rect
                          x={x - 12}
                          y="85"
                          width="24"
                          height="30"
                          fill="rgba(28, 25, 23, 0.95)"
                          stroke="#FFB000"
                          strokeWidth="1.2"
                        />
                        <line x1={x} y1="70" x2={x} y2="85" stroke="#FF6D00" strokeWidth="1.5" />
                        <line x1={x} y1="115" x2={x} y2="130" stroke="#FF5722" strokeWidth="1.5" />
                        <circle cx={x} cy="100" r="3" fill="#FFB000" />
                      </g>
                    ))}

                    {/* Generator Phase Interlocks */}
                    <circle cx="100" cy="160" r="16" stroke="#FF6D00" strokeWidth="1.5" strokeDasharray="3 2" />
                    <text x="100" y="164" fill="#FFB000" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">
                      GEN
                    </text>
                  </svg>

                  {/* Hover Telemetry HUD Bubble */}
                  <div
                    className={`absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-vantablack/95 border border-[#FFB000] text-[#FFB000] font-mono text-[10px] whitespace-nowrap shadow-[0_0_20px_rgba(255,176,0,0.5)] transition-opacity duration-200 pointer-events-none ${
                      hoveredLayer === 'layer2' || activeLayer === 'layer2' ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    SYSTEM: 6.6kV VCB AUTO-SYNC // 0x8E19 &bull; FREQ: 60.0 Hz
                  </div>
                </div>

                {/* ════════════════════════════════════════════════════════════════════
                    LAYER 03 (Top): translateZ(160px)
                    STM32 Embedded RTOS & LoRa Telemetry Core
                   ════════════════════════════════════════════════════════════════════ */}
                <div
                  ref={layer3Ref}
                  onMouseEnter={() => {
                    sound.playHover();
                    setHoveredLayer('layer3');
                  }}
                  onMouseLeave={() => setHoveredLayer(null)}
                  onClick={() => {
                    sound.playClick();
                    setActiveLayer(activeLayer === 'layer3' ? null : 'layer3');
                  }}
                  className={`absolute inset-0 rounded-2xl cursor-pointer transition-all duration-300 ${
                    hoveredLayer === 'layer3' || activeLayer === 'layer3'
                      ? 'shadow-[0_0_45px_#FFB000] border-[#FFB000]'
                      : 'border-[#FF5722]/80 hover:border-[#FFB000]'
                  }`}
                  style={{
                    transform: 'translateZ(160px)',
                    background: 'rgba(28, 25, 23, 0.88)',
                    backdropFilter: 'blur(10px)',
                    borderWidth: '1px',
                  }}
                  data-cursor="INSPECT_L3"
                >
                  <div className="absolute top-3 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-steel">
                    <span className="text-white font-bold">LAYER_03 // EMBEDDED RTOS & LORA</span>
                    <span className="text-[#FFB000]">ARM CORTEX-M4</span>
                  </div>

                  {/* SVG Schematics: Microchip Silicon & RF Antenna Traces */}
                  <svg className="w-full h-full p-8 overflow-visible" viewBox="0 0 200 200" fill="none">
                    {/* Central STM32 QFP IC Package */}
                    <rect
                      x="70"
                      y="70"
                      width="60"
                      height="60"
                      fill="rgba(28, 25, 23, 0.95)"
                      stroke="#FFB000"
                      strokeWidth="1.5"
                    />

                    {/* IC Pins */}
                    {[78, 88, 98, 108, 118].map((pos) => (
                      <g key={pos}>
                        {/* Top pins */}
                        <line x1={pos} y1="60" x2={pos} y2="70" stroke="#FF6D00" strokeWidth="1.2" />
                        {/* Bottom pins */}
                        <line x1={pos} y1="130" x2={pos} y2="140" stroke="#FF6D00" strokeWidth="1.2" />
                        {/* Left pins */}
                        <line x1="60" y1={pos} x2="70" y2={pos} stroke="#FF5722" strokeWidth="1.2" />
                        {/* Right pins */}
                        <line x1="130" y1={pos} x2="140" y2={pos} stroke="#FF5722" strokeWidth="1.2" />
                      </g>
                    ))}

                    {/* LoRa Antenna Trace & Matching Network */}
                    <path
                      d="M 140 88 L 165 88 L 165 50 L 180 50"
                      stroke="#FFB000"
                      strokeWidth="1.5"
                      strokeDasharray="2 1"
                    />
                    <circle cx="180" cy="50" r="3" fill="#FFB000" />

                    {/* 6-Axis IMU Sensor Fusion Circle */}
                    <circle cx="45" cy="100" r="12" stroke="#FF6D00" strokeWidth="1" />
                    <line x1="33" y1="100" x2="57" y2="100" stroke="#FF6D00" strokeWidth="1" />
                    <line x1="45" y1="88" x2="45" y2="112" stroke="#FF6D00" strokeWidth="1" />
                  </svg>

                  {/* Hover Telemetry HUD Bubble */}
                  <div
                    className={`absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-vantablack/95 border border-[#FFB000] text-[#FFB000] font-mono text-[10px] whitespace-nowrap shadow-[0_0_20px_rgba(255,176,0,0.5)] transition-opacity duration-200 pointer-events-none ${
                      hoveredLayer === 'layer3' || activeLayer === 'layer3' ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    SYSTEM: EMBEDDED TELEMETRY STREAMING // 0xA3F7 &bull; 1.0kHz FOC
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Layer Selector & Tactical Technical Dossiers */}
          <div className="lg:col-span-4 space-y-5">
            
            <div className="space-y-2">
              <span className="font-mono text-xs text-signal font-bold uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                LAYER INSPECTION MATRIX
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Multi-Tier Engineering Fusion
              </h3>
              <p className="text-steel text-xs font-sans leading-relaxed">
                Click or hover over any tier to inspect how cryogenic naval architecture, 6.6kV distribution, and embedded silicon connect in real-world deployment.
              </p>
            </div>

            {/* Interactive 3-Tier Selector Buttons */}
            <div className="space-y-3">
              
              {/* Button Layer 3 */}
              <div
                onMouseEnter={() => {
                  sound.playHover();
                  setHoveredLayer('layer3');
                }}
                onMouseLeave={() => setHoveredLayer(null)}
                onClick={() => {
                  sound.playClick();
                  setActiveLayer('layer3');
                }}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  hoveredLayer === 'layer3' || activeLayer === 'layer3'
                    ? 'bg-charcoal border-[#FFB000] box-glow-signal shadow-[0_0_20px_rgba(255,176,0,0.3)]'
                    : 'bg-charcoal border-neutral-800 hover:border-[#FF5722]'
                }`}
                data-cursor="LAYER_03"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-white font-bold font-mono text-xs">
                    <Cpu className="w-4 h-4 text-signal" />
                    <span>TIER 03 // BARE-METAL EMBEDDED & LORA</span>
                  </div>
                  <span className="text-[10px] font-mono text-signal font-bold">translateZ(160px)</span>
                </div>
                <p className="text-steel text-xs font-sans leading-relaxed">
                  STM32 ARM Cortex-M4 FreeRTOS kernel, 1kHz Field Oriented Control (FOC), 6-axis IMU Kalman filtering, and custom PCB designs.
                </p>
              </div>

              {/* Button Layer 2 */}
              <div
                onMouseEnter={() => {
                  sound.playHover();
                  setHoveredLayer('layer2');
                }}
                onMouseLeave={() => setHoveredLayer(null)}
                onClick={() => {
                  sound.playClick();
                  setActiveLayer('layer2');
                }}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  hoveredLayer === 'layer2' || activeLayer === 'layer2'
                    ? 'bg-charcoal border-[#FFB000] box-glow-signal shadow-[0_0_20px_rgba(255,176,0,0.3)]'
                    : 'bg-charcoal border-neutral-800 hover:border-[#FF5722]'
                }`}
                data-cursor="LAYER_02"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-white font-bold font-mono text-xs">
                    <Zap className="w-4 h-4 text-ember" />
                    <span>TIER 02 // 6.6kV MAIN POWER & PMS</span>
                  </div>
                  <span className="text-[10px] font-mono text-ember font-bold">translateZ(80px)</span>
                </div>
                <p className="text-steel text-xs font-sans leading-relaxed">
                  Dual-fuel generator synchronization, 6.6kV vacuum circuit breakers, preferential trip interlocks, and emergency blackout recovery sequencing.
                </p>
              </div>

              {/* Button Layer 1 */}
              <div
                onMouseEnter={() => {
                  sound.playHover();
                  setHoveredLayer('layer1');
                }}
                onMouseLeave={() => setHoveredLayer(null)}
                onClick={() => {
                  sound.playClick();
                  setActiveLayer('layer1');
                }}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                  hoveredLayer === 'layer1' || activeLayer === 'layer1'
                    ? 'bg-charcoal border-[#FFB000] box-glow-signal shadow-[0_0_20px_rgba(255,176,0,0.3)]'
                    : 'bg-charcoal border-neutral-800 hover:border-[#FF5722]'
                }`}
                data-cursor="LAYER_01"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-white font-bold font-mono text-xs">
                    <Waves className="w-4 h-4 text-[#FF5722]" />
                    <span>TIER 01 // CRYOGENIC VESSEL ARCHITECTURE</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#FF5722] font-bold">translateZ(0px)</span>
                </div>
                <p className="text-steel text-xs font-sans leading-relaxed">
                  LNGC double-hull containment, submerged cryogenic pumps, Boil-Off Gas (BOG) compressors, and intrinsically safe Ex-d / Ex-ia barrier loops.
                </p>
              </div>

            </div>

            {/* Bottom Status Ticker */}
            <div className="p-3 rounded-lg bg-vantablack border border-neutral-800 font-mono text-[11px] text-steel flex items-center justify-between">
              <span>TRUE 3D DEPTH: CSS HARDWARE ACCELERATED</span>
              <span className="text-signal font-bold">60 FPS ZERO-JANK</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

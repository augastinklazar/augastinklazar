import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Zap, Cpu, Radio, Box, Activity, ShieldAlert, Sparkles } from 'lucide-react';

/* -------------------------------------------------------------
   Interactive 3D Perspective Tilt Wrapper (Awwwards Polish)
   ------------------------------------------------------------- */
function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const rotX = -((y - cy) / cy) * 4.5;
    const rotY = ((x - cx) / cx) * 4.5;

    setTransform(`perspective(1200px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg)');
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transform }}
    >
      {/* Specular Glare Sheen */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30"
        style={{
          background: `radial-gradient(circle 320px at ${glare.x}% ${glare.y}%, rgba(244, 206, 21, ${glare.opacity}), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}

/* -------------------------------------------------------------
   Interactive Canvas 1: High-Voltage Synchroscope & Power Grid
   ------------------------------------------------------------- */
function SynchroscopeCanvas() {
  const canvasRef = useRef(null);
  const [synced, setSynced] = useState(false);
  const [loadKw, setLoadKw] = useState(3420);
  const [freq, setFreq] = useState(60.15);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = 68;

      // Dark background dial
      ctx.fillStyle = '#17171a';
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#26262b';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Top Synchronous Alignment Mark (12 o'clock)
      ctx.strokeStyle = synced ? '#379777' : '#f4ce15';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy - radius + 12);
      ctx.stroke();

      // Dial Tick Marks
      for (let i = 0; i < 12; i++) {
        const tickAngle = (i / 12) * Math.PI * 2;
        const x1 = cx + Math.cos(tickAngle) * (radius - 4);
        const y1 = cy + Math.sin(tickAngle) * (radius - 4);
        const x2 = cx + Math.cos(tickAngle) * (radius - 9);
        const y2 = cy + Math.sin(tickAngle) * (radius - 9);
        ctx.strokeStyle = '#8b8f8c';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Rotating Synchroscope Needle
      if (!synced) {
        angle += 0.038;
      } else {
        // Locked at 12 o'clock with micro jitter
        angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.02;
      }

      const nx = cx + Math.cos(angle) * (radius - 14);
      const ny = cy + Math.sin(angle) * (radius - 14);

      ctx.strokeStyle = synced ? '#379777' : '#f4ce15';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      // Center pivot
      ctx.fillStyle = '#f0f2f0';
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fill();

      // Draw Voltage / Power Waveform below dial
      ctx.strokeStyle = synced ? '#379777' : '#f4ce15';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 3) {
        const y = canvas.height - 24 + Math.sin((x + angle * 40) * 0.06) * 12;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animRef.current = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animRef.current);
  }, [synced]);

  const toggleSync = () => {
    setSynced((prev) => !prev);
    if (!synced) {
      setFreq(60.0);
      setLoadKw(4120);
    } else {
      setFreq(60.18);
      setLoadKw(3420);
    }
  };

  return (
    <div className="relative w-full h-56 bg-[#161619] rounded-xl border border-[#f0f2f0]/10 p-4 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between text-[11px] font-mono text-[#8b8f8c]">
        <div className="flex items-center gap-1.5">
          <Zap className={`w-3.5 h-3.5 ${synced ? 'text-[#379777]' : 'text-[#f4ce15]'}`} />
          <span className="text-[#f0f2f0] font-semibold">6.6kV MAIN SWITCHBOARD</span>
        </div>
        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
          synced ? 'bg-[#379777]/20 text-[#379777]' : 'bg-[#f4ce15]/20 text-[#f4ce15]'
        }`}>
          {synced ? 'BUS-TIE CLOSED (LOCKED)' : 'UNSYNCHRONIZED (HUNTING)'}
        </span>
      </div>

      <div className="flex items-center justify-center my-auto">
        <canvas ref={canvasRef} width={280} height={130} className="max-w-full" />
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#f0f2f0]/5 text-xs font-mono">
        <div className="flex gap-4">
          <span className="text-[#8b8f8c]">FREQ: <strong className="text-[#f0f2f0]">{freq.toFixed(2)} Hz</strong></span>
          <span className="text-[#8b8f8c]">LOAD: <strong className="text-[#f0f2f0]">{loadKw} kW</strong></span>
        </div>
        <button
          onClick={toggleSync}
          className="px-3 py-1 rounded bg-[#26262b] hover:bg-[#2f2f35] border border-[#f0f2f0]/15 text-[#f4ce15] hover:text-white transition-all text-[11px] font-semibold"
        >
          {synced ? 'TRIP BREAKER' : 'ENGAGE AUTO-SYNC'}
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   Interactive Canvas 2: 3D Robotic Gimbal & Kalman Orientation
   ------------------------------------------------------------- */
function GimbalTrackerCanvas() {
  const canvasRef = useRef(null);
  const [pitch, setPitch] = useState(0);
  const [roll, setRoll] = useState(0);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      t += 0.03;

      const targetPitch = Math.sin(t * 1.2) * 18;
      const targetRoll = Math.cos(t * 0.9) * 14;
      setPitch(targetPitch);
      setRoll(targetRoll);

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((targetRoll * Math.PI) / 180);

      ctx.strokeStyle = '#26262b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, 52, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#f4ce15';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, 44, Math.max(10, 44 * Math.cos((targetPitch * Math.PI) / 180)), 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#379777';
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#f0f2f0';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -28);
      ctx.stroke();

      ctx.restore();

      ctx.strokeStyle = '#379777';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 4) {
        const y = canvas.height - 18 + Math.sin(x * 0.1 + t * 4) * 6;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animRef.current = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative w-full h-56 bg-[#161619] rounded-xl border border-[#f0f2f0]/10 p-4 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between text-[11px] font-mono text-[#8b8f8c]">
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#379777]" />
          <span className="text-[#f0f2f0] font-semibold">STM32F405 · 1kHz FOC LOOP</span>
        </div>
        <span className="bg-[#379777]/20 text-[#379777] px-2 py-0.5 rounded text-[10px] font-semibold">
          KALMAN CONVERGED
        </span>
      </div>

      <div className="flex items-center justify-center my-auto">
        <canvas ref={canvasRef} width={280} height={130} className="max-w-full" />
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#f0f2f0]/5 text-xs font-mono text-[#8b8f8c]">
        <span>PITCH: <strong className="text-[#f4ce15]">{pitch.toFixed(1)}°</strong></span>
        <span>ROLL: <strong className="text-[#379777]">{roll.toFixed(1)}°</strong></span>
        <span>JITTER: <strong className="text-[#f0f2f0]">&lt;0.02°</strong></span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   Interactive Canvas 3: Sub-GHz LoRa Industrial Marine Mesh
   ------------------------------------------------------------- */
function LoraMeshCanvas() {
  const canvasRef = useRef(null);
  const [packetsSent, setPacketsSent] = useState(1480);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let t = 0;

    const nodes = [
      { x: 50, y: 70, label: 'NODE 01: PUMP A' },
      { x: 120, y: 35, label: 'NODE 02: CRYO COMP' },
      { x: 190, y: 85, label: 'NODE 03: BILGE WELL' },
      { x: 235, y: 40, label: 'GATEWAY: ECR' },
    ];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.025;

      ctx.strokeStyle = 'rgba(240, 242, 240, 0.08)';
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[nodes.length - 1].x, nodes[nodes.length - 1].y);
        ctx.stroke();
      }

      const gw = nodes[3];
      const pulseR = (t * 28) % 45;
      ctx.strokeStyle = 'rgba(244, 206, 21, ' + (1 - pulseR / 45) + ')';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(gw.x, gw.y, pulseR, 0, Math.PI * 2);
      ctx.stroke();

      nodes.forEach((node, i) => {
        const isGw = i === 3;
        ctx.fillStyle = isGw ? '#f4ce15' : '#379777';
        ctx.beginPath();
        ctx.arc(node.x, node.y, isGw ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#8b8f8c';
        ctx.font = '8px monospace';
        ctx.fillText(node.label, node.x - 20, node.y - 8);
      });

      animRef.current = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const triggerPing = () => {
    setPacketsSent((p) => p + 1);
  };

  return (
    <div className="relative w-full h-56 bg-[#161619] rounded-xl border border-[#f0f2f0]/10 p-4 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between text-[11px] font-mono text-[#8b8f8c]">
        <div className="flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5 text-[#f4ce15]" />
          <span className="text-[#f0f2f0] font-semibold">868MHz LoRa INDUSTRIAL MESH</span>
        </div>
        <span className="bg-[#f4ce15]/20 text-[#f4ce15] px-2 py-0.5 rounded text-[10px] font-semibold">
          SNR +11.8 dBm · 3.2km
        </span>
      </div>

      <div className="flex items-center justify-center my-auto">
        <canvas ref={canvasRef} width={280} height={120} className="max-w-full" />
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#f0f2f0]/5 text-xs font-mono">
        <span className="text-[#8b8f8c]">TELEMETRY: <strong className="text-[#f0f2f0]">{packetsSent} PKTS</strong></span>
        <button
          onClick={triggerPing}
          className="px-3 py-1 rounded bg-[#26262b] hover:bg-[#2f2f35] border border-[#f0f2f0]/15 text-[#379777] hover:text-white transition-all text-[11px] font-semibold"
        >
          BROADCAST PING
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   Interactive Canvas 4: 3D Spatial LNG Machinery Explorer
   ------------------------------------------------------------- */
function LNGTwinCanvas() {
  const canvasRef = useRef(null);
  const [activeSubsystem, setActiveSubsystem] = useState('BOG Compressor');
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      angle += 0.02;

      ctx.strokeStyle = 'rgba(240, 242, 240, 0.15)';
      ctx.lineWidth = 1.5;

      const size = 38;
      const isoX = Math.cos(angle) * size;

      ctx.strokeRect(cx - isoX, cy - 25, isoX * 2, 50);

      ctx.strokeStyle = '#379777';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 22, angle, angle + Math.PI * 1.5);
      ctx.stroke();

      ctx.strokeStyle = '#f4ce15';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx - 80, cy + 15);
      ctx.lineTo(cx - 20, cy + 15);
      ctx.lineTo(cx, cy);
      ctx.lineTo(cx + 40, cy);
      ctx.lineTo(cx + 80, cy - 20);
      ctx.stroke();

      animRef.current = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative w-full h-56 bg-[#161619] rounded-xl border border-[#f0f2f0]/10 p-4 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between text-[11px] font-mono text-[#8b8f8c]">
        <div className="flex items-center gap-1.5">
          <Box className="w-3.5 h-3.5 text-[#379777]" />
          <span className="text-[#f0f2f0] font-semibold">THREE.JS SPATIAL DIGITAL TWIN</span>
        </div>
        <span className="bg-[#379777]/20 text-[#379777] px-2 py-0.5 rounded text-[10px] font-semibold">
          60 FPS WEBGL
        </span>
      </div>

      <div className="flex items-center justify-center my-auto">
        <canvas ref={canvasRef} width={280} height={120} className="max-w-full" />
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#f0f2f0]/5 text-xs font-mono text-[#8b8f8c]">
        <span>SYSTEM: <strong className="text-[#f0f2f0]">{activeSubsystem}</strong></span>
        <button
          onClick={() => setActiveSubsystem((s) => s === 'BOG Compressor' ? '6.6kV Switchboard' : 'BOG Compressor')}
          className="px-3 py-1 rounded bg-[#26262b] hover:bg-[#2f2f35] border border-[#f0f2f0]/15 text-[#f0f2f0] hover:text-[#f4ce15] transition-all text-[11px] font-semibold"
        >
          SWITCH VIEW
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   Main SelectedWorks Component
   ------------------------------------------------------------- */
export default function SelectedWorks() {
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: 'hv-simulator',
      title: 'High-Voltage Maritime Power & Blackout Simulator',
      year: '2026',
      tagline: 'Simulating 6.6kV Bus-Tie Synchronization, Load Sharing & Preferential Tripping',
      collaboration: 'Engineered for maritime cadet training & Mitsui O.S.K. Lines fleet operational emulation.',
      description: [
        'An interactive, full-stack browser simulation of shipboard electrical power generation. Replicates dual-fuel diesel generator start-stop logic, synchroscope hunting, frequency governor droop, and emergency vacuum circuit breaker sequences.',
        'Eliminates the critical high-voltage arc-flash hazards inherent to live 6.6kV marine switchboards while providing cadet officers with identical real-time telemetry and fault diagnostic drills.',
      ],
      stack: ['WebSockets', 'SCADA State Machine', 'React 18', 'Canvas API', 'Tailwind CSS', 'Vite'],
      stackNote: 'A custom state engine models active (kW) and reactive (kVAR) droop load sharing across 4 generators, while the Canvas API drives a buttery 60fps synchroscope gauge.',
      github: 'https://github.com/augastinklazar/augastinklazar',
      live: 'https://augastinklazar.github.io/augastinklazar/',
      visualizer: <SynchroscopeCanvas />,
      specs: {
        busVoltage: '6,600 V AC / 440 V AC',
        breakerType: 'Vacuum Circuit Breaker (VCB) with undervoltage release',
        trippingLogic: 'Preferential Trip Stage 1 (110% load), Stage 2 (120% load)',
        reversePower: 'Trips generator breaker within 500ms of reverse power detection',
      }
    },
    {
      id: 'robotic-gimbal',
      title: 'Autonomous Dual-Axis Robotic Gimbal Tracker',
      year: '2025',
      tagline: 'Low-Latency Motion Compensation with STM32 ARM Cortex-M4 & FreeRTOS',
      collaboration: 'Custom hardware & bare-metal firmware project for camera and sensor orientation stabilization at sea.',
      description: [
        'Custom-designed robotic pan-tilt gimbal running on an STM32 ARM Cortex-M4 microcontroller. Integrates a 6-axis IMU with sensor fusion Kalman filtering and Field Oriented Control (FOC) for jitter-free orientation stability.',
        'Maintains camera horizon alignment despite high-amplitude vessel pitch and roll motions in severe sea states.',
      ],
      stack: ['STM32 (C/C++)', 'FreeRTOS Kernel', 'DRV8313 Motor Driver', 'Kalman Filter', 'SPI / I2C', 'Hardware PID'],
      stackNote: 'FreeRTOS tasks poll the IMU via SPI at 1kHz, computing orientation angles through a 6-state Kalman filter and adjusting motor driver PWM registers deterministically.',
      github: 'https://github.com/augastinklazar/augastinklazar',
      live: 'https://augastinklazar.github.io/augastinklazar/',
      visualizer: <GimbalTrackerCanvas />,
      specs: {
        microcontroller: 'STM32F405RGT6 (ARM Cortex-M4 @ 168 MHz with FPU)',
        loopFrequency: '1,000 Hz deterministic FreeRTOS task rate',
        precision: '0.02° angular positioning accuracy',
        powerSupply: '3S LiPo battery with onboard buck regulators',
      }
    },
    {
      id: 'sensor-mesh',
      title: 'Sub-GHz Industrial Marine Sensor Mesh',
      year: '2025',
      tagline: 'Long-Range Vibration & Cryogenic Telemetry for Vessel Auxiliary Systems',
      collaboration: 'Industrial IoT deployment designed for harsh steel machinery compartments.',
      description: [
        'Robust wireless telemetry network built to penetrate heavy multi-deck maritime steel bulkheads. Deploys ultra-low-power ESP32 + LoRa radio nodes monitoring motor bearing vibration, temperatures, and bilge fluid levels.',
        'Operates autonomously for 18+ months on lithium thionyl chloride cells while streaming live telemetry back to the central Engine Control Room (ECR).',
      ],
      stack: ['ESP32', 'LoRa 868MHz', 'Embedded C++', 'MQTT / Modbus', 'InfluxDB', 'Deep Sleep PMU'],
      stackNote: 'Utilizes star-of-stars sub-GHz LoRa modulation to bypass the 40dB RF attenuation of marine bulkheads, with ultra-low sleep draw under 15 microamps.',
      github: 'https://github.com/augastinklazar/augastinklazar',
      live: 'https://augastinklazar.github.io/augastinklazar/',
      visualizer: <LoraMeshCanvas />,
      specs: {
        rfBand: '868 MHz / 915 MHz Sub-GHz LoRa with Spreading Factor 10',
        range: '3.2 km line-of-sight / 4 deck steel penetration',
        sleepCurrent: '<15 µA in deep sleep mode',
        casing: 'IP67 waterproof aluminum enclosure with neodymium magnetic base',
      }
    },
    {
      id: 'engine-room-twin',
      title: 'Interactive 3D LNG Engine Room Digital Twin',
      year: '2026',
      tagline: 'WebGL Spatial Explorer for High-Voltage Marine Systems & Cryogenic Loops',
      collaboration: 'Spatial visualization project demystifying liquefied natural gas machinery spaces.',
      description: [
        'A browser-based 3D digital twin built with Three.js. Enables engineers and maritime students to walk through ship machinery spaces, inspecting high-voltage transformers, BOG compressors, and intrinsically safe safety barriers.',
        'Bridges physical machinery with digital telemetry overlays, creating an exploratory interactive handbook for vessel operations.',
      ],
      stack: ['Three.js', 'WebGL', 'GLSL Shaders', 'React', 'GSAP', 'Vite'],
      stackNote: 'Leverages instanced meshes and custom GLSL lighting shaders to achieve 60fps performance on standard laptops without high-end dedicated GPUs.',
      github: 'https://github.com/augastinklazar/augastinklazar',
      live: 'https://augastinklazar.github.io/augastinklazar/',
      visualizer: <LNGTwinCanvas />,
      specs: {
        renderer: 'Three.js r165 with WebGL 2.0 pipeline',
        optimization: 'Hardware instanced meshes, LOD geometry switching',
        frameBudget: 'Sub-16ms render time (solid 60 FPS)',
        interactivity: 'Raycasting inspection pins with real-time schematic modals',
      }
    }
  ];

  return (
    <section id="works" className="relative z-10 py-28 w-[90vw] max-w-7xl mx-auto">
      {/* Editorial Ingrassia-style Kicker */}
      <div className="flex flex-col gap-2 mb-16 border-b border-[#f0f2f0]/10 pb-8">
        <p className="t-16 text-[#8b8f8c] font-mono uppercase tracking-[0.25em]">
          Some Selected Works
        </p>
        <p className="t-30 text-[#f0f2f0] font-sans font-normal">
          And still working on plenty more across sea and shore.
        </p>
      </div>

      {/* Dossiers Grid with 3D Tilt Card Physics */}
      <div className="flex flex-col gap-24">
        {projects.map((project, idx) => {
          const isExpanded = expandedId === project.id;

          return (
            <TiltCard key={project.id} className="w-full">
              <article
                className="group relative flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14 pb-16 border-b border-[#f0f2f0]/10 bg-[#26262b]/20 hover:bg-[#26262b]/40 rounded-2xl p-6 sm:p-8 transition-colors duration-300"
              >
                {/* Left Column: Interactive Visualizer & Live Simulation */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#f4ce15]">
                      DOSSIER 0{idx + 1} // {project.year}
                    </span>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors p-1"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8b8f8c] hover:text-[#f4ce15] transition-colors p-1"
                        title="Open Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Embedded Interactive Canvas Visualizer */}
                  <div className="w-full shadow-2xl shadow-black/40">
                    {project.visualizer}
                  </div>

                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((item, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded bg-[#26262b] border border-[#f0f2f0]/10 text-[#8b8f8c] text-[11px] font-mono hover:text-[#f0f2f0] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Ingrassia Editorial Copy & Technical Specs */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <h3 className="t-30 font-sans font-medium text-[#f0f2f0] tracking-tight group-hover:text-[#f4ce15] transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-mono text-xs text-[#379777] uppercase tracking-wider">
                      {project.tagline}
                    </p>

                    <p className="text-xs font-mono text-[#8b8f8c] italic border-l-2 border-[#f4ce15]/40 pl-3">
                      {project.collaboration}
                    </p>

                    <div className="text-sm font-sans text-[#8b8f8c] leading-relaxed flex flex-col gap-3 pt-2">
                      {project.description.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    <p className="text-xs font-mono text-[#d2d6d3] bg-[#26262b]/40 p-3 rounded-lg border border-[#f0f2f0]/5">
                      <strong>Architecture Note: </strong>
                      {project.stackNote}
                    </p>
                  </div>

                  {/* Expandable Technical Specs Drawer */}
                  <div className="mt-6 pt-4 border-t border-[#f0f2f0]/5">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      className="flex items-center gap-2 text-xs font-mono text-[#f4ce15] hover:text-[#f0f2f0] transition-colors"
                    >
                      <span>{isExpanded ? 'Collapse Engineering Specs' : 'Explore Full Hardware & Circuit Specs'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-4 p-4 rounded-lg bg-[#161619] border border-[#f0f2f0]/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                        {Object.entries(project.specs).map(([key, val]) => (
                          <div key={key} className="flex flex-col gap-0.5">
                            <span className="text-[#8b8f8c] text-[10px] uppercase tracking-wider">
                              {key.replace(/([A-Z])/g, ' $1')}
                            </span>
                            <span className="text-[#f0f2f0]">{val}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}

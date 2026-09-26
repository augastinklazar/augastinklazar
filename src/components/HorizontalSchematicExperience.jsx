import { useEffect, useRef, useState } from 'react';
import { Zap, Waves, Cpu, Award, Bike, ArrowRight } from 'lucide-react';
import Two from 'two.js';
import { sound } from '../utils/audio';

export default function HorizontalSchematicExperience() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const twoContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Experience Stations across the horizontal blueprint
  const stations = [
    {
      id: 'st-01',
      code: 'SCHEMATIC_01',
      domain: 'MOL LNG FLEET // HIGH-VOLTAGE',
      title: '6.6kV Switchboards & Auto-Synchronization',
      institution: 'Mitsui O.S.K. Lines Sea-Service',
      icon: Zap,
      accent: 'ember',
      metrics: [
        { label: 'BUS VOLTAGE', val: '6,600 V' },
        { label: 'FREQUENCY', val: '60.0 Hz' },
        { label: 'BREAKER TYPE', val: 'VCB 1250A' },
        { label: 'GRID CONFIG', val: '3-Phase Delta' },
      ],
      description:
        'Overseeing high-voltage power generation and automated load distribution aboard international LNG carriers. Maintained vacuum circuit breakers, automatic generator synchronizers, preferential tripping interlocks, and emergency blackout recovery sequencing under STCW Regulation III/6.',
      tags: ['6.6kV Grid', 'VCB Arc Chutes', 'PMS Logic', 'Blackout Recovery'],
    },
    {
      id: 'st-02',
      code: 'SCHEMATIC_02',
      domain: 'CRYOGENICS & PROCESS CONTROL',
      title: 'Cryogenic Boil-Off Gas (BOG) Automation',
      institution: 'LNG Carrier Cargo Operations',
      icon: Waves,
      accent: 'signal',
      metrics: [
        { label: 'CARGO TEMP', val: '-162.4 °C' },
        { label: 'TANK PRESSURE', val: '108 kPa' },
        { label: 'SAFETY BARRIER', val: 'Ex-d / Ex-ia' },
        { label: 'LOOP TYPE', val: 'PT100 4-20mA' },
      ],
      description:
        'Instrumentation and continuous monitoring of cryogenic submerged cargo pumps, Boil-Off Gas (BOG) fuel compressors, temperature transmitters, and intrinsically safe barrier loops navigating demanding marine weather conditions.',
      tags: ['Cryogenic Pumps', 'BOG Compressors', 'Ex-d Barriers', 'PT100 Loops'],
    },
    {
      id: 'st-03',
      code: 'SCHEMATIC_03',
      domain: 'EMBEDDED INTELLIGENCE & FIRMWARE',
      title: 'Bare-Metal STM32 & Robotics Lab',
      institution: 'Embedded Systems Research',
      icon: Cpu,
      accent: 'ember',
      metrics: [
        { label: 'MCU ARCH', val: 'ARM Cortex-M4' },
        { label: 'RTOS KERNEL', val: 'FreeRTOS' },
        { label: 'CONTROL LOOP', val: '1.0 kHz FOC' },
        { label: 'IMU FUSION', val: '6-Axis Kalman' },
      ],
      description:
        'Architecting low-level bare-metal firmware in C/C++. Engineered multi-threaded FreeRTOS tasks, Field Oriented Control (FOC) for brushless DC motors, sensor fusion Kalman filtering for robotic gimbals, and multi-layer custom PCB design in KiCad.',
      tags: ['STM32 Firmware', 'FreeRTOS', 'FOC Motor Control', 'KiCad Custom PCB'],
    },
    {
      id: 'st-04',
      code: 'SCHEMATIC_04',
      domain: 'GOVERNMENT OF KERALA // STATE AWARD',
      title: 'YIP 4.0 State Winner: Industrial LoRa Mesh',
      institution: 'Kerala Dev. Innovation Council (K-DISC)',
      icon: Award,
      accent: 'signal',
      metrics: [
        { label: 'HONOR', val: 'State Winner' },
        { label: 'BAND', val: '868 MHz LoRa' },
        { label: 'RANGE', val: '3.2 km LoS' },
        { label: 'SLEEP POWER', val: '14 µA' },
      ],
      description:
        'Honored as State Winner in Kerala’s Young Innovators Programme (YIP 4.0). Engineered an autonomous decentralized sensor telemetry mesh monitoring machinery bearing vibrations, temperatures, and bilge water levels across harsh steel bulkheads.',
      tags: ['State Winner', 'Sub-GHz LoRa', 'Predictive Maintenance', 'Deep-Sleep IoT'],
    },
    {
      id: 'st-05',
      code: 'SCHEMATIC_05',
      domain: 'ENDURANCE & EXPEDITIONS',
      title: 'V-Strom SX Touring & Martial Arts',
      institution: 'Physical Fortitude & Mindset',
      icon: Bike,
      accent: 'ember',
      metrics: [
        { label: 'EXPEDITION BIKE', val: 'Suzuki V-Strom SX' },
        { label: 'TERRAIN', val: 'Western Ghats Passes' },
        { label: 'MARTIAL ARTS', val: 'Combat Conditioning' },
        { label: 'TRAIT', val: 'Composure Under Load' },
      ],
      description:
        'Cultivating unwavering focus and physical fortitude through martial arts, paired with the freedom of long-distance motorcycle road trips. Solo expeditions across high mountain ghats teach mechanical self-reliance, route adaptation, and intense road presence.',
      tags: ['V-Strom SX', 'Western Ghats', 'Martial Arts', 'Mechanical Reliance'],
    },
  ];

  // Two.js Background Canvas instance rendering wide circuit & blueprint vectors
  useEffect(() => {
    const container = twoContainerRef.current;
    if (!container) return;

    const two = new Two({
      type: Two.Types.canvas,
      autostart: true,
      fitted: true,
    }).appendTo(container);

    const width = two.width;
    const height = two.height;

    const group = two.makeGroup();

    // 1. Horizontal High-Voltage Bus Lines
    const busY1 = height * 0.32;
    const busY2 = height * 0.68;

    const line1 = two.makeLine(0, busY1, width, busY1);
    line1.stroke = '#FF6D00';
    line1.linewidth = 2;
    group.add(line1);

    const line2 = two.makeLine(0, busY2, width, busY2);
    line2.stroke = 'rgba(255, 196, 0, 0.4)';
    line2.linewidth = 1.5;
    group.add(line2);

    // 2. Vertical Transformer Stems across width
    const step = 280;
    const count = Math.ceil(width / step) + 1;
    for (let i = 0; i < count; i++) {
      const x = i * step + 40;
      const vert = two.makeLine(x, busY1, x, busY2);
      vert.stroke = 'rgba(255, 109, 0, 0.12)';
      vert.linewidth = 1;
      group.add(vert);

      // Node circles
      const circle1 = two.makeCircle(x, busY1, 4.5);
      circle1.fill = '#FF6D00';
      circle1.noStroke();
      group.add(circle1);

      const circle2 = two.makeCircle(x, busY2, 4);
      circle2.fill = '#FFC400';
      circle2.noStroke();
      group.add(circle2);
    }

    two.bind('update', (frameCount) => {
      line1.stroke = frameCount % 60 < 30 ? '#FF6D00' : '#FF851A';
    });

    const handleResize = () => {
      if (two && container) {
        two.width = container.clientWidth;
        two.height = container.clientHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      two.unbind('update');
      two.clear();
      if (container) container.innerHTML = '';
    };
  }, []);

  // Fast, instantaneous scroll progress tracking for sticky horizontal pan
  useEffect(() => {
    let animId = null;

    const updateScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const maxScroll = containerRef.current.scrollHeight - window.innerHeight;
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / maxScroll, 0), 1);

      setScrollProgress(progress);

      const track = trackRef.current;
      const maxTranslate = track.scrollWidth - window.innerWidth;
      if (maxTranslate > 0) {
        track.style.transform = `translate3d(-${progress * maxTranslate}px, 0, 0)`;
      }
    };

    const onScroll = () => {
      if (!animId) {
        animId = requestAnimationFrame(() => {
          updateScroll();
          animId = null;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative h-[250vh] bg-vantablack"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 sm:py-10 z-20">
        
        {/* Top Telemetry & Control Bar */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full flex items-center justify-between font-mono text-xs z-30">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-ember animate-ping" />
            <span className="text-white font-bold tracking-wider uppercase">
              EXPERIENCE // HORIZONTAL SCHEMATIC PAN
            </span>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <span className="text-steel hidden sm:inline">
              MOL LNG FLEETS &bull; EMBEDDED RTOS &bull; YIP 4.0
            </span>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-3">
            <span className="text-signal font-bold">
              [ PAN: {Math.round(scrollProgress * 100).toString().padStart(3, '0')}% ]
            </span>
            <div className="w-24 sm:w-36 h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
              <div
                className="h-full bg-gradient-to-r from-ember to-signal rounded-full transition-all duration-75 ease-out"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Wide Two.js Background Canvas */}
        <div
          ref={twoContainerRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0"
        />

        {/* The Wide Horizontal Panning Track */}
        <div
          ref={trackRef}
          className="relative z-10 flex items-center gap-8 sm:gap-12 px-6 sm:px-12 w-max will-change-transform my-auto"
        >
          {stations.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.id}
                onMouseEnter={() => sound.playHover()}
                className="analog-focus hud-bracket w-[85vw] sm:w-[480px] lg:w-[540px] shrink-0 p-7 sm:p-8 rounded-2xl bg-charcoal/95 border border-neutral-800 hover:border-ember/60 transition-all duration-300 shadow-2xl hover:box-glow-ember"
                data-cursor="SCHEMATIC"
              >
                {/* Station Code Header */}
                <div className="flex items-center justify-between mb-4 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded flex items-center justify-center font-bold ${
                        st.accent === 'signal'
                          ? 'bg-signal/20 text-signal border border-signal/40'
                          : 'bg-ember/20 text-ember border border-ember/40'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-ember font-bold tracking-wider">{st.code}</span>
                  </div>
                  <span className="text-steel-dark text-[11px] font-bold">
                    0{idx + 1} / 05
                  </span>
                </div>

                <div className="text-[10px] font-mono text-signal tracking-widest uppercase mb-1 font-semibold">
                  {st.domain}
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1 leading-snug">
                  {st.title}
                </h3>

                <div className="font-mono text-xs text-steel-light mb-4">
                  {st.institution}
                </div>

                {/* 4 Metric Telemetry Boxes */}
                <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-vantablack border border-neutral-800 font-mono text-xs mb-5">
                  {st.metrics.map((m) => (
                    <div key={m.label} className="p-1.5">
                      <div className="text-[9px] text-steel-dark uppercase">{m.label}</div>
                      <div className="text-white font-bold mt-0.5">{m.val}</div>
                    </div>
                  ))}
                </div>

                {/* Description in Neutral Steel */}
                <p className="text-steel text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  {st.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800">
                  {st.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-vantablack border border-neutral-800 text-[10px] font-mono text-steel-light"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* End-of-Schematic Next Vector Marker */}
          <div className="w-[60vw] sm:w-[320px] shrink-0 p-8 rounded-2xl bg-charcoal/80 border border-neutral-800 flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-ember/15 border border-ember/40 flex items-center justify-center text-ember">
              <ArrowRight className="w-6 h-6 animate-pulse" />
            </div>
            <div className="font-display font-bold text-xl text-white">
              Schematic Vector Deployed
            </div>
            <p className="text-steel text-xs font-sans">
              Scroll downward to enter the 2.5D Exploded Blueprint Matrix.
            </p>
          </div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full flex items-center justify-between font-mono text-[11px] text-steel-dark z-30">
          <div className="flex items-center gap-2">
            <span className="text-ember font-bold">&gt;&gt;</span>
            <span>SCROLL VERTICALLY TO PAN SCHEMATICS HORIZONTALLY</span>
          </div>
          <div className="hidden sm:block text-signal">
            5 VERIFIED STATIONS // 60 FPS CSS/JS PIPELINE
          </div>
        </div>

      </div>
    </section>
  );
}

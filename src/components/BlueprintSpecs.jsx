import { Shield, Zap, Cpu, Gauge, Waves, Bike, Award, Radio, Terminal } from 'lucide-react';
import { sound } from '../utils/audio';

export default function BlueprintSpecs() {
  const specs = [
    {
      title: 'High-Voltage 6.6kV Power & VCB Distribution',
      icon: Zap,
      tag: 'SYS_01 // POWER GRID',
      accent: 'cyan',
      description:
        'Maintenance and automatic synchronization of dual-fuel marine diesel/gas generators, vacuum circuit breakers (VCB), 6.6kV bus-tie automation, and step-down transformer banks for propulsion and vessel auxiliary loads.',
      specs: ['6.6 kV 60Hz Grid', 'VCB Arc Chutes', 'Automatic Synchronizers', 'Transformer Banks'],
    },
    {
      title: 'Power Management System (PMS) & Blackout Sequence',
      icon: Gauge,
      tag: 'SYS_02 // PMS LOGIC',
      accent: 'gold',
      description:
        'Continuous monitoring of load-dependent generator start/stop, heavy-consumer interlocks, preferential tripping, and rapid automated blackout recovery sequencing across high-seas sea states.',
      specs: ['PMS State Machine', 'Preferential Trip', 'Load Sharing', 'Blackout Restart'],
    },
    {
      title: 'Cryogenic LNG Cargo & Boil-Off Gas (BOG)',
      icon: Waves,
      tag: 'SYS_03 // CRYOGENICS',
      accent: 'cyan',
      description:
        'Instrumentation loops for submerged cryogenic cargo pumps, Boil-Off Gas (BOG) fuel compressors, temperature sensor transmitter loops (PT100/Thermocouples), and intrinsically safe Ex-d / Ex-ia barrier safety.',
      specs: ['Cryogenic Pumps', 'Ex-d / Ex-ia Safety', 'BOG Compressors', 'PT100 4-20mA'],
    },
    {
      title: 'Bare-Metal STM32, FreeRTOS & Robotics',
      icon: Cpu,
      tag: 'SYS_04 // EMBEDDED RTOS',
      accent: 'coral',
      description:
        'Low-level C/C++ firmware architecture on STM32 ARM Cortex-M4 microcontrollers. Implementing Field Oriented Control (FOC) for brushless motors, 6-axis IMU Kalman filtering, and custom PCB design in KiCad.',
      specs: ['STM32 FreeRTOS', 'FOC Motor Control', 'Kalman Sensor Fusion', 'KiCad Custom PCB'],
    },
  ];

  return (
    <section id="specs" className="relative py-28 bg-[#0B0D17] text-white overflow-hidden border-t border-b border-neutral-800/80">
      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-cyan-electric font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[1px] bg-cyan-electric" />
              <span>04 // BLUEPRINT SPECIFICATIONS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Engineering Across <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-electric via-gold-warning to-coral-neon text-glow-cyan">
                High Seas & Silicon
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 max-w-sm uppercase tracking-wider">
            Verified across shipboard operational environments, lab breadboards, and production systems.
          </p>
        </div>

        {/* 2-Column Blueprint Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Portrait me2.png in Architectural Blueprint Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="hud-bracket p-3 rounded-2xl bg-obsidian-900 border border-gold-warning/30 shadow-2xl relative">
                
                <div className="relative rounded-xl overflow-hidden bg-obsidian-950 border border-neutral-800 aspect-[4/5] group">
                  <img
                    src="./assets/me2.png"
                    alt="Augastin K Lazar — Concrete and Sunlight Portrait"
                    className="w-full h-full object-cover filter contrast-105 saturate-105 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Scanline overlay */}
                  <div className="scanlines absolute inset-0 opacity-30" />

                  {/* Blueprint Watermark */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-transparent font-mono text-xs">
                    <div className="text-[10px] text-gold-warning tracking-widest uppercase mb-1">
                      MANIFESTO // 2026 BLUEPRINT
                    </div>
                    <div className="font-serif italic text-base text-white">
                      "Precision in high-voltage is not an option — it is survival."
                    </div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 px-2.5 py-1 rounded bg-obsidian-950 text-gold-warning border border-gold-warning/40 text-[10px] font-mono tracking-wider">
                  MOL // ETO CADET
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Engineering Ethos */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3 font-mono">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-electric/10 border border-cyan-electric/30 text-xs text-cyan-electric">
                <Terminal className="w-3.5 h-3.5" />
                <span>INTEGRATING HEAVY MARINE GRIDS WITH MICROCONTROLLERS</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Where High-Voltage Maritime Power Meets Precision Code.
              </h3>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
              I am <strong className="text-white">Augastin K Lazar</strong>, an Electro Technical Officer Cadet (ETO Cadet) at <strong className="text-gold-warning">Mitsui O.S.K. Lines (MOL)</strong>, hailing from Thrissur, Kerala. My professional career centers on keeping massive LNG carriers powered, automated, and fail-safe across international waters.
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed font-sans">
              Beyond shipboard high-voltage switchboards and cryogenic cargo loops, I engineer embedded systems, design custom PCBs, and develop interactive WebGL spatial simulators. Outside engineering, I practice martial arts for mental composure under pressure, and undertake long-haul solo motorcycle expeditions aboard my Suzuki V-Strom SX across the Western Ghats.
            </p>

            {/* Life Beyond the Terminal 2-Card Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-obsidian-900 border border-neutral-800 hover:border-gold-warning/40 transition-colors">
                <div className="flex items-center gap-2 text-gold-warning mb-2 font-mono text-xs font-bold">
                  <Bike className="w-4 h-4" />
                  <span>V-STROM SX MOTORCYCLE TOURING</span>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                  Long-haul solo expeditions across mountain passes and coastal highways. Builds mechanical self-reliance, rapid route adaptation, and intense road presence.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-900 border border-neutral-800 hover:border-coral-neon/40 transition-colors">
                <div className="flex items-center gap-2 text-coral-neon mb-2 font-mono text-xs font-bold">
                  <Award className="w-4 h-4" />
                  <span>MARTIAL ARTS DISCIPLINE</span>
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                  Instills situational awareness and emotional stillness under pressure—traits essential when troubleshooting live 6.6kV switchgear.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Maritime & Silicon Systems Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specs.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                onMouseEnter={() => sound.playHover()}
                className="hud-bracket p-7 rounded-2xl bg-obsidian-900/90 border border-neutral-800 hover:border-cyan-electric/50 transition-all duration-300 hover:-translate-y-1 hover:box-glow-cyan"
                data-cursor="SPEC"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-electric/10 border border-cyan-electric/30 flex items-center justify-center text-cyan-electric">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase">
                    {item.tag}
                  </span>
                </div>

                <h4 className="font-display font-bold text-xl text-white mb-2">
                  {item.title}
                </h4>

                <p className="text-neutral-400 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800">
                  {item.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-1 rounded bg-obsidian-950 border border-neutral-800 text-[10px] font-mono text-neutral-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

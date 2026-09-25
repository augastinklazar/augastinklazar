import { Shield, Gauge, Cpu, CheckCircle2, Waves, Zap } from 'lucide-react';
import { sound } from '../utils/audio';

export default function SeaService() {
  const operations = [
    {
      title: 'High-Voltage Power Generation & 6.6kV Distribution',
      icon: Zap,
      desc: 'Maintenance and synchronization of dual-fuel marine diesel/gas generators, vacuum circuit breakers (VCB), 6.6kV bus-tie automation, and step-down transformer banks for propulsion and hotel load.',
      tags: ['6.6 kV', 'VCB Switchgear', 'Auto-Synchronizer', 'Transformer Banks'],
    },
    {
      title: 'Power Management System (PMS) & Blackout Recovery',
      icon: Gauge,
      desc: 'Monitoring automatic load dependent start/stop, heavy-consumer request interlocks, preferential tripping, and rapid blackout recovery sequence logic across extreme high-seas conditions.',
      tags: ['PMS Logic', 'Load Sharing', 'Preferential Trip', 'Blackout Restart'],
    },
    {
      title: 'Cryogenic LNG Cargo Electrical & BOG Monitoring',
      icon: Waves,
      desc: 'Instrumentation for submerged cryogenic cargo pumps, Boil-Off Gas (BOG) fuel gas compressors, temperature sensor transmitter loops (PT100/Thermocouples), and intrinsically safe Ex-d / Ex-ia barrier loops.',
      tags: ['Cryogenic Pumps', 'Ex-d / Ex-ia', 'BOG Compressors', 'PT100 Loops'],
    },
    {
      title: 'Integrated Automation System (IAS) & PLC Networks',
      icon: Cpu,
      desc: 'Troubleshooting shipboard industrial SCADA/IAS distributed I/O modules, redundant optical fiber fieldbuses, pneumatic valve actuators, and marine navigation aid power supplies.',
      tags: ['SCADA / IAS', 'Fieldbus', 'Redundant I/O', 'Navigation Electronics'],
    },
  ];

  return (
    <section id="sea-service" className="relative py-28 bg-obsidian-950 text-white overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-marine-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-gold font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span>02 // MARITIME SPECIALIZATION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Mitsui O.S.K. Lines <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-warm to-marine-cyan">
                LNG Carrier Sea-Service
              </span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 max-w-sm">
            <div className="flex items-center gap-2 text-gold-light mb-1">
              <Shield className="w-4 h-4 text-gold" />
              <span>STCW REGULATION III/6 &bull; ETO CADET</span>
            </div>
            <p className="text-neutral-500">
              Maintaining continuous high-voltage power integrity and marine automation for international LNG supply chains.
            </p>
          </div>
        </div>

        {/* 4 Core Maritime Systems Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {operations.map((op, idx) => {
            const Icon = op.icon;
            return (
              <div
                key={op.title}
                onMouseEnter={() => sound.playHover()}
                className="group relative p-8 rounded-2xl glass-card border border-neutral-800 hover:border-gold/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(229,193,88,0.15)]"
                data-cursor-text="INSPECT"
              >
                {/* Index tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-neutral-500 tracking-widest">
                    SYSTEM // 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-gold transition-colors">
                  {op.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {op.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/80">
                  {op.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-obsidian-900 border border-neutral-700/60 text-[11px] font-mono text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle corner light */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-full pointer-events-none group-hover:bg-gold/10 transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Sea-Service Progression Highlights Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-marine-cyan/10 border border-marine-cyan/30 flex items-center justify-center text-marine-cyan shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base sm:text-lg">
                High-Voltage Safety & Sea-Time Logged
              </h4>
              <p className="text-neutral-400 text-xs sm:text-sm font-sans mt-0.5">
                Active voyage training covering generator synchronizing, marine instrumentation, and automated safety shutdowns.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs shrink-0">
            <div className="text-center px-4 py-2 rounded-lg bg-obsidian-950 border border-neutral-800">
              <div className="text-gold font-bold text-base">MOL</div>
              <div className="text-neutral-500 text-[10px]">OPERATOR</div>
            </div>
            <div className="text-center px-4 py-2 rounded-lg bg-obsidian-950 border border-neutral-800">
              <div className="text-marine-cyan font-bold text-base">LNG</div>
              <div className="text-neutral-500 text-[10px]">VESSEL CLASS</div>
            </div>
            <div className="text-center px-4 py-2 rounded-lg bg-obsidian-950 border border-neutral-800">
              <div className="text-white font-bold text-base">STCW</div>
              <div className="text-neutral-500 text-[10px]">STANDARDS</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

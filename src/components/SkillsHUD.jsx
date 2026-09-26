import { useState } from 'react';
import { Shield, Zap, Radio, Cpu, Terminal, Flame, Cross, Anchor, Activity, CheckCircle2 } from 'lucide-react';
import { useScrambleText } from '../hooks/useAnime';
import { sound } from '../utils/audio';

// Tactical Skill Terminal Component with Number-Scramble Decoding on Hover
function ScrambleSkillItem({ skill, onSelect, isSelected }) {
  const { displayText, triggerScramble } = useScrambleText(skill.name);
  const Icon = skill.icon;

  const handleMouseEnter = () => {
    sound.playHover();
    triggerScramble();
  };

  return (
    <div
      onClick={() => {
        sound.playClick();
        onSelect(skill);
      }}
      onMouseEnter={handleMouseEnter}
      className={`group p-4 rounded-xl transition-all duration-300 cursor-pointer border ${
        isSelected
          ? 'bg-cyan-electric/15 border-cyan-electric box-glow-cyan'
          : 'bg-obsidian-900/80 border-neutral-800 hover:border-cyan-electric/50 hover:bg-obsidian-850'
      }`}
      data-cursor="DECODE"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-7 h-7 rounded flex items-center justify-center ${
              isSelected ? 'bg-cyan-electric text-obsidian-950 font-bold' : 'bg-neutral-800 text-cyan-electric'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
            {skill.category}
          </span>
        </div>

        <span
          className={`font-mono text-xs font-bold ${
            skill.accent === 'gold'
              ? 'text-gold-warning'
              : skill.accent === 'coral'
              ? 'text-coral-neon'
              : 'text-cyan-electric'
          }`}
        >
          {skill.code}
        </span>
      </div>

      <div className="font-mono font-bold text-sm sm:text-base text-white tracking-wide transition-colors group-hover:text-cyan-electric min-h-[24px]">
        {displayText}
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-2 border-t border-neutral-800">
        <span>STATUS: VERIFIED</span>
        <span className="text-cyan-electric">{skill.level}% RATING</span>
      </div>
    </div>
  );
}

export default function SkillsHUD() {
  const skillsData = [
    {
      id: 'stcw',
      name: 'STCW III/6 High-Voltage 6.6kV',
      category: 'MARITIME CADRE',
      code: 'REG_III/6',
      level: 95,
      angle: 0,
      icon: Anchor,
      accent: 'cyan',
      specs: 'Certified electro-technical officer cadre standards. 6.6kV vacuum circuit breakers, generator auto-synchronizing, and marine power distribution.',
    },
    {
      id: 'aff',
      name: 'Advanced Fire Fighting (AFF)',
      category: 'SAFETY & EMERGENCY',
      code: 'SOLAS_AFF',
      level: 92,
      angle: 45,
      icon: Flame,
      accent: 'coral',
      specs: 'Commanding shipboard firefighting teams, breathing apparatus endurance, fixed CO2 flood systems, water mist fire suppression in machinery spaces.',
    },
    {
      id: 'mfa',
      name: 'Medical First Aid (MFA)',
      category: 'MARITIME MEDICAL',
      code: 'MFA_LIFE',
      level: 90,
      angle: 90,
      icon: Cross,
      accent: 'gold',
      specs: 'Shipboard trauma management, CPR, electrical shock resuscitation, automated external defibrillators (AED), and medical evacuation protocols at sea.',
    },
    {
      id: 'embedded-c',
      name: 'Embedded C & C++ Bare-Metal',
      category: 'FIRMWARE ARCH',
      code: 'ARM_STM32',
      level: 94,
      angle: 135,
      icon: Cpu,
      accent: 'cyan',
      specs: 'Low-level peripheral driver implementations, register manipulation, hardware timers, DMA controllers, and high-frequency sensor interfaces on STM32.',
    },
    {
      id: 'circuit-design',
      name: 'Circuit Design & Custom PCB',
      category: 'HARDWARE ENG',
      code: 'KICAD_PCB',
      level: 88,
      angle: 180,
      icon: Zap,
      accent: 'gold',
      specs: 'Schematic capture, multi-layer impedance controlled PCB layouts in KiCad, BLDC motor drivers, noise decoupling, and low-power power management.',
    },
    {
      id: 'freertos',
      name: 'FreeRTOS & RTOS Kernels',
      category: 'SYSTEM INTELLIGENCE',
      code: 'RTOS_SYNC',
      level: 90,
      angle: 225,
      icon: Activity,
      accent: 'cyan',
      specs: 'Deterministic real-time scheduling, preemptive priority queues, semaphores, mutexes, task synchronization, and inter-task communication.',
    },
    {
      id: 'pms',
      name: 'Power Management System (PMS)',
      category: 'SHIPBOARD AUTOMATION',
      code: 'PMS_SCADA',
      level: 93,
      angle: 270,
      icon: Terminal,
      accent: 'gold',
      specs: 'Yokogawa IAS distributed control, preferential tripping timers, automatic load-dependent start/stop of auxiliary diesel generators.',
    },
    {
      id: 'lora',
      name: 'Sub-GHz LoRa & Mesh Telemetry',
      category: 'WIRELESS MESH',
      code: 'LORA_868',
      level: 89,
      angle: 315,
      icon: Radio,
      accent: 'coral',
      specs: 'Long-range low-power sensor telemetry across steel bulkheads, deep-sleep energy budgeting, packet encryption, and MQTT gateways.',
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);

  // Generate radar polygon points from skill levels (cx: 175, cy: 175, maxRadius: 130)
  const radarPoints = skillsData
    .map((s) => {
      const rad = (s.angle - 90) * (Math.PI / 180);
      const r = (s.level / 100) * 125;
      const x = 175 + Math.cos(rad) * r;
      const y = 175 + Math.sin(rad) * r;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <section id="skills-hud" className="relative py-28 bg-[#0B0D17] text-white overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-cyan-electric font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[1px] bg-cyan-electric" />
              <span>03 // TACTICAL DATA HUD & MATRIX</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Cyberpunk Radar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-electric via-gold-warning to-coral-neon text-glow-cyan">
                Telemetry & Systems
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 max-w-sm uppercase tracking-wider">
            Hover over any technical station to execute real-time number-scramble decoders.
          </p>
        </div>

        {/* 2-Column HUD Layout: Radar Scanner on Left, Scramble Terminals on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Cyberpunk SVG Radar HUD Chart */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="hud-bracket p-6 rounded-2xl bg-obsidian-900/90 border border-cyan-electric/30 relative w-full max-w-md flex flex-col items-center">
              
              {/* Radar Screen Header */}
              <div className="w-full flex items-center justify-between font-mono text-[10px] text-cyan-electric mb-3 pb-2 border-b border-cyan-electric/20">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-electric animate-ping" />
                  POLAR RADAR SWEEP
                </span>
                <span>RANGE: 100 NM</span>
              </div>

              {/* The SVG Polar Radar Screen */}
              <div className="relative w-[310px] h-[310px] sm:w-[350px] sm:h-[350px] flex items-center justify-center">
                
                <svg className="w-full h-full overflow-visible" viewBox="0 0 350 350">
                  {/* Concentric Range Rings */}
                  {[32, 64, 96, 128].map((r, i) => (
                    <circle
                      key={i}
                      cx="175"
                      cy="175"
                      r={r}
                      fill="none"
                      stroke="rgba(0, 240, 255, 0.15)"
                      strokeWidth="1"
                      strokeDasharray={i === 3 ? 'none' : '3 3'}
                    />
                  ))}

                  {/* Quadrant Crosshairs */}
                  <line x1="175" y1="15" x2="175" y2="335" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />
                  <line x1="15" y1="175" x2="335" y2="175" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />

                  {/* Diagonal Axes */}
                  <line x1="60" y1="60" x2="290" y2="290" stroke="rgba(0, 240, 255, 0.08)" strokeWidth="1" />
                  <line x1="60" y1="290" x2="290" y2="60" stroke="rgba(0, 240, 255, 0.08)" strokeWidth="1" />

                  {/* Radar Sweep Rotating Beam Line */}
                  <g className="origin-[175px_175px] animate-radar-sweep">
                    <line
                      x1="175"
                      y1="175"
                      x2="175"
                      y2="47"
                      stroke="#00F0FF"
                      strokeWidth="2"
                      className="drop-shadow-[0_0_8px_#00F0FF]"
                    />
                    <path
                      d="M 175 175 L 175 47 A 128 128 0 0 1 270 90 Z"
                      fill="url(#radarGradient)"
                      opacity="0.25"
                    />
                  </g>

                  {/* Gradient for Radar Sweep */}
                  <defs>
                    <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.0" />
                    </radialGradient>
                  </defs>

                  {/* Active Radar Capability Polygon */}
                  <polygon
                    points={radarPoints}
                    fill="rgba(0, 240, 255, 0.15)"
                    stroke="#00F0FF"
                    strokeWidth="2"
                    className="drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                  />

                  {/* Polar Blip Targets */}
                  {skillsData.map((s) => {
                    const rad = (s.angle - 90) * (Math.PI / 180);
                    const r = (s.level / 100) * 125;
                    const x = 175 + Math.cos(rad) * r;
                    const y = 175 + Math.sin(rad) * r;
                    const isSelected = selectedSkill.id === s.id;

                    return (
                      <g key={s.id} transform={`translate(${x}, ${y})`}>
                        <circle
                          r={isSelected ? '6' : '4'}
                          fill={isSelected ? '#FF3366' : '#FFB800'}
                          stroke="#0B0D17"
                          strokeWidth="1.5"
                          className="transition-all duration-300"
                        />
                        {isSelected && (
                          <circle
                            r="11"
                            fill="none"
                            stroke="#FF3366"
                            strokeWidth="1"
                            className="animate-ping origin-center"
                          />
                        )}
                      </g>
                    );
                  })}

                  {/* Compass Degree Markers */}
                  <text x="175" y="10" fill="#00F0FF" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                    000° N
                  </text>
                  <text x="345" y="178" fill="#00F0FF" fontSize="9" fontFamily="JetBrains Mono" textAnchor="start">
                    090° E
                  </text>
                  <text x="175" y="348" fill="#00F0FF" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">
                    180° S
                  </text>
                  <text x="5" y="178" fill="#00F0FF" fontSize="9" fontFamily="JetBrains Mono" textAnchor="end">
                    270° W
                  </text>
                </svg>
              </div>

              {/* Active Radar Target Dossier Box */}
              <div className="w-full mt-4 p-4 rounded-xl bg-obsidian-950 border border-neutral-800 font-mono text-xs">
                <div className="flex items-center justify-between text-cyan-electric mb-1">
                  <span className="font-bold">TARGET: {selectedSkill.name}</span>
                  <span className="text-gold-warning font-bold">{selectedSkill.level}%</span>
                </div>
                <p className="text-neutral-400 text-[11px] font-sans leading-relaxed">
                  {selectedSkill.specs}
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Number-Scramble Data Terminals */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-neutral-400 pb-2 border-b border-neutral-800">
              <span className="text-cyan-electric uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-electric" />
                TACTICAL STATIONS DECODER
              </span>
              <span>8 VERIFIED VECTORS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {skillsData.map((skill) => (
                <ScrambleSkillItem
                  key={skill.id}
                  skill={skill}
                  onSelect={(s) => setSelectedSkill(s)}
                  isSelected={selectedSkill.id === skill.id}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

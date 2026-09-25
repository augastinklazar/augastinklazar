import { useState } from 'react';
import { Anchor, Cpu, Terminal, Video, CheckCircle } from 'lucide-react';
import { sound } from '../utils/audio';

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState('maritime');

  const skillCategories = [
    {
      id: 'maritime',
      name: 'Maritime Electrical & Automation',
      icon: Anchor,
      badge: 'MOL LNG Standards',
      color: 'gold',
      skills: [
        { name: 'High-Voltage 6.6kV Switchboards & VCB Breakers', level: 95 },
        { name: 'Power Management System (PMS) & Auto-Sync', level: 92 },
        { name: 'Cryogenic Boil-Off Gas (BOG) & Pump Automation', level: 88 },
        { name: 'Marine Instrumentation (PT100, 4-20mA Loops, Pressure)', level: 94 },
        { name: 'Emergency Diesel Gen & Blackout Recovery Sequencing', level: 90 },
        { name: 'Ex-d / Ex-ia Hazardous Zone Safety & Fire Detection', level: 92 },
      ],
      tools: ['STCW III/6', 'Woodward Governors', 'Schneider/ABB VCB', 'Yokogawa IAS', 'Megger Insulation Testing', 'Modbus RTU']
    },
    {
      id: 'embedded',
      name: 'Embedded Systems & Firmware',
      icon: Cpu,
      badge: 'Bare-Metal & RTOS',
      color: 'cyan',
      skills: [
        { name: 'Low-Level C & Embedded C++', level: 92 },
        { name: 'STM32 (ARM Cortex-M) & FreeRTOS Kernel', level: 88 },
        { name: 'ESP32 IoT, Sub-GHz LoRa Mesh & BLE 5.0', level: 90 },
        { name: 'Bus Protocols (CAN 2.0B, RS-485, SPI, I2C, UART)', level: 94 },
        { name: 'Hardware Debugging (Oscilloscopes, Logic Analyzers)', level: 90 },
        { name: 'Custom PCB Layout & Power Budget Profiling', level: 85 },
      ],
      tools: ['STM32CubeIDE', 'FreeRTOS', 'KiCad', 'PlatformIO', 'Saleae Logic', 'Segger J-Link']
    },
    {
      id: 'web-3d',
      name: 'Creative Web & 3D Engineering',
      icon: Terminal,
      badge: 'Interactive Visuals',
      color: 'amber',
      skills: [
        { name: 'Three.js, WebGL & 3D Spatial Experiences', level: 86 },
        { name: 'React Architecture, State Systems & Hooks', level: 90 },
        { name: 'GSAP, ScrollTrigger & Anime.js Motion', level: 88 },
        { name: 'Node.js, Express & Real-time WebSockets', level: 85 },
        { name: 'Tailwind CSS, Glassmorphism & Luxury UI', level: 92 },
        { name: 'Static Builds & GitHub Pages Deployment CI/CD', level: 94 },
      ],
      tools: ['Three.js', 'React', 'Vite', 'GSAP', 'Anime.js', 'Tailwind', 'Node.js']
    },
    {
      id: 'creator',
      name: 'Content Creation & Robotics',
      icon: Video,
      badge: 'Media & Hardware',
      color: 'purple',
      skills: [
        { name: 'Educational Tech Scripting & Video Direction', level: 92 },
        { name: 'Robotic Motion Control (BLDC, FOC & Closed-Loop PID)', level: 88 },
        { name: 'Sensor Fusion (Complementary & Kalman Filters)', level: 85 },
        { name: 'Audio/Video Automation & Waveform Pipelines', level: 89 },
        { name: 'Technical 3D Animation & Schematic Storyboards', level: 90 },
        { name: 'Educational Community Engagement & Workshop Delivery', level: 94 },
      ],
      tools: ['FFmpeg', 'DaVinci Resolve', 'OBS Studio', 'Blender', 'Python CLI', 'Canva Pro']
    }
  ];

  const currentCategory = skillCategories.find((c) => c.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="relative py-28 bg-obsidian-900/80 border-t border-b border-neutral-800/80 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-gold font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span>04 // TECHNICAL CAPABILITIES & PROFICIENCY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              The Engineering <br />
              <span className="font-serif italic font-normal text-gold">Matrix & Toolset</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 max-w-xs uppercase tracking-wider">
            Verified across shipboard operational environments, lab breadboards, and production software stacks.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(cat.id);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`p-4 rounded-xl text-left transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'glass-card-gold border-gold text-white shadow-[0_0_25px_rgba(229,193,88,0.25)]'
                    : 'glass-card border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
                data-cursor-text="SELECT"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-gold' : 'text-neutral-500'}`} />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                    {cat.badge}
                  </span>
                </div>
                <div className="font-display font-bold text-sm tracking-wide text-white">
                  {cat.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Skill Category Deep Dive */}
        <div className="glass-card rounded-2xl p-8 sm:p-10 border border-neutral-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-neutral-800/80">
            <div>
              <span className="font-mono text-xs text-gold uppercase tracking-widest">
                VERIFIED COMPETENCY // {currentCategory.badge}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                {currentCategory.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-marine-cyan bg-marine-cyan/10 px-3.5 py-1.5 rounded-full border border-marine-cyan/30 self-start sm:self-auto">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>ACTIVE SYSTEM PROFICIENCY</span>
            </div>
          </div>

          {/* Skill Progress Bars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-10">
            {currentCategory.skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-neutral-200">{skill.name}</span>
                  <span className="text-gold font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-obsidian-950 rounded-full overflow-hidden p-0.5 border border-neutral-800">
                  <div
                    className="h-full bg-gradient-to-r from-amber-warm via-gold to-marine-cyan rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tool Stack Tags */}
          <div className="pt-6 border-t border-neutral-800/80">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block mb-3">
              PRIMARY HARDWARE & SOFTWARE TOOLING
            </span>
            <div className="flex flex-wrap gap-2.5">
              {currentCategory.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-1.5 rounded-lg bg-obsidian-950 border border-neutral-700 text-xs font-mono text-neutral-300 hover:border-gold/50 hover:text-white transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

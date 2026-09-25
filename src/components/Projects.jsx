import { useState } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, Cpu, Radio, ShieldAlert, Sparkles, X } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'maritime', label: 'Maritime & High-Voltage' },
    { id: 'embedded', label: 'Embedded & Robotics' },
    { id: 'creative-web', label: 'Web & 3D Visualizer' },
  ];

  const projectList = [
    {
      id: 'maritime-telemetry',
      category: 'maritime',
      title: 'High-Voltage Maritime Power & Blackout Simulator',
      subtitle: 'Simulating 6.6kV Bus-Tie Synchronization, Load Sharing & Preferential Tripping',
      description: 'An interactive full-stack simulation of shipboard electrical power generation. Replicates automatic generator start-stop, synchronizing lights, frequency governor droop, and emergency breaker logic for cadet training.',
      metrics: 'Zero-latency WebSockets · 6.6 kV Switchboard Logic · 4-Generator Load Sharing',
      tags: ['Maritime Automation', 'React', 'Node.js', 'SCADA Emulation', 'WebSockets'],
      icon: ShieldAlert,
      accent: 'gold',
      github: 'https://github.com/augastin-lazar',
      live: '#',
      featured: true,
      details: {
        architecture: 'Engineered a state machine in Node.js simulating active/reactive load distribution across 4 diesel-generators. Frontend renders interactive synchroscope, bus voltage gauges, and alarm annunciator panel.',
        hardwareSpecs: 'Emulated Modbus TCP registers, 60Hz 440V / 6.6kV voltage profiles, reverse power protection logic, and preferential trip timers.',
        significance: 'Provides a safe, accessible software testbed for understanding critical maritime power failure modes without high-voltage arc risks.'
      }
    },
    {
      id: 'robotic-gimbal',
      category: 'embedded',
      title: 'Autonomous Dual-Axis Robotic Gimbal Tracker',
      subtitle: 'Low-Latency Motion Compensation with STM32 & FreeRTOS',
      description: 'Custom-designed robotic pan-tilt gimbal running on STM32 ARM Cortex-M4 microcontroller. Integrates 6-axis IMU with sensor fusion Kalman filtering and Field Oriented Control (FOC) for jitter-free orientation stability.',
      metrics: '1kHz Loop Frequency · Kalman IMU Fusion · 0.02° Precision',
      tags: ['STM32', 'C/C++', 'FreeRTOS', 'Robotics', 'Hardware PID'],
      icon: Cpu,
      accent: 'cyan',
      github: 'https://github.com/augastin-lazar',
      live: '#',
      featured: true,
      details: {
        architecture: 'Custom PCB design featuring dual DRV8313 brushless motor drivers, magnetic absolute encoders, and STM32F401 MCU running FreeRTOS with separate tasks for IMU polling, PID loop, and telemetry UART.',
        hardwareSpecs: '3S LiPo battery power management, SPI communication with MPU6050, sub-1ms response time to external angular disturbances.',
        significance: 'Applied in maritime camera stabilizing prototypes and dynamic robotic sensor stabilization.'
      }
    },
    {
      id: 'industrial-sensor-node',
      category: 'embedded',
      title: 'Sub-GHz Industrial Marine Sensor Mesh',
      subtitle: 'Long-Range Cryogenic & Vibration Telemetry for Vessel Auxiliary Systems',
      description: 'Robust wireless telemetry network built for harsh industrial environments. Deploys low-power ESP32 + LoRa radio nodes monitoring motor bearing vibration, temperatures, and bilge water levels.',
      metrics: '3km Line-of-Sight · Deep Sleep <15µA · Industrial Enclosure',
      tags: ['ESP32', 'LoRa', 'Embedded C', 'IoT', 'MQTT'],
      icon: Radio,
      accent: 'amber',
      github: 'https://github.com/augastin-lazar',
      live: '#',
      featured: false,
      details: {
        architecture: 'Decentralized mesh topology transmitting telemetry packets via 868MHz LoRa to a central gateway running Node.js and InfluxDB for time-series charting.',
        hardwareSpecs: 'IP67 waterproof casing, magnetic mount, lithium thionyl chloride battery cell designed for 18+ months autonomous reporting.',
        significance: 'Enables predictive maintenance and rapid fault detection in auxiliary marine machinery spaces.'
      }
    },
    {
      id: 'threejs-engine-room',
      category: 'creative-web',
      title: 'Interactive 3D LNG Engine Room Digital Twin',
      subtitle: 'WebGL Spatial Explorer for High-Voltage Marine Systems',
      description: 'A cutting-edge 3D browser experience built with Three.js and React. Enables navigation through ship machinery spaces, highlighting main switchboards, transformers, cryogenic compressors, and safety interlocks.',
      metrics: '60 FPS WebGL · PBR Materials · Interactive Hotspots',
      tags: ['Three.js', 'React', 'WebGL', 'GSAP', 'GLSL Shaders'],
      icon: Sparkles,
      accent: 'gold',
      github: 'https://github.com/augastin-lazar',
      live: '#',
      featured: true,
      details: {
        architecture: 'Optimized 3D models with LOD (Level of Detail), custom fragment shaders for electrical current flow visualizers, and spatial audio cues corresponding to machinery proximity.',
        hardwareSpecs: 'Client-side WebGL rendering capable of running seamlessly on both desktop workstations and mobile browsers.',
        significance: 'Transforms dry marine engineering manuals into intuitive spatial learning environments.'
      }
    },
    {
      id: 'creator-pipeline',
      category: 'creative-web',
      title: 'Automated Creator Workflow & Animation Suite',
      subtitle: 'High-Efficiency Media Engineering for Educational Tech Channels',
      description: 'Custom automated scripts and pipeline tools engineered to produce educational electronics and engineering content. Features audio denoise pipelines, animated schematic generation, and automated timestamp indexing.',
      metrics: '70% Faster Content Export · Custom SVG Animator · FFmpeg Core',
      tags: ['Node.js', 'Python', 'FFmpeg', 'Anime.js', 'Content Ops'],
      icon: Layers,
      accent: 'cyan',
      github: 'https://github.com/augastin-lazar',
      live: '#',
      featured: false,
      details: {
        architecture: 'Command-line tool orchestrating FFmpeg filters, dynamic waveform generation, and automated transcription indexing for high-retention technical educational videos.',
        hardwareSpecs: 'Cross-platform CLI tool with batch rendering support and cloud backup synchronization.',
        significance: 'Streamlines the creation of high-clarity technical tutorials for maritime and embedded engineering audiences.'
      }
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectList
    : projectList.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 bg-obsidian-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-gold font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span>03 // PORTFOLIO OF ENGINEERING WORKS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Featured Systems & <br />
              <span className="font-serif italic font-normal text-gold">Creative Prototypes</span>
            </h2>
          </div>
          
          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playClick();
                  setActiveFilter(cat.id);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-gold text-obsidian-950 font-bold shadow-[0_0_20px_rgba(229,193,88,0.4)]'
                    : 'glass-card text-neutral-400 hover:text-white border-neutral-800'
                }`}
                data-cursor-text="FILTER"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedProject(project);
                }}
                onMouseEnter={() => sound.playHover()}
                className="group relative flex flex-col justify-between p-7 rounded-2xl glass-card border border-neutral-800 hover:border-gold/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_0_40px_rgba(229,193,88,0.18)] cursor-pointer"
                data-cursor-text="VIEW"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="p-2 rounded-full bg-obsidian-900 border border-neutral-800 text-neutral-400 group-hover:text-gold group-hover:border-gold/40 transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-gold transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <div className="font-mono text-[11px] text-amber-warm tracking-wider uppercase mb-3">
                    {project.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Metrics Badge */}
                  <div className="py-2.5 px-3 rounded-lg bg-obsidian-900/90 border border-neutral-800/80 font-mono text-[10px] text-gold tracking-wide mb-4">
                    {project.metrics}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded bg-obsidian-900 border border-neutral-800 text-[10px] font-mono text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle highlight gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl glass-card-gold p-6 sm:p-8 border border-gold/40 shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => {
                sound.playClick();
                setSelectedProject(null);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-obsidian-900 border border-neutral-700 text-neutral-300 hover:text-white hover:border-gold transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-gold uppercase tracking-widest">
                  PROJECT SPECIFICATION // {selectedProject.category.toUpperCase()}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="font-mono text-xs text-amber-warm tracking-wider">
                  {selectedProject.subtitle}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-900/90 border border-neutral-800 font-mono text-xs text-neutral-300 leading-relaxed">
                <div className="text-gold font-bold mb-1 uppercase tracking-wider text-[11px]">System Architecture</div>
                {selectedProject.details.architecture}
              </div>

              <div className="p-4 rounded-xl bg-obsidian-900/90 border border-neutral-800 font-mono text-xs text-neutral-300 leading-relaxed">
                <div className="text-marine-cyan font-bold mb-1 uppercase tracking-wider text-[11px]">Hardware & Specifications</div>
                {selectedProject.details.hardwareSpecs}
              </div>

              <div className="p-4 rounded-xl bg-obsidian-900/90 border border-neutral-800 font-mono text-xs text-neutral-300 leading-relaxed">
                <div className="text-amber-warm font-bold mb-1 uppercase tracking-wider text-[11px]">Practical Engineering Significance</div>
                {selectedProject.details.significance}
              </div>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-xs font-mono text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono uppercase tracking-wider transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full border border-neutral-700 text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider transition-all"
                >
                  Close Specification
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

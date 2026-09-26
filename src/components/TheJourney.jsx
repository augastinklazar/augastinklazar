import { useEffect, useRef, useState } from 'react';
import { Compass, Anchor, Award, Shield, Navigation, ExternalLink, Zap, Bike } from 'lucide-react';
import anime from 'animejs';
import { sound } from '../utils/audio';

export default function TheJourney() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const [vehiclePos, setVehiclePos] = useState({ x: 50, y: 30, angle: 0 });
  const [activeNode, setActiveNode] = useState(0);

  const milestones = [
    {
      id: 'geims',
      nodeNum: '01',
      tag: 'MARITIME ACADEMY // CADRE INITIATION',
      title: 'GEIMS ETO Batch 32',
      institution: 'Great Eastern Institute of Maritime Studies',
      date: 'Cadet Phase',
      coordinates: 'Lonavala, Maharashtra [18.75° N, 73.40° E]',
      icon: Anchor,
      accent: 'cyan',
      description:
        'Intensive marine electro-technical officer cadet training. Mastered high-voltage 6.6kV generation, vacuum circuit breakers, marine instrumentation, generator synchronization, and safety under STCW Regulation III/6.',
      telemetry: ['STCW III/6', '6.6kV Switchboards', 'Generator Auto-Sync', 'Marine Safety'],
    },
    {
      id: 'fraiha',
      nodeNum: '02',
      tag: 'SEA SERVICE // HIGH-SEAS DEPLOYMENT',
      title: 'LNGC Fraiha',
      institution: 'Mitsui O.S.K. Lines (MOL) Fleet',
      date: 'Sea-Time Voyage',
      coordinates: 'International Energy Corridors',
      icon: Compass,
      accent: 'gold',
      description:
        'First major international sea-service voyage aboard modern LNG Carrier Fraiha. Maintained 6.6kV main switchgear, cryogenic boil-off gas (BOG) compressors, PT100 sensor loops, and power management systems (PMS) across international waters.',
      telemetry: ['MOL Fleet', 'Cryogenic BOG', 'VCB Distribution', 'PMS Automation'],
    },
    {
      id: 'yip',
      nodeNum: '03',
      tag: 'INNOVATION // STATE RECOGNITION',
      title: 'YIP 4.0 State Winner',
      institution: 'Young Innovators Programme & Kerala Dev. Innovation Council',
      date: 'State Award',
      coordinates: 'Kerala, India',
      icon: Award,
      accent: 'coral',
      description:
        'Selected as State Level Winner in Kerala’s flagship Young Innovators Programme (YIP 4.0). Recognized for engineering an autonomous embedded telemetry sensor system combining low-latency microcontroller firmware with hardware safety failsafes.',
      telemetry: ['State Winner', 'Embedded Firmware', 'Sensor Telemetry', 'Autonomous Loops'],
    },
    {
      id: 'fuwairit',
      nodeNum: '04',
      tag: 'ADVANCED SEA VOYAGES // ENERGY TRANSIT',
      title: 'LNGC Fuwairit',
      institution: 'Mitsui O.S.K. Lines (MOL) Fleet',
      date: 'Active Cadre Sea-Time',
      coordinates: 'Global High Seas Transit',
      icon: Navigation,
      accent: 'cyan',
      description:
        'Navigating world energy arteries aboard LNGC Fuwairit. Overseeing dual-fuel auxiliary generator load-sharing, preferential trip timers, blackout rapid recovery sequencing, and integrated automation systems (IAS).',
      telemetry: ['Dual-Fuel Gen', 'Blackout Recovery', 'IAS / SCADA', 'High-Voltage Safety'],
    },
  ];

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;

            // Animate SVG strokeDashoffset and vehicle tracking
            anime({
              targets: path,
              strokeDashoffset: [pathLength, 0],
              duration: 3800,
              easing: 'easeInOutCubic',
              update: (anim) => {
                const currentLength = (anim.progress / 100) * pathLength;
                if (currentLength > 0 && currentLength <= pathLength) {
                  const pt = path.getPointAtLength(currentLength);
                  const nextPt = path.getPointAtLength(Math.min(currentLength + 2, pathLength));
                  const angle = Math.atan2(nextPt.y - pt.y, nextPt.x - pt.x) * (180 / Math.PI);

                  setVehiclePos({ x: pt.x, y: pt.y, angle });

                  // Update active node milestone based on progress
                  if (anim.progress > 75) setActiveNode(3);
                  else if (anim.progress > 50) setActiveNode(2);
                  else if (anim.progress > 25) setActiveNode(1);
                  else setActiveNode(0);
                }
              },
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative py-28 bg-[#0B0D17] text-white overflow-hidden border-t border-b border-neutral-800/80"
    >
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-cyan-electric font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[1px] bg-cyan-electric" />
              <span>02 // NAVIGATIONAL TRAJECTORY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              The Vector <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-electric via-gold-warning to-coral-neon text-glow-cyan">
                Journey & Sea Milestones
              </span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 max-w-sm space-y-1">
            <div className="text-gold-warning font-semibold flex items-center gap-1.5">
              <Bike className="w-4 h-4 text-gold-warning" />
              <span>V-STROM SX &bull; CADET EXPEDITION VECTOR</span>
            </div>
            <p className="text-neutral-500">
              Tracking verified sea service, state innovation honors, and high-seas LNG operational deployment.
            </p>
          </div>
        </div>

        {/* Tactical Timeline Route Canvas */}
        <div className="relative">
          
          {/* Central / Left SVG Drawing Path */}
          <div className="absolute top-0 left-8 md:left-1/2 -translate-x-1/2 w-24 h-full pointer-events-none z-10 hidden sm:block">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 100 1200"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Ghost Guide Path */}
              <path
                d="M 50 20 Q 80 180, 50 320 T 50 620 T 50 920 T 50 1180"
                stroke="rgba(0, 240, 255, 0.12)"
                strokeWidth="2"
                strokeDasharray="6 4"
              />

              {/* Animated Journey Vector Path */}
              <path
                ref={pathRef}
                d="M 50 20 Q 80 180, 50 320 T 50 620 T 50 920 T 50 1180"
                stroke="#00F0FF"
                strokeWidth="3"
                className="drop-shadow-[0_0_12px_#00F0FF]"
              />

              {/* Waypoint Target Rings */}
              {[20, 320, 620, 920, 1180].map((y, idx) => (
                <g key={idx} transform={`translate(50, ${y})`}>
                  <circle r="7" fill="#0B0D17" stroke="#00F0FF" strokeWidth="2" />
                  <circle r="3" fill={idx <= activeNode ? '#FFB800' : '#00F0FF'} />
                </g>
              ))}

              {/* Dynamic Vehicle Vessel / V-Strom Marker */}
              <g
                transform={`translate(${vehiclePos.x}, ${vehiclePos.y}) rotate(${vehiclePos.angle + 90})`}
                className="transition-transform duration-75"
              >
                {/* Sonar Ping Ring */}
                <circle
                  r="14"
                  fill="none"
                  stroke="#00F0FF"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  className="animate-spin-slow origin-center"
                />

                {/* Stylized Vehicle Polygon */}
                <polygon
                  points="0,-9 7,7 0,3 -7,7"
                  fill="#FFB800"
                  stroke="#0B0D17"
                  strokeWidth="1.5"
                  className="drop-shadow-[0_0_8px_#FFB800]"
                />
              </g>
            </svg>
          </div>

          {/* Milestones Vertical List */}
          <div className="space-y-14 sm:space-y-24 relative z-20">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={m.id}
                  className={`flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8 sm:gap-16`}
                >
                  {/* Empty Spacer on opposite side to center the route */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Milestone Content Card */}
                  <div className="w-full sm:w-1/2">
                    <div
                      onMouseEnter={() => sound.playHover()}
                      className={`hud-bracket p-6 sm:p-8 rounded-2xl bg-obsidian-900/90 border transition-all duration-300 hover:scale-[1.01] ${
                        m.accent === 'gold'
                          ? 'border-gold-warning/40 hover:box-glow-gold'
                          : m.accent === 'coral'
                          ? 'border-coral-neon/40 hover:box-glow-coral'
                          : 'border-cyan-electric/40 hover:box-glow-cyan'
                      }`}
                      data-cursor="LOG"
                    >
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between gap-2 mb-4 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-7 h-7 rounded flex items-center justify-center font-bold ${
                              m.accent === 'gold'
                                ? 'bg-gold-warning/20 text-gold-warning border border-gold-warning/50'
                                : m.accent === 'coral'
                                ? 'bg-coral-neon/20 text-coral-neon border border-coral-neon/50'
                                : 'bg-cyan-electric/20 text-cyan-electric border border-cyan-electric/50'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </span>
                          <span className="text-neutral-400 text-[10px] tracking-widest uppercase">
                            {m.tag}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-neutral-500">{m.date}</span>
                      </div>

                      {/* Title & Institution */}
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">
                        {m.title}
                      </h3>
                      <div className="font-mono text-xs text-neutral-300 mb-3 flex items-center gap-2">
                        <span className="text-gold-warning">&bull;</span>
                        <span>{m.institution}</span>
                      </div>

                      {/* Coordinates */}
                      <div className="text-[11px] font-mono text-neutral-500 mb-4 flex items-center gap-1.5">
                        <Navigation className="w-3 h-3 text-cyan-electric" />
                        <span>{m.coordinates}</span>
                      </div>

                      {/* Description */}
                      <p className="text-neutral-400 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                        {m.description}
                      </p>

                      {/* Telemetry Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800">
                        {m.telemetry.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded bg-obsidian-950 border border-neutral-800 text-[10px] font-mono text-neutral-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

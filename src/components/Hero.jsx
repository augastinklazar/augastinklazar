import { useEffect, useRef } from 'react';
import { Shield, Terminal, ArrowDownRight, Zap } from 'lucide-react';
import anime from 'animejs';
import HeroTwoWireframe from './canvas/HeroTwoWireframe';
import { useTypewriter } from '../hooks/useAnime';
import { sound } from '../utils/audio';

export default function Hero() {
  const nameContainerRef = useRef(null);
  const badgesRef = useRef(null);

  const typedSubtitle = useTypewriter(
    'ETO Cadet // Embedded Systems Engineer // YIP 4.0 Innovator',
    35,
    500
  );

  useEffect(() => {
    // Anime.js Stagger Reveal for massive Syne typography letters
    if (nameContainerRef.current) {
      const letters = nameContainerRef.current.querySelectorAll('.hero-letter');
      anime({
        targets: letters,
        translateY: [60, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        rotateZ: [-8, 0],
        delay: anime.stagger(40, { start: 200 }),
        duration: 850,
        easing: 'easeOutBack',
      });
    }

    // Anime.js Stagger for tactical HUD badges & quick stats
    if (badgesRef.current) {
      const badges = badgesRef.current.querySelectorAll('.hud-element');
      anime({
        targets: badges,
        translateX: [-25, 0],
        opacity: [0, 1],
        delay: anime.stagger(70, { start: 600 }),
        duration: 750,
        easing: 'easeOutCubic',
      });
    }
  }, []);

  const firstName = 'AUGASTIN';
  const lastName = 'K LAZAR';

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-vantablack">
      
      {/* Background Blueprint Grid & Two.js Vector Canvas */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-70 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[650px] pointer-events-none opacity-45 z-0">
        <HeroTwoWireframe />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full relative z-10">
        
        {/* Terminal Header Telemetry Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 p-3 rounded-xl bg-charcoal/90 border border-ember/25 backdrop-blur-md font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ember"></span>
            </span>
            <span className="text-ember font-semibold tracking-wider uppercase">
              RADAR SYS // ONLINE 9.41 GHz
            </span>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <span className="text-steel hidden sm:inline">
              MOL LNG CADRE &bull; STCW III/6
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-steel">
            <span className="text-signal font-mono flex items-center gap-1 font-bold">
              <Zap className="w-3.5 h-3.5 text-signal" />
              6.6kV AUTOMATION
            </span>
            <span className="text-neutral-700">&bull;</span>
            <span className="text-steel-light font-mono">
              THRISSUR, KL [10.52°N, 76.21°E]
            </span>
          </div>
        </div>

        {/* 2-Column Terminal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Massive Staggered Syne Typography & Mission Specs */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Top Cadre Pill */}
            <div className="self-start inline-flex items-center gap-2 px-3 py-1 rounded bg-charcoal border border-ember/40 text-[11px] font-mono tracking-widest text-ember uppercase">
              <Shield className="w-3.5 h-3.5 text-ember" />
              <span>ELECTRO TECHNICAL OFFICER CADET</span>
            </div>

            {/* Massive Syne Header with Pure White & Neon Ember */}
            <div ref={nameContainerRef} className="space-y-1">
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.02] flex flex-wrap">
                <span className="mr-4 inline-flex overflow-hidden">
                  {firstName.split('').map((char, i) => (
                    <span
                      key={i}
                      className="hero-letter inline-block text-white hover:text-ember transition-colors"
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="inline-flex overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-ember via-signal to-white text-glow-ember">
                  {lastName.split('').map((char, i) => (
                    <span
                      key={i}
                      className="hero-letter inline-block hover:scale-105 transition-transform"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              </h1>
            </div>

            {/* Typewriter Subtitle */}
            <div className="h-8 flex items-center font-mono text-base sm:text-lg text-steel-light">
              <span className="text-ember mr-2 font-bold">&gt;</span>
              <span>{typedSubtitle}</span>
              <span className="inline-block w-2.5 h-4 ml-1.5 bg-ember animate-blink" />
            </div>

            {/* Humanized Bio Description in Neutral Steel (#9E9E9E) */}
            <p className="text-steel text-sm sm:text-base leading-relaxed max-w-xl font-sans">
              Engineering resilience across high-seas power grids at <strong className="text-white font-semibold">Mitsui O.S.K. Lines</strong>. Specialized in high-voltage 6.6kV distribution, power management systems (PMS), bare-metal firmware on STM32/FreeRTOS, and low-latency robotics. State winner of Kerala’s <strong className="text-signal font-semibold">YIP 4.0</strong> for autonomous telemetry systems.
            </p>

            {/* Quick Tactical Telemetry Badges in Matte Charcoal (#141414) */}
            <div ref={badgesRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
              <div className="hud-element p-3 rounded-lg bg-charcoal border border-neutral-800 hover:border-ember/50 transition-colors">
                <div className="text-ember font-bold text-base">MOL LNG</div>
                <div className="text-[10px] text-steel-dark uppercase mt-0.5">Cadre Fleet</div>
              </div>

              <div className="hud-element p-3 rounded-lg bg-charcoal border border-neutral-800 hover:border-signal/50 transition-colors">
                <div className="text-signal font-bold text-base">6.6 kV+</div>
                <div className="text-[10px] text-steel-dark uppercase mt-0.5">Switchboards</div>
              </div>

              <div className="hud-element p-3 rounded-lg bg-charcoal border border-neutral-800 hover:border-ember/50 transition-colors">
                <div className="text-white font-bold text-base">YIP 4.0</div>
                <div className="text-[10px] text-steel-dark uppercase mt-0.5">State Winner</div>
              </div>

              <div className="hud-element p-3 rounded-lg bg-charcoal border border-neutral-800 hover:border-signal/50 transition-colors">
                <div className="text-signal font-bold text-base">STM32</div>
                <div className="text-[10px] text-steel-dark uppercase mt-0.5">RTOS & Robotics</div>
              </div>
            </div>

            {/* Tactical Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#journey"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="px-6 py-3.5 rounded-lg bg-ember text-vantablack font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:box-glow-ember hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,109,0,0.35)]"
                data-cursor="TRAJECTORY"
              >
                <span>Navigate The Journey</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#skills-hud"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                className="px-6 py-3.5 rounded-lg bg-charcoal border border-neutral-800 hover:border-signal text-steel-light hover:text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-all"
                data-cursor="DATA HUD"
              >
                <Terminal className="w-4 h-4 text-signal" />
                <span>Launch Data HUD</span>
              </a>
            </div>

          </div>

          {/* Right Column: Tactical Blueprint Portrait with Vector Overlay */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              <div className="hud-bracket p-3 rounded-2xl bg-charcoal border border-ember/30 shadow-2xl relative">
                
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-vantablack border border-neutral-800 group">
                  <img
                    src="./assets/me1.png"
                    alt="Augastin K Lazar — Electro Technical Officer Cadet & Embedded Systems Engineer"
                    className="w-full h-full object-cover filter contrast-110 saturate-105 group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />

                  {/* Scanline overlay */}
                  <div className="scanlines absolute inset-0 opacity-40" />

                  {/* Blueprint Coordinates & Status Tag */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-vantablack/90 text-ember border border-ember/40">
                      ID // ETO-32-MOL
                    </span>
                    <span className="px-2 py-0.5 rounded bg-vantablack/90 text-signal border border-signal/40">
                      TARGET: LOCKED
                    </span>
                  </div>

                  {/* Bottom HUD Dossier Strip */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-lg bg-charcoal/95 border border-white/10 backdrop-blur-md font-mono text-xs space-y-1">
                    <div className="flex items-center justify-between text-white font-bold">
                      <span>AUGASTIN K LAZAR</span>
                      <span className="w-2 h-2 rounded-full bg-ember animate-pulse" />
                    </div>
                    <div className="text-[10px] text-steel flex items-center justify-between border-t border-neutral-800 pt-1">
                      <span>MITSUI O.S.K. LINES</span>
                      <span className="text-ember font-bold">LNG FLEETS</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-2 -left-2 text-[9px] font-mono text-ember/50">
                  SYS_RADAR.01
                </div>
                <div className="absolute -top-2 -right-2 text-[9px] font-mono text-signal/50">
                  REF: 6.6kV
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

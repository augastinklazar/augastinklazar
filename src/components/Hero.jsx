import { useEffect, useRef } from 'react';
import { ShieldCheck, ArrowDownRight, Terminal, Anchor, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { sound } from '../utils/audio';

export default function Hero() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered luxury reveal
      gsap.from('.hero-reveal', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from('.hero-badge', {
        scale: 0.85,
        opacity: 0,
        duration: 0.9,
        ease: 'back.out(1.7)',
        delay: 0.1,
      });

      gsap.from('.hero-portrait-wrap', {
        x: 40,
        opacity: 0,
        duration: 1.3,
        ease: 'power3.out',
        delay: 0.4,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 3D Card Tilt on Mouse Move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 16;
    const rotateY = (x / rect.width) * 16;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Creds */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Top Cadet Badge */}
            <div className="hero-badge inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card-gold self-start border border-gold/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
              </span>
              <span className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
                MOL · Electro Technical Officer Cadet
              </span>
              <span className="hidden sm:inline text-neutral-500 font-mono text-xs">|</span>
              <span className="hidden sm:inline font-mono text-[11px] text-neutral-400">LNG Carrier Fleets</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="hero-reveal font-display text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                AUGASTIN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-warm to-gold-light text-glow-gold">
                  K LAZAR
                </span>
              </h1>
              <p className="hero-reveal font-serif italic text-xl sm:text-2xl text-neutral-300 font-normal">
                High-Voltage Maritime Systems &middot; Firmware Engineer &middot; Educational Creator
              </p>
            </div>

            {/* Bio Synopsis */}
            <p className="hero-reveal text-base sm:text-lg text-neutral-400 font-sans max-w-xl leading-relaxed">
              Engineering resilience across high-seas power grids at <strong className="text-white font-medium">Mitsui O.S.K. Lines</strong>, bridging deep embedded robotics, IoT telemetry, and high-fidelity creative web applications from Thrissur, Kerala.
            </p>

            {/* Quick Stats Grid */}
            <div className="hero-reveal grid grid-cols-3 gap-4 pt-2 pb-4 border-y border-neutral-800/80 max-w-xl font-mono">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gold flex items-center gap-1">
                  <span>LNG</span>
                  <Anchor className="w-4 h-4 text-gold-rich" />
                </div>
                <div className="text-[11px] text-neutral-400 tracking-wider uppercase mt-1">
                  Sea-Service Specialization
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-white flex items-center gap-1">
                  <span>6.6kV+</span>
                  <Sparkles className="w-4 h-4 text-amber-warm" />
                </div>
                <div className="text-[11px] text-neutral-400 tracking-wider uppercase mt-1">
                  High-Voltage Automation
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold text-marine-cyan flex items-center gap-1">
                  <span>Full-Stack</span>
                  <Terminal className="w-4 h-4 text-marine-cyan" />
                </div>
                <div className="text-[11px] text-neutral-400 tracking-wider uppercase mt-1">
                  Firmware & 3D Web
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="hero-reveal flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gold to-amber-warm text-obsidian-950 font-mono font-bold text-sm tracking-wider uppercase flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,193,88,0.45)]"
                data-cursor-text="DISCOVER"
              >
                <span>Explore Technical Works</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-6 py-3.5 rounded-full glass-card border border-neutral-700 hover:border-gold/60 text-neutral-200 hover:text-white font-mono text-sm tracking-wider uppercase transition-all duration-300"
                data-cursor-text="EXPAND"
              >
                About & Discipline
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Luxury Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="hero-portrait-wrap relative w-full max-w-md"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Backlight Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-warm/30 via-gold/20 to-transparent blur-3xl opacity-70 -z-10 rounded-3xl" />

              {/* 3D Tilt Card Frame */}
              <div
                ref={cardRef}
                className="relative rounded-2xl p-3 bg-gradient-to-b from-gold/30 via-neutral-800/40 to-obsidian-900 border border-gold/40 shadow-2xl transition-transform duration-200 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Photo Container */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-obsidian-900 group">
                  <img
                    src="./assets/me1.png"
                    alt="Augastin K Lazar — Electro Technical Officer Cadet & Creative Technologist"
                    className="w-full h-full object-cover object-center filter saturate-105 contrast-105 transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Editorial Film Grain & Sunset Gradient Wash */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />

                  {/* Overlaid Maritime Cadre Badge */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                    <span className="px-3 py-1 rounded-md bg-obsidian-950/80 backdrop-blur-md border border-gold/40 text-[10px] font-mono tracking-widest text-gold uppercase flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                      MOL CADET REGISTRY
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-obsidian-950/80 backdrop-blur-md border border-neutral-700 text-[10px] font-mono tracking-widest text-neutral-400">
                      KL-08 // IN
                    </span>
                  </div>

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card border border-white/10 z-10 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-white text-base tracking-wide">
                        Augastin K Lazar
                      </h3>
                      <span className="w-2 h-2 rounded-full bg-marine-cyan animate-pulse" />
                    </div>
                    <p className="text-[11px] font-mono text-neutral-400">
                      Thrissur, Kerala &bull; Mitsui O.S.K. Lines
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-gold border-t border-white/5">
                      <span>AUTOMATION & FIRMWARE</span>
                      <span>ACTIVE HARBOR</span>
                    </div>
                  </div>
                </div>

                {/* Subtle outer tech marks */}
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-gold pointer-events-none" />
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-gold pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

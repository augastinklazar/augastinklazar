import { useRef, useEffect } from 'react';
import { Cpu, Zap, Radio, Globe, Navigation, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sound } from '../utils/audio';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-stagger', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 bg-obsidian-900/60 border-t border-b border-neutral-800/60 overflow-hidden"
    >
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-amber-warm/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-gold font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span>01 // THE MANIFESTO & DISCIPLINE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Engineering Across <br />
              <span className="font-serif italic font-normal text-gold">High Seas & Silicon</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 max-w-xs uppercase tracking-wider">
            Thrissur, Kerala &bull; Mitsui O.S.K. Lines Sea-Service &bull; Embedded Systems &bull; Martial Arts
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait me2.png in Architectural Frame */}
          <div className="lg:col-span-5 about-stagger">
            <div className="relative group">
              {/* Backing Frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-gold/20 via-transparent to-amber-warm/20 border border-gold/30 blur-sm group-hover:blur-md transition-all duration-500" />
              
              <div className="relative rounded-xl overflow-hidden glass-card border border-gold/40 shadow-2xl">
                <img
                  src="./assets/me2.png"
                  alt="Augastin K Lazar — Concrete and Sunlight Portrait"
                  className="w-full h-auto object-cover filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Overlaid Editorial Watermark */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-transparent">
                  <div className="font-mono text-[10px] text-gold tracking-widest uppercase mb-1">
                    PORTFOLIO EDITION // 2026
                  </div>
                  <div className="font-serif italic text-lg text-white">
                    "Precision in high-voltage is not an option — it is survival."
                  </div>
                </div>
              </div>

              {/* Technical coordinates badge */}
              <div className="absolute -top-4 -right-4 bg-obsidian-950 px-3 py-1.5 rounded-lg border border-gold/40 text-[10px] font-mono text-gold-light shadow-xl flex items-center gap-1.5">
                <Navigation className="w-3 h-3 text-gold" />
                <span>MOL FLEET / LNG</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-8 about-stagger">
            
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl text-white font-bold tracking-wide">
                Where High-Voltage Maritime Power Meets Precision Code.
              </h3>
              <p className="text-neutral-300 leading-relaxed text-base sm:text-lg">
                I am <strong className="text-white">Augastin K Lazar</strong>, an Electro Technical Officer Cadet (ETO Cadet) at <strong className="text-gold">Mitsui O.S.K. Lines (MOL)</strong>, hailing from Thrissur, Kerala. My professional world revolves around keeping advanced LNG carriers powered, automated, and safe across international waters.
              </p>
              <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                Beyond the shipboard high-voltage switchboards, power management systems (PMS), and cryogenic sensor loops, I am an obsessive hardware builder. I engineer embedded firmware, design custom IoT solutions, explore robotics, and build rich, interactive 3D web applications.
              </p>
            </div>

            {/* Core 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-5 rounded-xl glass-card border border-neutral-800 hover:border-gold/50 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-display font-bold text-white text-base mb-1">
                  MOL Maritime Sea-Service
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Marine electrical systems maintenance, generator synchronization, automation troubleshooting, and sea-time progression on state-of-the-art LNG carriers.
                </p>
              </div>

              <div className="p-5 rounded-xl glass-card border border-neutral-800 hover:border-gold/50 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-marine-cyan/10 border border-marine-cyan/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5 text-marine-cyan" />
                </div>
                <h4 className="font-display font-bold text-white text-base mb-1">
                  Embedded & Robotics
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Low-level C/C++ firmware, STM32 & ESP32 RTOS implementations, sensor integration, actuator control loops, and autonomous robotic prototypes.
                </p>
              </div>

              <div className="p-5 rounded-xl glass-card border border-neutral-800 hover:border-gold/50 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-amber-warm/10 border border-amber-warm/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Radio className="w-5 h-5 text-amber-warm" />
                </div>
                <h4 className="font-display font-bold text-white text-base mb-1">
                  Educational Content Creation
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Translating complex engineering, electronics, and maritime technical concepts into engaging, high-production educational video and visual guides.
                </p>
              </div>

              <div className="p-5 rounded-xl glass-card border border-neutral-800 hover:border-gold/50 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="font-display font-bold text-white text-base mb-1">
                  Martial Arts & Touring
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Cultivating unwavering focus and physical fortitude through martial arts, paired with the freedom of long-distance motorcycle road trips across varied terrain.
                </p>
              </div>

            </div>

            {/* Bottom Signature Line */}
            <div className="flex items-center gap-6 pt-4 border-t border-neutral-800 font-mono text-xs text-neutral-400">
              <span className="flex items-center gap-2 text-gold">
                <Globe className="w-4 h-4" />
                BASE: THRISSUR, KERALA
              </span>
              <span>&bull;</span>
              <span>LANGUAGE: ENGLISH</span>
              <span>&bull;</span>
              <span className="text-marine-cyan">VESSEL FLEET: LNG</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

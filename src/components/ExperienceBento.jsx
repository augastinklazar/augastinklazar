import { Compass, BookOpen, Bike, Award, Sparkles, MapPin } from 'lucide-react';
import { sound } from '../utils/audio';

export default function ExperienceBento() {
  return (
    <section id="expeditions" className="relative py-28 bg-obsidian-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-gold font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span>05 // LIFE BEYOND THE TERMINAL</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Pillars of Discipline, <br />
              <span className="font-serif italic font-normal text-gold">Media & Exploration</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-neutral-400 max-w-xs uppercase tracking-wider">
            Educational content workflows, long-haul motorcycle touring, and martial arts precision.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Educational Studio & Content Creation (Features Gemini_Generated_Image_.png) */}
          <div
            onMouseEnter={() => sound.playHover()}
            className="md:col-span-8 group relative rounded-2xl overflow-hidden glass-card border border-neutral-800 hover:border-gold/60 transition-all duration-500 flex flex-col justify-between"
            data-cursor-text="STUDIO"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
              {/* Image side */}
              <div className="sm:col-span-6 relative min-h-[300px] overflow-hidden">
                <img
                  src="./assets/Gemini_Generated_Image_.png"
                  alt="Augastin Lazar — Educational Content Studio and Study Space"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-obsidian-950/90 sm:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent sm:hidden block" />
              </div>

              {/* Text side */}
              <div className="sm:col-span-6 p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-gold font-mono text-xs tracking-wider uppercase mb-2">
                    <BookOpen className="w-4 h-4 text-gold" />
                    <span>EDUCATIONAL CREATOR LAB</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-gold transition-colors">
                    Empowering The Next Wave of Engineers
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    Engineering should be accessible, cinematic, and deeply practical. Through high-production educational videos and visual breakdowns, I dissect electro-technical systems, embedded microcontrollers, and marine machinery.
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-neutral-800">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-300">
                    <span>TOPICS</span>
                    <span className="text-gold">Marine Automation · Microcontrollers · High Voltage</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-300">
                    <span>WORKFLOW</span>
                    <span className="text-marine-cyan">Scripting &bull; 3D Visuals &bull; Community</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Motorcycle Touring & Road Trips */}
          <div
            onMouseEnter={() => sound.playHover()}
            className="md:col-span-4 p-8 rounded-2xl glass-card border border-neutral-800 hover:border-gold/60 transition-all duration-500 flex flex-col justify-between group"
            data-cursor-text="EXPEDITION"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-warm/10 border border-amber-warm/30 flex items-center justify-center text-amber-warm mb-5 group-hover:scale-110 transition-transform">
                <Bike className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-amber-warm uppercase tracking-wider block mb-1">
                OPEN ROADS // KERALA & BEYOND
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-gold transition-colors">
                Motorcycle Touring & Road Trips
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Riding across mountain ghats, coastal corridors, and uncharted state highways. Solo touring teaches mechanical self-reliance, route adaptation, and intense presence on the road.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-800 font-mono text-xs text-neutral-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Western Ghats · Coastal Trails · High Passes</span>
            </div>
          </div>

          {/* Card 3: Martial Arts Discipline */}
          <div
            onMouseEnter={() => sound.playHover()}
            className="md:col-span-4 p-8 rounded-2xl glass-card border border-neutral-800 hover:border-gold/60 transition-all duration-500 flex flex-col justify-between group"
            data-cursor-text="MARTIAL"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-purple-400 uppercase tracking-wider block mb-1">
                COMBAT & MINDSET
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-gold transition-colors">
                Martial Arts Practice
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Conditioning both mind and body. Martial arts instills laser focus, situational awareness, and calmness under pressure — traits essential when troubleshooting live 6.6kV switchboards.
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-800 font-mono text-xs text-neutral-400 flex items-center justify-between">
              <span>PRINCIPLE</span>
              <span className="text-white font-serif italic">Balance, Reflex & Fortitude</span>
            </div>
          </div>

          {/* Card 4: Global Sea-Service Horizon */}
          <div
            onMouseEnter={() => sound.playHover()}
            className="md:col-span-8 p-8 rounded-2xl glass-card-gold border border-gold/30 hover:border-gold/60 transition-all duration-500 flex flex-col justify-between group"
            data-cursor-text="MOL HORIZON"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="font-mono text-xs text-gold uppercase tracking-wider block mb-1">
                  MITSUI O.S.K. LINES CADET VISION
                </span>
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-gold transition-colors">
                  Navigating The World's Critical Energy Corridors
                </h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                <Compass className="w-6 h-6 animate-spin-slow" />
              </div>
            </div>

            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              Serving aboard modern LNG carriers requires continuous vigilance over automated propulsion, cryogenic boiling point safety, and high-voltage synchronization. Every sea voyage reinforces a global mindset and world-class maritime standards.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gold/20 font-mono text-xs">
              <div>
                <div className="text-neutral-500 text-[10px] uppercase">OPERATING REGION</div>
                <div className="text-white font-bold mt-0.5">Global High Seas</div>
              </div>
              <div>
                <div className="text-neutral-500 text-[10px] uppercase">PRIMARY CARGO</div>
                <div className="text-gold font-bold mt-0.5">Liquefied Natural Gas</div>
              </div>
              <div>
                <div className="text-neutral-500 text-[10px] uppercase">HOME ANCHOR</div>
                <div className="text-white font-bold mt-0.5">Thrissur, Kerala</div>
              </div>
              <div>
                <div className="text-neutral-500 text-[10px] uppercase">STATUS</div>
                <div className="text-marine-cyan font-bold mt-0.5">Active Cadre</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

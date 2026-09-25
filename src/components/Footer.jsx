import { ArrowUp, Compass, Heart } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-14 bg-obsidian-950 border-t border-neutral-800 text-neutral-400 font-mono text-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="font-display font-bold text-white text-sm tracking-widest uppercase">
              AUGASTIN K LAZAR
            </div>
            <div className="text-[10px] text-neutral-500 tracking-wider">
              ETO CADET // MITSUI O.S.K. LINES &bull; THRISSUR, KERALA
            </div>
          </div>
        </div>

        {/* Center Technical Coordinates */}
        <div className="text-center space-y-1">
          <div className="text-[11px] text-neutral-300">
            LAT 10.5276° N &bull; LON 76.2144° E
          </div>
          <div className="text-[10px] text-neutral-500">
            ARCHITECTED WITH THREE.JS &bull; REACT &bull; GSAP &bull; ANIME.JS
          </div>
        </div>

        {/* Right Back to Top & Copyright */}
        <div className="flex items-center gap-6">
          <span className="text-[11px] text-neutral-500">
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
          </span>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            className="w-10 h-10 rounded-full bg-obsidian-900 border border-neutral-700 hover:border-gold hover:text-gold flex items-center justify-center text-neutral-300 transition-all hover:scale-110 shadow-lg"
            aria-label="Scroll to top"
            data-cursor-text="TOP"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Anchor } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const active = sound.toggleSound();
    setIsAudioActive(active);
  };

  const navLinks = [
    { label: '// JOURNEY', href: '#journey' },
    { label: '// SCHEMATIC', href: '#experience' },
    { label: '// 2.5D_STACK', href: '#exploded-blueprint' },
    { label: '// RADAR_HUD', href: '#skills-hud' },
    { label: '// DOSSIERS', href: '#projects' },
    { label: '// TERMINAL', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 font-mono text-xs ${
        isScrolled
          ? 'bg-vantablack/95 backdrop-blur-md border-b border-ember/25 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.9)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Left Branding / Call-Sign in Pure White with Neon Ember */}
        <a
          href="#"
          onClick={() => sound.playClick()}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-2.5 text-white hover:text-ember transition-colors group"
          data-cursor="HOME"
        >
          <div className="w-8 h-8 rounded bg-charcoal border border-ember/40 flex items-center justify-center text-ember group-hover:scale-105 transition-transform shadow-[0_0_10px_rgba(255,109,0,0.2)]">
            <Anchor className="w-4 h-4" />
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-sm tracking-wider text-white group-hover:text-ember">
              AUGASTIN K LAZAR
            </span>
            <div className="text-[10px] text-steel font-mono">
              MOL CADRE &bull; ETO-32
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="text-steel hover:text-ember tracking-wider transition-colors hover:text-glow-ember py-1"
              data-cursor="NAV"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Status & Audio Synthesizer Toggle */}
        <div className="flex items-center gap-3">
          
          {/* Sound Toggle Button */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => sound.playHover()}
            className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-2 transition-all ${
              isAudioActive
                ? 'bg-charcoal border-ember text-ember box-glow-ember'
                : 'bg-charcoal border-neutral-800 text-steel hover:border-neutral-700'
            }`}
            data-cursor="AUDIO"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-ember animate-pulse" />
                <span className="hidden sm:inline">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-steel-dark" />
                <span className="hidden sm:inline">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Quick Terminal Link in Neon Ember */}
          <a
            href="#contact"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="px-3.5 py-1.5 rounded-lg bg-ember text-vantablack font-bold hover:scale-105 transition-all text-xs tracking-wider flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,109,0,0.35)]"
            data-cursor="DISPATCH"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">INIT COMM</span>
          </a>

        </div>

      </div>
    </header>
  );
}

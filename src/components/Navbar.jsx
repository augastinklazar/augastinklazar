import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Shield, Terminal, Compass, Anchor } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const active = sound.toggleSound();
    setIsAudioActive(active);
  };

  const navLinks = [
    { label: '// JOURNEY', href: '#journey' },
    { label: '// RADAR_HUD', href: '#skills-hud' },
    { label: '// BLUEPRINT', href: '#specs' },
    { label: '// DOSSIERS', href: '#projects' },
    { label: '// TERMINAL', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-mono text-xs ${
        isScrolled
          ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-cyan-electric/25 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Left Branding / Call-Sign */}
        <a
          href="#"
          onClick={() => sound.playClick()}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-2.5 text-white hover:text-cyan-electric transition-colors group"
          data-cursor="HOME"
        >
          <div className="w-8 h-8 rounded bg-cyan-electric/10 border border-cyan-electric/40 flex items-center justify-center text-cyan-electric group-hover:scale-105 transition-transform">
            <Anchor className="w-4 h-4" />
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-sm tracking-wider text-white group-hover:text-cyan-electric">
              AUGASTIN K LAZAR
            </span>
            <div className="text-[10px] text-neutral-400 font-mono">
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
              className="text-neutral-400 hover:text-cyan-electric tracking-wider transition-colors hover:text-glow-cyan py-1"
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
                ? 'bg-cyan-electric/15 border-cyan-electric text-cyan-electric box-glow-cyan'
                : 'bg-obsidian-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
            }`}
            data-cursor="AUDIO"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-electric animate-pulse" />
                <span className="hidden sm:inline">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
                <span className="hidden sm:inline">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Quick Terminal Link */}
          <a
            href="#contact"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="px-3.5 py-1.5 rounded-lg bg-gold-warning text-obsidian-950 font-bold hover:scale-105 transition-all text-xs tracking-wider flex items-center gap-1.5"
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

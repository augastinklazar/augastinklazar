import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Compass, Radio } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const active = sound.toggleSound();
    setIsAudioActive(active);
  };

  const navLinks = [
    { name: 'Philosophy', href: '#about' },
    { name: 'Maritime & Tech', href: '#sea-service' },
    { name: 'Projects', href: '#projects' },
    { name: 'Core Matrix', href: '#skills' },
    { name: 'Expeditions', href: '#expeditions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-obsidian-950/80 backdrop-blur-xl border-b border-gold/15 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="flex items-center gap-3 group"
          data-cursor-text="HOME"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-obsidian-900 border border-gold/40 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 shadow-[0_0_15px_rgba(229,193,88,0.2)]">
            <Compass className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-[0.2em] text-white group-hover:text-gold transition-colors">
              AUGASTIN K LAZAR
            </span>
            <span className="font-mono text-[9px] text-neutral-400 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-marine-cyan animate-pulse" />
              ETO CADET // MOL
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="text-neutral-400 hover:text-gold transition-colors relative py-1 group"
              data-cursor-text="GO"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold to-amber-warm transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-4">
          {/* Sound Synthesizer Toggle */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={() => sound.playHover()}
            title={isAudioActive ? 'Mute Soundscapes' : 'Enable Interactive Soundscapes'}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono tracking-wider transition-all duration-300 ${
              isAudioActive
                ? 'bg-gold/15 border-gold text-gold shadow-[0_0_15px_rgba(229,193,88,0.3)]'
                : 'bg-obsidian-900/60 border-neutral-700/60 text-neutral-400 hover:border-neutral-500 hover:text-white'
            }`}
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-gold animate-bounce" />
                <span className="hidden sm:inline">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">SOUND</span>
              </>
            )}
          </button>

          {/* Quick CTA */}
          <a
            href="#contact"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-gold to-amber-warm text-obsidian-950 text-xs font-bold font-mono tracking-wider uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(229,193,88,0.5)]"
            data-cursor-text="INQUIRE"
          >
            <Radio className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-950/95 backdrop-blur-2xl border-b border-gold/20 px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
              }}
              className="text-base font-mono tracking-widest text-neutral-300 hover:text-gold uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(false);
            }}
            className="mt-2 text-center py-3 rounded-full bg-gold text-obsidian-950 font-bold font-mono text-sm uppercase tracking-wider"
          >
            Initiate Contact
          </a>
        </div>
      )}
    </header>
  );
}

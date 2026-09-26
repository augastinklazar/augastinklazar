import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Anchor, Menu, X } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { label: '// BLUEPRINT', href: '#specs' },
    { label: '// DOSSIERS', href: '#projects' },
    { label: '>_ TERMINAL', href: '#terminal', isTerminal: true },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    sound.playClick();
    setIsMobileMenuOpen(false);

    if (href === '#' || href === '#hero') {
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 1.0 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -70, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 font-mono text-xs ${
        isScrolled
          ? 'bg-vantablack/95 backdrop-blur-md border-b border-ember/25 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.9)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Left Branding / Call-Sign in Pure White with Neon Ember */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
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
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((link) => {
            if (link.isTerminal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => sound.playHover()}
                  className="group relative px-2.5 py-1 rounded bg-ember/15 border border-ember/70 text-ember hover:bg-ember hover:text-vantablack tracking-wider transition-all shadow-[0_0_14px_rgba(255,109,0,0.35)] flex items-center gap-1.5"
                  data-cursor="TERMINAL"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
                  </span>
                  <span className="font-bold text-glow-ember group-hover:text-vantablack">{link.label}</span>
                  <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-signal/20 text-signal border border-signal/40 group-hover:border-vantablack group-hover:text-vantablack font-semibold">
                    TTY
                  </span>
                </a>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => sound.playHover()}
                className="text-steel hover:text-ember tracking-wider transition-colors hover:text-glow-ember py-1"
                data-cursor="NAV"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Status & Actions */}
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

          {/* Quick Terminal Launch Button in Neon Ember */}
          <a
            href="#terminal"
            onClick={(e) => handleNavClick(e, '#terminal')}
            onMouseEnter={() => sound.playHover()}
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-ember to-[#FF8A00] text-vantablack font-bold hover:scale-105 transition-all text-xs tracking-wider flex items-center gap-2 shadow-[0_0_18px_rgba(255,109,0,0.45)]"
            data-cursor="DISPATCH"
          >
            <Terminal className="w-3.5 h-3.5 text-vantablack" />
            <span className="hidden sm:inline uppercase tracking-wider font-extrabold">EXEC TTY</span>
          </a>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg bg-charcoal border border-neutral-800 text-steel hover:text-white"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4 text-ember" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>

      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-vantablack/98 border-b border-neutral-800 px-6 py-4 space-y-3 font-mono text-xs backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block py-2 px-3 rounded transition-colors ${
                link.isTerminal
                  ? 'bg-ember/15 border border-ember/60 text-ember font-bold flex items-center justify-between'
                  : 'text-steel hover:text-white hover:bg-charcoal'
              }`}
            >
              <span>{link.label}</span>
              {link.isTerminal && (
                <span className="text-[10px] text-signal font-semibold">[LIVE]</span>
              )}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

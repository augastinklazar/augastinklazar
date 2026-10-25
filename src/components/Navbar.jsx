import { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Activity } from 'lucide-react';
import { soundSynth } from '../utils/audioSynth';

export default function Navbar({ onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Simple FPS meter for Awwwards telemetry
    let frameCount = 0;
    let lastTime = performance.now();
    let animId;

    const measureFps = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.min(Math.round((frameCount * 1000) / (now - lastTime)), 60));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(measureFps);
    };
    animId = requestAnimationFrame(measureFps);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  const toggleSound = () => {
    const nextState = soundSynth.toggle();
    setIsAudioOn(nextState);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-[#1e1e22]/85 backdrop-blur-md border-b border-[#f0f2f0]/10 shadow-lg shadow-black/25'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="w-[92vw] max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-[#f0f2f0] no-underline font-medium text-sm tracking-tight transition-colors duration-200"
        >
          <span className="w-2 h-2 rounded-full bg-[#f4ce15] group-hover:scale-125 transition-transform duration-300" />
          <span className="font-sans font-semibold tracking-wider uppercase text-xs sm:text-sm">
            Augastin K Lazar
          </span>
        </a>

        {/* Center Telemetry & Performance Badge */}
        <div className="hidden lg:flex items-center gap-3 px-3 py-1 rounded-full bg-[#26262b]/80 border border-[#f0f2f0]/10 text-xs text-[#8b8f8c]">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#379777] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#379777]"></span>
            </span>
            <span className="text-[#f0f2f0] font-mono text-[11px]">
              ETO Cadet · MOL LNG Fleet
            </span>
          </div>
          <span className="text-[#8b8f8c]/40 font-mono">|</span>
          <div className="flex items-center gap-1 text-[10px] font-mono text-[#379777]">
            <Activity className="w-3 h-3 text-[#379777]" />
            <span>{fps} FPS · 16ms</span>
          </div>
        </div>

        {/* Right Navigation, Sound Toggle & Terminal Action */}
        <nav className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm">
          <a
            href="#statement"
            className="text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors duration-200 uppercase tracking-widest text-[11px] hidden sm:inline"
          >
            Vision
          </a>
          <a
            href="#fleet"
            className="text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors duration-200 uppercase tracking-widest text-[11px] hidden sm:inline"
          >
            Fleet
          </a>
          <a
            href="#origins"
            className="text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors duration-200 uppercase tracking-widest text-[11px] hidden md:inline"
          >
            Origins
          </a>
          <a
            href="#works"
            className="text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors duration-200 uppercase tracking-widest text-[11px]"
          >
            Works
          </a>
          <a
            href="#capabilities"
            className="text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors duration-200 uppercase tracking-widest text-[11px] hidden lg:inline"
          >
            Systems
          </a>
          <a
            href="#contact"
            className="text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors duration-200 uppercase tracking-widest text-[11px]"
          >
            Contact
          </a>

          {/* Web Audio Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            aria-label={isAudioOn ? 'Mute sound synthesis' : 'Enable ambient sound synthesis'}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border font-mono text-xs transition-all duration-200 ${
              isAudioOn
                ? 'bg-[#f4ce15]/10 border-[#f4ce15] text-[#f4ce15]'
                : 'bg-[#26262b] border-[#f0f2f0]/15 text-[#8b8f8c] hover:text-[#f0f2f0]'
            }`}
          >
            {isAudioOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#f4ce15]" />
                <span className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-3 bg-[#f4ce15] animate-pulse" />
                  <span className="w-0.5 h-1.5 bg-[#f4ce15] animate-pulse delay-75" />
                  <span className="w-0.5 h-2 bg-[#f4ce15] animate-pulse delay-150" />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[10px]">SOUND</span>
              </>
            )}
          </button>

          {/* Terminal Launcher Button */}
          <button
            onClick={onOpenTerminal}
            aria-label="Open Interactive CLI Terminal"
            className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-[#26262b] hover:bg-[#2f2f35] border border-[#f0f2f0]/15 hover:border-[#f4ce15]/50 text-[#f4ce15] font-mono text-xs transition-all duration-200 group"
          >
            <Terminal className="w-3.5 h-3.5 text-[#f4ce15] group-hover:rotate-12 transition-transform duration-200" />
            <span className="hidden sm:inline text-[11px] font-semibold tracking-wider">CLI</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

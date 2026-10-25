import { useEffect, useState } from 'react';
import { Anchor, ArrowDown, Cpu, Zap } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const name = "Augastin K Lazar";
  const role = "Electro Technical Officer & Creative Technologist";

  return (
    <section
      id="hero"
      className="relative z-10 min-h-[100svh] w-[90vw] max-w-7xl mx-auto flex flex-col justify-between pt-28 pb-12 select-none"
    >
      {/* Top telemetry line */}
      <div className="flex items-center justify-between text-[#8b8f8c] font-mono text-[11px] tracking-widest uppercase border-b border-[#f0f2f0]/10 pb-4">
        <div className="flex items-center gap-2">
          <Anchor className="w-3.5 h-3.5 text-[#379777]" />
          <span>MOL LNG Carrier Fleet · STCW III/6 Standard</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span>10.5276° N, 76.2144° E</span>
          <span className="text-[#f4ce15]">⚓</span>
          <span>Thrissur / High Seas</span>
        </div>
      </div>

      {/* Main Dramatic Editorial Centerpiece */}
      <div className="my-auto py-12 flex flex-col gap-6">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#f4ce15] flex items-center gap-2">
          <span className="w-6 h-[1px] bg-[#f4ce15]" />
          <span>High-Voltage Maritime Systems &bull; Embedded Firmware</span>
        </p>

        {/* Big Staggered Blur Title */}
        <h1 
          className="t-110 font-sans font-medium text-[#f0f2f0] tracking-tight leading-[0.95] max-w-5xl"
          aria-label={name}
        >
          {name.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block transition-all duration-700 ease-out"
              style={{
                animation: mounted
                  ? `blurIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${0.1 + index * 0.035}s forwards`
                  : 'none',
                opacity: mounted ? undefined : 0,
                filter: mounted ? undefined : 'blur(12px)',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Editorial Subtitle with Blur Reveal */}
        <p
          className="t-30 font-sans text-[#8b8f8c] font-normal max-w-3xl leading-relaxed transition-all duration-1000 ease-out"
          style={{
            animation: mounted
              ? 'blurIn 1.3s cubic-bezier(0.22, 1, 0.36, 1) 0.65s forwards'
              : 'none',
            opacity: mounted ? undefined : 0,
            filter: mounted ? undefined : 'blur(12px)',
          }}
        >
          {role}
        </p>

        {/* Feature Tags Pill Row */}
        <div 
          className="flex flex-wrap items-center gap-2.5 pt-2 transition-all duration-1000"
          style={{
            animation: mounted
              ? 'blurIn 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.9s forwards'
              : 'none',
            opacity: mounted ? undefined : 0,
            filter: mounted ? undefined : 'blur(12px)',
          }}
        >
          <span className="px-3 py-1 rounded-full bg-[#26262b] border border-[#f0f2f0]/10 text-xs font-mono text-[#f0f2f0]">
            6.6kV Switchboard Synchronization
          </span>
          <span className="px-3 py-1 rounded-full bg-[#26262b] border border-[#f0f2f0]/10 text-xs font-mono text-[#f4ce15]">
            STM32 Bare-Metal & FreeRTOS
          </span>
          <span className="px-3 py-1 rounded-full bg-[#26262b] border border-[#f0f2f0]/10 text-xs font-mono text-[#379777]">
            WebGL Spatial Digital Twins
          </span>
        </div>
      </div>

      {/* Bottom Editorial Bar with Scroll Prompt */}
      <div className="flex items-end justify-between border-t border-[#f0f2f0]/10 pt-6 text-[#8b8f8c]">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-widest text-[#f0f2f0] font-mono">
            Active Status
          </span>
          <span className="text-xs font-sans text-[#8b8f8c]">
            Navigating energy corridors · Engineering open-source hardware
          </span>
        </div>

        <a
          href="#statement"
          className="group flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-[#f0f2f0] hover:text-[#f4ce15] transition-colors"
        >
          <span>Scroll to explore</span>
          <div className="w-8 h-8 rounded-full border border-[#f0f2f0]/20 flex items-center justify-center group-hover:border-[#f4ce15] transition-colors">
            <ArrowDown className="w-3.5 h-3.5 text-[#f4ce15] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}

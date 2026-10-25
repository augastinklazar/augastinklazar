import { useEffect, useRef, useState } from 'react';
import { Compass, Radio, Shield, Waves } from 'lucide-react';

export default function GlobalFleet() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const headline = "Sailing Worldwide";
  const subheadline = "MOL International LNG Fleet";

  return (
    <section
      id="fleet"
      ref={sectionRef}
      className="relative z-10 min-h-[100svh] w-[90vw] max-w-7xl mx-auto flex flex-col justify-center py-20 select-none"
    >
      <div className="max-w-2xl flex flex-col gap-6">
        <div className="flex items-center gap-2 text-[#f4ce15] font-mono text-xs tracking-widest uppercase">
          <Waves className="w-4 h-4 animate-pulse text-[#379777]" />
          <span>Global Maritime Energy Corridors</span>
        </div>

        {/* Large Editorial Title */}
        <h2 className="t-85 font-sans font-medium text-[#f0f2f0] leading-none tracking-tight">
          <span className="block text-balance">
            {headline.split('').map((char, i) => (
              <span
                key={i}
                className="inline-block transition-all duration-700 ease-out"
                style={{
                  filter: isVisible ? 'blur(0px)' : 'blur(10px)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(14px)',
                  transitionDelay: `${i * 35}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
          <span 
            className="block t-30 text-[#8b8f8c] font-normal mt-3 transition-all duration-1000 ease-out"
            style={{
              filter: isVisible ? 'blur(0px)' : 'blur(10px)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '400ms',
            }}
          >
            {subheadline}
          </span>
        </h2>

        {/* Narrative Copy */}
        <p 
          className="t-20 text-[#8b8f8c] font-sans leading-relaxed text-balance transition-all duration-1000 ease-out"
          style={{
            filter: isVisible ? 'blur(0px)' : 'blur(10px)',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '600ms',
          }}
        >
          Operating aboard international Liquefied Natural Gas (LNG) carriers under Mitsui O.S.K. Lines (MOL). 
          Directly monitoring 6.6kV vacuum circuit breakers (VCB), generator synchronization, cryogenic boil-off gas (BOG) compressors, 
          and emergency blackout restoration logic across global oceans.
        </p>

        {/* Telemetry Chips */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#f0f2f0]/10 transition-opacity duration-1000 delay-700"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <div className="bg-[#26262b]/60 border border-[#f0f2f0]/10 rounded-lg p-3">
            <span className="text-[#8b8f8c] font-mono text-[10px] block uppercase tracking-wider">
              Voltage Class
            </span>
            <span className="text-[#f0f2f0] font-mono text-sm font-semibold">
              6.6 kV / 440 V
            </span>
          </div>

          <div className="bg-[#26262b]/60 border border-[#f0f2f0]/10 rounded-lg p-3">
            <span className="text-[#8b8f8c] font-mono text-[10px] block uppercase tracking-wider">
              Regulatory Grade
            </span>
            <span className="text-[#379777] font-mono text-sm font-semibold">
              STCW III/6 ETO
            </span>
          </div>

          <div className="bg-[#26262b]/60 border border-[#f0f2f0]/10 rounded-lg p-3 col-span-2 sm:col-span-1">
            <span className="text-[#8b8f8c] font-mono text-[10px] block uppercase tracking-wider">
              Safety Interlocks
            </span>
            <span className="text-[#f4ce15] font-mono text-sm font-semibold">
              Ex-d / Ex-ia Cryo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

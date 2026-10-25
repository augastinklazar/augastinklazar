import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Cpu, Terminal, Wrench } from 'lucide-react';
import RisoPortraitReveal from './RisoPortraitReveal';

export default function Origins() {
  const [isVisible, setIsVisible] = useState(false);
  const [istTime, setIstTime] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Live IST Clock
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setIstTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const headline = "Based in Thrissur, Kerala";

  return (
    <section
      id="origins"
      ref={sectionRef}
      className="relative z-10 min-h-[100svh] w-[90vw] max-w-7xl mx-auto flex flex-col justify-center py-24 select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
        {/* Left Column: Vermillion Riso Ink Interactive Portrait Reveal */}
        <div 
          className="lg:col-span-5 flex justify-center lg:justify-start transition-all duration-1000 ease-out"
          style={{
            filter: isVisible ? 'blur(0px)' : 'blur(10px)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <RisoPortraitReveal imageSrc="/me1.png" />
        </div>

        {/* Right Column: Editorial Copy & Telemetry */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="flex items-center gap-2 text-[#379777] font-mono text-xs tracking-widest uppercase">
            <MapPin className="w-4 h-4 text-[#f4ce15]" />
            <span>Home Base & Hardware Laboratory</span>
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
                    transitionDelay: `${i * 26}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h2>

          {/* Narrative Copy */}
          <p 
            className="t-20 text-[#8b8f8c] font-sans leading-relaxed text-balance transition-all duration-1000 ease-out"
            style={{
              filter: isVisible ? 'blur(0px)' : 'blur(10px)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '350ms',
            }}
          >
            Ashore in God's Own Country. When away from the engine control room, you will find me at my workbench: 
            soldering custom sensor PCBs, coding ARM Cortex-M FreeRTOS kernels, tuning PID loops on robotic gimbals, 
            and rendering interactive 3D digital twins.
          </p>

          <p
            className="text-xs font-mono text-[#8b8f8c] leading-relaxed border-l-2 border-[#f4ce15]/40 pl-3 transition-all duration-1000 ease-out"
            style={{
              filter: isVisible ? 'blur(0px)' : 'blur(10px)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '500ms',
            }}
          >
            "Hover over the technical plate on the left to activate optical clearance — passing the lens clears the vermillion riso ink matrix back into full natural photographic fidelity."
          </p>

          {/* Local Telemetry Status */}
          <div 
            className="flex flex-wrap gap-4 pt-4 border-t border-[#f0f2f0]/10 text-xs font-mono transition-opacity duration-1000 delay-600"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            <div className="bg-[#26262b]/60 border border-[#f0f2f0]/10 rounded-lg px-4 py-2 flex items-center gap-2 text-[#f0f2f0]">
              <Clock className="w-3.5 h-3.5 text-[#f4ce15]" />
              <span>IST {istTime || '20:10:00'} (UTC +5:30)</span>
            </div>

            <div className="bg-[#26262b]/60 border border-[#f0f2f0]/10 rounded-lg px-4 py-2 flex items-center gap-2 text-[#379777]">
              <span className="w-2 h-2 rounded-full bg-[#379777] animate-ping" />
              <span>Workbench Online · 6.6kV Sim Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Cpu, Terminal } from 'lucide-react';

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
      { threshold: 0.3 }
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
      className="relative z-10 min-h-[90svh] w-[90vw] max-w-7xl mx-auto flex flex-col justify-center items-end py-20 select-none text-right"
    >
      <div className="max-w-2xl flex flex-col items-end gap-6">
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
                  transitionDelay: `${i * 30}ms`,
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
            transitionDelay: '400ms',
          }}
        >
          Ashore in God's Own Country. When away from the engine control room, you will find me at my workbench: 
          soldering custom sensor PCBs, coding ARM Cortex-M FreeRTOS kernels, tuning PID loops on robotic gimbals, 
          and rendering interactive 3D digital twins.
        </p>

        {/* Local Telemetry Status */}
        <div 
          className="flex flex-wrap justify-end gap-4 pt-4 border-t border-[#f0f2f0]/10 text-xs font-mono transition-opacity duration-1000 delay-600"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <div className="bg-[#26262b]/60 border border-[#f0f2f0]/10 rounded-lg px-4 py-2 flex items-center gap-2 text-[#f0f2f0]">
            <Clock className="w-3.5 h-3.5 text-[#f4ce15]" />
            <span>IST {istTime || '19:40:00'} (UTC +5:30)</span>
          </div>

          <div className="bg-[#26262b]/60 border border-[#f0f2f0]/10 rounded-lg px-4 py-2 flex items-center gap-2 text-[#379777]">
            <span className="w-2 h-2 rounded-full bg-[#379777] animate-ping" />
            <span>Workbench Online</span>
          </div>
        </div>
      </div>
    </section>
  );
}

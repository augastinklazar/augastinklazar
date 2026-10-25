import { useEffect, useRef, useState } from 'react';

export default function Statement() {
  const [isVisible, setIsVisible] = useState(false);
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

    return () => observer.disconnect();
  }, []);

  const statementText = 
    "I bridge high-seas maritime automation with low-level embedded intelligence — engineering 6.6kV switchboards, bare-metal robotics, and interactive spatial digital twins for global energy corridors and the next generation of engineers.";

  return (
    <section
      id="statement"
      ref={sectionRef}
      className="relative z-10 min-h-[90svh] w-[90vw] max-w-7xl mx-auto flex items-center py-24"
    >
      <div className="max-w-4xl flex flex-col gap-8">
        <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#379777] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#379777]" />
          <span>Core Engineering Thesis</span>
        </span>

        <h2 
          className="t-45 font-sans font-medium text-[#f0f2f0] leading-[1.25] tracking-tight text-balance"
        >
          {statementText.split(' ').map((word, idx) => (
            <span
              key={idx}
              className="inline-block mr-[0.28em] transition-all duration-700 ease-out"
              style={{
                filter: isVisible ? 'blur(0px)' : 'blur(10px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: `${idx * 28}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </h2>

        <div 
          className="pt-6 border-t border-[#f0f2f0]/10 flex flex-wrap gap-8 text-[#8b8f8c] font-mono text-xs transition-opacity duration-1000 delay-700"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <div>
            <span className="text-[#f4ce15] block mb-1">01 / MARITIME</span>
            <span>MOL LNG Fleet · Power Management (PMS) · 6.6kV Bus-Tie</span>
          </div>
          <div>
            <span className="text-[#379777] block mb-1">02 / EMBEDDED</span>
            <span>ARM Cortex-M4 · FreeRTOS · LoRa Sub-GHz · FOC Control</span>
          </div>
          <div>
            <span className="text-[#f0f2f0] block mb-1">03 / SPATIAL & MEDIA</span>
            <span>Three.js Digital Twins · Technical Video Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}

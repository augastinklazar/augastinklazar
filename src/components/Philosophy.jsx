import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Wrench } from 'lucide-react';

export default function Philosophy() {
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

  const philosophyText =
    "I don’t just monitor switchboards or patch code — I bring deep low-level curiosity into every circuit, pushing bare-metal firmware, spatial WebGL simulations, and educational clarity wherever they genuinely elevate engineering.";

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative z-10 min-h-[90svh] w-[90vw] max-w-7xl mx-auto flex items-center justify-start py-24 select-none"
    >
      <div className="max-w-4xl flex flex-col gap-6">
        <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#f4ce15] flex items-center gap-2">
          <Wrench className="w-3.5 h-3.5 text-[#f4ce15]" />
          <span>How I Build & Operate</span>
        </span>

        <p className="t-45 font-sans font-medium text-[#f0f2f0] leading-[1.25] tracking-tight text-balance">
          {philosophyText.split(' ').map((word, idx) => (
            <span
              key={idx}
              className="inline-block mr-[0.28em] transition-all duration-700 ease-out"
              style={{
                filter: isVisible ? 'blur(0px)' : 'blur(10px)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(14px)',
                transitionDelay: `${idx * 26}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </p>

        <div 
          className="pt-6 border-t border-[#f0f2f0]/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-[#8b8f8c] font-sans text-sm transition-opacity duration-1000 delay-700"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          <div>
            <span className="text-[#f0f2f0] font-mono text-xs block mb-1 uppercase tracking-wider">
              Zero Black-Box Thinking
            </span>
            <p className="text-xs leading-relaxed text-[#8b8f8c]">
              From vacuum breaker coils to registers in an ARM NVIC, understanding the physical layer first prevents critical cascade failures.
            </p>
          </div>
          <div>
            <span className="text-[#f4ce15] font-mono text-xs block mb-1 uppercase tracking-wider">
              High-Speed Determinism
            </span>
            <p className="text-xs leading-relaxed text-[#8b8f8c]">
              Real-time tasks must meet their deadlines, whether tripping reverse power relays in 200ms or running 1kHz motor PID loops.
            </p>
          </div>
          <div>
            <span className="text-[#379777] font-mono text-xs block mb-1 uppercase tracking-wider">
              Accessible Knowledge
            </span>
            <p className="text-xs leading-relaxed text-[#8b8f8c]">
              Engineering complexity should be visually dissected. 3D digital twins and clear breakdowns inspire the next wave of sea-goers and builders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

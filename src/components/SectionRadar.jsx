import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: '01 HERO' },
  { id: 'statement', label: '02 VISION' },
  { id: 'fleet', label: '03 FLEET' },
  { id: 'origins', label: '04 ORIGINS' },
  { id: 'philosophy', label: '05 PHILOSOPHY' },
  { id: 'works', label: '06 WORKS' },
  { id: 'capabilities', label: '07 SYSTEMS' },
  { id: 'contact', label: '08 CONTACT' },
];

export default function SectionRadar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el && window.lenis) {
      window.lenis.scrollTo(el, { offset: -50, duration: 1.2 });
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      aria-label="Section Waypoint Radar"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-end gap-3 select-none pointer-events-auto"
    >
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="group flex items-center gap-3 cursor-pointer py-1"
          >
            {/* Label reveal on hover or active */}
            <span
              className={`font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                isActive
                  ? 'text-[#f4ce15] opacity-100 transform translate-x-0'
                  : 'text-[#8b8f8c] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0'
              }`}
            >
              {sec.label}
            </span>

            {/* Radar Dot / Bar */}
            <span
              className={`block transition-all duration-300 rounded-full ${
                isActive
                  ? 'w-6 h-1 bg-[#f4ce15] shadow-[0_0_8px_rgba(244,206,21,0.6)]'
                  : 'w-1.5 h-1.5 bg-[#8b8f8c]/40 group-hover:bg-[#f0f2f0] group-hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
}

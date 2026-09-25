import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover/fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, .interactive');
      if (target) {
        setIsPointer(true);
        const customText = target.getAttribute('data-cursor-text');
        if (customText) {
          setHoverText(customText);
          setIsHovered(true);
        } else {
          setHoverText('');
          setIsHovered(false);
        }
      } else {
        setIsPointer(false);
        setIsHovered(false);
        setHoverText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const render = () => {
      // Smooth lerp for ring follower
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central crisp gold micro-dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-gold z-50 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />

      {/* Outer fluid follower ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 -ml-4 -mt-4 rounded-full z-40 flex items-center justify-center transition-all duration-200 ease-out ${
          isHovered
            ? 'w-20 h-20 -ml-10 -mt-10 bg-gold/20 backdrop-blur-sm border border-gold/60 text-obsidian-950 font-bold text-[10px] tracking-widest uppercase shadow-[0_0_25px_rgba(229,193,88,0.4)]'
            : isPointer
            ? 'w-12 h-12 -ml-6 -mt-6 bg-gold/10 border border-gold/50 shadow-[0_0_15px_rgba(229,193,88,0.25)]'
            : 'w-8 h-8 border border-neutral-500/40'
        }`}
        style={{ willChange: 'transform' }}
      >
        {hoverText && <span className="text-white text-[9px] font-mono tracking-wider">{hoverText}</span>}
      </div>
    </>
  );
}

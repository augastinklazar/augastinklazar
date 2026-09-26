import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const rippleContainerRef = useRef(null);
  const [coords, setCoords] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [targetLabel, setTargetLabel] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    setIsActive(true);

    const onMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check for custom cursor attributes or interactive tags
      const target = e.target.closest('a, button, input, textarea, select, [data-cursor], [role="button"]');
      if (target) {
        setIsHovering(true);
        const label = target.getAttribute('data-cursor-text') || target.getAttribute('data-cursor') || 'TARGET';
        setTargetLabel(label);
      } else {
        setIsHovering(false);
        setTargetLabel('');
      }
    };

    // Sonar Ping Ripple in Neon Ember (#FF6D00)
    const onMouseDown = (e) => {
      if (!rippleContainerRef.current) return;

      const ripple = document.createElement('div');
      ripple.className = 'absolute rounded-full pointer-events-none border border-[#FF6D00]';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ripple.style.width = '16px';
      ripple.style.height = '16px';
      ripple.style.transform = 'translate(-50%, -50%)';
      ripple.style.boxShadow = '0 0 16px #FF6D00, inset 0 0 10px #FF6D00';
      
      rippleContainerRef.current.appendChild(ripple);

      // Trigger anime.js sonar ripple expansion & fade
      anime({
        targets: ripple,
        scale: [1, 5.5],
        opacity: [0.95, 0],
        borderWidth: ['2px', '0.5px'],
        easing: 'easeOutQuart',
        duration: 750,
        complete: () => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        },
      });

      // Quick pulse on cursor crosshair
      if (cursorRef.current) {
        anime({
          targets: cursorRef.current,
          scale: [1, 0.85, 1],
          duration: 160,
          easing: 'easeInOutQuad',
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  if (!isActive) return null;

  return (
    <>
      {/* Container for Sonar Ping Ripples */}
      <div ref={rippleContainerRef} className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden" />

      {/* Crosshair Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        <div
          className={`relative flex items-center justify-center transition-all duration-200 ${
            isHovering ? 'w-12 h-12' : 'w-8 h-8'
          }`}
        >
          {/* Tactical Crosshair SVG in Neon Ember (#FF6D00) */}
          <svg
            className={`w-full h-full transition-transform duration-300 ${
              isHovering ? 'rotate-45 text-[#FF6D00] scale-110 drop-shadow-[0_0_8px_#FF6D00]' : 'text-[#FF6D00]/80'
            }`}
            viewBox="0 0 40 40"
            fill="none"
          >
            {/* Outer Circular Ring */}
            <circle
              cx="20"
              cy="20"
              r="14"
              stroke="currentColor"
              strokeWidth={isHovering ? '1.5' : '1'}
              strokeDasharray={isHovering ? '4 2' : '2 2'}
              className="animate-spin-slow origin-center"
            />

            {/* Corner Target Brackets */}
            <path d="M 6 12 L 6 6 L 12 6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 34 12 L 34 6 L 28 6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 6 28 L 6 34 L 12 34" stroke="currentColor" strokeWidth="1.5" />
            <path d="M 34 28 L 34 34 L 28 34" stroke="currentColor" strokeWidth="1.5" />

            {/* Crosshair Center Point */}
            <line x1="20" y1="10" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" />
            <line x1="20" y1="24" x2="20" y2="30" stroke="currentColor" strokeWidth="1.5" />
            <line x1="10" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" />
            <line x1="24" y1="20" x2="30" y2="20" stroke="currentColor" strokeWidth="1.5" />

            {/* Center Core Dot: Signal Yellow (#FFC400) */}
            <circle cx="20" cy="20" r="2.5" fill="#FFC400" />
          </svg>

          {/* Coordinates and Target Text Readout */}
          <div className="absolute left-7 top-7 font-mono text-[9px] text-[#FF6D00] whitespace-nowrap bg-[#050505]/95 px-1.5 py-0.5 rounded border border-[#FF6D00]/40 backdrop-blur-sm pointer-events-none select-none shadow-[0_0_10px_rgba(255,109,0,0.2)]">
            {isHovering ? (
              <span className="text-[#FFC400] font-bold">[{targetLabel}]</span>
            ) : (
              <span>
                {Math.round(coords.x).toString().padStart(4, '0')} : {Math.round(coords.y).toString().padStart(4, '0')}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

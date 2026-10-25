import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [target, setTarget] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animFrameId = useRef(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const onMouseMove = (e) => {
      setTarget({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    // Track interactive hovers
    const handleElementHover = () => {
      const handleEnter = () => setIsHovered(true);
      const handleLeave = () => setIsHovered(false);

      const interactives = document.querySelectorAll('a, button, input, textarea, [role="button"], .interactive');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
      });

      return () => {
        interactives.forEach((el) => {
          el.removeEventListener('mouseenter', handleEnter);
          el.removeEventListener('mouseleave', handleLeave);
        });
      };
    };

    const cleanupHovers = handleElementHover();

    // Re-check periodically in case elements mount dynamically
    const interval = setInterval(handleElementHover, 2000);

    // Spring/lerp loop
    const lerp = (start, end, factor) => start + (end - start) * factor;
    const loop = () => {
      setPosition((prev) => ({
        x: lerp(prev.x, target.x, 0.22),
        y: lerp(prev.y, target.y, 0.22),
      }));
      animFrameId.current = requestAnimationFrame(loop);
    };
    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animFrameId.current);
      clearInterval(interval);
      cleanupHovers();
    };
  }, [target, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer fluid trailing ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-[width,height,background-color,border-color] duration-200 ease-out will-change-transform ${
          isHovered
            ? 'w-12 h-12 -mt-6 -ml-6 border-[#f4ce15] bg-[#f4ce15]/10 backdrop-blur-[1px]'
            : isClicking
            ? 'w-6 h-6 -mt-3 -ml-3 border-[#f4ce15] bg-[#f4ce15]/30'
            : 'w-8 h-8 -mt-4 -ml-4 border-[#f0f2f0]/30 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
      {/* Inner precise dot */}
      <div
        className={`fixed top-0 left-0 w-1.5 h-1.5 -mt-[3px] -ml-[3px] rounded-full transition-transform duration-100 ease-out will-change-transform ${
          isHovered ? 'bg-[#f4ce15] scale-150' : 'bg-[#f0f2f0]'
        }`}
        style={{
          transform: `translate3d(${target.x}px, ${target.y}px, 0)`,
        }}
      />
    </div>
  );
}

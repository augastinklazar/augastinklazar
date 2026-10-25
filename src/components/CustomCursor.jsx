import { useEffect, useState, useRef } from 'react';
import { soundSynth } from '../utils/audioSynth';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [target, setTarget] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animFrameId = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100, magneticTarget: null });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      if (!mouseRef.current.magneticTarget) {
        setTarget({ x: e.clientX, y: e.clientY });
      }
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => {
      setIsClicking(true);
      soundSynth.click();
    };

    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);

    // Track magnetic interactive elements
    const handleElementHover = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea, [role="button"], .interactive');

      const enterHandlers = [];
      const leaveHandlers = [];
      const moveHandlers = [];

      interactives.forEach((el) => {
        const onEnter = () => {
          setIsHovered(true);
          soundSynth.hover();
        };

        const onMove = (e) => {
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          // Magnetic attraction: pull cursor 30% toward element center
          const pullFactor = 0.35;
          const magX = e.clientX + (centerX - e.clientX) * pullFactor;
          const magY = e.clientY + (centerY - e.clientY) * pullFactor;

          mouseRef.current.magneticTarget = { x: magX, y: magY };
          setTarget({ x: magX, y: magY });
        };

        const onLeave = () => {
          setIsHovered(false);
          mouseRef.current.magneticTarget = null;
          setTarget({ x: mouseRef.current.x, y: mouseRef.current.y });
        };

        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);

        enterHandlers.push({ el, onEnter });
        moveHandlers.push({ el, onMove });
        leaveHandlers.push({ el, onLeave });
      });

      return () => {
        enterHandlers.forEach(({ el, onEnter }) => el.removeEventListener('mouseenter', onEnter));
        moveHandlers.forEach(({ el, onMove }) => el.removeEventListener('mousemove', onMove));
        leaveHandlers.forEach(({ el, onLeave }) => el.removeEventListener('mouseleave', onLeave));
      };
    };

    const cleanupHovers = handleElementHover();
    const interval = setInterval(handleElementHover, 2500);

    // Fluid spring lerp loop
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
      {/* Outer fluid trailing ring with magnetic expansion */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-[width,height,background-color,border-color] duration-200 ease-out will-change-transform ${
          isHovered
            ? 'w-14 h-14 -mt-7 -ml-7 border-[#f4ce15] bg-[#f4ce15]/10 backdrop-blur-[1px] shadow-[0_0_15px_rgba(244,206,21,0.3)]'
            : isClicking
            ? 'w-6 h-6 -mt-3 -ml-3 border-[#f4ce15] bg-[#f4ce15]/30'
            : 'w-8 h-8 -mt-4 -ml-4 border-[#f0f2f0]/30 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
      {/* Inner precise reticle dot */}
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

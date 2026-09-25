import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef(null);
  const percentRef = useRef({ val: 0 });

  useEffect(() => {
    // Lock scroll during preloading
    document.body.style.overflow = 'hidden';

    // Animate counter
    const counterAnim = anime({
      targets: percentRef.current,
      val: 100,
      round: 1,
      easing: 'easeInOutExpo',
      duration: 1800,
      update: () => {
        setPercent(percentRef.current.val);
      }
    });

    // Animate decorative SVG lines and text
    const timeline = anime.timeline({
      complete: () => {
        // Curtain exit animation
        anime({
          targets: containerRef.current,
          translateY: '-100%',
          easing: 'easeInOutQuart',
          duration: 900,
          complete: () => {
            document.body.style.overflow = '';
            if (onComplete) onComplete();
          }
        });
      }
    });

    timeline
      .add({
        targets: '.preloader-logo path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1200,
        delay: (el, i) => i * 150
      }, 100)
      .add({
        targets: '.preloader-text',
        opacity: [0, 1],
        translateY: [15, 0],
        easing: 'easeOutQuad',
        duration: 800,
      }, 400);

    return () => {
      counterAnim.pause();
      timeline.pause();
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-obsidian-950 p-8 sm:p-12 text-neutral-200 select-none"
    >
      {/* Top Header telemetry */}
      <div className="w-full flex justify-between items-center text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          SYSTEM INIT // MOL ETO CADET
        </span>
        <span className="hidden sm:inline">10.5276° N, 76.2144° E [THRISSUR]</span>
      </div>

      {/* Center Monogram & Title */}
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="relative">
          <svg className="preloader-logo w-24 h-24" viewBox="0 0 100 100" fill="none">
            {/* Maritime Octagram Compass / Emblem */}
            <circle cx="50" cy="50" r="46" stroke="#232332" strokeWidth="1" />
            <circle cx="50" cy="50" r="38" stroke="#e5c158" strokeWidth="1.5" strokeDasharray="4 4" />
            <path
              d="M50 12 L50 88 M12 50 L88 50 M24 24 L76 76 M24 76 L76 24"
              stroke="#e5c158"
              strokeWidth="1.5"
            />
            {/* Center Anchor / Vector */}
            <path
              d="M40 38 L50 26 L60 38 M50 26 L50 68 M36 58 C36 68, 64 68, 64 58"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full pointer-events-none" />
        </div>

        <div className="preloader-text text-center space-y-2">
          <h2 className="font-display text-2xl tracking-[0.25em] text-white font-bold">
            AUGASTIN K LAZAR
          </h2>
          <p className="font-mono text-xs text-gold tracking-widest uppercase">
            Maritime Automation · Embedded Firmware · Creative Tech
          </p>
        </div>
      </div>

      {/* Bottom Counter & Progress Bar */}
      <div className="w-full max-w-md flex flex-col space-y-3">
        <div className="flex justify-between items-end text-xs font-mono">
          <span className="text-neutral-500">INITIALIZING REPOSITORY</span>
          <span className="text-gold text-lg font-bold">{percent}%</span>
        </div>
        <div className="w-full h-1 bg-obsidian-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-warm via-gold to-marine-cyan transition-all duration-75 ease-out rounded-full"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

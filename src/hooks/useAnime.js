import { useEffect, useRef, useState, useCallback } from 'react';
import anime from 'animejs';

/**
 * Hook for high-speed number & cyber code scramble decoding on hover
 */
export function useScrambleText(originalText) {
  const [displayText, setDisplayText] = useState(originalText);
  const isScramblingRef = useRef(false);
  const animFrameRef = useRef(null);

  const chars = '01#%&*+=-<>~ΔΞΩΨ01011001_[]{}';

  const triggerScramble = useCallback(() => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    let iteration = 0;
    const maxIterations = originalText.length * 3;

    const scramble = () => {
      const result = originalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration / 3) {
            return originalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(result);

      if (iteration < maxIterations) {
        iteration += 1;
        animFrameRef.current = requestAnimationFrame(scramble);
      } else {
        setDisplayText(originalText);
        isScramblingRef.current = false;
      }
    };

    animFrameRef.current = requestAnimationFrame(scramble);
  }, [originalText]);

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return { displayText, triggerScramble };
}

/**
 * Hook for staggering characters or elements into view using Anime.js
 */
export function useAnimeStagger(selector, options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const targets = containerRef.current.querySelectorAll(selector);
    if (!targets || targets.length === 0) return;

    const animation = anime({
      targets: targets,
      translateY: options.translateY || [30, 0],
      opacity: options.opacity || [0, 1],
      scale: options.scale || [0.95, 1],
      delay: anime.stagger(options.stagger || 60, { start: options.delay || 150 }),
      duration: options.duration || 900,
      easing: options.easing || 'easeOutExpo',
    });

    return () => animation.pause();
  }, [selector, options]);

  return containerRef;
}

/**
 * Hook for drawing SVG stroke dashoffset on scroll / reveal
 */
export function useSvgPathDraw(pathRef, options = {}) {
  useEffect(() => {
    const pathEl = pathRef.current;
    if (!pathEl) return;

    const pathLength = pathEl.getTotalLength();
    pathEl.style.strokeDasharray = pathLength;
    pathEl.style.strokeDashoffset = pathLength;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: pathEl,
              strokeDashoffset: [pathLength, 0],
              duration: options.duration || 2400,
              easing: options.easing || 'easeInOutQuart',
              delay: options.delay || 100,
              update: (anim) => {
                if (options.onProgress) {
                  options.onProgress(anim.progress / 100, pathLength);
                }
              },
            });
            if (options.once !== false) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: options.threshold || 0.2 }
    );

    observer.observe(pathEl);

    return () => observer.disconnect();
  }, [pathRef, options]);
}

/**
 * Typewriter effect for terminal headers and telemetry subtitles
 */
export function useTypewriter(text, speed = 35, delay = 300) {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let timeout;
    let index = 0;
    setTyped('');

    const startTyping = () => {
      const typeNext = () => {
        if (index <= text.length) {
          setTyped(text.slice(0, index));
          index++;
          timeout = setTimeout(typeNext, speed);
        }
      };
      typeNext();
    };

    const initialDelay = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return typed;
}

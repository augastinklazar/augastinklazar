import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import HardwareTextures from './components/HardwareTextures';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheJourney from './components/TheJourney';
import HorizontalSchematicExperience from './components/HorizontalSchematicExperience';
import ExplodedBlueprint25D from './components/ExplodedBlueprint25D';
import SkillsHUD from './components/SkillsHUD';
import BlueprintSpecs from './components/BlueprintSpecs';
import Projects from './components/Projects';
import TerminalFooter from './components/TerminalFooter';

export default function App() {
  useEffect(() => {
    // Force browser to start at Hero section on load/reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Ultra-fast, instantaneous, 60fps Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.18, // Immediate 1-frame response without input lag
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    window.lenis = lenis;
    lenis.scrollTo(0, { immediate: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    // Global smooth click interceptor for all hash links (#journey, #skills-hud, #terminal, etc.)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      if (href === '#' || href === '#hero') {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.0 });
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -70, duration: 1.2 });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-vantablack text-steel font-mono selection:bg-ember selection:text-vantablack overflow-x-hidden antialiased">
      {/* 1. Global Hardware Textures: feTurbulence CRT Noise & Hardware Scanlines */}
      <HardwareTextures />

      {/* Custom Crosshair Cursor with Sonar Ping in Neon Ember */}
      <CustomCursor />

      {/* Floating Tactical Glassmorphic Header */}
      <Navbar />

      {/* Main Highway Night Cyberpunk Sections */}
      <main className="relative z-10">
        {/* Section 1: The Terminal Hero with Two.js Vector Wireframe */}
        <Hero />

        {/* Section 2: The Journey - Moving SVG Vector Timeline with Signal Yellow Waypoints */}
        <TheJourney />

        {/* Section 3: Experience - Horizontal Schematic Pan (Sticky 60fps Vector Track) */}
        <HorizontalSchematicExperience />

        {/* Section 4: 2.5D Interactive Exploded Blueprint Interstitial (Isometric 3-Layer Stack) */}
        <ExplodedBlueprint25D />

        {/* Section 5: Cyberpunk Polar Radar HUD & Number-Scramble Decoders */}
        <SkillsHUD />

        {/* Section 6: Blueprint Specifications & Personal Manifesto */}
        <BlueprintSpecs />

        {/* Section 7: Featured Engineering Dossiers */}
        <Projects />
      </main>

      {/* Section 8: Interactive Terminal Command Prompt Contact Footer */}
      <TerminalFooter />
    </div>
  );
}

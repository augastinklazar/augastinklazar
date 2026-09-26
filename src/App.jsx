import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import HardwareTextures from './components/HardwareTextures';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheJourney from './components/TheJourney';
import HorizontalSchematicExperience from './components/HorizontalSchematicExperience';
import SkillsHUD from './components/SkillsHUD';
import BlueprintSpecs from './components/BlueprintSpecs';
import Projects from './components/Projects';
import TerminalFooter from './components/TerminalFooter';

export default function App() {
  useEffect(() => {
    // Ultra-fast, instantaneous, 60fps Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.18, // Immediate 1-frame response with zero perceived input lag
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-vantablack text-steel font-mono selection:bg-ember selection:text-vantablack overflow-x-hidden antialiased">
      {/* 1. Global Hardware Textures: feTurbulence CRT Noise & Scanlines */}
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

        {/* Section 3: Horizontal Schematic Pan (Experience Sticky 60fps Vector Track) */}
        <HorizontalSchematicExperience />

        {/* Section 4: Cyberpunk Polar Radar HUD & Number-Scramble Decoders */}
        <SkillsHUD />

        {/* Section 5: Blueprint Specifications & Personal Manifesto */}
        <BlueprintSpecs />

        {/* Section 6: Featured Engineering Dossiers */}
        <Projects />
      </main>

      {/* Section 7: Interactive Terminal Command Prompt Contact Footer */}
      <TerminalFooter />
    </div>
  );
}

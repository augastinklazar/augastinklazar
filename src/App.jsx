import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheJourney from './components/TheJourney';
import SkillsHUD from './components/SkillsHUD';
import BlueprintSpecs from './components/BlueprintSpecs';
import Projects from './components/Projects';
import TerminalFooter from './components/TerminalFooter';

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 2,
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
    <div className="relative min-h-screen bg-[#0B0D17] text-neutral-100 font-mono selection:bg-cyan-electric selection:text-obsidian-950 overflow-x-hidden antialiased">
      {/* Custom Crosshair Cursor with Sonar Ping */}
      <CustomCursor />

      {/* Floating Tactical Glassmorphic Header */}
      <Navbar />

      {/* Main Nautical Cyberpunk Sections */}
      <main className="relative z-10">
        {/* Section 1: The Terminal Hero with Two.js Vector Wireframe */}
        <Hero />

        {/* Section 2: The Journey - Animated SVG Vector Route */}
        <TheJourney />

        {/* Section 3: Cyberpunk Polar Radar HUD & Number-Scramble Decoders */}
        <SkillsHUD />

        {/* Section 4: Blueprint Specifications & Personal Manifesto */}
        <BlueprintSpecs />

        {/* Section 5: Featured Engineering Dossiers */}
        <Projects />
      </main>

      {/* Section 6: Interactive Terminal Command Prompt Contact Footer */}
      <TerminalFooter />
    </div>
  );
}

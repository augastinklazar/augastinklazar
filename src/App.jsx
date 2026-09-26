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
    // Fast, crisp Lenis smooth scrolling configuration
    const lenis = new Lenis({
      duration: 0.45, // Snappy fast response (reduced from 1.2 to eliminate drag)
      easing: (t) => 1 - Math.pow(1 - t, 3), // Instant, responsive cubic ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.35, // Faster wheel response
      touchMultiplier: 2.2, // Fast touch response
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

import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import MorphingParticleScene from './components/canvas/MorphingParticleScene';
import NoiseOverlay from './components/NoiseOverlay';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statement from './components/Statement';
import GlobalFleet from './components/GlobalFleet';
import Origins from './components/Origins';
import Philosophy from './components/Philosophy';
import SelectedWorks from './components/SelectedWorks';
import CapabilitiesMatrix from './components/CapabilitiesMatrix';
import MonogramContact from './components/MonogramContact';
import TerminalModal from './components/TerminalModal';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    // Reset scroll restoration on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Instantaneous, snappy Lenis scroll (0.2s - 0.3s response without input lag)
    const lenis = new Lenis({
      lerp: 0.24, // Immediate reaction on first wheel tick
      duration: 0.32, // Smoothly settles in ~0.3s
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.4,
      infinite: false,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    // Smooth scroll for internal hash links
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      if (href === '#' || href === '#hero') {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -60, duration: 1.4 });
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
    <div className="relative min-h-screen bg-[#1e1e22] text-[#f0f2f0] font-sans antialiased overflow-x-hidden selection:bg-[#f4ce15] selection:text-[#1e1e22]">
      {/* 1. Signature Background Three.js Morphing Particle Canvas */}
      <MorphingParticleScene />

      {/* 2. Tactile Film Grain Texture Overlay */}
      <NoiseOverlay />

      {/* 3. Magnetic Fluid Custom Cursor */}
      <CustomCursor />

      {/* 4. Minimalist Ingrassia-style Navbar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* 5. Main Editorial Flow Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Vision Statement */}
        <Statement />

        {/* Global Operations & Maritime Fleet */}
        <GlobalFleet />

        {/* Roots & Hardware Workbench */}
        <Origins />

        {/* Engineering Philosophy */}
        <Philosophy />

        {/* Selected Works with Live Interactive Canvas Simulations */}
        <SelectedWorks />

        {/* Systems & Capabilities Matrix */}
        <CapabilitiesMatrix />

        {/* Contact, Interactive Monogram & Micro-Footer */}
        <MonogramContact onOpenTerminal={() => setTerminalOpen(true)} />
      </main>

      {/* 6. Slide-Over Interactive CLI Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

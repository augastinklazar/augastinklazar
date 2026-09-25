import { useState } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import HeroBackground3D from './components/canvas/HeroBackground3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SeaService from './components/SeaService';
import Projects from './components/Projects';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceBento from './components/ExperienceBento';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-neutral-100 font-sans selection:bg-gold selection:text-obsidian-950">
      {/* Cinematic Anime.js Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Magnetic Cursor Follower */}
      <CustomCursor />

      {/* Global Three.js WebGL Interactive Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <HeroBackground3D />
      </div>

      {/* Floating Glassmorphic Header */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <SeaService />
        <Projects />
        <SkillsMatrix />
        <ExperienceBento />
        <Contact />
      </main>

      {/* Gilded Footer */}
      <Footer />
    </div>
  );
}

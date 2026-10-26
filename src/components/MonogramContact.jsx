import { useState } from 'react';
import { Copy, Check, Terminal, ExternalLink, Github, Linkedin, Anchor } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MonogramContact({ onOpenTerminal }) {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const email = "augastinlazar@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Particle Burst
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#f4ce15', '#379777', '#f0f2f0'],
      disableForReducedMotion: true,
    });

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative z-10 min-h-[95svh] w-[90vw] max-w-7xl mx-auto flex flex-col justify-between py-24 select-none">
      {/* Central Contact Call to Action */}
      <div className="my-auto flex flex-col items-center justify-center text-center gap-8 max-w-3xl mx-auto">
        <p className="t-16 text-[#8b8f8c] font-mono uppercase tracking-[0.3em]">
          Get In Touch
        </p>

        {/* Large Magnetic Email Link */}
        <div className="relative group max-w-full px-2">
          <a
            href={`mailto:${email}`}
            onClick={handleCopyEmail}
            className="text-xl sm:text-3xl md:t-45 lg:t-85 font-sans font-medium text-[#f0f2f0] hover:text-[#f4ce15] transition-colors duration-300 tracking-tight block cursor-pointer break-all sm:break-normal"
            title="Click to copy email address"
          >
            {email}
          </a>

          <div className="flex items-center justify-center gap-2 mt-3 text-xs font-mono text-[#8b8f8c]">
            {copied ? (
              <span className="flex items-center gap-1.5 text-[#379777]">
                <Check className="w-3.5 h-3.5" />
                <span>Copied to clipboard!</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 group-hover:text-[#f0f2f0] transition-colors">
                <Copy className="w-3.5 h-3.5 text-[#f4ce15]" />
                <span>Click to copy or compose</span>
              </span>
            )}
          </div>
        </div>

        {/* Channels */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-sans text-[#8b8f8c] pt-2">
          <span>or connect via</span>
          <a
            href="https://linkedin.com/in/augastinklazar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0f2f0] hover:text-[#f4ce15] underline underline-offset-4 flex items-center gap-1 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span>and explore code on</span>
          <a
            href="https://github.com/augastinklazar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0f2f0] hover:text-[#f4ce15] underline underline-offset-4 flex items-center gap-1 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Interactive Ingrassia-style AKL Nautical Monogram */}
        <div 
          className="relative pt-8 cursor-pointer group"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={onOpenTerminal}
        >
          {/* Tooltip */}
          <div
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 rounded bg-[#26262b] border border-[#f0f2f0]/20 text-[11px] font-mono text-[#f0f2f0] whitespace-nowrap transition-all duration-300 pointer-events-none ${
              showTooltip ? 'opacity-100 transform -translate-y-1' : 'opacity-0 transform translate-y-1'
            }`}
          >
            hey there! click to open CLI
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#26262b]" />
          </div>

          {/* SVG Monogram (Anchor + AKL Trace) */}
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-[#8b8f8c] group-hover:text-[#f4ce15] transition-colors duration-500"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Anchor Ring */}
            <circle
              cx="50"
              cy="20"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              className="group-hover:stroke-[#f4ce15] transition-colors"
            />
            {/* Center Shaft / Stem */}
            <line
              x1="50"
              y1="30"
              x2="50"
              y2="82"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Crossbar */}
            <line
              x1="28"
              y1="45"
              x2="72"
              y2="45"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Curved Flukes with Emerald Accent */}
            <path
              d="M20 62C22 78 35 88 50 88C65 88 78 78 80 62"
              stroke="#379777"
              strokeWidth="4"
              strokeLinecap="round"
              className="group-hover:stroke-[#42b38e] transition-colors"
            />
            {/* Geometric A-K-L Monogram Interlock */}
            <path
              d="M38 52L50 36L62 52"
              stroke="#f4ce15"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Quick CLI Launcher Pill */}
        <button
          onClick={onOpenTerminal}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#26262b] hover:bg-[#2f2f35] border border-[#f0f2f0]/15 hover:border-[#f4ce15]/40 text-xs font-mono text-[#f0f2f0] transition-all"
        >
          <Terminal className="w-3.5 h-3.5 text-[#f4ce15]" />
          <span>Launch Engineering Terminal</span>
        </button>
      </div>

      {/* Editorial Micro-Footer */}
      <footer className="pt-12 border-t border-[#f0f2f0]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8b8f8c] tracking-widest uppercase">
        <p>
          Augastin K Lazar &bull; &copy; 2026 &bull; MOL Fleet ETO Cadet
        </p>
        <p className="text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors">
          This website doesn't use cookies. Zero trackers.
        </p>
      </footer>
    </section>
  );
}

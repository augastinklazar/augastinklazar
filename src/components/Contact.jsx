import { useState, useEffect } from 'react';
import { Mail, Copy, Check, Send, MapPin, Clock, ArrowUpRight, Github, Linkedin, Radio } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [istTime, setIstTime] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'General Collaboration',
    message: '',
  });

  const emailAddress = 'augastin.lazar@example.com'; // User can replace with exact email

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    // Luxury golden confetti burst
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#e5c158', '#ff9d42', '#38ef7d', '#ffffff'],
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playClick();
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#e5c158', '#ff9d42'],
    });
  };

  return (
    <section id="contact" className="relative py-28 bg-obsidian-950 text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-gold font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[1px] bg-gold" />
              <span>06 // INITIATE TRANSMISSION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Connect With <br />
              <span className="font-serif italic font-normal text-gold">Augastin K Lazar</span>
            </h2>
          </div>

          {/* Location & IST Telemetry */}
          <div className="mt-4 md:mt-0 font-mono text-xs space-y-1.5 text-neutral-400">
            <div className="flex items-center gap-2 text-gold-light">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>THRISSUR, KERALA, INDIA</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-marine-cyan" />
              <span>LOCAL TIME (IST): {istTime || 'SYNCING...'}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Quick Copy Card */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Let's Build Something High-Caliber.
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Whether you wish to discuss maritime electrical engineering, collaborate on embedded firmware & robotics, produce educational content, or explore creative technology projects — my frequency is open.
              </p>
            </div>

            {/* Email Quick-Copy Terminal Box */}
            <div className="p-6 rounded-2xl glass-card-gold border border-gold/30 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-gold uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-gold animate-pulse" />
                  DIRECT FREQUENCY
                </span>
                <span>VERIFIED COMM</span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-obsidian-950/90 border border-neutral-800">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-neutral-200 truncate">
                    {emailAddress}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => sound.playHover()}
                  className="px-3.5 py-1.5 rounded-lg bg-gold/15 hover:bg-gold/25 border border-gold/40 text-gold text-xs font-mono tracking-wider uppercase flex items-center gap-1.5 transition-all shrink-0"
                  data-cursor-text="COPY"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-marine-cyan" />
                      <span className="text-marine-cyan">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] font-mono text-neutral-400">
                Direct inquiries receive prioritized responses during port calls and harbor transitions.
              </p>
            </div>

            {/* Social Channels Cluster */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider block">
                GLOBAL CHANNELS & PROFILES
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="p-3.5 rounded-xl glass-card border border-neutral-800 hover:border-gold/50 flex items-center justify-between group transition-all"
                  data-cursor-text="GITHUB"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-neutral-300 group-hover:text-gold transition-colors" />
                    <span className="font-mono text-xs text-neutral-200 group-hover:text-white">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-gold transition-colors" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="p-3.5 rounded-xl glass-card border border-neutral-800 hover:border-gold/50 flex items-center justify-between group transition-all"
                  data-cursor-text="LINKEDIN"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-neutral-300 group-hover:text-gold transition-colors" />
                    <span className="font-mono text-xs text-neutral-200 group-hover:text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-gold transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl glass-card border border-neutral-800 shadow-2xl">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Dispatch A Message
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-sans mb-8">
                Transmit your project specs, inquiry, or partnership invitation directly below.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-gold/10 border border-gold/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/50 text-gold mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">
                    Transmission Dispatched
                  </h4>
                  <p className="text-neutral-300 text-xs sm:text-sm max-w-md mx-auto">
                    Thank you, {formData.name || 'Engineer'}. Your message has been received. I will review and reply promptly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-gold/40 text-gold text-xs font-mono uppercase tracking-wider hover:bg-gold/10"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                        Your Identity / Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Captain or Engineer"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 focus:border-gold focus:outline-none text-white text-sm font-sans placeholder:text-neutral-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                        Email Coordinates
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 focus:border-gold focus:outline-none text-white text-sm font-sans placeholder:text-neutral-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                      Topic / Mission Vector
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 focus:border-gold focus:outline-none text-neutral-200 text-sm font-sans transition-colors cursor-pointer"
                    >
                      <option value="Maritime Consulting">Maritime Systems & LNG Automation</option>
                      <option value="Embedded Robotics">Embedded Firmware & Robotics Project</option>
                      <option value="Educational Media">Educational Content & Media Collab</option>
                      <option value="Creative Web Tech">Creative 3D / Web Engineering</option>
                      <option value="General Collaboration">General Professional Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                      Transmission Body
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your proposal, specs, or question..."
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-neutral-800 focus:border-gold focus:outline-none text-white text-sm font-sans placeholder:text-neutral-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => sound.playHover()}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold via-amber-warm to-gold text-obsidian-950 font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(229,193,88,0.4)] transition-all"
                    data-cursor-text="TRANSMIT"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Encrypted Transmission</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

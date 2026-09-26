import { useState, useEffect, useRef } from 'react';
import { Terminal, Send, Check, Copy, ArrowUp, Radio, MapPin, Clock, Github, Linkedin, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function TerminalFooter() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'INITIALIZING TACTICAL COMM TERMINAL v4.2...' },
    { type: 'system', text: 'SECURE LINK ESTABLISHED: Mitsui O.S.K. Lines LNG Fleet' },
    { type: 'info', text: 'Type "help" for a list of commands, or "send-msg" to transmit a dispatch.' },
  ]);
  const [dispatchStep, setDispatchStep] = useState(null); // 'name' | 'email' | 'msg' | null
  const [dispatchData, setDispatchData] = useState({ name: '', email: '', message: '' });
  const [istTime, setIstTime] = useState('');
  const [copied, setCopied] = useState(false);
  
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const directEmail = 'augastin.lazar@example.com';

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

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (cmdText) => {
    sound.playClick();
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    // Add user command to history
    const newHistory = [...history, { type: 'user', text: trimmed }];

    // If currently in multi-step dispatch mode
    if (dispatchStep === 'name') {
      setDispatchData((prev) => ({ ...prev, name: trimmed }));
      newHistory.push({ type: 'output', text: `Identity confirmed: ${trimmed}` });
      newHistory.push({ type: 'prompt', text: 'Enter your return email coordinates:' });
      setDispatchStep('email');
      setHistory(newHistory);
      setInputVal('');
      return;
    }

    if (dispatchStep === 'email') {
      setDispatchData((prev) => ({ ...prev, email: trimmed }));
      newHistory.push({ type: 'output', text: `Return channel registered: ${trimmed}` });
      newHistory.push({ type: 'prompt', text: 'Enter your transmission message body:' });
      setDispatchStep('msg');
      setHistory(newHistory);
      setInputVal('');
      return;
    }

    if (dispatchStep === 'msg') {
      const fullPayload = { ...dispatchData, message: trimmed };
      setDispatchData(fullPayload);
      newHistory.push({ type: 'output', text: `Encrypting payload: "${trimmed}"` });
      newHistory.push({ type: 'success', text: `✓ DISPATCH TRANSMITTED to Augastin K Lazar from ${fullPayload.name} (${fullPayload.email}).` });
      newHistory.push({ type: 'info', text: 'Priority acknowledgement will be returned upon harbor transition.' });
      setDispatchStep(null);
      setHistory(newHistory);
      setInputVal('');

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#00F0FF', '#FFB800', '#FF3366'],
      });
      return;
    }

    // Normal command mode
    const cmd = trimmed.toLowerCase();
    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: [
            'AVAILABLE COMMANDS:',
            '  send-msg    - Initialize interactive dispatch to send an email inquiry',
            '  whoami      - Output officer cadet profile and credentials',
            '  status      - Display real-time telemetry, coordinates & grid status',
            '  clear       - Wipe the current terminal output screen',
            '  copy-email  - Copy direct frequency email to clipboard',
            '  exit        - Reset terminal state',
          ].join('\n'),
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: [
            'OFFICER CADRE DOSSIER:',
            '  Name:         Augastin K Lazar',
            '  Affiliation:  Mitsui O.S.K. Lines (MOL) &bull; LNG Fleets (Fraiha, Fuwairit)',
            '  Rank:         Electro Technical Officer Cadet (ETO Cadet) // STCW III/6',
            '  Accolade:     YIP 4.0 State Winner (Embedded Autonomous Telemetry)',
            '  Home Base:    Thrissur, Kerala, India [10.5276° N, 76.2144° E]',
          ].join('\n'),
        });
        break;

      case 'status':
        newHistory.push({
          type: 'output',
          text: [
            'SYSTEM & TELEMETRY STATUS:',
            `  Local Time (IST): ${istTime || 'SYNCHRONIZING...'}`,
            '  Power Grid:       6.6 kV 60Hz 3-Phase // AUTO-SYNC ENABLED',
            '  Cryogenics:       -162°C LNG Boil-Off Gas Monitoring NORMAL',
            '  Carrier Fleet:    LNGC Fraiha & LNGC Fuwairit Operational Cadre',
          ].join('\n'),
        });
        break;

      case 'clear':
        setHistory([
          { type: 'system', text: 'TERMINAL CONSOLE BUFFER CLEARED.' },
          { type: 'info', text: 'Type "help" or "send-msg" to initiate transmission.' },
        ]);
        setInputVal('');
        return;

      case 'send-msg':
      case 'contact':
        newHistory.push({
          type: 'prompt',
          text: 'INITIATING DISPATCH PROTOCOL. Enter your Name or Call-Sign:',
        });
        setDispatchStep('name');
        break;

      case 'copy-email':
        navigator.clipboard.writeText(directEmail);
        setCopied(true);
        newHistory.push({ type: 'success', text: `✓ COPIED TO CLIPBOARD: ${directEmail}` });
        setTimeout(() => setCopied(false), 2500);
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    }
  };

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-24 bg-[#0B0D17] text-white border-t border-neutral-800 overflow-hidden font-mono">
      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-cyan-electric font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[1px] bg-cyan-electric" />
              <span>06 // COMMAND PROMPT & INITIATE COMM</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Tactical Terminal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-electric via-gold-warning to-coral-neon text-glow-cyan">
                Contact & Telemetry
              </span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs space-y-1.5 text-neutral-400">
            <div className="flex items-center gap-2 text-cyan-electric">
              <MapPin className="w-3.5 h-3.5 text-cyan-electric" />
              <span>THRISSUR, KERALA [10.5276° N, 76.2144° E]</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-gold-warning" />
              <span>LOCAL TIME (IST): {istTime || 'SYNCING...'}</span>
            </div>
          </div>
        </div>

        {/* Tactical Terminal Console Box */}
        <div className="hud-bracket rounded-2xl bg-obsidian-900 border border-cyan-electric/40 shadow-2xl overflow-hidden mb-12">
          
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-obsidian-950 border-b border-neutral-800 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-coral-neon/80" />
              <span className="w-3 h-3 rounded-full bg-gold-warning/80" />
              <span className="w-3 h-3 rounded-full bg-cyan-electric/80" />
              <span className="ml-3 text-neutral-400 font-bold">
                augastin@lngc-terminal:~
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-[11px] text-neutral-500">
              <span className="flex items-center gap-1.5 text-cyan-electric">
                <Radio className="w-3 h-3 animate-pulse" />
                SSH // 2222
              </span>
              <span>&bull;</span>
              <span>TLS 1.3 SECURE</span>
            </div>
          </div>

          {/* Quick-Click Command Buttons */}
          <div className="px-5 py-2.5 bg-obsidian-950/60 border-b border-neutral-800/80 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[10px] text-neutral-500 uppercase tracking-wider mr-1">
              QUICK COMMANDS:
            </span>
            {['help', 'whoami', 'send-msg', 'status', 'copy-email', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-obsidian-900 border border-neutral-700/80 hover:border-cyan-electric hover:text-cyan-electric text-[11px] transition-colors"
                data-cursor="EXEC"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal Console Output Scroll Area */}
          <div
            className="p-6 h-[320px] overflow-y-auto space-y-3 font-mono text-xs sm:text-sm bg-obsidian-900/90 text-neutral-300"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line, idx) => {
              if (line.type === 'user') {
                return (
                  <div key={idx} className="flex items-center gap-2 text-cyan-electric">
                    <span className="text-gold-warning font-bold">augastin@terminal:~$</span>
                    <span className="text-white font-bold">{line.text}</span>
                  </div>
                );
              }

              if (line.type === 'prompt') {
                return (
                  <div key={idx} className="text-gold-warning font-bold flex items-center gap-2">
                    <span>[PROMPT]</span>
                    <span>{line.text}</span>
                  </div>
                );
              }

              if (line.type === 'success') {
                return (
                  <div key={idx} className="text-cyan-electric font-semibold">
                    {line.text}
                  </div>
                );
              }

              if (line.type === 'error') {
                return (
                  <div key={idx} className="text-coral-neon">
                    {line.text}
                  </div>
                );
              }

              if (line.type === 'system') {
                return (
                  <div key={idx} className="text-neutral-500 text-[11px]">
                    {line.text}
                  </div>
                );
              }

              return (
                <div key={idx} className="whitespace-pre-wrap leading-relaxed text-neutral-300">
                  {line.text}
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Line */}
          <div className="flex items-center gap-2 px-5 py-4 bg-obsidian-950 border-t border-neutral-800 text-xs sm:text-sm">
            <span className="text-gold-warning font-bold whitespace-nowrap">
              {dispatchStep ? `[INPUT:${dispatchStep.toUpperCase()}] >` : 'augastin@terminal:~$'}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                dispatchStep === 'name'
                  ? 'Type your name / identity and hit Enter...'
                  : dispatchStep === 'email'
                  ? 'Type your email address and hit Enter...'
                  : dispatchStep === 'msg'
                  ? 'Type your message and hit Enter...'
                  : 'Type command (e.g. "send-msg", "help") and press Enter...'
              }
              className="w-full bg-transparent border-none outline-none text-cyan-electric font-mono placeholder:text-neutral-600 caret-cyan-electric"
              autoFocus
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="px-3.5 py-1.5 rounded bg-cyan-electric text-obsidian-950 font-bold hover:scale-105 transition-all shrink-0 flex items-center gap-1.5"
              data-cursor="RUN"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Execute</span>
            </button>
          </div>

        </div>

        {/* Global Links, Cadre Affiliation & Scroll to Top */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
          
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-cyan-electric" />
            <div>
              <div className="text-white font-bold">AUGASTIN K LAZAR</div>
              <div className="text-[10px] text-neutral-500">MITSUI O.S.K. LINES CADET &bull; THRISSUR, KERALA</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/augastinklazar"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-obsidian-900 border border-neutral-800 hover:border-cyan-electric text-neutral-300 hover:text-cyan-electric transition-colors"
              data-cursor="GITHUB"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-obsidian-900 border border-neutral-800 hover:border-cyan-electric text-neutral-300 hover:text-cyan-electric transition-colors"
              data-cursor="LINKEDIN"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <span className="text-neutral-600">|</span>
            <span className="text-[11px] text-neutral-500">
              &copy; {new Date().getFullYear()} ALL SYSTEMS ACTIVE
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded bg-obsidian-900 border border-neutral-700 hover:border-cyan-electric hover:text-cyan-electric transition-all"
            data-cursor="TOP"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
}

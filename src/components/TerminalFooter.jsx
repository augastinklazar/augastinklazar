import { useState, useEffect, useRef } from 'react';
import { Send, ArrowUp, Radio, MapPin, Clock, Github, Linkedin, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';

export default function TerminalFooter() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'INITIALIZING HIGHWAY TACTICAL COMM TERMINAL v4.2...' },
    { type: 'system', text: 'SECURE LINK ESTABLISHED: Mitsui O.S.K. Lines LNG Fleet' },
    { type: 'info', text: 'Type "help" for a list of commands, or "send-msg" to transmit a dispatch.' },
  ]);
  const [dispatchStep, setDispatchStep] = useState(null); // 'name' | 'email' | 'msg' | null
  const [dispatchData, setDispatchData] = useState({ name: '', email: '', message: '' });
  const [istTime, setIstTime] = useState('');
  const [copied, setCopied] = useState(false);
  
  const consoleScrollRef = useRef(null);
  const inputRef = useRef(null);
  const isFirstRender = useRef(true);

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

  // Scroll inner terminal console output ONLY when user interacts (never scroll entire window on mount)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (consoleScrollRef.current) {
      consoleScrollRef.current.scrollTop = consoleScrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdText) => {
    sound.playClick();
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'user', text: trimmed }];

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
        particleCount: 75,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#FF6D00', '#FFC400', '#FFFFFF'],
      });
      return;
    }

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
    <footer id="contact" className="relative py-24 bg-vantablack text-white border-t border-neutral-900 overflow-hidden font-mono">
      {/* Anchor Target for #terminal navigation */}
      <div id="terminal" className="absolute -top-20 pointer-events-none" />

      {/* Blueprint Grid Texture */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-ember font-mono text-xs tracking-widest uppercase mb-3">
              <span className="w-8 h-[1px] bg-ember" />
              <span>06 // COMMAND PROMPT & INITIATE COMM</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Tactical Terminal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember via-signal to-white text-glow-ember">
                Contact & Telemetry
              </span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs space-y-1.5 text-steel">
            <div className="flex items-center gap-2 text-ember">
              <MapPin className="w-3.5 h-3.5 text-ember" />
              <span>THRISSUR, KERALA [10.5276° N, 76.2144° E]</span>
            </div>
            <div className="flex items-center gap-2 text-steel-light">
              <Clock className="w-3.5 h-3.5 text-signal" />
              <span>LOCAL TIME (IST): {istTime || 'SYNCING...'}</span>
            </div>
          </div>
        </div>

        {/* Tactical Terminal Console Box in Matte Charcoal */}
        <div className="hud-bracket rounded-2xl bg-charcoal border border-ember/35 shadow-2xl overflow-hidden mb-12">
          
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-vantablack border-b border-neutral-800 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-ember/80" />
              <span className="w-3 h-3 rounded-full bg-signal/80" />
              <span className="w-3 h-3 rounded-full bg-neutral-600" />
              <span className="ml-3 text-steel font-bold">
                augastin@lngc-terminal:~
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-[11px] text-steel-dark">
              <span className="flex items-center gap-1.5 text-ember font-bold">
                <Radio className="w-3 h-3 animate-pulse" />
                SSH // 2222
              </span>
              <span>&bull;</span>
              <span>TLS 1.3 SECURE</span>
            </div>
          </div>

          {/* Quick-Click Command Buttons */}
          <div className="px-5 py-2.5 bg-vantablack/70 border-b border-neutral-800/80 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[10px] text-steel-dark uppercase tracking-wider mr-1">
              QUICK COMMANDS:
            </span>
            {['help', 'whoami', 'send-msg', 'status', 'copy-email', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded bg-charcoal border border-neutral-700/80 hover:border-ember hover:text-ember text-[11px] text-steel-light transition-colors"
                data-cursor="EXEC"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal Console Output Scroll Area */}
          <div
            ref={consoleScrollRef}
            className="p-6 h-[320px] overflow-y-auto space-y-3 font-mono text-xs sm:text-sm bg-charcoal text-steel-light"
            onClick={() => inputRef.current?.focus({ preventScroll: true })}
          >
            {history.map((line, idx) => {
              if (line.type === 'user') {
                return (
                  <div key={idx} className="flex items-center gap-2 text-ember">
                    <span className="text-signal font-bold">augastin@terminal:~$</span>
                    <span className="text-white font-bold">{line.text}</span>
                  </div>
                );
              }

              if (line.type === 'prompt') {
                return (
                  <div key={idx} className="text-signal font-bold flex items-center gap-2">
                    <span>[PROMPT]</span>
                    <span>{line.text}</span>
                  </div>
                );
              }

              if (line.type === 'success') {
                return (
                  <div key={idx} className="text-signal font-bold">
                    {line.text}
                  </div>
                );
              }

              if (line.type === 'error') {
                return (
                  <div key={idx} className="text-ember font-semibold">
                    {line.text}
                  </div>
                );
              }

              if (line.type === 'system') {
                return (
                  <div key={idx} className="text-steel-dark text-[11px]">
                    {line.text}
                  </div>
                );
              }

              return (
                <div key={idx} className="whitespace-pre-wrap leading-relaxed text-steel-light">
                  {line.text}
                </div>
              );
            })}
          </div>

          {/* Terminal Input Line */}
          <div className="flex items-center gap-2 px-5 py-4 bg-vantablack border-t border-neutral-800 text-xs sm:text-sm">
            <span className="text-signal font-bold whitespace-nowrap">
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
              className="w-full bg-transparent border-none outline-none text-ember font-mono placeholder:text-steel-dark caret-ember"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="px-3.5 py-1.5 rounded bg-ember text-vantablack font-bold hover:scale-105 transition-all shrink-0 flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,109,0,0.4)]"
              data-cursor="RUN"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Execute</span>
            </button>
          </div>

        </div>

        {/* Global Links, Cadre Affiliation & Scroll to Top */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-steel">
          
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-ember" />
            <div>
              <div className="text-white font-bold">AUGASTIN K LAZAR</div>
              <div className="text-[10px] text-steel-dark">MITSUI O.S.K. LINES CADET &bull; THRISSUR, KERALA</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/augastinklazar"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-charcoal border border-neutral-800 hover:border-ember text-steel-light hover:text-ember transition-colors"
              data-cursor="GITHUB"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-charcoal border border-neutral-800 hover:border-ember text-steel-light hover:text-ember transition-colors"
              data-cursor="LINKEDIN"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <span className="text-neutral-800">|</span>
            <span className="text-[11px] text-steel-dark">
              &copy; {new Date().getFullYear()} ALL SYSTEMS ACTIVE
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded bg-charcoal border border-neutral-700 hover:border-ember hover:text-ember transition-all"
            data-cursor="TOP"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
}

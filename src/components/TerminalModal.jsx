import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'AKL-OS Maritime Terminal v3.2.0 [Online]' },
    { type: 'system', text: 'Type "help" for a list of diagnostics commands or "clear" to reset.' },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  about      - Background on Augastin K Lazar & ETO career
  fleet      - Mitsui O.S.K. Lines (MOL) LNG vessel specs & 6.6kV systems
  works      - Featured engineering dossiers & WebGL simulators
  skills     - Hardware, embedded firmware & spatial tools
  contact    - Email & verified social links
  clear      - Clear terminal screen
  exit       - Close terminal window`,
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `Augastin K Lazar:
• Electro Technical Officer Cadet (ETO Cadet) with Mitsui O.S.K. Lines (MOL).
• Based in Thrissur, Kerala, India & sailing international LNG carrier trade routes.
• Demanding convergence of high-voltage power engineering and bare-metal embedded intelligence.`,
        });
        break;

      case 'fleet':
        newHistory.push({
          type: 'output',
          text: `MOL LNG FLEET TELEMETRY:
• Voltage Distribution: 6.6kV 3-Phase 60Hz bus-tie architecture
• Breakers: High-interrupt Vacuum Circuit Breakers (VCB) with undervoltage release
• Machinery: Dual-fuel diesel generators (DFDG), BOG compressors, cryogenic pumps
• Standards: STCW Regulation III/6 ETO compliance & ClassNK automation rules`,
        });
        break;

      case 'works':
        newHistory.push({
          type: 'output',
          text: `FEATURED DOSSIERS:
[01] High-Voltage Maritime Power & Blackout Simulator (6.6kV Synchroscope)
[02] Autonomous Dual-Axis Robotic Gimbal Tracker (STM32 + FreeRTOS + Kalman)
[03] Sub-GHz Industrial Marine Sensor Mesh (868MHz LoRa + ESP32)
[04] Interactive 3D LNG Engine Room Digital Twin (Three.js WebGL)`,
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `CORE DISCIPLINES:
• Firmware: C, C++, ARM Cortex-M4/M7, FreeRTOS, ESP32, Bare-Metal Drivers
• Protocols: LoRa Sub-GHz, CAN 2.0B, RS-485 Modbus RTU, SPI, I2C, MQTT
• Marine HV: 6.6kV switchboards, PMS preferential tripping, Ex-d barriers
• Creative: Three.js, WebGL 2.0, GSAP, React, Vite, Node.js`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `COMMUNICATION CHANNELS:
• Email:    augastinlazar@gmail.com
• LinkedIn: linkedin.com/in/augastinklazar
• GitHub:   github.com/augastinklazar`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      case '':
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div 
        className="w-full max-w-3xl h-[85vh] max-h-[520px] bg-[#161619] rounded-xl border border-[#f0f2f0]/15 shadow-2xl flex flex-col overflow-hidden font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-4 py-3 bg-[#26262b] border-b border-[#f0f2f0]/10 flex items-center justify-between text-[#8b8f8c]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f4ce15]" />
            <span className="text-[#f0f2f0] font-semibold text-[11px]">
              AKL-TERMINAL // ETO-CADET-CONSOLE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-[#1e1e22] text-[#8b8f8c] hover:text-[#f0f2f0] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Console Output Area */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2 text-[#f0f2f0]/90">
          {history.map((line, idx) => (
            <div
              key={idx}
              className={`leading-relaxed whitespace-pre-wrap ${
                line.type === 'system'
                  ? 'text-[#8b8f8c]'
                  : line.type === 'user'
                  ? 'text-[#f4ce15] font-semibold'
                  : line.type === 'error'
                  ? 'text-red-400'
                  : 'text-[#f0f2f0]'
              }`}
            >
              {line.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Prompt */}
        <form onSubmit={onSubmit} className="p-3 bg-[#1e1e22] border-t border-[#f0f2f0]/10 flex items-center gap-2">
          <span className="text-[#379777] font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command (e.g. 'help', 'about', 'fleet', 'works')..."
            className="flex-1 bg-transparent border-none outline-none text-[#f0f2f0] placeholder-[#8b8f8c]/60 font-mono text-xs"
          />
          <button
            type="submit"
            className="px-3 py-1 rounded bg-[#26262b] text-[#f4ce15] hover:text-white transition-colors text-[11px]"
          >
            EXEC
          </button>
        </form>
      </div>
    </div>
  );
}

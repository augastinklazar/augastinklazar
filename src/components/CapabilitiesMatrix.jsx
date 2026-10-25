import { ShieldCheck, Cpu, Box, Video } from 'lucide-react';

export default function CapabilitiesMatrix() {
  const capabilities = [
    {
      category: '01 / MARITIME HIGH-VOLTAGE & AUTOMATION',
      icon: ShieldCheck,
      color: '#f4ce15',
      items: [
        { name: '6.6kV Power Distribution', desc: 'Vacuum circuit breakers (VCB), bus-tie auto-synchronization, and step-down transformers.' },
        { name: 'Power Management Systems (PMS)', desc: 'Load-dependent start/stop, preferential tripping logic, and heavy-consumer interlocks.' },
        { name: 'Cryogenic Instrumentation', desc: 'PT100 RTDs, 4-20mA current loops, boil-off gas compressors, and Ex-d / Ex-ia barriers.' },
        { name: 'Maritime Standards', desc: 'STCW Regulation III/6 ETO compliance, blackout recovery procedures, and marine safety drills.' },
      ]
    },
    {
      category: '02 / EMBEDDED FIRMWARE & ROBOTICS',
      icon: Cpu,
      color: '#379777',
      items: [
        { name: 'Microcontroller Architecture', desc: 'Bare-metal C and C++ on STM32 ARM Cortex-M4/M7 and ESP32 dual-core processors.' },
        { name: 'Real-Time Operating Systems', desc: 'FreeRTOS preemptive multitasking, mutexes, semaphores, queues, and task scheduling.' },
        { name: 'Motor Control & Sensor Fusion', desc: 'Field Oriented Control (FOC), closed-loop PID control, and 6-axis IMU Kalman filtering.' },
        { name: 'Industrial Fieldbuses', desc: 'CAN 2.0B, RS-485 Modbus RTU, SPI, I2C, and long-range 868/915MHz Sub-GHz LoRa mesh.' },
      ]
    },
    {
      category: '03 / CREATIVE TECHNOLOGY & WEBGL',
      icon: Box,
      color: '#f0f2f0',
      items: [
        { name: 'Three.js & WebGL 2.0', desc: 'Instanced rendering, custom GLSL vertex/fragment shaders, and 3D spatial digital twins.' },
        { name: 'Modern Frontend Stack', desc: 'React 18, Vite, GSAP motion timelines, Lenis smooth scrolling, and Tailwind CSS.' },
        { name: 'Interactive Simulations', desc: 'Real-time Canvas state machines, mathematical vector fields, and SCADA-style HMIs.' },
        { name: 'Performance Engineering', desc: '60 FPS render budgets, draw call batching, memory leak prevention, and zero jank.' },
      ]
    },
    {
      category: '04 / TECHNICAL MEDIA & EDUCATION',
      icon: Video,
      color: '#f4ce15',
      items: [
        { name: 'Engineering Demystification', desc: 'Translating dense electrical schematics and marine systems into intuitive visual breakdowns.' },
        { name: 'Scripting & Technical Directing', desc: 'Clear pedagogical walkthroughs for aspiring marine officers and hardware engineers.' },
        { name: 'Media Automation Pipelines', desc: 'Node.js and Python workflows for audio denoising, dynamic schematic renders, and assembly.' },
      ]
    }
  ];

  return (
    <section id="capabilities" className="relative z-10 py-24 w-[90vw] max-w-7xl mx-auto">
      <div className="flex flex-col gap-2 mb-16 border-b border-[#f0f2f0]/10 pb-8">
        <p className="t-16 text-[#8b8f8c] font-mono uppercase tracking-[0.25em]">
          Technical Capabilities & Systems
        </p>
        <p className="t-30 text-[#f0f2f0] font-sans font-normal">
          Disciplines forged between the high seas and the hardware workbench.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {capabilities.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="bg-[#26262b]/40 rounded-xl p-8 border border-[#f0f2f0]/10 hover:border-[#f0f2f0]/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-6 text-xs font-mono tracking-widest uppercase">
                  <Icon className="w-4 h-4" style={{ color: cat.color }} />
                  <span style={{ color: cat.color }}>{cat.category}</span>
                </div>

                <div className="flex flex-col gap-5">
                  {cat.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex flex-col gap-1 pb-4 border-b border-[#f0f2f0]/5 last:border-none last:pb-0">
                      <h4 className="text-[#f0f2f0] font-sans font-medium text-sm sm:text-base">
                        {item.name}
                      </h4>
                      <p className="text-[#8b8f8c] font-sans text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

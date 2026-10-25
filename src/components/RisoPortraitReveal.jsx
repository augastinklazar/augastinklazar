import { useEffect, useRef, useState } from 'react';
import { Scan } from 'lucide-react';
import defaultMe1 from '../assets/me1.png';

export default function RisoPortraitReveal({ imageSrc = defaultMe1 }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const mouseRef = useRef({ x: -200, y: -200, targetX: -200, targetY: -200 });
  const animRef = useRef(null);
  const imageObjRef = useRef(null);
  const risoCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');

    let isDestroyed = false;

    const img = new Image();
    // Do NOT set crossOrigin for bundled local assets
    img.src = imageSrc || defaultMe1;

    const buildRisoLayer = () => {
      if (isDestroyed || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const w = Math.round(rect.width || containerRef.current.clientWidth || 400);
      const h = Math.round(rect.height || containerRef.current.clientHeight || 530);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      // Offscreen canvas for the Vermillion Riso Ink separation
      const risoCanvas = document.createElement('canvas');
      risoCanvas.width = canvas.width;
      risoCanvas.height = canvas.height;
      const rCtx = risoCanvas.getContext('2d');

      const scale = Math.max(w / img.width, h / img.height);
      const iw = img.width * scale;
      const ih = img.height * scale;
      const ix = (w - iw) / 2;
      const iy = (h - ih) / 2;

      rCtx.drawImage(img, ix * dpr, iy * dpr, iw * dpr, ih * dpr);

      try {
        const imgData = rCtx.getImageData(0, 0, risoCanvas.width, risoCanvas.height);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;
          const norm = lum / 255;

          const pixelIdx = i / 4;
          const px = pixelIdx % risoCanvas.width;
          const py = Math.floor(pixelIdx / risoCanvas.width);
          const dither = ((px % 3 === 0 && py % 3 === 0) ? 12 : 0) + ((Math.random() - 0.5) * 16);
          const adjustedNorm = Math.min(Math.max(norm + dither / 255, 0), 1);

          if (adjustedNorm < 0.28) {
            // Graphite substrate shadow
            data[i] = 26 + adjustedNorm * 30;
            data[i + 1] = 26 + adjustedNorm * 20;
            data[i + 2] = 29 + adjustedNorm * 15;
          } else if (adjustedNorm < 0.72) {
            // Vermillion flame ink body (#eb4a2b)
            const t = (adjustedNorm - 0.28) / 0.44;
            data[i] = 26 + (235 - 26) * t;
            data[i + 1] = 26 + (74 - 26) * t;
            data[i + 2] = 29 + (43 - 29) * t;
          } else {
            // Solar gold specular highlight (#f4ce15)
            const t = (adjustedNorm - 0.72) / 0.28;
            data[i] = 235 + (244 - 235) * t;
            data[i + 1] = 74 + (206 - 74) * t;
            data[i + 2] = 43 + (21 - 43) * t;
          }
        }

        rCtx.putImageData(imgData, 0, 0);
        risoCanvasRef.current = risoCanvas;
      } catch (err) {
        console.warn('Canvas pixel processing fallback', err);
        // Fallback: draw directly
        risoCanvasRef.current = risoCanvas;
      }
    };

    img.onload = () => {
      imageObjRef.current = img;
      buildRisoLayer();
    };

    img.onerror = (e) => {
      console.error('Failed to load image for riso portrait', e);
    };

    // If cached already
    if (img.complete && img.naturalWidth !== 0) {
      imageObjRef.current = img;
      buildRisoLayer();
    }

    const handleResize = () => {
      if (imageObjRef.current) {
        buildRisoLayer();
      }
    };
    window.addEventListener('resize', handleResize);

    // Continuous 60fps render loop with spring lens
    const render = () => {
      if (isDestroyed) return;

      const rect = containerRef.current?.getBoundingClientRect();
      const w = rect?.width || containerRef.current?.clientWidth || 400;
      const h = rect?.height || containerRef.current?.clientHeight || 530;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      // Lerp lens coordinates
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.18;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.18;

      ctx.clearRect(0, 0, w, h);

      if (imageObjRef.current && risoCanvasRef.current) {
        const img = imageObjRef.current;
        const scale = Math.max(w / img.width, h / img.height);
        const iw = img.width * scale;
        const ih = img.height * scale;
        const ix = (w - iw) / 2;
        const iy = (h - ih) / 2;

        // 1. Draw base natural photo
        ctx.save();
        ctx.drawImage(img, ix, iy, iw, ih);
        ctx.restore();

        // 2. Overlay Vermillion Riso Layer with circular hole punched out
        ctx.save();
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tCtx = tempCanvas.getContext('2d');

        tCtx.drawImage(risoCanvasRef.current, 0, 0, tempCanvas.width, tempCanvas.height);

        const lx = mouseRef.current.x * dpr;
        const ly = mouseRef.current.y * dpr;
        const radius = 110 * dpr;

        if (lx > -150 && ly > -150) {
          tCtx.globalCompositeOperation = 'destination-out';
          const grad = tCtx.createRadialGradient(lx, ly, 0, lx, ly, radius);
          grad.addColorStop(0, 'rgba(0, 0, 0, 1)');
          grad.addColorStop(0.72, 'rgba(0, 0, 0, 0.95)');
          grad.addColorStop(0.9, 'rgba(0, 0, 0, 0.35)');
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          tCtx.fillStyle = grad;
          tCtx.beginPath();
          tCtx.arc(lx, ly, radius, 0, Math.PI * 2);
          tCtx.fill();
          tCtx.globalCompositeOperation = 'source-over';
        }

        ctx.drawImage(tempCanvas, 0, 0, w, h);
        ctx.restore();

        // 3. Technical Lens Reticle Crosshairs
        if (mouseRef.current.x > 0 && mouseRef.current.x < w && mouseRef.current.y > 0 && mouseRef.current.y < h) {
          ctx.save();
          ctx.strokeStyle = '#f4ce15';
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 4]);

          ctx.beginPath();
          ctx.arc(mouseRef.current.x, mouseRef.current.y, 110, 0, Math.PI * 2);
          ctx.stroke();

          ctx.setLineDash([]);
          ctx.strokeStyle = 'rgba(244, 206, 21, 0.75)';
          ctx.beginPath();
          ctx.moveTo(mouseRef.current.x - 14, mouseRef.current.y);
          ctx.lineTo(mouseRef.current.x + 14, mouseRef.current.y);
          ctx.moveTo(mouseRef.current.x, mouseRef.current.y - 14);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y + 14);
          ctx.stroke();

          ctx.restore();
        }
      }

      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [imageSrc]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseRef.current.targetX = x;
    mouseRef.current.targetY = y;
    setCoords({ x: Math.round(x), y: Math.round(y) });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseRef.current.targetX = -300;
    mouseRef.current.targetY = -300;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md sm:max-w-lg aspect-[3/4] rounded-2xl overflow-hidden bg-[#161619] border border-[#f0f2f0]/10 shadow-2xl group select-none cursor-none"
    >
      {/* Fallback Static Image (Ensures zero blank card under all circumstances) */}
      <img
        src={imageSrc || defaultMe1}
        alt="Augastin K Lazar Portrait"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40 mix-blend-luminosity filter contrast-125"
        loading="eager"
      />

      {/* HTML5 Riso + Optical Clarity Canvas */}
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full block object-cover will-change-transform"
      />

      {/* Top Edition Badge */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase pointer-events-none z-20">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1e1e22]/85 backdrop-blur-md border border-[#f0f2f0]/15 text-[#eb4a2b]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#eb4a2b] animate-pulse" />
          <span>VERMILLION RISO // SPEC-01</span>
        </div>
        <div className="px-2.5 py-1 rounded bg-[#1e1e22]/85 backdrop-blur-md border border-[#f0f2f0]/15 text-[#8b8f8c]">
          <span>STCW ETO ARCHIVE</span>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase pointer-events-none z-20">
        <div className="px-2.5 py-1 rounded bg-[#1e1e22]/85 backdrop-blur-md border border-[#f0f2f0]/15 text-[#f0f2f0] flex items-center gap-2">
          <Scan className="w-3 h-3 text-[#f4ce15]" />
          <span>{isHovered ? `[X:${coords.x} Y:${coords.y}] OPTICAL CLEARANCE` : 'HOVER TO REVEAL OPTICAL VIEW'}</span>
        </div>
        <span className="text-[#8b8f8c] hidden sm:inline text-[9px]">
          PULL INK SEPARATION
        </span>
      </div>

      {/* Registration Marks */}
      <div className="absolute top-2 left-2 text-[#8b8f8c]/40 font-mono text-[10px] pointer-events-none z-20">＋</div>
      <div className="absolute top-2 right-2 text-[#8b8f8c]/40 font-mono text-[10px] pointer-events-none z-20">＋</div>
      <div className="absolute bottom-2 left-2 text-[#8b8f8c]/40 font-mono text-[10px] pointer-events-none z-20">＋</div>
      <div className="absolute bottom-2 right-2 text-[#8b8f8c]/40 font-mono text-[10px] pointer-events-none z-20">＋</div>
    </div>
  );
}

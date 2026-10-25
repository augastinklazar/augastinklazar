import { useEffect, useRef, useState } from 'react';
import { Eye, Sparkles, Sliders, Scan } from 'lucide-react';

export default function RisoPortraitReveal({ imageSrc = '/me1.png' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [lensPos, setLensPos] = useState({ x: -200, y: -200 });
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const mouseRef = useRef({ x: -200, y: -200, targetX: -200, targetY: -200 });
  const animRef = useRef(null);
  const imageObjRef = useRef(null);
  const risoCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Load original image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    img.onload = () => {
      imageObjRef.current = img;

      // Set canvas dimensions based on container
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      // Pre-render the Vermillion Riso Ink layer in offscreen canvas
      const risoCanvas = document.createElement('canvas');
      risoCanvas.width = canvas.width;
      risoCanvas.height = canvas.height;
      const rCtx = risoCanvas.getContext('2d');

      // Draw original image scaled to fill
      const scale = Math.max(rect.width / img.width, rect.height / img.height);
      const iw = img.width * scale;
      const ih = img.height * scale;
      const ix = (rect.width - iw) / 2;
      const iy = (rect.height - ih) / 2;

      rCtx.drawImage(img, ix * dpr, iy * dpr, iw * dpr, ih * dpr);

      // Apply Vermillion Riso Ink Filter (Duotone + Halftone Dither + Grain)
      const imgData = rCtx.getImageData(0, 0, risoCanvas.width, risoCanvas.height);
      const data = imgData.data;

      // Palette definition:
      // Substrate: Dark warm graphite #1a1a1d (26, 26, 29)
      // Primary Ink: Vermillion Flame #eb4a2b (235, 74, 43)
      // Highlight Ink: Radiant Gold #f4ce15 (244, 206, 21)

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Luminance
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        const norm = lum / 255;

        // Riso dither pattern noise
        const pixelIdx = i / 4;
        const px = pixelIdx % risoCanvas.width;
        const py = Math.floor(pixelIdx / risoCanvas.width);
        const dither = ((px % 3 === 0 && py % 3 === 0) ? 14 : 0) + ((Math.random() - 0.5) * 18);
        const adjustedNorm = Math.min(Math.max(norm + dither / 255, 0), 1);

        if (adjustedNorm < 0.28) {
          // Deep Graphite Shadow
          data[i] = 26 + adjustedNorm * 30;
          data[i + 1] = 26 + adjustedNorm * 20;
          data[i + 2] = 29 + adjustedNorm * 15;
        } else if (adjustedNorm < 0.72) {
          // Pure Vermillion Riso Ink Body
          const t = (adjustedNorm - 0.28) / 0.44;
          data[i] = 26 + (235 - 26) * t;
          data[i + 1] = 26 + (74 - 26) * t;
          data[i + 2] = 29 + (43 - 29) * t;
        } else {
          // Vermillion to Warm Champagne / Solar Gold Specular Highlight
          const t = (adjustedNorm - 0.72) / 0.28;
          data[i] = 235 + (244 - 235) * t;
          data[i + 1] = 74 + (206 - 74) * t;
          data[i + 2] = 43 + (21 - 43) * t;
        }
      }

      rCtx.putImageData(imgData, 0, 0);
      risoCanvasRef.current = risoCanvas;
    };

    // Render loop with smooth spring lens
    const render = () => {
      if (!imageObjRef.current || !risoCanvasRef.current) {
        animRef.current = requestAnimationFrame(render);
        return;
      }

      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) {
        animRef.current = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse lerp (0.18 for buttery fluid motion)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.18;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.18;

      setLensPos({ x: mouseRef.current.x, y: mouseRef.current.y });

      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // 1. Draw base: Original crisp full-color image
      const img = imageObjRef.current;
      const scale = Math.max(w / img.width, h / img.height);
      const iw = img.width * scale;
      const ih = img.height * scale;
      const ix = (w - iw) / 2;
      const iy = (h - ih) / 2;

      ctx.save();
      ctx.drawImage(img, ix, iy, iw, ih);
      ctx.restore();

      // 2. Draw Vermillion Riso layer on top, with circular hole punched out where cursor is
      ctx.save();
      
      // Create temporary offscreen layer to punch out lens
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tCtx = tempCanvas.getContext('2d');
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      // Draw the riso image
      tCtx.drawImage(risoCanvasRef.current, 0, 0, tempCanvas.width, tempCanvas.height);

      // If hovered or lens is on screen, punch out circle with smooth radial feathered edge
      const lx = mouseRef.current.x * dpr;
      const ly = mouseRef.current.y * dpr;
      const radius = 105 * dpr;

      if (lx > -150 && ly > -150) {
        tCtx.globalCompositeOperation = 'destination-out';
        const grad = tCtx.createRadialGradient(lx, ly, 0, lx, ly, radius);
        grad.addColorStop(0, 'rgba(0, 0, 0, 1)');
        grad.addColorStop(0.7, 'rgba(0, 0, 0, 0.95)');
        grad.addColorStop(0.9, 'rgba(0, 0, 0, 0.4)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        tCtx.fillStyle = grad;
        tCtx.beginPath();
        tCtx.arc(lx, ly, radius, 0, Math.PI * 2);
        tCtx.fill();
        tCtx.globalCompositeOperation = 'source-over';
      }

      // Draw punched riso layer onto main canvas
      ctx.drawImage(tempCanvas, 0, 0, w, h);
      ctx.restore();

      // 3. Draw Lens Reticle Crosshairs when hovered
      if (mouseRef.current.x > 0 && mouseRef.current.x < w && mouseRef.current.y > 0 && mouseRef.current.y < h) {
        ctx.save();
        ctx.strokeStyle = '#f4ce15';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);

        // Lens boundary ring
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 105, 0, Math.PI * 2);
        ctx.stroke();

        // Crosshairs
        ctx.setLineDash([]);
        ctx.strokeStyle = 'rgba(244, 206, 21, 0.7)';
        ctx.beginPath();
        ctx.moveTo(mouseRef.current.x - 12, mouseRef.current.y);
        ctx.lineTo(mouseRef.current.x + 12, mouseRef.current.y);
        ctx.moveTo(mouseRef.current.x, mouseRef.current.y - 12);
        ctx.lineTo(mouseRef.current.x, mouseRef.current.y + 12);
        ctx.stroke();

        ctx.restore();
      }

      animRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animRef.current);
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
      {/* HTML5 Rendering Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-cover will-change-transform"
      />

      {/* Riso Print Edition Top Header Badge */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase pointer-events-none z-20">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1e1e22]/80 backdrop-blur-md border border-[#f0f2f0]/15 text-[#eb4a2b]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#eb4a2b] animate-pulse" />
          <span>VERMILLION RISO // SPEC-01</span>
        </div>
        <div className="px-2.5 py-1 rounded bg-[#1e1e22]/80 backdrop-blur-md border border-[#f0f2f0]/15 text-[#8b8f8c]">
          <span>STCW ETO ARCHIVE</span>
        </div>
      </div>

      {/* Bottom Technical Telemetry Bar */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest uppercase pointer-events-none z-20">
        <div className="px-2.5 py-1 rounded bg-[#1e1e22]/80 backdrop-blur-md border border-[#f0f2f0]/15 text-[#f0f2f0] flex items-center gap-2">
          <Scan className="w-3 h-3 text-[#f4ce15]" />
          <span>{isHovered ? `[X:${coords.x} Y:${coords.y}] OPTICAL CLEARANCE` : 'HOVER TO REVEAL OPTICAL VIEW'}</span>
        </div>
        <span className="text-[#8b8f8c] hidden sm:inline text-[9px]">
          PULL INK SEPARATION
        </span>
      </div>

      {/* Four Corner Registration Marks */}
      <div className="absolute top-2 left-2 text-[#8b8f8c]/40 font-mono text-[10px] pointer-events-none">＋</div>
      <div className="absolute top-2 right-2 text-[#8b8f8c]/40 font-mono text-[10px] pointer-events-none">＋</div>
      <div className="absolute bottom-2 left-2 text-[#8b8f8c]/40 font-mono text-[10px] pointer-events-none">＋</div>
      <div className="absolute bottom-2 right-2 text-[#8b8f8c]/40 font-mono text-[10px] pointer-events-none">＋</div>
    </div>
  );
}

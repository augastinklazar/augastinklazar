export default function HardwareTextures() {
  return (
    <>
      {/* 1. Global fixed SVG with feTurbulence filter for CRT noise (opacity: 0.04) */}
      <svg
        className="pointer-events-none fixed inset-0 z-[9990] h-full w-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="crt-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#crt-noise)" />
      </svg>

      {/* 2. Hardware scanline overlay simulating hardware CRT with mix-blend-mode: overlay */}
      <div className="hardware-scanlines fixed inset-0 z-[9989]" />
    </>
  );
}

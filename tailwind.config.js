/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#0B0D17', // Nautical Cyberpunk primary dark background
          900: '#0F1222',
          850: '#14182E',
          800: '#1A203D',
          700: '#252D54',
        },
        cyan: {
          electric: '#00F0FF', // Interaction accent
          glow: 'rgba(0, 240, 255, 0.35)',
        },
        gold: {
          warning: '#FFB800', // Warning / Highlights
          light: '#FFE082',
          DEFAULT: '#FFB800',
          rich: '#E6A600',
          glow: 'rgba(255, 184, 0, 0.35)',
        },
        coral: {
          neon: '#FF3366', // Critical / Alert
          glow: 'rgba(255, 51, 102, 0.4)',
        },
        marine: {
          cyan: '#00F0FF',
          deep: '#060B14',
          grid: '#18223B',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'spin-reverse': 'spin-reverse 20s linear infinite',
        'radar-sweep': 'radar-sweep 4s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'blink': 'blink 1s step-start infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

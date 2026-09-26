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
        // Highway Night & Neon Ember Palette
        vantablack: '#050505', // Base / Background
        charcoal: {
          DEFAULT: '#141414', // Surface / Panels
          light: '#1F1F1F',
          border: '#292929',
        },
        ember: {
          DEFAULT: '#FF6D00', // Primary Glow / Interactions / Cursor
          hover: '#FF851A',
          glow: 'rgba(255, 109, 0, 0.4)',
        },
        signal: {
          DEFAULT: '#FFC400', // Secondary Accent / Waypoints / Alerts
          light: '#FFD54F',
          glow: 'rgba(255, 196, 0, 0.4)',
        },
        steel: {
          DEFAULT: '#9E9E9E', // Body Text (Neutral Steel)
          light: '#BDBDBD',
          dark: '#757575',
        },
        // Maintain semantic aliases
        cyan: {
          electric: '#FF6D00',
        },
        gold: {
          warning: '#FFC400',
          DEFAULT: '#FFC400',
        },
        coral: {
          neon: '#FF6D00',
        },
        obsidian: {
          950: '#050505',
          900: '#141414',
          850: '#1A1A1A',
          800: '#242424',
          700: '#2E2E2E',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'radar-sweep': 'radar-sweep 3.5s linear infinite',
        'blink': 'blink 1s step-start infinite',
      },
      keyframes: {
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
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

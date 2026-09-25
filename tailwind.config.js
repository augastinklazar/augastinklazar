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
          950: '#060608',
          900: '#0a0a0f',
          850: '#101017',
          800: '#161620',
          700: '#232332',
        },
        gold: {
          light: '#fbf0b9',
          DEFAULT: '#e5c158',
          rich: '#d4af37',
          deep: '#9c7a23',
          glow: 'rgba(229, 193, 88, 0.35)',
        },
        amber: {
          warm: '#ff9d42',
          glow: 'rgba(255, 157, 66, 0.3)',
        },
        marine: {
          cyan: '#38ef7d',
          electric: '#00f2fe',
          deep: '#0b1f2e',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}

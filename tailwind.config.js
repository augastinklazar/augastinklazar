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
        graphite: {
          DEFAULT: '#1e1e22',
          deep: '#161619',
          surface: '#26262b',
          light: '#2f2f35',
          border: 'rgba(240, 242, 240, 0.08)',
        },
        champagne: {
          DEFAULT: '#f0f2f0',
          pure: '#ffffff',
          dim: '#d2d6d3',
        },
        muted: {
          DEFAULT: '#8b8f8c',
          dark: '#585c59',
          light: '#a3a7a4',
        },
        gold: {
          DEFAULT: '#f4ce15',
          hover: '#ffd829',
          glow: 'rgba(244, 206, 21, 0.35)',
        },
        emerald: {
          DEFAULT: '#379777',
          hover: '#42b38e',
          glow: 'rgba(55, 151, 119, 0.35)',
        },
      },
      fontFamily: {
        sans: ['"Inter Tight"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 32s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

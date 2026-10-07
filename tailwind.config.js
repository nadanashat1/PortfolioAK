/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060c16',
          900: '#0a1322',
          850: '#0d182b',
          800: '#111f38',
          700: '#1a2e50',
          600: '#264270',
        },
        gold: {
          50: '#fbf8ed',
          100: '#f6eed2',
          200: '#eddca5',
          300: '#e1c370',
          400: '#d5aa42',
          500: '#c59325', // Primary executive gold
          600: '#a8751c',
          700: '#845417',
          800: '#6d4219',
          900: '#5c3619',
        },
        cream: {
          50: '#fdfcf9',
          100: '#faf8f3',
          200: '#f4efe4',
          300: '#ebe3d3',
          400: '#ddcfb8',
          500: '#cdb799',
        },
        sand: {
          DEFAULT: '#f7f4ec',
          muted: '#ede7d9',
          card: '#ffffff',
          border: '#e4dcce',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Cairo', 'sans-serif'],
        serif: ['"Playfair Display"', 'Amiri', 'serif'],
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px -1px rgba(197, 147, 37, 0.15)',
        'gold-md': '0 8px 30px -4px rgba(197, 147, 37, 0.2)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'card-soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 12px 35px -5px rgba(15, 23, 42, 0.08)',
        'dark-card': '0 10px 30px -5px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}

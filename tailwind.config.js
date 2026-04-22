/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        crimson: "var(--crimson)",
        cobalt: "var(--cobalt)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        }
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        subheading: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'halftone': 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'web': 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'halftone-size': '20px 20px',
        'web-size': '100px 100px',
      },
      transitionTimingFunction: {
        'overshoot': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'snappy': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      animation: {
        'glitch': 'glitch-anim 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'rgb-split': 'rgb-split 0.15s cubic-bezier(0.25, 1, 0.5, 1) both',
        'subtle-bounce': 'subtle-bounce 2s infinite',
        'pulse-dot': 'pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 6s linear infinite',
        'pulse-line': 'pulse-line 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glitch-anim': {
          '0%': { clipPath: 'inset(10% 0 80% 0)', transform: 'translate(2px)' },
          '20%': { clipPath: 'inset(80% 0 5% 0)', transform: 'translate(-2px)' },
          '40%': { clipPath: 'inset(40% 0 40% 0)', transform: 'translate(2px)' },
          '60%': { clipPath: 'inset(20% 0 60% 0)', transform: 'translate(-2px)', color: '#C0001D' },
          '80%': { clipPath: 'inset(60% 0 20% 0)', transform: 'translate(2px)', color: '#1A3FFF' },
          '100%': { clipPath: 'inset(0 0 0 0)', transform: 'translate(0)', color: 'inherit' },
        },
        'rgb-split': {
          '0%': { textShadow: 'none' },
          '50%': { textShadow: '-2px 0 0 #C0001D, 2px 0 0 #1A3FFF' },
          '100%': { textShadow: 'none' }
        },
        'subtle-bounce': {
          '0%, 100%': { transform: 'translateY(-10%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.5', transform: 'scale(1.2)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'pulse-line': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        }
      }
    },
  },
  plugins: [],
}

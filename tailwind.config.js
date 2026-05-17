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
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b9',
          900: '#4c1d95',
        },
        text: {
          primary: "rgb(var(--text-primary) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
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
        'gradient-violet': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, transparent 50%, rgba(124, 58, 237, 0.1) 100%)',
      },
      backgroundSize: {
        'halftone-size': '20px 20px',
        'web-size': '100px 100px',
      },
      transitionTimingFunction: {
        'overshoot': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'snappy': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      boxShadow: {
        'glow-violet': '0 0 40px rgba(139, 92, 246, 0.3)',
        'glow-violet-sm': '0 0 20px rgba(139, 92, 246, 0.2)',
        'card': '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {},
      keyframes: {}
    },
  },
  plugins: [],
}
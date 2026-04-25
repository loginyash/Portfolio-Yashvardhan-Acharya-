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
        crimson: "rgb(var(--crimson) / <alpha-value>)",
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
      },
      backgroundSize: {
        'halftone-size': '20px 20px',
        'web-size': '100px 100px',
      },
      transitionTimingFunction: {
        'overshoot': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'snappy': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      animation: {},
      keyframes: {}
    },
  },
  plugins: [],
}

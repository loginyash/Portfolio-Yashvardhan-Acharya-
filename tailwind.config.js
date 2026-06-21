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
        cream: '#FCFAF7',
        'grid-green': '#DDE5D6',
        lavender: '#8FAF9B',
        sage: '#8FAF9B',
        gold: '#C8A96B',
        charcoal: '#1F2933',
        ivory: '#FCFAF7',
        'warm-ivory': '#F8F5F0',
        beige: '#D7B89C',
        ink: '#1F2933',
        text: {
          primary: "rgb(var(--text-primary) / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
        }
      },
      fontFamily: {
        display: ["Inter Tight", "sans-serif"],
        subheading: ["Inter Tight", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'grid': 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-size': '24px 24px',
      },
      transitionTimingFunction: {
        'snappy': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}

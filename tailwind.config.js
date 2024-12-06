/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#F3E8FF',  // Light purple tint
          100: '#E9D5FF',
          200: '#D8B4FE',
          300: '#C084FC',
          400: '#A855F7',  // Default purple
          500: '#9333EA',
          600: '#7E22CE',
          700: '#6B21A8',
          800: '#581C87',
          900: '#4C1D95'
        },
        'secondary': {
          50: '#FCE7F3',  // Light pink tint
          100: '#FBCFE8',
          200: '#F9A8D4',
          300: '#F472B6',
          400: '#EC4899',  // Default pink
          500: '#DB2777',
          600: '#BE185D',
          700: '#9D174D',
          800: '#831843',
          900: '#500724'
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'dot': '16px 16px',
      },
      ringColor: {
        DEFAULT: '#A855F7',
      },
      ringWidth: {
        DEFAULT: '2px',
      },
    },
  },
  plugins: [],
};

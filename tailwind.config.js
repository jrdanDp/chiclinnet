/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chiclin-yellow': '#fbc704',
        'chiclin-blue-base': '#0b3a81',
        'chiclin-blue-light': '#045ca4',
        'chiclin-blue-dark': '#0c1a54',
        'chiclin-blue-navy': '#1c2c64',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed', // purple-600
        secondary: '#000000', // black
        accent: '#c4b5fd', // purple-300
        dark: '#1f2937', // gray-800
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // or 'Orbitron' for a more futuristic look
      },
    },
  },
  plugins: [],
};

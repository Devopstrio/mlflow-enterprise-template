/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
        },
        purple: {
          500: '#a855f7',
          600: '#9333ea',
        },
        indigo: {
          600: '#4f46e5',
        }
      },
    },
  },
  plugins: [],
}

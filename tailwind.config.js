/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#060010',
        foreground: '#e2e8f0',
        primary: '#9333ea',
        secondary: '#3b82f6',
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

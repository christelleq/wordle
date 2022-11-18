/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        12: '3rem',
      },
      fontFamily: {
        serif: [
          'Clear\\ Sans',
          'Helvetica\\ Neue',
          'Arial',
          'sans-serif',
          ...defaultTheme.fontFamily.serif,
        ],
        stymie: ['Stymie'],
      },
    },
  },
  plugins: [],
}

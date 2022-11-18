/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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

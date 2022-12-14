const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--custom-font)', ...fontFamily.sans],
        serif: ['var(--custom_font)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
}

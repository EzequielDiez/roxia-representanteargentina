/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    ['./src/**/*.{html,js}', './public/index.html'],
  ],
  safelist: [
    {
      pattern: /bg-\[url\(.*\)\]/,
    },
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#5E8A5A',
      },
    },
  },
  plugins: [],
}

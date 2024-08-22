/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./index_es.html",
    "./index_en.html",
    "./main.js",
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
        'custom-gray-font': '#282828',
        'custom-red-font': '#C42A2A',
      },
      fontFamily: {
        acumin: ["AcuminVariableConcept", "sans-serif"],
        consola: ["Consola", "monospace"],
        consolaBold: ["ConsolaBold", "monospace"],
        myriad: ["MyriadPro", "sans-serif"],
        noto: ["NotoSansBlack", "sans-serif"],
        bebasNeue: ["BebasNeueRegular", "sans-serif"],
      },
      backgroundSize: {
        'custom-width': '75% auto',
      },
    },
  },
  plugins: [],
}

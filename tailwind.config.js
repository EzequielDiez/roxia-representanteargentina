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
    'animate__animated',
    'animate__fadeIn',
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#5E8A5A',
        'custom-gray-font': '#282828',
        'custom-red-font': '#C42A2A',
        'custom-gray-section': '#EFEFEF',
        'custom-red-card': {
          DEFAULT: '#FF1D25',
          '50': 'rgba(255, 29, 37, 0.5)', // 50% de opacidad
          '30': 'rgba(255, 29, 37, 0.3)', // 30% de opacidad
          // Puedes agregar más niveles de opacidad si lo necesitas
        },
        'custom-blue-card': {
          DEFAULT: '#1572FF',
          '30': 'rgba(21, 114, 255, 0.3)',
        },
      },
      fontFamily: {
        acumin: ["AcuminVariableConcept", "sans-serif"],
        consola: ["Consola", "monospace"],
        consolaBold: ["ConsolaBold", "monospace"],
        myriad: ["MyriadPro", "sans-serif"],
        noto: ["NotoSansBlack", "sans-serif"],
        bebasNeue: ["BebasNeueRegular", "sans-serif"],
        notoSansJP: ["NotoSansJPBlack", "sans-serif"],
      },
      backgroundSize: {
        'custom-width': '75% auto',
      },
    },
  },
  plugins: [],
}

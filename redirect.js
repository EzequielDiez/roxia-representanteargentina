document.addEventListener('DOMContentLoaded', function () {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('es')) {
      window.location.href = 'index_es.html';
    } else {
      window.location.href = 'index_en.html';
    }
  });  
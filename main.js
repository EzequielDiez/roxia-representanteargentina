document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;

  // Menú principal
  if (currentPath.includes('index_es.html')) {
    document.getElementById('es-flag').classList.add('bg-green-800');
  } else if (currentPath.includes('index_en.html')) {
    document.getElementById('en-flag').classList.add('bg-green-800');
  }

  // Menú móvil
  if (currentPath.includes('index_es.html')) {
    document.getElementById('es-flag-mobile').classList.add('bg-green-800');
  } else if (currentPath.includes('index_en.html')) {
    document.getElementById('en-flag-mobile').classList.add('bg-green-800');
  }
});
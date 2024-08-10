document.addEventListener('DOMContentLoaded', () => {
  // Menú móvil
  const menuButton = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });

  // Control de idioma
  const currentPath = window.location.pathname;
  const esFlag = document.getElementById('es-flag');
  const enFlag = document.getElementById('en-flag');
  const esFlagMobile = document.getElementById('es-flag-mobile');
  const enFlagMobile = document.getElementById('en-flag-mobile');

  if (currentPath.includes('index_es.html')) {
    esFlag.classList.add('bg-white', 'text-black');
    esFlag.classList.remove('text-white');
    enFlag.classList.remove('bg-white', 'text-black');
    enFlag.classList.add('text-white');

    if (esFlagMobile && enFlagMobile) {
      esFlagMobile.classList.add('bg-white', 'text-black');
      esFlagMobile.classList.remove('text-white');
      enFlagMobile.classList.remove('bg-white', 'text-black');
      enFlagMobile.classList.add('text-white');
    }
  } else if (currentPath.includes('index_en.html')) {
    enFlag.classList.add('bg-white', 'text-black');
    enFlag.classList.remove('text-white');
    esFlag.classList.remove('bg-white', 'text-black');
    esFlag.classList.add('text-white');

    if (esFlagMobile && enFlagMobile) {
      enFlagMobile.classList.add('bg-white', 'text-black');
      enFlagMobile.classList.remove('text-white');
      esFlagMobile.classList.remove('bg-white', 'text-black');
      esFlagMobile.classList.add('text-white');
    }
  }

  // Animación de fondo del navbar
  const navbar = document.querySelector('nav');
  function updateNavbarBackground() {
    const scrollPercentage = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1);
    navbar.style.background = `linear-gradient(to left, #2f855a ${(scrollPercentage * 100) + 40}%, transparent ${(scrollPercentage * 100) + 50}%)`;
  }

  // Ejecuta la animación inmediatamente al cargar la página y al hacer scroll
  updateNavbarBackground();
  document.addEventListener('scroll', updateNavbarBackground);

  document.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const logo = document.getElementById('main-logo');

    // Ajusta la posición y tamaño de la imagen según el scroll
    const xOffset = scrollY * 3;  // Aumenta el valor para mover más a la izquierda
    const yOffset = scrollY * 0.3;  // Ajusta según el movimiento vertical deseado
    const scale = 1 - scrollY * 0.0025; // Ajusta el valor para el tamaño de la imagen

    logo.style.transform = `translate(-${xOffset}px, -${yOffset}px) scale(${scale})`;
  });

});

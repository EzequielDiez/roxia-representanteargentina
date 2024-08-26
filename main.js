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

  // Animación de enlaces del navbar
  const navbarLinks = document.querySelectorAll('.nav-link');
  setTimeout(() => {
    navbarLinks.forEach((link, index) => {
      link.style.animationDelay = `${1.2 + index * 0.1}s`; // Establece un pequeño retraso para cada enlace
      link.classList.add('animate');
    });
  }, 1000); // Ajusta el tiempo según la duración de la animación de fondo

  // Mostrar el logo en el scroll con efecto de degradado
  const navbarLogo = document.getElementById('navbar-logo');
  const inicioScreen = document.getElementById('contentInicio');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Cambia 50 por el valor que necesites
      navbarLogo.classList.add('visible');
      inicioScreen.classList.add('oculto');
    } else {
      navbarLogo.classList.remove('visible');
      inicioScreen.classList.remove('oculto');
    }
  });

  document.addEventListener('scroll', function() {
    const section = document.getElementById('first-section');
    const scrollPosition = window.scrollY || window.pageYOffset;
  
    if (scrollPosition >= section.offsetTop) {
      section.style.backgroundAttachment = 'fixed';
    } else {
      section.style.backgroundAttachment = 'scroll';
    }
  });
  
});

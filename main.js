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

  // Static variables - That do not change while scrolling
  const header = document.querySelector('#navbar'); // Cambiado para seleccionar el nav con el ID navbar
  const logo = document.querySelector('#main-logo'); // Cambiado para seleccionar el logo con el ID main-logo
  const scrollTo = 120; // Animation until scrolled to this point

  const headerHeight = header.offsetHeight; // Get height of header
  const logoHeight = logo.offsetHeight; // Get logo height

  // Scroll function
  window.addEventListener('scroll', function() {
  // Dynamic variables - That do change while scrolling
  const yPos = window.scrollY; // Get the scroll Y-position
  let yPer = yPos / scrollTo; // Calculate percentage of scroll

  // If percentage is over 100, set to 100
  if (yPer > 1) {
    yPer = 1;
  }

  // Dynamic variables for the elements
  const logoPos = (-1 * (yPer * 50) + 50); // Calculate position of logo (starting from 50%)
  const logoSize = ((headerHeight * yPer) - (logoHeight * yPer) + logoHeight); // Calculate new size height for logo
  const headerPos = ((yPer * headerHeight) - headerHeight); // Calculate position of header (starting from minus the height of itself)

  // Change the top, left, transform, and height of the logo
  logo.style.top = logoPos + '%';
  logo.style.left = logoPos + '%';
  logo.style.transform = `translate3d(-${logoPos}%, -${logoPos}%, 0)`;
  logo.style.height = logoSize + 'px';

  // Change the transform and opacity of the header
  header.style.top = headerPos + 'px';
  header.style.opacity = yPer;
});


});

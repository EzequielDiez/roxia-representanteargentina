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

  const updateFlagStyles = (flag, addClasses, removeClasses) => {
    flag.classList.add(...addClasses);
    flag.classList.remove(...removeClasses);
  };

  if (currentPath.includes('index_es.html')) {
    updateFlagStyles(esFlag, ['bg-white', 'text-black'], ['text-white']);
    updateFlagStyles(enFlag, ['text-white'], ['bg-white', 'text-black']);

    if (esFlagMobile && enFlagMobile) {
      updateFlagStyles(esFlagMobile, ['bg-white', 'text-black'], ['text-white']);
      updateFlagStyles(enFlagMobile, ['text-white'], ['bg-white', 'text-black']);
    }
  } else if (currentPath.includes('index_en.html')) {
    updateFlagStyles(enFlag, ['bg-white', 'text-black'], ['text-white']);
    updateFlagStyles(esFlag, ['text-white'], ['bg-white', 'text-black']);

    if (esFlagMobile && enFlagMobile) {
      updateFlagStyles(enFlagMobile, ['bg-white', 'text-black'], ['text-white']);
      updateFlagStyles(esFlagMobile, ['text-white'], ['bg-white', 'text-black']);
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
    if (window.scrollY > 100) { // Cambia 100 por el valor que necesites
      navbarLogo.classList.add('visible');
      inicioScreen.classList.add('oculto');
    } else {
      navbarLogo.classList.remove('visible');
      inicioScreen.classList.remove('oculto');
    }
  });

  document.addEventListener('scroll', function () {
    const section = document.getElementById('first-section');
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= section.offsetTop) {
      section.style.backgroundAttachment = 'fixed';
    } else {
      section.style.backgroundAttachment = 'scroll';
    }
  });

  // Función para manejar la observación y animación de elementos
  const handleObserver = (targetElements, animationClasses) => {
    const observerOptions = {
      root: null, // La ventana es el viewport
      rootMargin: '0px',
      threshold: 1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('opacity-100', ...animationClasses[entry.target.id]);
          observer.unobserve(entry.target); // Deja de observar una vez que la animación se activa
        }
      });
    }, observerOptions);

    // Observa los elementos
    targetElements.forEach(element => observer.observe(element));
  };

  // Elementos a observar con sus respectivas animaciones
  const targets = [
    document.getElementById('boxFirstSection'),
    document.getElementById('first-client-box'),
    document.getElementById('second-client-box')
  ];

  // Clases de animación para cada elemento
  const animationClasses = {
    'boxFirstSection': ['animate__animated', 'animate__fadeInUp'],
    'first-client-box': ['animate__fadeInLeft'],
    'second-client-box': ['animate__fadeInRight']
  };

  handleObserver(targets, animationClasses);

  // Inicialización de Swiper
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
  });
});

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
    document.getElementById('second-client-box'),
    document.getElementById('tituloRepuestos')
  ];

  // Clases de animación para cada elemento
  const animationClasses = {
    'boxFirstSection': ['animate__animated', 'animate__fadeInUp'],
    'first-client-box': ['animate__fadeInLeft'],
    'second-client-box': ['animate__fadeInRight'],
    'tituloRepuestos': ['animate__fadeInLeft']
  };

  handleObserver(targets, animationClasses);

  // Modal
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const modalContent = document.getElementById('modal-content');
  const modalTriggers = document.querySelectorAll('.modal-trigger');
  const closeButton = document.getElementById('modal-close-button');

  const adjustModalSize = () => {
    if (modalImage.naturalWidth > modalImage.naturalHeight) {
      // Imagen horizontal
      modalContent.classList.remove('max-w-3xl', 'max-h-[90vh]');
      modalContent.classList.add('max-w-[70vw]', 'max-h-[70vw]');
    } else {
      // Imagen vertical o cuadrada
      modalContent.classList.remove('max-w-[70vw]', 'max-h-[70vw]');
      modalContent.classList.add('max-w-3xl', 'max-h-[90vh]');
    }

    // Aplicar padding o margen adicional si es necesario
    modalImage.style.margin = '16px auto';
    modalContent.style.padding = '16px';
  };

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const imageSrc = trigger.getAttribute('data-image');
      modalImage.src = imageSrc;

      // Mostrar modal con transición
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
        modalContent.classList.remove('scale-75');
        modalContent.classList.add('scale-100');
      }, 10); // Pequeño delay para que se aplique la transición

      // Ajustar tamaño del modal según la imagen
      modalImage.onload = adjustModalSize;
    });
  });

  closeButton.addEventListener('click', () => {
    // Ocultar modal con transición
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-75');

    // Esperar la duración de la transición para ocultar completamente el modal
    setTimeout(() => {
      modal.classList.add('hidden');
    }, 500); // Duración de la transición en milisegundos
  });
});

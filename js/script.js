document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open');
    const menuCloseIcon = document.getElementById('menu-close');

    if (menuToggle && mobileMenu && menuOpenIcon && menuCloseIcon) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            menuOpenIcon.classList.toggle('hidden');
            menuCloseIcon.classList.toggle('hidden');
        });
    }

    const navbar = document.getElementById('navbar');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('bg-black');
        } else {
            navbar.classList.remove('bg-black');
        }
    });


    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function showNextItem() {

        carouselItems[currentItem].classList.remove('active');


        currentItem = (currentItem + 1) % carouselItems.length;

        
        carouselItems[currentItem].classList.add('active');
    }

    setInterval(showNextItem, 7000); // 5 segundos

    // Selecciona todos los elementos con la clase "animar-en-scroll"
    const elementosAnimados = document.querySelectorAll('.animar-en-scroll');

    // Opciones para el Intersection Observer
    const opcionesObservador = {
        root: null, // El viewport (la ventana del navegador) es el área de detección
        rootMargin: '0px',
        threshold: 0.5 // El 50% del elemento debe estar visible para que se active
    };

    // Callback que se ejecuta cuando el elemento entra o sale de la vista
    const callbackObservador = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento es visible, añade la clase "visible" y deja de observarlo
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    // Crea la instancia del Intersection Observer
    const observer = new IntersectionObserver(callbackObservador, opcionesObservador);

    // Itera sobre los elementos y pídele al observador que los vigile
    elementosAnimados.forEach(elemento => {
        observer.observe(elemento);
    });


});


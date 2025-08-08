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

});

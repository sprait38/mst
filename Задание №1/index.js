let headermenu = document.querySelector('.header-menu');
let menu = document.querySelector('.header_nav');
let menulinks = menu.querySelectorAll('.header-link');
headermenu.addEventListener('click',
    function() {
        headermenu.classList.toggle('header-menu--active');
        menu.classList.toggle('header_nav--active');
        document.body.classList.toggle('stop-scroll');
    })
menulinks.forEach(function(el) {
    el.addEventListener('click', function() {
        headermenu.classList.remove('header-menu--active');
        menu.classList.remove('header_nav--active');
        document.body.classList.remove('stop-scroll');
    })
})
//SE AGREGAN LOS ELEMENTOS DEL HTML
const iconMenu = document.getElementById('navIconMenu');
const nav = document.querySelector('.navegacion');
const iconClose = document.getElementById('navIconClose');

//SE AGREGA LA CLASE DEL MENI RESPONSIVO
iconMenu.addEventListener('click', () => {
    nav.classList.toggle('nav--open')
});
// ELIMINAR EL MENU RESPONSIVE
iconClose.addEventListener('click', (() => {
    nav.classList.remove('nav--open')

}))

// SLIDER
const swiper = new Swiper('.swiper', {
    loop: true,
    speed:500,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay:{
        delay:5000
    }
});
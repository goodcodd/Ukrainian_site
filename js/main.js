const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    startPosition: 1,
    items: 1,
    responsive: {
        360: {
            startPosition: 1,
            items: 1
        },
        540: {
            startPosition: 1,
            items: 1
        },
        600: {
            startPosition: 1,
            items: 2
        },
        850: {
            startPosition: 1,
            items: 3
        },
        1000: {
            items: 3,
            margin: 20
        },
        1200: {
            items: 3,
            margin: 30
        },
    }
});

$('.slider__btn--prev').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('prev.owl.carousel');
})

//nav icon
const navBtn = document.querySelector('.nav_togle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile')
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
};

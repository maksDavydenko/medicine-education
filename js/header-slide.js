$(document).ready(function () {
    $('.header-slider-wrap').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        fade: true,

    });
});


$('.js-header-slide-prev').on('click', function () {
    $('.header-slider-wrap').slick('slickPrev');
});


$('.js-header-slide-next').on('click', function () {
    $('.header-slider-wrap').slick('slickNext');

});


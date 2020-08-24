$(document).ready(function () {
    $('.universities__slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        // adaptiveHeight: true,
        dots: true,
        appendDots: $('.js-slider-line-universities'),
        // autoplay: true,
        // autoplaySpeed: 5000,


        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                }
            },

            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerMode: false,
                }
            }
        ]
    });
});

var filtered = false;

$('.js-ua-universes').on('click', function () {
    filterSlider()
    $('.universities__slider').slick('slickFilter', '.js-ua-universe');
    $('.js-ua-universes').addClass('btn--university-active');
});

$('.js-rus-universes').on('click', function () {
    filterSlider()
    $('.universities__slider').slick('slickFilter', '.js-rus-universe');
    $('.js-rus-universes').addClass('btn--university-active');
});

$('.js-all-universes').on('click', function () {
    filterSlider();
    $('.js-all-universes').addClass('btn--university-active');
});

function filterSlider() {
    $('.universities__slider').slick('slickUnfilter');
    $('.btn-universities-nav').removeClass('btn--university-active');
}


$('.js-university-slider__next-btn').on('click', function () {
    $('.universities__slider').slick('slickNext');

});

$('.js-university-slider__prev-btn').on('click', function () {
    $('.universities__slider').slick('slickPrev');
});


$('.universities__slider').on('init', function (slick) {
    let active = $('.universities__slider .slick-active');
    let first = active.eq(0);
    let last = active.eq(active.length - 1);
    first.addClass('opacity');
    last.addClass('opacity');
});

$('.universities__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    let active = $('.universities__slider .slick-active');
    let first = active.eq(0);
    let last = active.eq(active.length - 1);
    active.removeClass('opacity')
    first.addClass('opacity');
    last.addClass('opacity');
});


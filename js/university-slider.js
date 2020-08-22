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
                    slidesToShow: 4,
                    centerMode: true,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4
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
                    slidesToShow: 1
                }
            }
        ]
    });
});

var filtered = false;

$('.js-ua-universes').on('click', function () {
    if (filtered === false) {
        $('.universities__slider').slick('slickFilter', '.js-test');
        filtered = true;
    }
});


// $('.universities-navigations').on('click', () => {
//     $('.btn--university').removeClass('.btn--university-active')
// })



$('.js-university-slider__next-btn').on('click', function () {
    $('.universities__slider').slick('slickNext');

});



$('.js-university-slider__prev-btn').on('click', function () {
    $('.universities__slider').slick('slickPrev');
});


$('.universities__slider').on('init', function (slick) {
    var active = $('.universities__slider .slick-active');
    var first = active.eq(0);
    var last = active.eq(active.length - 1);
    first.addClass('opacity');
    last.addClass('opacity');
});

$('.universities__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var active = $('.universities__slider .slick-active');
    var first = active.eq(0);
    var last = active.eq(active.length - 1);
    active.removeClass('opacity')
    first.addClass('opacity');
    last.addClass('opacity');
});





$(document).ready(function () {
    $('.courses__slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        appendDots: $('.js-slider-line-courses'),


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
                    slidesToShow: 6
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


$('.js-courses-slider__next-btn').on('click', function () {
    $('.courses__slider').slick('slickNext');
});



$('.js-courses-slider__prev-btn').on('click', function () {
    $('.courses__slider').slick('slickPrev');
});



$('.courses__slider').on('init', function (slick) {
    var active = $('.courses__slider .slick-active');
    var first = active.eq(0);
    var last = active.eq(active.length - 1);
    first.addClass('opacity');
    last.addClass('opacity');
});

$('.courses__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var active = $('.courses__slider .slick-active');
    var first = active.eq(0);
    var last = active.eq(active.length - 1);
    active.removeClass('opacity')
    first.addClass('opacity');
    last.addClass('opacity');
});


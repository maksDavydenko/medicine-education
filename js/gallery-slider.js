$(document).ready(function () {
    $('.gallery__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        dots: true,
        appendDots: $('.js-slider-line-gallery'),
        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
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
                    centerMode: true,
                    slidesToShow: 1,
                    // centerPadding: '100px',
                }
            }
        ]
    });
});





//suctom buttons

$('.js-gallery-slider__next-btn').on('click', function () {
    $('.gallery__slider').slick('slickNext');
});


$('.js-gallery-slider__prev-btn').on('click', function () {
    $('.gallery__slider').slick('slickPrev');

});



$('.gallery-slider-mobile--next').on('click', function () {
    $('.gallery__slider').slick('slickNext');
});


$('.gallery-slider-mobile--prev').on('click', function () {
    $('.gallery__slider').slick('slickPrev');

});




$('.gallery__slider').on('init', function (slick) {
    var active = $('.gallery__slider .slick-active');
    var first = active.eq(0);
    var last = active.eq(active.length - 1);
    first.addClass('opacity');
    last.addClass('opacity');
});

$('.gallery__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    var active = $('.gallery__slider .slick-active');
    var first = active.eq(0);
    var last = active.eq(active.length - 1);
    active.removeClass('opacity')
    first.addClass('opacity');
    last.addClass('opacity');
});


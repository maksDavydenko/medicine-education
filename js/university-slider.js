$(document).ready(function () {
    $('.universities__slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        adaptiveHeight: true,
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
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});


// $('.sliderSlick').on('init', function (slick) {
// var active = $('.sliderSlick .slick-active');
// var first = active.eq(0);
// var last = active.eq(active.length - 1);
// first.addClass('test');
// last.addClass('test');
// });

// $('.sliderSlick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     var active = $('.sliderSlick .slick-active');
//     var first = active.eq(0);
//     var last = active.eq(active.length - 1);
//     active.removeClass('test')
//     first.addClass('test');
//     last.addClass('test');
// });


// let slider = 1;


//suctom buttons

// let currentSlide = 1;

// const sliders = document.querySelectorAll('.js-slider-item-universities');
// const sliderLine = document.querySelector('.js-slider-line-universities');

// const fragment = new DocumentFragment();

// const leftPos = 100 / (sliders.length - 1); // left from 0% to 100%


// console.log(leftPos)

// for (let i = 0; i < sliders.length; i++) {
//     const li = document.createElement('li');
//     if (i === 0) {
//         li.classList.add('slider-line-point--active');
//     }
//     li.style.left = leftPos * i + '%';
//     li.classList.add('slider-line-point', 'slider-line-point--university')
//     fragment.append(li)
// }

// sliderLine.append(fragment)

// const sliderLinePoints = document.querySelectorAll('.slider-line-point--university')

$('.js-university-slider__next-btn').on('click', function () {
    $('.universities__slider').slick('slickNext');
    // currentSlide++;

    // currentSlide = currentSlide > sliders.length ? 1 : currentSlide

    // console.log(currentSlide)
    // sliderLinePoints.forEach(i => {
    //     i.classList.remove('slider-line-point--active')
    // })

    // sliderLinePoints[currentSlide - 1].classList.add('slider-line-point--active');

});



$('.js-university-slider__prev-btn').on('click', function () {
    $('.universities__slider').slick('slickPrev');


    // currentSlide--;

    // currentSlide = currentSlide < 1 ? sliders.length : currentSlide;

    // sliderLinePoints.forEach(i => {
    //     i.classList.remove('slider-line-point--active')
    // })

    // sliderLinePoints[currentSlide - 1].classList.add('slider-line-point--active');

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





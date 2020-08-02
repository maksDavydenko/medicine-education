$(document).ready(function () {
    $('.gallery__slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
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
                breakpoint: 1100,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2
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





//suctom buttons

$('.js-gallery-slider__next-btn').on('click', function () {
    $('.gallery__slider').slick('slickNext');
});



$('.js-gallery-slider__prev-btn').on('click', function () {
    $('.gallery__slider').slick('slickPrev');

});
// let currentSlideGallery = 1;

// const slidersGallery = document.querySelectorAll('.js-slider-item-gallery');
// const sliderLineGallery = document.querySelector('.js-slider-line-gallery');

// const fragmentGallery = new DocumentFragment();

// const leftPosGallery = 100 / (slidersGallery.length - 1); // left from 0% to 100%
// console.log('slidersGallery', slidersGallery.length)


// for (let i = 0; i < slidersGallery.length; i++) {
//     const li = document.createElement('li');
//     if (i === 0) {
//         li.classList.add('slider-line-point--active');
//     }
//     li.style.left = leftPosGallery * i + '%';
//     li.classList.add('slider-line-point', 'slider-line-point--gallery')
//     fragmentGallery.append(li)
// }

// sliderLineGallery.append(fragmentGallery)

// const sliderLinePointsGallery = document.querySelectorAll('.slider-line-point--gallery');


// $('.js-gallery-slider__next-btn').on('click', function () {
//     $('.gallery__slider').slick('slickNext');


//     currentSlideGallery++;

//     currentSlideGallery = currentSlideGallery > slidersGallery.length ? 1 : currentSlideGallery

//     sliderLinePointsGallery.forEach(i => {
//         i.classList.remove('slider-line-point--active')
//     })

//     sliderLinePointsGallery[currentSlideGallery - 1].classList.add('slider-line-point--active');

// });



// $('.js-gallery-slider__prev-btn').on('click', function () {
//     $('.gallery__slider').slick('slickPrev');

//     currentSlideGallery--;

//     currentSlideGallery = currentSlideGallery < 1 ? slidersGallery.length : currentSlideGallery;

//     sliderLinePointsGallery.forEach(i => {
//         i.classList.remove('slider-line-point--active')
//     })

//     sliderLinePointsGallery[currentSlideGallery - 1].classList.add('slider-line-point--active');


// });




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


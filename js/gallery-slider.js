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


        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '40px',
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
let currentSlideGallery = 1;

const slidersGallery = document.querySelectorAll('.js-slider-item-gallery');
const sliderLineGallery = document.querySelector('.js-slider-line-gallery');

const fragmentGallery = new DocumentFragment();

const leftPosGallery = 100 / (slidersGallery.length - 1); // left from 0% to 100%
console.log('slidersGallery', slidersGallery.length)


for (let i = 0; i < slidersGallery.length; i++) {
    const li = document.createElement('li');
    if (i === 0) {
        li.classList.add('slider-line-point--active');
    }
    li.style.left = leftPosGallery * i + '%';
    li.classList.add('slider-line-point', 'slider-line-point--gallery')
    fragmentGallery.append(li)
}

sliderLineGallery.append(fragmentGallery)

const sliderLinePointsGallery = document.querySelectorAll('.slider-line-point--gallery');


$('.js-gallery-slider__next-btn').on('click', function () {
    $('.gallery__slider').slick('slickNext');


    currentSlideGallery++;

    currentSlideGallery = currentSlideGallery > slidersGallery.length ? 1 : currentSlideGallery

    sliderLinePointsGallery.forEach(i => {
        i.classList.remove('slider-line-point--active')
    })

    sliderLinePointsGallery[currentSlideGallery - 1].classList.add('slider-line-point--active');
    // var num = $('.item-num-slide');
    // num.removeClass('item-num-slide_active');

    // slider = slider >= num.length ? 0 : slider;
    // slider++;

    // num[slider - 1].classList.add('item-num-slide_active');


    // console.log(slider)


});



$('.js-gallery-slider__prev-btn').on('click', function () {
    $('.gallery__slider').slick('slickPrev');

    currentSlideGallery--;

    currentSlideGallery = currentSlideGallery < 1 ? slidersGallery.length : currentSlideGallery;

    sliderLinePointsGallery.forEach(i => {
        i.classList.remove('slider-line-point--active')
    })

    sliderLinePointsGallery[currentSlideGallery - 1].classList.add('slider-line-point--active');
    // var num = $('.item-num-slide');
    // num.removeClass('item-num-slide_active');

    // slider = slider <= 0 ? num.length : slider;
    // slider--;


    // num[slider].classList.add('item-num-slide_active');

    // console.log(slider)

    // curSlider.addClass('item-num-slide_active');
    // var active = $('.sliderSlick .slick-active');
    // var first = active.eq(0);
    // var last = active.eq(active.length - 1);
    // active.removeClass('test')
    // first.addClass('test');
    // last.addClass('test');

});


// $('.sliderSlick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     var active = $('.slick-active');

// var slickSlide = $('.slick-slider');
// var first = active.eq(0);
// var last = active.eq(active.length - 1);

// active.removeClass('test');
// // slickSlide.removeClass('curSlider');


// var slides = document.querySelectorAll('.slick-slide');

// slides.forEach(slider => {
//     slider.classList.remove('curSlider');
// })

// var curSlide = document.querySelector('.slick-current');
// curSlide.classList.add('curSlider');

// first.addClass('test');
// last.addClass('test');
// var curSlide = $('.curSlide');
// curSlide.removeClass('curSlide');


// });


// $('.universities__slider').on('init', function (slick) {
//     var active = $('.universities__slider .slick-active');
//     var first = active.eq(0);
//     var last = active.eq(active.length - 1);
//     first.addClass('opacity');
//     last.addClass('opacity');
// });

// $('.universities__slider').on('init', function (slick) {
//     var active = $('.universities__slider .slick-active');
//     var first = active.eq(0);
//     var last = active.eq(active.length - 1);
//     first.addClass('test');
//     last.addClass('test');
// });

// $('.universities__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     var active = $('.slick-active');

//     var first = active.eq(0);
//     var last = active.eq(active.length - 1);

//     active.removeClass('opacity');

//     first.addClass('opacity');
//     last.addClass('opacity');

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


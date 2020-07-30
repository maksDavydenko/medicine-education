$(document).ready(function () {
    $('.courses__slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        adaptiveHeight: true,
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

let currentSlideCourses = 1;

const slidersCourses = document.querySelectorAll('.js-slider-item-courses');
const sliderLineCourses = document.querySelector('.js-slider-line-courses');

const fragmentCourses = new DocumentFragment();

const leftPosCourses = 100 / (slidersCourses.length - 1); // left from 0% to 100%
console.log('slidersCourses', slidersCourses.length)


for (let i = 0; i < slidersCourses.length; i++) {
    const li = document.createElement('li');
    if (i === 0) {
        li.classList.add('slider-line-point--active');
    }
    li.style.left = leftPosCourses * i + '%';
    li.classList.add('slider-line-point', 'slider-line-point--courses')
    fragmentCourses.append(li)
}

sliderLineCourses.append(fragmentCourses)

const sliderLinePointsCourses = document.querySelectorAll('.slider-line-point--courses')


$('.js-courses-slider__next-btn').on('click', function () {
    $('.courses__slider').slick('slickNext');


    currentSlideCourses++;

    currentSlideCourses = currentSlideCourses > slidersCourses.length ? 1 : currentSlideCourses

    sliderLinePointsCourses.forEach(i => {
        i.classList.remove('slider-line-point--active')
    })

    sliderLinePointsCourses[currentSlideCourses - 1].classList.add('slider-line-point--active');
    // var num = $('.item-num-slide');
    // num.removeClass('item-num-slide_active');

    // slider = slider >= num.length ? 0 : slider;
    // slider++;

    // num[slider - 1].classList.add('item-num-slide_active');


    // console.log(slider)


});



$('.js-courses-slider__prev-btn').on('click', function () {
    $('.courses__slider').slick('slickPrev');

    currentSlideCourses--;

    currentSlideCourses = currentSlideCourses < 1 ? slidersCourses.length : currentSlideCourses;

    sliderLinePointsCourses.forEach(i => {
        i.classList.remove('slider-line-point--active')
    })

    sliderLinePointsCourses[currentSlideCourses - 1].classList.add('slider-line-point--active');

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

// let sliders = document.querySelector('.courses__slider').childNodes;

// // console.log(sliders.childNodes);

// sliders = Array.from(sliders);


// console.log(sliders);

// sliders.forEach(slider => {
//     try {
//         if (slider.className.contains('.slick-slide') && !slider.classList.contains('.slick-cloned')) {

//         }
//     }
//     catch (e) {
//         console.log(e)
//     }

// })
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


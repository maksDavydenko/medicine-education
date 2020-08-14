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
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3
                }
            },
            // {
            //     breakpoint: 900,
            //     settings: {
            //         slidesToShow: 3
            //     }
            // },
            {
                breakpoint: 480,
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
        // $(this).text('Unfilter Slides');
        filtered = true;
        // } else {
        //     $('.filtering').slick('slickUnfilter');
        //     $(this).text('Filter Slides');
        //     filtered = false;
        // }
    }
});


// btnUaUniversity.addEventListener('click', () => {
//     console.log('btnUaUniversity');

//     sliderWrap.innerHTML = `<div class="slider-item js-slider-item-courses">
//     <img src="./img/photo/kai 1.png" alt="slide" class="slider-item__photo">
//     <div class="slider-item__content">
//         <h4 class="slider-item__header">Saint-Petersburg State Agrarian University</h4>
//         <div class="line line--slide-item">
//             <span class="line-circle line-circle--slide-item"></span>
//         </div>
//         <p class="slider-item__info">
//             gkdhvdvkhdk fvhscsdck jsckjs dkjcsd kjckjsd ckjsdbckjs bdkcskjdbckjs bckjs bckjskjc scndsncdv
//             fdvfvdjhj hhhvhjvv hjvhjvh jvjhvjhvjhvjh vhjjhvjhvjhv jhvjhjhv jvjvjhvhj jhjhvjv jvjhvjhv jhvj
//         </p>
//         <a href="#" class="btn slider-item__btn">More Details</a>
//     </div>
// </div>
// <div class="slider-item js-slider-item-courses">
//     <img src="./img/photo/kai 1.png" alt="slide" class="slider-item__photo">
//     <div class="slider-item__content">
//         <h4 class="slider-item__header">Saint-Petersburg State Agrarian University</h4>
//         <div class="line line--slide-item">
//             <span class="line-circle line-circle--slide-item"></span>
//         </div>
//         <p class="slider-item__info">
//             gkdhvdvkhdk fvhscsdck jsckjs dkjcsd kjckjsd ckjsdbckjs bdkcskjdbckjs bckjs bckjskjc scndsncdv
//             fdvfvdjhj hhhvhjvv hjvhjvh jvjhvjhvjhvjh vhjjhvjhvjhv jhvjhjhv jvjvjhvhj jhjhvjv jvjhvjhv jhvj
//         </p>
//         <a href="#" class="btn slider-item__btn">More Details</a>
//     </div>`



// })
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





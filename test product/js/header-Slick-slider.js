$(document).ready(function () {
    $('.wrap-slide').slick({
        // centerMode: true,
        infinite: true,
        // centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        speed: 1000,

        // speed: 1000,
        // autoplay: true,
        // autoplaySpeed: 2000,


        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             // centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             // centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });
});


$(document).ready(function () {
    $('.slider-test').slick({
        // centerMode: true,
        infinite: true,
        // centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 3,
        // arrows: false,
        speed: 1000,
        // fade: true,

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

$('.btn-next').on('click', function () {
    $('.wrap-slide').slick('slickNext');
    $('.slider-test').slick('slickNext');


    // var num = $('.item-num-slide');
    // num.removeClass('item-num-slide_active');

    // slider = slider >= num.length ? 0 : slider;
    // slider++;

    // num[slider - 1].classList.add('item-num-slide_active');


    // console.log(slider)


});



$('.btn-prev').on('click', function () {
    $('.wrap-slide').slick('slickPrev');

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
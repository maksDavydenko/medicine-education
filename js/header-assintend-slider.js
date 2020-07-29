$(document).ready(function () {
    $('.header-assistent-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        speed: 500,
        // adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 5000,


        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 3,
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


//suctom buttons

$('.js-header-slide-prev').on('click', function () {
    $('.header-assistent-slider').slick('slickPrev');



});


$('.js-header-slide-next').on('click', function () {
    $('.header-assistent-slider').slick('slickNext');
    changeSlide();

});

let nums = $('.header-slider__nav-item');
let curSlide = 1;

document.querySelectorAll('.header-slider__nav-item')

nums = Array.from(nums);


function changeSlide() {

    let activeIndex = null;

    nums.forEach((element, index) => {
        if (element.classList.contains('header-slider__nav-item--active')) {
            activeIndex = index + 1;
        }

        element.classList.remove('header-slider__nav-item--active');

        console.log(element.classList);


    });

    console.log(activeIndex)

    let indexUp = 1;
    let indexDown = 1;

    for (let i = activeIndex; i < nums.length; i++) {
        nums[i].style.opacity = 1 - indexUp * 0.2;
        indexUp++
    }

    for (let i = activeIndex; i > 0; i--) {
        nums[i].style.opacity = 1 - indexDown * 0.2;
        indexDown++
    }

    nums[activeIndex + 1].classList.add('header-slider__nav-item--active')

}


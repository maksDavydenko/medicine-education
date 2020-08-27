import data from './slliderData.js';

const title = document.querySelector('.js-title');
const info = document.querySelector('.js-info');
const link = document.querySelector('.js-link');
const headerSlider = document.querySelector('.header-slider')


$(document).ready(function () {
    $('.header-assistent-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        speed: 700,
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
                    centerPadding: '50px',
                    slidesToShow: 3
                }
            }
        ]
    });
});


//suctom buttons
let curSlide = 1;
$('.js-header-slide-prev').on('click', function () {

    renderSlidePrev();
    $('.header-assistent-slider').slick('slickGoTo', curSlide * 3 - 2, false);


});

$('.js-header-slide-prev-mobile').on('click', function () {
    // curSlide--;
    // curSlide = curSlide < 1 ? 6 : curSlide;
    // setTimeout(renderSlide, 0)
    renderSlidePrev();
    $('.header-assistent-slider').slick('slickGoTo', curSlide * 3 - 2, false);

});


$('.js-header-slide-next').on('click', function () {
    $('.header-assistent-slider').slick('slickNext');
    // curSlide++;
    // curSlide = curSlide > 6 ? 1 : curSlide;
    // changeSlide();
    // changeContent();
    // setTimeout(renderSlide, 0)
    renderSlideNext();
    $('.header-assistent-slider').slick('slickGoTo', curSlide * 3 - 2, false);
});

$('.js-header-slide-next-mobile').on('click', function () {
    // curSlide++;
    // curSlide = curSlide > 6 ? 1 : curSlide;
    // setTimeout(renderSlide, 0)
    // renderSlideNext
    renderSlideNext();
    $('.header-assistent-slider').slick('slickGoTo', curSlide * 3 - 2, false);
});

function renderSlideNext() {
    curSlide++;
    curSlide = curSlide > 6 ? 1 : curSlide;
    changeSlide();
    changeContent();
}

function renderSlidePrev() {
    curSlide--;
    curSlide = curSlide < 1 ? 6 : curSlide;
    changeSlide();
    changeContent();
}

let nums = $('.header-slider__nav-item');
nums = Array.from(nums);

function changeSlide() {
    let activeIndex = null;
    nums.forEach((element, index) => {
        if (element.classList.contains('header-slider__nav-item--active')) {
            activeIndex = index + 1;
        }
        element.classList.remove('header-slider__nav-item--active');

    });

    let indexUp = 1;
    let indexDown = 1;
    const opacityIndex = 0.15;

    for (let i = curSlide; i < nums.length; i++) {
        nums[i].style.opacity = 1 - indexUp * opacityIndex;
        indexUp++
    }

    for (let i = curSlide - 1; i > 0; i--) {
        nums[i - 1].style.opacity = 1 - indexDown * opacityIndex;
        indexDown++
    }

    nums[curSlide - 1].classList.add('header-slider__nav-item--active')
}

function changeContent() {
    title.textContent = data[curSlide - 1].title;
    headerSlider.style.backgroundImage = data[curSlide - 1].img;
}

changeSlide();

//auto play

let pauseAutoPlay = false;
// header-slider__nav
// setInterval(autoPlay, 4000);

function autoPlay() {
    if (!pauseAutoPlay) {
        renderSlideNext()
        $('.header-assistent-slider').slick('slickGoTo', curSlide * 3 - 2, false);
    }
}

const sliderList = document.querySelector('.header-slider__nav-list');
const headerAssistentSlider = document.querySelector('.header-assistent-slider');
const headerSliderButtons = document.querySelector('.header-slider__buttons');

sliderList.addEventListener('click', e => {
    const target = e.target;
    const sliderNum = parseInt(target.closest('LI').getAttribute('data-num'));
    curSlide = sliderNum;

    $('.header-assistent-slider').slick('slickGoTo', curSlide * 3 - 2, false);
    changeSlide();
    changeContent();
})



headerAssistentSlider.addEventListener('mouseover', () => {
    pauseAutoPlay = true;
    console.log(pauseAutoPlay)
});

headerAssistentSlider.addEventListener('mouseleave', () => {
    pauseAutoPlay = false;
    console.log(pauseAutoPlay)
});

sliderList.addEventListener('mouseover', () => {
    pauseAutoPlay = true;
    console.log(pauseAutoPlay)
});

sliderList.addEventListener('mouseleave', () => {
    pauseAutoPlay = false;
    console.log(pauseAutoPlay)
});

headerSliderButtons.addEventListener('mouseover', () => {
    pauseAutoPlay = true;
    console.log(pauseAutoPlay)
});

headerSliderButtons.addEventListener('mouseleave', () => {
    pauseAutoPlay = false;
    console.log(pauseAutoPlay)
});



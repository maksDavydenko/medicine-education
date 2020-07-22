import data from './data.js';

document.addEventListener('DOMContentLoaded', () => {

    const sliderImg = document.querySelector('.slider__images');
    const sliderTitle = document.querySelector('.slider__title');
    // const sliderTrack = document.querySelector('.slider__track');
    const sliderInfo = document.querySelector('.slider__info');
    const sliderBtn = document.querySelector('.slider__btn');
    const nextBtn = document.querySelector('.btn-next');
    const prevBtn = document.querySelector('.btn-prev');
    const slidersNum = document.querySelectorAll('.slider-num');

    // const slideSubitems = document.querySelector('.slider__subitems')
    const slideSubitemsWrap = document.querySelectorAll('.slider__subitems-wrap')
    // let sliderWidth = slideSubitems.offsetWidth;

    let curSlide = 0;

    // let position = sliderWidth;
    const arr = Array.from(slidersNum);


    slideSubitemsWrap.forEach(sliderItem => {
        sliderItem.style.minWidth = sliderWidth + 'px';
    });
    nextBtn.addEventListener('click', () => {
        sliderNext();
    })


    // console.log(sliderWidth)
    // const arr = Array.from(slidersNum);

    prevBtn.addEventListener('click', () => {
        // slideSubitems.scrollBy(sliderWidth, 0);
        // position += sliderWidth;

        // sliderTrack.style.transform = `translateX(${position}px)`;

        nextBtn.disabled = false;
        if (curSlide <= 1) {
            prevBtn.disabled = true;
        }
        curSlide--;
        sliderImg.style.backgroundImage = data[curSlide].background;


        sliderTitle.textContent = data[curSlide].title
        sliderInfo.textContent = data[curSlide].subtitle
        sliderBtn.textContent = data[curSlide].button;
        sliderBtn.href = data[curSlide].buttonLink;

        arr.forEach(num => {
            num.classList.remove('active-num')

        })

        arr[curSlide].classList.add('active-num')

    })



    function sliderNext() {
        // slideSubitems.scrollBy(-sliderWidth, 0);
        // position -= sliderWidth;

        // sliderTrack.style.transform = `translateX(${-position}px)`;

        prevBtn.disabled = false;
        curSlide++;

        sliderImg.style.backgroundImage = data[curSlide].background;

        sliderTitle.textContent = data[curSlide].title;
        sliderInfo.textContent = data[curSlide].subtitle;
        sliderBtn.textContent = data[curSlide].button;
        sliderBtn.href = data[curSlide].buttonLink;

        arr.forEach(num => {
            num.classList.remove('active-num')

        })

        arr[curSlide].classList.add('active-num')
        // console.log(data[curSlide].background)
    }


    // setInterval(sliderNext, 4000);

});


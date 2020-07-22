import data from './data.js';

document.addEventListener('DOMContentLoaded', () => {

    // const slidersImgItems = document.querySelectorAll('.slide-img');
    // const sliderImg = document.querySelector('.slider__images');
    const sliderTitle = document.querySelector('.slider__title');
    const sliderInfo = document.querySelector('.slider__info');
    const sliderBtn = document.querySelector('.slider__btn');
    const nextBtn = document.querySelector('.btn-next');
    const prevBtn = document.querySelector('.btn-prev');
    const slidersNum = document.querySelectorAll('.slider-num ');

    // const sliderSubItems = document.querySelector('.slider__subitems');
    // let sliderImgWidth = sliderImg.offsetWidth;
    // let position = sliderImgWidth

    let curSlide = 0;

    nextBtn.addEventListener('click', () => {
        sliderNext()
    })

    const arr = Array.from(slidersNum);

    prevBtn.addEventListener('click', () => {
        // position -= sliderImgWidth

        // console.log(position)
        // sliderImg.style.transform = `translateX(${-position}px)`;

        curSlide--;

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
        // position += sliderImgWidth
        // console.log(position)

        // sliderImg.style.transform = `translateX(${position}px)`;

        // if (curSlide >= data.length) {
        //     nextBtn.disabled = true;
        // }
        // prevBtn.disabled = false;
        curSlide++;

        sliderTitle.textContent = data[curSlide].title;
        sliderInfo.textContent = data[curSlide].subtitle;
        sliderBtn.textContent = data[curSlide].button;
        sliderBtn.href = data[curSlide].buttonLink;

        arr.forEach(num => {
            num.classList.remove('active-num')

        })

        arr[curSlide].classList.add('active-num')
        console.log(curSlide)
    }


    setInterval(sliderNext, 4000);

});


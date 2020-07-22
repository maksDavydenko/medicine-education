let position = 0;

const slideToShow = 5;
const slideToscroll = 1;

const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');

const nextBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');

const itemWidth = (container.offsetWidth - (slideToShow * 20 * 2)) / slideToShow;

let movePosition = itemWidth * slideToscroll + (40 * slideToscroll)

items.forEach(itemName => {
    itemName.style.minWidth = itemWidth + 'px';
})

console.log(items)
nextBtn.addEventListener('click', () => {
    position += movePosition;
    track.style.transform = `translateX(${position}px)`;
});


prevBtn.addEventListener('click', () => {
    position -= movePosition;
    track.style.transform = `translateX(${-position}px)`;
});

const slickNext = document.querySelector('.slick-next');


console.log(slickNext)
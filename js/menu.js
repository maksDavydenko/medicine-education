const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const headerSlider = document.querySelector('.header-slider');
const adaptiveMenu = document.querySelector('.adaptive-menu');

// const details = document.querySelectorAll('details');


// $(document).ready(function () {
//     $('#menu').click(function () {
//         ('.adaptive-menu').toggle();
//     });
// });
// $(document).mouseup(function (e) {
//     const container = $(".adaptive-menu");
//     if (container.has(e.target).length === 0) {
//         container.hide();
//     }
// });


document.addEventListener('click', (e) => {
    const target = e.target;
    const menuWrap = target.closest(".adaptive-menu");
    const menuBtn = target.closest(".menu");
    if (!menuWrap && !menuBtn) {
        header.style.position = 'fixed';
        adaptiveMenu.style.display = 'none';
        headerSlider.style.marginTop = '52px';
    }
})

menu.addEventListener('click', () => {
    if (adaptiveMenu.style.display === 'block') {
        header.style.position = 'fixed';
        adaptiveMenu.style.display = 'none';
        headerSlider.style.marginTop = '52px';


    } else {
        adaptiveMenu.style.display = 'block';
        header.style.position = 'static';
        headerSlider.style.marginTop = '0';
    }

})

$('details').click(function (event) {
    $('details').not(this).removeAttr("open");
});



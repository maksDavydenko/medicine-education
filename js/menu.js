const menu = document.getElementById('menu');
const header = document.querySelector('header');
const headerSlider = document.querySelector('.header-slider');
const adaptiveMenu = document.querySelector('.adaptive-menu');

document.addEventListener('click', (e) => {
    const target = e.target;
    const menuWrap = target.closest(".adaptive-menu");
    const menuBtn = target.closest("#menu");
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
        window.scrollTo(0, 0);
    }

})

$('details').click(function (event) {
    $('details').not(this).removeAttr("open");
});



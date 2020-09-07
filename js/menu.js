const menu = document.getElementById('menu');
const header = document.querySelector('header');
const headerSlider = document.querySelector('.header-slider');
const adaptiveMenu = document.querySelector('.adaptive-menu');
const aboutSection = document.querySelector('.about-section');


let menuOpen = false;
document.addEventListener('click', (e) => {
    const target = e.target;
    const menuWrap = target.closest(".adaptive-menu");
    const menuBtn = target.closest("#menu");
    if (!menuWrap && !menuBtn) {
        header.style.position = 'fixed';
        adaptiveMenu.style.display = 'none';
        headerSlider.style.marginTop = '52px';
        $('body').css('height', 'auto');
        $('body').css('overflow', 'auto');
        $('body').css('overflow-x', 'hidden');
        menuOpen = false;
    }
})

menu.addEventListener('click', () => {


    if (adaptiveMenu.style.display === 'block') {
        header.style.position = 'fixed';
        adaptiveMenu.style.display = 'none';
        headerSlider.style.marginTop = '52px';
        $('body').css('height', 'auto');
        $('body').css('overflow', 'auto');
        $('body').css('overflow-x', 'hidden');
        menuOpen = false

    } else {
        adaptiveMenu.style.display = 'block';
        header.style.position = 'static';
        headerSlider.style.marginTop = '0';
        window.scrollTo(0, 0);
        menuOpen = true;
        let $element = $('.adaptive-menu');

        if ($element.height() > $(window).height()) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop() + $(window).height();
                let offset = $element.height();
                scrollEvent(scroll > offset)
            });
        }

        function scrollEvent(scrollEvent) {
            if (scrollEvent && menuOpen) {
                $('body').css('height', `${$element.height()}px`);
                $('body').css('overflow', 'hidden');
            }
        }

    }

})



$('details').click(function (event) {
    $('details').not(this).removeAttr("open");
});



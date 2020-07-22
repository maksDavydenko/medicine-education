document.addEventListener('DOMContentLoaded', function () {
    const headerWrap = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            headerWrap.classList.add('header--sticky');

        } else if (window.pageYOffset < 100) {
            headerWrap.classList.remove('header--sticky');
        }
    });

})

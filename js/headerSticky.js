document.addEventListener('DOMContentLoaded', function () {
    const headerWrap = document.querySelector('.header');
    const upBtn = document.querySelector('.upBtn');
    const applyBtn = document.querySelector('.connection-info__btn--sticky');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            headerWrap.classList.add('header--sticky');
            upBtn.style.display = 'flex';
            applyBtn.style.display = 'block';

        } else if (window.pageYOffset < 100) {
            headerWrap.classList.remove('header--sticky');
            upBtn.style.display = 'none';
            applyBtn.style.display = 'none';

        }
    });

})






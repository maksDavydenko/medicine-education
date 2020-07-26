document.addEventListener('DOMContentLoaded', function () {
    const headerWrap = document.querySelector('.header');
    const upBtn = document.querySelector('.upBtn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            headerWrap.classList.add('header--sticky');
            upBtn.style.display = 'flex';


        } else if (window.pageYOffset < 100) {
            headerWrap.classList.remove('header--sticky');
            upBtn.style.display = 'none';
        }
    });

})






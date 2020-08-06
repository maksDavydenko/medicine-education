// const applyBtn = document.querySelector('.connection-info__btn--sticky');
// var $element = $('.footer');
// let counter = 0;
// $(window).scroll(function () {
//     var scroll = $(window).scrollTop() + $(window).height();
//     //Если скролл до конца елемента
//     //var offset = $element.offset().top + $element.height();
//     //Если скролл до начала елемента
//     var offset = $element.offset().top

//     if (scroll > offset && counter == 0) {
//         $('.connection-info__btn--sticky').fadeIn(500);
//         console.log('rest')
//         counter = 1;
//     }
// });
// $('.btn').click(function(){
// $('#block').slideUp();
// });

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

    upBtn.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })


    var $element = $('.footer');
    let counter = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        //var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        var offset = $element.offset().top

        if (scroll > offset - 80 && counter == 0) {
            $('.upBtn').css('position', 'static');
            $('.upBtn').css('transform', 'translate(0, 0)');


        }

        if (scroll < offset - 80 && counter == 0) {
            $('.upBtn').css('position', 'fixed');
            $('.upBtn').css('transform', 'translate(-50%, 0)');


            // counter = 1;
        }
    });




})





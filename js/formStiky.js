var $elementText = $('.comments');
var $elementAbout = $('.quick-navigation');

var $elementTextComent = $('.comments');
var $elementFooter = $('.footer')



let counterThis = 0;
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var offset = $elementText.offset().top;
    var offsetAbout = $elementAbout.offset().top


    var elementFooter = $elementFooter.offset().top;
    var elementTextComent = $elementTextComent.offset().top


    if (scroll < offsetAbout + $('.quick-navigation').height()) {
        $('.about-form').css('position', 'static');
        $('.about-form').css('margin-top', '0');
    }

    // if (scroll > offsetAbout + $('.quick-navigation').height()) {
    //     $('.about-form').css('position', 'fixed');
    //     $('.about-form').css('top', '100px');
    //     $('.about-form').css('right', rigthPosition);
    //     // $('.about-form').css('width', '30%');
    //     $('.about-form').css('width', blockWidth + 'px');

    // }
    if (scroll > offsetAbout + $('.quick-navigation').height()) {
        $('.about-form').css('position', 'absolute');
        $('.about-form').css('top', $(window).scrollTop() - $('.about-form').height() + 50);

    }

    if (scroll > elementFooter - $('.about-form').height() - 300) {
        $('.about-form').css('position', 'static');
        $('.about-form').css('margin-top', 'auto');
    }

    // 
    // if (scroll < elementTextComent) {
    //     $('.commetns-form__wrap').css('position', 'static');
    //     $('.comments__wrap').css('align-items', 'flex-start');
    // }

    // if (scroll > elementTextComent + 50) {
    //     $('.commetns-form__wrap').css('position', 'absolute');
    //     // $('.commetns-form__wrap').css('top', $(window).scrollTop() - $('.commetns-form__wrap').height() + 50)


    //     // $('.commetns-form').css('top', '100px');
    //     // $('.commetns-form').css('right', rigthPosition);
    //     // $('.commetns-form').css('width', blockWidth + 'px');
    // }

    // if (scroll > elementFooter - $('.commetns-form').height() - 200) {
    //     $('.commetns-form__wrap').css('position', 'static');
    //     $('.comments__wrap').css('align-items', 'flex-end');
    // }
});





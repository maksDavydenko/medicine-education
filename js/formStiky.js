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
        $('.about-form').css('width', '100%');
    }

    if (scroll > offsetAbout + $('.quick-navigation').height()) {
        $('.about-form').css('position', 'fixed');
        $('.about-form').css('top', '100px');
        $('.about-form').css('right', '10%');
        $('.about-form').css('width', '30%');
    }

    if (scroll > offset - $('.about-form').height() - 300) {
        $('.about-form').css('position', 'static');
        $('.about-form').css('position', 'static');
        $('.about-form').css('margin-top', 'auto');
        $('.about-form').css('width', '100%');
    }

    // 
    if (scroll < elementTextComent) {
        $('.commetns-form').css('position', 'static');
        $('.comments__wrap').css('align-items', 'flex-start');
    }

    if (scroll > elementTextComent) {
        $('.commetns-form').css('position', 'fixed');
        $('.commetns-form').css('top', '100px');
        $('.commetns-form').css('right', '10%');
        $('.commetns-form').css('width', '30%');
    }

    if (scroll > elementFooter - $('.commetns-form').height() - 200) {
        $('.commetns-form').css('position', 'static');
        $('.comments__wrap').css('align-items', 'flex-end');
    }
});





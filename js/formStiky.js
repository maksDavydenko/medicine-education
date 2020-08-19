var $elementText = $('.comments');
var $elementAbout = $('.about');

var $elementTextComent = $('.comments');
var $elementFooter = $('.footer')

let counterThis = 0;
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var offset = $elementText.offset().top;
    var offsetAbout = $elementAbout.offset().top


    var elementFooter = $elementFooter.offset().top;
    var elementTextComent = $elementTextComent.offset().top


    if (scroll < offsetAbout) {
        $('.about-form').css('position', 'static');
        $('.about__wrap').css('align-items', 'flex-start');
    }

    if (scroll > offsetAbout) {
        $('.about-form').css('position', 'fixed');
        $('.about-form').css('top', '100px');
        $('.about-form').css('right', '10%');
    }

    if (scroll > offset - $('.about-form').height() - 200) {
        $('.about-form').css('position', 'static');
        $('.about__wrap').css('align-items', 'flex-end');
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
    }

    if (scroll > elementFooter - $('.commetns-form').height() - 200) {
        $('.commetns-form').css('position', 'static');
        $('.comments__wrap').css('align-items', 'flex-end');
    }
});





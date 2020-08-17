var $elementText = $('.comment-item');
var $elementAbout = $('.about');

let counterThis = 0;
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var offset = $elementText.offset().top;
    var offsetAbout = $elementAbout.offset().top
    console.log('offset', offset)
    console.log('offsetAbout', offsetAbout);
    console.log('scroll', scroll);
    console.log($('.about-form').height())
    if (scroll < offsetAbout) {
        $('.about-form').css('position', 'static');
        $('.about__wrap').css('align-items', 'flex-start');


    }

    if (scroll > offsetAbout) {
        $('.about-form').css('position', 'fixed');
        $('.about-form').css('top', '100px');
        $('.about-form').css('right', '10%');

        // $('.upBtn').css('transform', 'translate(-50%, 0)');

    }

    if (scroll > offset - $('.about-form').height() - 200) {
        $('.about-form').css('position', 'static');
        $('.about__wrap').css('align-items', 'flex-end');
    }
});
var $elementText = $('.comments');
var $elementAbout = $('.quick-navigation');

var $elementTextComent = $('.comments');
var $elementFooter = $('.footer');
var $checkUniverse = $('.check-universe');



let counterThis = 0;
let screenSize = $(window).width();
$(window).resize(function () {
    screenSize = $(window).width();

    console.log(screenSize)
})

if (screenSize > 700) {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var offsetAbout = $elementAbout.offset().top
        var offsetFooter = $elementFooter.offset().top;
        var offsercheckUniverse = $checkUniverse.offset().top;

        if (scroll < offsetAbout + $('.quick-navigation').height()) {
            $('.about-form').css('position', 'static');
            $('.about-form').css('margin-top', '0');
        }

        if (scroll > offsetAbout + $('.quick-navigation').height()) {
            $('.about-form').css('position', 'fixed');
            $('.about-form').css('top', 120);
            $('.about-form').css('width', $('.comment-form').width());
        }

        if (scroll > offsercheckUniverse - $('.about-form').height() - 300) {
            $('.about-form').css('position', 'static');
            $('.about-form').css('margin-top', 'auto');
        }

        // comment-form

        if (scroll < offsercheckUniverse + 150) {
            $('.comment-form').css('position', 'static');
            $('.comment-form').css('margin-top', '0');
            $('.comment-form').css('width', '100%');
        }

        if (scroll > offsercheckUniverse) {
            $('.comment-form').css('width', $('.about-form').width());
            $('.comment-form').css('position', 'fixed');
            $('.comment-form').css('top', 120);
        }

        if (scroll > offsetFooter - $('.comment-form').height() - 300) {
            $('.comment-form').css('position', 'static');
            $('.comment-form').css('width', '100%');
            $('.comment-form').css('margin-top', 'auto');
        }
    });
}


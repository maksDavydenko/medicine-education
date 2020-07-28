$(document).ready(function () {
    $('.header-assistent-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        // adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 5000,


        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});


//suctom buttons

$('.js-header-slide-prev').on('click', function () {
    $('.header-assistent-slider').slick('slickPrev');
});


$('.js-header-slide-next').on('click', function () {
    $('.header-assistent-slider').slick('slickNext');

});




$(document).ready(function () {

    $('.slider').owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#courses-slider').owlCarousel({
        autowidth: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.toggle-menu').click(function () {
        $('.header-responsive').toggleClass('active');
    });


});
$(document).ready(function(){
    $("#banner-area .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items: 1
    });

    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        responsive:({
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }),
       
    });
});
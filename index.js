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

    //isotope filter
    var $grid=$(".grid").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    //filter items on button click
    $(".button-group").on("click","button",function(){
        var filterValue=$(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    });
});
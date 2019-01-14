/****************************
    FIXED NAVIGATION SCROLL
*****************************/

$(window).scroll(function() {
    var top = $(window).scrollTop();
    if (top >= 60) {
        $("nav").addClass('secondary');
    } else
    if ($("nav").hasClass('secondary')) {
        $("nav").removeClass('secondary');
    }
});


/**********************************
    Counter auto value changer
************************************/

jQuery(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


/**********************************
        Testimonial sections 
************************************/

        $(document).ready(function() {
            $('#testimonial-slider').owlCarousel({
                items: 1,
                itemsDesktop: [1000, 1],
                itemsDesktopSmall: [979, 1],
                pagination: false,
                navigation: true,
                navigationText: ["", ""],
                slideSpeed: 1000,
                autoPlay: true
            });
        });



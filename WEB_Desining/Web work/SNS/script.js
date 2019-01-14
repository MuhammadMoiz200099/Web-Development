/**************Fixed the navigationbar**************/


$(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top >= 60) {
        $("nav").addClass('secondary');
    } else
    if ($("nav").hasClass('secondary')) {
        $("nav").removeClass('secondary');
    }
});

/*****************Owl-carousel js*******************/

$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
});



/**************twenty twenty Query***************/

$(function () {
    $(".image[data-orientation!='vertical']").twentytwenty({
        default_offset_pct: 0.5
    });
});

/****************Google Mapp js*****************/

google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        zoom: 11,

        center: new google.maps.LatLng(40.6700, -73.9400),

        styles: [{
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "hue": "#ff0000"
            }, {
                "saturation": -100
            }, {
                "lightness": -30
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#353535"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#656565"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#505050"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#808080"
            }]
        }, {
            "featureType": "poi.business",
            "elementType": "geometry",
            "stylers": [{
                "color": "#9f9b9b"
            }]
        }, {
            "featureType": "poi.government",
            "elementType": "geometry",
            "stylers": [{
                "color": "#cccaca"
            }]
        }, {
            "featureType": "poi.medical",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ccc9c9"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#98b090"
            }]
        }, {
            "featureType": "poi.school",
            "elementType": "geometry",
            "stylers": [{
                "color": "#d5d4d4"
            }]
        }, {
            "featureType": "poi.sports_complex",
            "elementType": "geometry",
            "stylers": [{
                "color": "#c9c3c3"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#454545"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#3d3d3d"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#d3d1d1"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#b8b8b8"
            }]
        }, {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [{
                "hue": "#000000"
            }, {
                "saturation": 100
            }, {
                "lightness": -40
            }, {
                "invert_lightness": true
            }, {
                "gamma": 1.5
            }]
        }, {
            "featureType": "transit.station.bus",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#cdedf9"
            }]
        }]
    };
    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}

/***************Form Validations js*****************/

function validate() {
    var message_printing = document.getElementById("message_printing");

    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var comt = document.getElementById("comt").value;

    if (user == "" || email == "" || pass == "") {
        message_printing.innerHTML = '<span style="color:darkred; font-weight: bold; font-size:22px">Please! Fill all the required field</span';
    } else if (user.length < 3) {
        message_printing.innerHTML = '<span style="color:darkred; font-weight: bold; font-size:22px">Your Username is too Short</span';
    } else if (email.length < 3) {
        message_printing.innerHTML = '<span style="color:darkred; font-weight: bold; font-size:22px">Your Email is too Short</span';
    } else if (pass.length < 8) {
        message_printing.innerHTML = '<span style="color:darkred; font-weight: bold; font-size:22px">password should be more than 8 digits</span';
    } else {
        message_printing.innerHTML = '<span style="color:green; font-weight: bold; font-size:22px">Form Submited Successfully!</span';
    }
}



/************Counter UP Query************/



jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


        
/*------Gmail--------snsfashionhouse1-------------->
             <!--------------snsfashion-----------------*/


/*********************http://www.snsfashionhouse.tk/*********************/



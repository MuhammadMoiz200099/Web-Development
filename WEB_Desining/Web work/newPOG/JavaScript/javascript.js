/********************************
    NAVIGATION SCROLLING SECTION
**********************************/    


$(window).scroll(function(){
            var top = $(window).scrollTop();
                if(top >= 60)
                {
                    $("nav").addClass('secondary');
                }
                else
                    if($("nav").hasClass('secondary')){
                        $("nav").removeClass('secondary');
                    }    
        });


/*****************************
        MAP SECTION JAVA SCRIPT
********************************/


 google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                var mapOptions = {
                    zoom: 11,

                    center: new google.maps.LatLng(24.9208637,67.1339006), 

                    styles: [{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]}]
                };

                var mapElement = document.getElementById('map');

                var map = new google.maps.Map(mapElement, mapOptions);

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(24.9208637,67.1339006),
                    map: map,
                    title: 'Snazzy!'
                });
            }



/***************************
    form java script section for validations
*************************/

function validate()
{
    var message_printing = document.getElementById("message_printing");
    
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var comt = document.getElementById("comt").value;
    
    if(user == "" || email == "" || pass == "")
    {
            message_printing.innerHTML='<span style="color:darkred; font-weight: bold; font-size:22px">Please! Fill all the required field</span';
    }

    else if(user.length < 3)
        {
            message_printing.innerHTML='<span style="color:darkred; font-weight: bold; font-size:22px">Your Username is too Short</span';
        }

    else if(email.length < 3)
        {
            message_printing.innerHTML='<span style="color:darkred; font-weight: bold; font-size:22px">Your Email is too Short</span';
        }
    
    else if( pass.length < 8 )
        {
            message_printing.innerHTML='<span style="color:darkred; font-weight: bold; font-size:22px">password should be more than 8 digits</span';
        }

    else
        {
            message_printing.innerHTML='<span style="color:green; font-weight: bold; font-size:22px">Form Submited Successfully!</span';
        }   
}


/***********************
    Our Client Section Java Script
************************/

$(function(){
   $("#clients-list").owlCarousel({
      item: 6,
       autoplay: true,
       smartSpeed: 700,
       loop: true,
       autoplayHoverPause: true,
       responsive: {
           0: {
               items: 1
           },
           480: {
               items: 3
           },
           768: {
               items: 5
           },
           992: {
               items: 6
           },
       }
       
   });
});





(function($) {

    "use strict";

    var SAB = {

            //----------- 1. To top Jquery ----------- 
            theme_scrollUP: function() {
                var toTop = $('.to-top');
                 toTop.on('click', function(e) {
                    e.preventDefault();
                    $('html, body').animate({scrollTop:0}, '600');
                 });
            },

            //----------- 2. Google Maps ----------- 
            theme_map: function() {
                if (typeof google === 'object' && typeof google.maps === 'object') {
                function initialize() {
                    var myLatlng = new google.maps.LatLng(-6.238845, 106.812077);
                    var imagePath = 'https://www.sabtech.id/wp-content/uploads/2019/04/google-location-icon-sab.png'
                    var mapOptions = {
                        zoom: 19,
                        center: myLatlng,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    }

                    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
                    //Callout Content
                    var contentString = 'sabtech';
                    //Set window width + content
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString,
                        maxWidth: 500
                    });

                    //Add Marker
                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        icon: imagePath,
                        title: 'image title'
                    });

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });

                    //Resize Function
                    google.maps.event.addDomListener(window, "resize", function() {
                        var center = map.getCenter();
                        google.maps.event.trigger(map, "resize");
                        map.setCenter(center);
                    });
                }

                google.maps.event.addDomListener(window, 'load', initialize);
                }
            },

            //----------- 3. Counter ----------- 
            theme_counter: function() {

                $('.counter').counterUp({
                    delay: 10,
                    time: 1000
                });

            },

            //---------- 4. Fixed Navigation Menu -----------
            theme_nav: function() {
                $(window).bind('scroll', function() {
                     if ($(window).scrollTop() >= 100) {
                         $('.nav-sab').addClass('fixed');
                     }
                     else {
                         $('.nav-sab').removeClass('fixed');
                     }
                });
            },

            // theme init
            theme_init: function() {
                SAB.theme_scrollUP();
                SAB.theme_map();
                SAB.theme_counter();
                SAB.theme_nav();
            }

        } //end SAB


    $(document).ready(function() {

        SAB.theme_init();

    });

})(jQuery);
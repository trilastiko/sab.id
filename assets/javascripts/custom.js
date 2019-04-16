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
                    var contentString = 'Sinergi Antar Benua (SAB)';
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
                if ($.fn.counterUp) {
                    $('.counter').counterUp({
                        delay: 10,
                        time: 1000
                    });
                }
            },

            //---------- 4. Fixed Navigation Menu -----------
            theme_nav: function() {
                $(window).bind('scroll', function() {
                     if ($(window).scrollTop() >= 100) {
                         $('.nav-sab').addClass('fixed');
                         $('.nav-sab.fixed').find('img').attr('src','images/logo-white.png');
                     }
                     else {
                         $('.nav-sab').removeClass('fixed');
                         $('.nav-sab').find('img').attr('src','images/logo.png');
                         $('.nav-sab.transparent').find('img').attr('src','images/logo-white.png');
                     }
                });
            },

            //---------- 5. Team List -----------
            theme_team_list: function() {
                var a = $('.team-list'),
                    b = $('.sab-member-list');

                b.find('.team-list').each(function(){

                    $(this).find('li').click(function() {
                        var name = $(this).attr('data-name'),
                            img = $(this).attr('data-image'),
                            position = $(this).attr('data-position'),
                            desc = $(this).attr('data-description'),
                            fb = $(this).attr('data-facebook'),
                            tw = $(this).attr('data-twitter'),
                            ig = $(this).attr('data-instagram'),
                            ln = $(this).attr('data-linkedin');
                        
                            $('.info-name').text(name);
                            $('.info-position').text(position);
                            $('.info-description').text(desc);
                            $('.people').attr('src', img);
                            $('.fb').attr('href', fb);
                            $('.tw').attr('href', tw);
                            $('.ig').attr('href', ig);
                            $('.ln').attr('href', ln);
                    });

                });
            },

            // theme init
            theme_init: function() {
                SAB.theme_scrollUP();
                SAB.theme_map();
                SAB.theme_counter();
                SAB.theme_nav();
                SAB.theme_team_list();
            }

        } //end SAB


    $(document).ready(function() {

        SAB.theme_init();

    });

})(jQuery);
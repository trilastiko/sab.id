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

            //---------- 6. Isotope Metafizy ----------- 
            theme_works_isotope: function(){
                if ($.fn.isotope) {
                // init Isotope
                var $grid = $('.grid').isotope({
                    itemSelector: '.items'
                });
                var iso = $grid.data('isotope');
                var $filterCount = $('.filter-title');

                // filter functions
                var filterFns = {
                    // show if number is greater than 50
                    numberGreaterThan50: function() {
                        var number = $(this).find('.number').text();
                        return parseInt( number, 10 ) > 50;
                    },
                    // show if name ends with -ium
                    ium: function() {
                        var name = $(this).find('.name').text();
                        return name.match( /ium$/ );
                    }
                };

                $('.portfolio-sab--filter a').on( 'click', function() {
                    var filterValue = $( this ).attr('data-filter');
                    // use filterFn if matches value
                    filterValue = filterFns[ filterValue ] || filterValue;
                    $grid.isotope({ filter: filterValue });
                    updateFilterCount();
                    return false;
                });

                function updateFilterCount() {
                    $filterCount.text( 'We Found ' + iso.filteredItems.length + ' example design' );
                  }
                  
                  updateFilterCount();
                  
                  // change is-checked class on buttons
                  $('.portfolio-sab--filter a').each( function( i, buttonGroup ) {
                    var $buttonGroup = $( buttonGroup );
                    $buttonGroup.on( 'click', function() {
                      $buttonGroup.find('.is-checked').removeClass('is-checked');
                      $( this ).addClass('is-checked');
                    });
                  });

                  var mySwiper = new Swiper ('.sab-work-page .swiper-container', {
                    // Optional parameters
                    loop: true,
                    slidesPerView: 2,
                    spaceBetween: 40,
                
                    // If we need pagination
                    pagination: {
                      el: '.swiper-pagination',
                      type: 'custom'
                    },
                
                    // Navigation arrows
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                
                    // And if we need scrollbar
                    scrollbar: {
                      el: '.swiper-scrollbar',
                    },
                  })
                }
            },

            //---------- 6. Testimonial Section ----------- 
            theme_testi: function() {
                var swiper = new Swiper('.testimony-sab-slide', {
                      direction: 'vertical',
                      effect: 'fade',
                      pagination: {
                        el: '.testi-sab-pagination',
                        clickable: true,
                      },
                  });
            }, 

            //---------- 4. Work Section -----------
            theme_works: function() {
                var swiper = new Swiper('.works-sab-slide', {
                        slidesPerView: 3,
                        spaceBetween: 60,
                        loop: true,
                        pagination: {
                            el: '.works-sab-pagination',
                            type: 'fraction',
                            renderFraction: function (currentClass, totalClass) {
                                  return '<span class="' + currentClass + '"></span>' +
                                         ' <span class="sp-line"></span>' +
                                         '<span class="' + totalClass + '"></span>';
                              }
                        },
                        navigation: {
                        nextEl: '.swiper-button-next',
                        //prevEl: '.works-sab-pagination',
                        },
                  });
            },

            //---------- 6. Header Slider -----------
            theme_header: function() {
                var swiper = new Swiper('.header-sab-slide', {
                      direction: 'vertical',
                      slidesPerView: 1,
                      mousewheel: false,
                      pagination: {
                        el: '.header-sab-pagination',
                        clickable: true,
                      },
                  });
            },  
 

            // theme init
            theme_init: function() {
                SAB.theme_scrollUP();
                SAB.theme_map();
                SAB.theme_counter();
                SAB.theme_nav();
                SAB.theme_team_list();
                SAB.theme_works_isotope();
                SAB.theme_works();
                SAB.theme_testi();
                SAB.theme_header();
            }

        } //end SAB


    $(document).ready(function() {

        SAB.theme_init();

    });

})(jQuery);
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


            //----------- 2. Counter -----------
            theme_counter: function() {
                if ( $( ".count-sab" ).length ) {
                $(window).scroll(testScroll);
                var viewed = false;

                function isScrolledIntoView(elem) {
                    var docViewTop = $(window).scrollTop();
                    var docViewBottom = docViewTop + $(window).height();

                    var elemTop = $(elem).offset().top;
                    var elemBottom = elemTop + $(elem).height();

                    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
                }

                function testScroll() {
                  if (isScrolledIntoView($(".count-sab")) && !viewed) {
                      viewed = true;
                      $('.counter').each(function () {
                      $(this).prop('Counter',0).animate({
                          Counter: $(this).text()
                      }, {
                          duration: 4000,
                          easing: 'swing',
                          step: function (now) {
                              $(this).text(Math.ceil(now));
                          }
                      });
                    });
                  }
                }

              }
            },

            //---------- 3. Fixed Navigation Menu -----------
            theme_nav: function() {
                $(window).bind('scroll', function() {
                     if ($(window).scrollTop() >= 100) {
                         $('.nav-sab').addClass('fixed');
                         $('.nav-sab.fixed').find('img').attr('src','images/logo-white.svg');
                     }
                     else {
                         $('.nav-sab').removeClass('fixed');
                         $('.nav-sab').find('img').attr('src','images/logo.svg');
                         $('.nav-sab.transparent').find('img').attr('src','images/logo-white.svg');
                     }
                });

                if ($(window).width() < 767) {
                    $('.text-menu').click(function(e){
                        e.stopPropagation();
                        $('#mainnav').css({'visibility' : 'visible'});
                        $('.nav-sab').toggleClass('mobile-menu');
                        $('.menu').toggleClass("slide-menu");
                    });
                    $(document.body).click( function(e) {
                         $('.menu').removeClass("slide-menu");
                    });
                }
            },

            theme_nav_mobile: function() {
                if ($(window).width() < 767) {
                  $('#mainnav').addClass('menu').removeClass('nav');
                }else{
                  $('#mainnav').addClass('nav').removeClass('menu');
                }
            },

            //---------- 4. Team List -----------
            theme_team_list: function() {
                var a = $('.team-list'),
                    b = $('.sab-member-list');

                b.find('.team-list').each(function(){

                    $(this).find('li').click(function(e) {
                         e.preventDefault(); // prevent hard jump, the default behavior
                        $(".team-list li").removeClass("active current");
                        $(this).addClass("active");

                        var headerHeight = $("header.nav-sab").outerHeight();
                        var target = $('#info-people-id');
                        $('html, body').animate({ scrollTop: target.offset().top - (headerHeight + 15) }, 500);

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

            //---------- 5. Isotope Metafizy -----------
            theme_works_isotope: function(){
                if ($.fn.isotope) {

                // init Isotope
                var $grid = $('.grid').isotope({
                    itemSelector: '.items'
                });

                var iso = $grid.data('isotope');
                var $filterCount = $('.filter-title');

                $grid.infiniteScroll({
                    // Infinite Scroll options...
                    append: '.items',
                    outlayer: iso,
                    path: '.pagination__next' ,
                    // status: '.page-load-status',
                    button: '.view-more-button',
                    // using button, disable loading on scroll
                    scrollThreshold: false,
                    hideNav: '.pagination__next'
                });

                var infScroll = $grid.data('infiniteScroll');

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
                    $grid.infiniteScroll({
                        // Infinite Scroll options...
                        append: '.items',
                        outlayer: iso,
                        path: '.pagination__next' ,
                        // status: '.page-load-status',
                        button: '.view-more-button',
                        // using button, disable loading on scroll
                        scrollThreshold: false,
                        hideNav: '.pagination__next'
                    });
                    filterValue = filterFns[ filterValue ] || filterValue;
                    $grid.isotope({ filter: filterValue });
                    updateFilterCount();


                    return false;
                });

                function updateFilterCount() {
                    $filterCount.text( 'Here are ' + iso.filteredItems.length + ' of SAB Portfolios' );
                }

                  updateFilterCount();

                  $grid.on( 'append.infiniteScroll', function() {
                    updateFilterCount();
                  });

                  // change is-checked class on buttons
                  $('.portfolio-sab--filter a').each( function( i, buttonGroup ) {
                    var $buttonGroup = $( buttonGroup );
                    $buttonGroup.on( 'click', function() {
                      $buttonGroup.find('.is-checked').removeClass('is-checked');
                      $( this ).addClass('is-checked');
                    });
                  });

                  }

                  if ( $( ".sab-work-page" ).length ) {

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
                    /*scrollbar: {
                      el: '.swiper-scrollbar',
                    },*/

                    // Set Responsive View
                    breakpoints: {
                        // when window width is <= 480px
                        480: {
                          slidesPerView: 1,
                          spaceBetween: 20
                        },
                        // when window width is <= 768px
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 20
                        },

                    }
                  })
                }

            },

            //---------- 6. Testimonial Section -----------
            theme_testi: function() {
              if ( $( ".testimony-sab-slide" ).length ) {
                var swiper = new Swiper('.testimony-sab-slide', {
                      direction: 'vertical',
                      effect: 'fade',
                      touchRatio: 0,
                      autoHeight: true,
                       autoplay: {delay: 3000},
                        loop: true,
                        pagination: {
                            el: '.testi-sab-pagination',
                            type: 'fraction',
                            renderFraction: function (currentClass, totalClass) {
                                  return '<span class="' + currentClass + '"></span>' +
                                         ' <span class="sp-line"></span>' +
                                         '<span class="' + totalClass + '"></span>';
                              }
                        },
                        navigation: {
                            nextEl: '.testi-sab-button-next',
                            prevEl: '.testi-sab-pagination',
                        },
                  });
              }
            },

            //---------- 7. Work Section -----------
            theme_works: function() {

              if ( $( ".works-sab-slide" ).length ) {

                $(".works-sab-slide").each(function(index, element){
                    var $this = $(this);
                    $this.addClass("instance-" + index);
                    $this.find(".swiper-button-prev").addClass("btn-prev-" + index);
                    $this.find(".swiper-button-next").addClass("btn-next-" + index);
                    $this.find(".swiper-pagination").addClass("swiper-pagination-" + index);
                    var swiper = new Swiper(".instance-" + index, {

                        slidesPerView: 'auto',
                        spaceBetween: 10,
                        loop: true,
                         lazy: {
                            loadPrevNext: true,
                            loadOnTransitionStart: true,
                          },
                        watchSlidesVisibility:true,
                        pagination: {
                            el: '.swiper-pagination-' + index,
                            type: 'fraction',
                            renderFraction: function (currentClass, totalClass) {
                                  return '<span class="' + currentClass + '"></span>' +
                                         ' <span class="sp-line"></span>' +
                                         '<span class="' + totalClass + '"></span>';
                              }
                        },
                        navigation: {
                        nextEl: '.btn-next-' + index,
                        //prevEl: '.works-sab-pagination',
                        },
                        breakpoints: {
                            // when window width is <= 480px
                            480: {
                              slidesPerView: 1,
                              spaceBetween: 0
                            },

                        }

                    });
                });


                $('.nav-works-sab li a').bind('click', function(e) {

                    e.preventDefault(); // prevent hard jump, the default behavior
                    var headerHeight = $("header.nav-sab").outerHeight();
                    var target = $(this).attr("href"); // Set the target as variable
                    var scrollToPosition = $(target).offset().top - headerHeight;


                    $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(){
                        window.location.hash = "" + target;
                        $('html').animate({ 'scrollTop': scrollToPosition }, 0);
                    });

                    return false;
                });


            if ($(window).width() > 767) {

                $(window).scroll(function() {

                    if ( $( ".works-container" ).length ) {
                    var headerHeight = $("header.nav-sab").outerHeight(true);
                    var scrollDistance = $(window).scrollTop();
                    var top = $(window).scrollTop() - $('.works-container').offset().top + 180;
                    var top2 = $(window).scrollTop() - $('.servis-category-sab').offset().top + 540;
                    var body = $('body').scrollTop();

                    if(body < top2){
                        $('.nav-works-sab').css({'position':'static', 'top': 'auto', 'width' : 'auto'});
                    }else if(body <= top){
                        $('.nav-works-sab').css({'position':'fixed', 'top': '120px', 'width' : 'auto'}).fadeIn('fast');
                    }else{
                        $('.nav-works-sab').css({'position':'static', 'top': 'auto', 'width' : 'auto'});
                    }

                     // Assign active class to nav links while scolling
                    var sections = $('.works-sab-slide');
                    var currentScroll = $(this).scrollTop();
                    var currentSection;
                    sections.each(function(i){
                      var divPosition = $(this).offset().top;
                      if( divPosition - 200 < currentScroll ){
                        currentSection = $(this);
                         $('.nav-works-sab a.active').removeClass('active');
                         $('.nav-works-sab a').eq(i).addClass('active');
                      }


                    })
                    }

                });
                }
              }

            },

            //---------- 8. Header Slider -----------
            theme_header: function() {
                if ( $( ".header-sab-slide" ).length ) {
                var swiper = new Swiper('.header-sab-slide', {
                      direction: 'vertical',
                      slidesPerView: 1,
                      mousewheel: false,
                      autoplay: {
                        delay: 5000,
                      },
                      pagination: {
                            el: '.header-sab-pagination',
                            clickable: true,
                            renderBullet: function (index, className) {
                              return '<span class="' + className + '">0' + (index + 1) + '</span>';
                            },
                      },
                  });
              }
            },

            //---------- 9. logo Slider -----------
            theme_client_slide: function() {
                if ( $( ".client-sab-slide" ).length ) {
                var swiper = new Swiper('.client-sab-slide', {
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                    loop: true,
                    lazy: true,
                    watchSlidesVisibility:true,
                    autoplay: {delay: 3000},

                    breakpoints: {
                        // when window width is <= 480px
                        480: {
                          slidesPerView: 2,
                          spaceBetween: 20
                        },
                        // when window width is <= 768px
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 20
                        },
                        // when window width is <= 1024px
                        1024: {
                          slidesPerView: 5,
                          spaceBetween: 20
                        }
                    }

                });
                }
            },


            // theme init
            theme_init: function() {
                SAB.theme_scrollUP();
                SAB.theme_counter();
                SAB.theme_nav();
                SAB.theme_nav_mobile();
                SAB.theme_team_list();
                SAB.theme_works_isotope();
                SAB.theme_works();
                SAB.theme_testi();
                SAB.theme_header();
                SAB.theme_client_slide();
            }

        } //end SAB


    $(document).ready(function() {
        SAB.theme_init();
    });

    $(window).resize(function(){
        SAB.theme_nav_mobile();
    });

})(jQuery);

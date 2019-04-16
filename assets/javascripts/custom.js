$(document).ready(function() {

    $(window).bind('scroll', function() {
             if ($(window).scrollTop() >= 100) {
                 $('.nav-sab').addClass('fixed');
             }
             else {
                 $('.nav-sab').removeClass('fixed');
             }
        });
 
 
}(jQuery));
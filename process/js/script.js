( function(global) {
     "use strict";

     // ==================================================
     // Scroll to == Start ===============================
     // ==================================================

     // note that the scrollTo have a top spacer because of the fixed menu
     // Get the height of the header
     var headerHeight = $("div#header").height();

     // Select all links with hashes
     $('a[href*="#"]')
     // Remove links that don't actually link to anything
     .not('[href="#"]')
     .not('[href="#0"]')
     .click(function(event) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
               // Only prevent default if animation is actually gonna happen
               event.preventDefault();
               $('html, body').animate({
                    scrollTop: target.offset().top - headerHeight
               }, 800, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                         return false;
                    } else {
                         $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                         $target.focus(); // Set focus again
                    };
               });
          }
     });

     // ==================================================
     // Magnific popup == Start ==========================
     // ==================================================

     // $('.support-popup-link').magnificPopup({
     //      src: '#support-popup', // CSS selector of an element on page that should be used as a popup
     //      type: 'inline',
     //      closeBtnInside:true
     // });

})(window);

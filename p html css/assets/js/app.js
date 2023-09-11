$(function() {

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset =  $(window).scrollTop();    



        /* Fixed Header */
        checkScroll(scrollOffset);

    $(window).on("scroll", function()   {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });


    function checkScroll(scrollOffset)  {
console.log(scrollOffset)
        if (scrollOffset >= 150) {
            header.addClass("header--fixed");
        } else {
            header.removeClass ("header--fixed");
        }
    }


    /* Smoorh Scroll */
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

        $("html, body").animate ({
            scrollTop: blockOffset
        }, 500)

       });
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
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
    }
  });
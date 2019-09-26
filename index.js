
// Make Navbar appear dark if scrolled
  $(window).scroll(function(){
    if (this.scrollY >= 510) {
      $('#navbar').addClass('scroll');
      $('header').addClass('scroll-header');
      $('.logo').removeClass('logo-big').addClass('scroll-logo');
    } else {
      $('#navbar').removeClass('scroll');
      $('header').removeClass('scroll-header');
      $('.logo').addClass('logo-big').removeClass('scroll-logo');
      }
    });

// Reveal Navbar on click for mobile devices
  $(document).ready(function() {
          $('.navbar-icon').click(function() {
          $('#navbar').slideToggle('slow');
          $('.nav').addClass('clicked');
        });
      });

  $(document).ready(function() {
          $('.navbar-icon').click(function() {
          $('#navbar-terms').slideToggle('slow');
          $('.nav').addClass('clicked');
        });
      });

// Close Navbar on click on navlink
  $('.nav-link').click(function(){
    if (window.matchMedia("(max-width: 1050px)").matches) {
    $('#navbar').slideUp('slow');
  } else {
    $('#navbar').css('display', 'block');
  }
  });

// FadeUp Option

AOS.init({// Global settings:
disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
initClassName: 'aos-init', // class applied after initialization
animatedClassName: 'aos-animate', // class applied on animation
useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
disableMutationObserver: false, // disables automatic mutations' detections (advanced)
debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
offset: 100, // offset (in px) from the original trigger point
delay: 30, // values from 0 to 3000, with step 50ms
duration: 1000, // values from 0 to 3000, with step 50ms
easing: 'ease-in-out', // default easing for AOS animations
once: true, // whether animation should happen only once - while scrolling down
mirror: false, // whether elements should animate out while scrolling past them
anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// Scrollspy

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});
let _defaults = {
  throttle: 100,
  scrollOffset: 200, // offset - 200 allows elements near bottom of page to scroll
  activeClass: 'active',
  getActiveElement: function(id) {
    return 'a[href="#' + id + '"]';
  }
};

var instance = M.ScrollSpy.getInstance(elem);

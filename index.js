
// Make Navbar appear dark if scrolled
  $(window).scroll(function(){
    if (this.scrollY >= 510) {
      $('#navbar').addClass('scroll');
      $('header').addClass('scroll-header');
      $('navbar-icon').addClass('scroll-icon');
      $('.logo').removeClass('logo-big').addClass('scroll-logo');
    } else {
      $('#navbar').removeClass('scroll');
      $('header').removeClass('scroll-header');
      $('navbar-icon').removeClass('scroll-icon');
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

// Close Navbar on click on navlink
  $('.nav-link').click(function(){
    if (window.matchMedia("(max-width: 900px)").matches) {
    $('#navbar').slideUp('slow');
  } else {
    $('#navbar').css('display', 'block');
  }
  });

// Close Navbar on click outside
  $(document).on('click touchstart', function(e) {
    if (window.matchMedia("(max-width: 900px)").matches){
      if (!$('#navbar').is(e.target) && !$('.navbar-toggle').is(e.target) && !$('.nav').is(e.target)){
    		$('#navbar').slideUp('slow');
      }
    }
  	});

// FadeUp Option
AOS.init({
disable: false,
startEvent: 'DOMContentLoaded',
initClassName: 'aos-init',
animatedClassName: 'aos-animate',
useClassNames: false,
disableMutationObserver: false,
debounceDelay: 50,
throttleDelay: 99,
offset: 100,
delay: 30,
duration: 1000,
easing: 'ease-in-out',
once: true,
mirror: false,
anchorPlacement: 'top-bottom',
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

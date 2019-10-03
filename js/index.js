
// Make Navbar appear dark if scrolled
let elementPosition = $('.fa-chevron-down').offset().top;

if(window.matchMedia("(max-width: 600px)").matches) {
  elementPosition = $('.intro').offset().top - ($(window).height() * 0.2);
}

$(window).scroll(() => {
  const yScrollPos = window.pageYOffset;
  if (yScrollPos > elementPosition) {
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
$(document).ready(() => {
    $('.navbar-icon').click(() => {
      $('#navbar').slideToggle('slow');
      $('.nav').addClass('clicked');
      if($('.overlay').css('opacity') == '0.5') {
        $('.overlay').removeClass('visible');
        $('body').css('overflow-y', 'auto');
      } else {
        $('.overlay').addClass('visible');
        $('body').css('overflow-y', 'hidden');
      }
    });
});

// Close Navbar on click on navlink
$('.nav-link').click(() => {
  if (window.matchMedia("(max-width: 1024px)").matches) {
    setTimeout(() => {
      $('#navbar').slideUp('slow');
      $('.overlay').removeClass('visible');
      $('body').css('overflow-y', 'auto');
    }, 500);
  } else {
    $('#navbar').css('display', 'block');
  }
});

// Close Navbar on click outside
$(document).on('click touchstart', e => {
  if (window.matchMedia("(max-width: 1024px)").matches){
    if (!$('#navbar').is(e.target) && !$('.navbar-toggle').is(e.target) && !$('.navbar-icon').is(e.target) && !$('.nav').is(e.target) && !$('.nav-link').is(e.target)){
  		$('#navbar').slideUp('slow');
      $('.overlay').removeClass('visible');
      $('body').css('overflow-y', 'auto');
    }
  }
});

// Add line break in  footer if screensize <550px
let content = $('.footer-item:last-of-type').html();
const i = content.indexOf('|');

$(document).ready(() => {
  if (window.matchMedia("(max-width: 550px)").matches){
    content = content.substring(0, i) + '<br>' + content.substring(i + 4);
    $('.footer-item:last-of-type').html(content);
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
  offset: 150,
  delay: 30,
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

$(document).ready(function() {
  // Hacks
  // Smooth Scrolling Navigation
  $('.nav-container a, .footer .links a').smoothScroll({
      speed: 700
    });

  $('.home-link').click(function() {
    $.smoothScroll({
      scrollTarget: 'body',
      speed: 700
    });
  });
});
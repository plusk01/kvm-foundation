$(document).ready(function() {
  // Hacks
  $('.nav-container .pull-right a, .footer .links a').click(function(e) {
    url = $(e.target).attr('href');
    window.location = url;
  });
});
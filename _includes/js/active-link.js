var loc = window.location.pathname;

$('li').find('a').each(function() {
  $(this).toggleClass('active', $(this).attr('href') == loc);
});
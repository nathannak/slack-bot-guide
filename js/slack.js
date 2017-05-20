var top_menu_height = 0;
jQuery(function($) {
  $(window).load(function() {
    $('.external-link').unbind('click');
  });

  $(document).ready(function() {

    top_menu_height = $('.slack-top-menu').height();
    $('body').scrollspy({ target: '#slack-nav-bar', offset: top_menu_height + 10 });
    $('.external-link').unbind('click');

    // scroll to top
    $('#btn-back-to-top').click(function(e) {
      e.preventDefault();
      scrollTo('#slack-top');
    });

    $('.slack-top-menu .navbar-nav a').click(function(e) {
      e.preventDefault();
      var linkId = $(this).attr('href');
      scrollTo(linkId);
      if ($('.navbar-toggle').is(":visible") == true) {
        $('.navbar-collapse').collapse('toggle');
      }
      $(this).blur();
      return false;
    });
    if ($('#back-to-top').length) {
      var scrollTrigger = 100, // px
        backToTop = function() {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
            $('#back-to-top').addClass('show');
          } else {
            $('#back-to-top').removeClass('show');
          }
        }
      backToTop();
      $(window).on('scroll', function() {
        backToTop();
      });
      $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 800);
      });
    }

  });
});

// scroll animation 
function scrollTo(selectors) {

  if (!$(selectors).size()) return;
  var selector_top = $(selectors).offset().top - top_menu_height;
  $('html,body').animate({ scrollTop: selector_top }, 800);

}

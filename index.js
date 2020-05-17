// simple hamburger menu implementation
let watchNav = (function() {
  function show(event) {
    $('nav').css('visibility', 'visible').css('opacity', 1);
    event.type == 'click'
      ? $('#hero').attr('style', 'padding-top: 60px;')
      : $('#hero').removeAttr('style');
  }

  function hide() {
    $('nav').css('visibility', 'hidden').css('opacity', 0);
    $('#hero').attr('style', '');
  }

  function handleMenuItemClick() {
    $('nav').on('click', 'a', function() {
      hide();
    })
  }

  // watch .nav__toggle click and update nav 
  function handleNavToggleClick() {
    $('#js-nav__toggle').on('click', function(event) {
      $('nav').css('visibility') == 'hidden' ? show(event) : hide();
    })
  }

  // watch window resize and update nav 
  function handleResize() {
    $(window).resize(function(event) {
      $(window).width() > 415 ? show(event) : hide();
    });
  }

  return {
    watch: function () {
      handleMenuItemClick();
      handleNavToggleClick();
      handleResize();
    }
  }
})();

$(watchNav.watch());
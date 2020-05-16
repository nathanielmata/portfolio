// simple hamburger menu implementation
let watchMenu = (function() {
  function show(event) {
    $('nav').css('visibility', 'visible').css('opacity', 1);
    event.type == 'click'
      ? $('#hero').attr('style', 'padding-top: 60px;')
      : $('#hero').removeAttr('style');
  }

  function hide(event) {
    $('nav').css('visibility', 'hidden').css('opacity', 0);
    $('#hero').attr('style', '');
  }

  // watch .nav__toggle click and update nav 
  function handleClick() {
    $('#js-nav__toggle').on('click', function(e) {
      $('nav').css('visibility') == 'hidden' ? show(e) : hide(e);
    })
  }

  // watch window resize and update nav 
  function handleResize() {
    $(window).resize(function(e) {
      $(window).width() > 415 ? show(e) : hide(e);
    });
  }

  return {
    watch: function () {
      handleClick();
      handleResize();
    }
  }
})();

$(watchMenu.watch());
$(function () {
  $('.menu-trigger').on('click', function (event) {
    $(this).toggleClass('active');
    $('.nav').fadeToggle();
    event.preventDefault();
  });
  $('.nav a[href]').on('click', function (event) {
    if (window.innerWidth <= 768) {
      $('.menu-trigger').trigger('click');
    }
  });
  $(window).on('load scroll', function () {
    $('.animation').each(function () {
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height) {
        $(this).addClass('active');
      }
    });
  });
  $('#back a').on('click', function (event) {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    event.preventDefault();
  });
  $(function () {
    setTimeout(function () {
      $('.start p').fadeIn(1000);
    }, 500);
    setTimeout(function () {
      $('.start').fadeOut(500);
    }, 2500);
  });
});


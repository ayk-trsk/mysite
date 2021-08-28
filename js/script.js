$(function(){
  $('.menu-trigger').on('click',function(event){
    $(this).toggleClass('active');
    $('.nav').fadeToggle();
    event.preventDefault();
  });
  $('.nav a[href]').on('click', function(event) {
    if (window.innerWidth <= 768) {
      $('.menu-trigger').trigger('click');
    }
  });
  $(window).on('load scroll',function (){
		$('.animation').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});
});


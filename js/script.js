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
  });


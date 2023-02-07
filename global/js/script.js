
$(document).ready(function(){
    $('.reviews__slider').slick({
      arrows: true, 
      dots: false, 
      slidesToShow: 3, 
      centerMode: true,
      centerPadding: '5px',
      variableWidth: true,
      responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                slidesToScroll: 1,
            }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false, 
            dots: true, 
          }
      }
    ]
  });
  $('.footer__map__close').on('click', function() {
    $('.footer__map__leg').fadeOut('slow');
  });
});



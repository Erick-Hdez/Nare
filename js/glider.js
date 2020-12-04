
window.addEventListener('load', function(){
  new Glider(document.querySelector('.carousel-list'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.carousel-items',
    arrows: {
      prev: '.carousel-prev',
      next: '.carousel-next'
    },responsive: [
      {
        // screens greater than >= 450px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        // screens less than >= 800px
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });
});
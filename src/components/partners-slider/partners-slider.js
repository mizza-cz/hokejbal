$('.js-carousel').slick({
   slidesToShow: 6,
   slidesToScroll: 1,
   arrows: false,
   autoplay: true,
   responsive: [
      {
        breakpoint: 981,
        settings: {
         slidesToShow: 4,
        }
      },
      {
         breakpoint: 581,
         settings: {
          slidesToShow: 3,
         }
       },
       {
         breakpoint: 422,
         settings: {
          slidesToShow: 2,
         }
       },
   ]
});
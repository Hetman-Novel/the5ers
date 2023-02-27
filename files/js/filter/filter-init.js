$('.n_fBlocks_items').imagesLoaded(function () {
   // init Isotope
   var $grid = $('.n_fBlocks_items').isotope({
      itemSelector: '.n_fBlocks_item',
      percentPosition: true,
      masonry: { // use outer width of grid-sizer for columnWidth
         columnWidth: 2,
      }
   });

   // filter items on button click
   $('.n_fBlocks_buttons').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
   });

   //for menu active class
   $('.n_fBlocks_button').on('click', function (event) {
      $(this).siblings('.active-teb').removeClass('active-teb');
      $(this).addClass('active-teb');
      event.preventDefault();
   });
});
new Swiper('.banners-slider', {
   navigation: {
      prevEl: '.banners-swiper-button-prev',
      nextEl: '.banners-swiper-button-next',
   },
   simulateTouch: false,
   slideToClickedSlide: true,
   slidesPerView: 1,
   slidesPerGroup: 1,
   watchOverflow: true,
   spaceBetween: 80,
   speed: 800,
   effect: 'slide',
   clickable: false,
});
import Swiper from 'swiper/bundle';

  // import styles bundle
  import 'swiper/css/bundle';

  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  });
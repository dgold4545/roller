import Accord from 'accordion-js';
import Swiper from 'swiper/bundle';

new Accord('.accord-container', {
  duration: 400,
  openOnInit: [0],
});

new Swiper('.swiper-am', {
  direction: 'horizontal',
  speed: 400,
  spaceBetween: 0,
  loop: true,
  freeMode: false,
  navigation: {
    nextEl: '.button-next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      width: 260,
    },
    768: {
      slidesPerView: 3,
      width: 600,
    },
    1440: {
      slidesPerView: 6,
      width: 1200,
    },
  },
});

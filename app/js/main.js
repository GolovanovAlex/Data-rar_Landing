let swiperWork = new Swiper('.workSwiper', {
  freeMode: true,
  autoHeight: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centerMode: false,

  navigation: {
    nextEl: '.swiper-but-next',
    prevEl: '.swiper-but-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

let swiperReview = new Swiper('.reviewSwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  autoHeight: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-but-next',
    prevEl: '.swiper-but-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

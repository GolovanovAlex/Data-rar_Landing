let swiperWork = new Swiper('.workSwiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-but-next',
    prevEl: '.swiper-but-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

let swiperReview = new Swiper('.reviewSwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
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
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

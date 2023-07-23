let swiperWork = new Swiper('.workSwiper', {
  slidesPerView: 6,
  spaceBetween: 20,
  freeMode: true,
  autoHeight: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-but-next',
    prevEl: '.swiper-but-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let swiperReview = new Swiper('.reviewSwiper', {
  slidesPerView: 3,
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
});

const swiper0 = new Swiper('.swiper-container.hero__swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  direction: 'horizontal',
  loop: true,
  speed: 5000,
  navigation: false,
  pagination: false,
  autoplay: {
    delay: 5000,
  },
});

const swiper1 = new Swiper('.swiper-container.gallery__swiper', {
  spaceBetween: 50,
  slidesPerColumn: 2,
  slidesPerView: 3,
  slidesPerGroup: 3,
  direction: 'horizontal',
  speed: 600,
  navigation: {
    nextEl: '.swiper-button-next.gallery__swiper-button-next',
    prevEl: '.swiper-button-prev.gallery__swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination.gallery__swiper-pagination',
    type: 'fraction',
  },
  keyboard: {
    enabled: false,
    onlyInViewport: true,
    pageUpDown: false,
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд с картинами',
    nextSlideMessage: 'Следующий слайд с картинами',
  },
});

const swiper2 = new Swiper('.swiper-container.editions__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: true,
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next.editions__swiper-button-next',
    prevEl: '.swiper-button-prev.editions__swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination.editions__swiper-pagination',
    type: 'fraction',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд с изданиями',
    nextSlideMessage: 'Следующий слайд с изданиями',
  },
});

const swiper3 = new Swiper('.swiper-container.projects__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  direction: 'horizontal',
  loop: true,
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next.projects__swiper-button-next',
    prevEl: '.swiper-button-prev.projects__swiper-button-prev',
  },
  keyboard: {
    enabled: false,
    onlyInViewport: true,
    pageUpDown: false,
  },
  a11y: {
    prevSlideMessage: 'Посмотреть следующих партнеров',
    nextSlideMessage: 'Посмотреть предыдущих партнеров',
  },
});

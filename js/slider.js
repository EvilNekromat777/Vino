// Слайдер "Рекомендуемые товары"
const swiperRecommended = new Swiper('.swiper__recommended', {
    loop: true,
    slidesPerView: 4,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next__recommended',
      prevEl: '.swiper-button-prev__recommended',
    }
  });


  // Слайдер "Похожие товары"
  const swiperSimilar = new Swiper('.swiper__similar', {
    loop: true,
    slidesPerView: 4,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next__similar',
      prevEl: '.swiper-button-prev__similar',
    }
  });


  // Слайдер "С этим товаром покупают"
  const swiperTogether = new Swiper('.swiper__together', {
    loop: true,
    slidesPerView: 4,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next__together',
      prevEl: '.swiper-button-prev__together',
    }
  });


  // Слайдер Новинки
 const swiperNews = new Swiper('.swiper__news', {
    loop: true,
    slidesPerView: 4,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next__news',
      prevEl: '.swiper-button-prev__news',
    }
  });


   // Слайдер Акции
   const swiperStocks = new Swiper('.swiper__stocks', {
    loop: true,
    slidesPerView: 4,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next__stocks',
      prevEl: '.swiper-button-prev__stocks',
    }
  });
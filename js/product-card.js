
// Винтаж - переключение активного таба
$(".vintage__item").click(function(e) {
    e.preventDefault();
    $(".vintage__item").removeClass('active');
    $(this).addClass('active');
  })

  // Винтаж - раскрытие скрытых табов
  $(".vintage__more").click(function(e) {
    e.preventDefault();
    $(".vintage__more").addClass('hide');
    $(".vintage__items").removeClass('hide');
  })


  // ПЕРЕКЛЮЧЕНИЕ ТАБОВ в КАРТОЧКЕ ТОВАРА
  $(function() {
      $("ul.tabs__caption").on("click", "li:not(.active)", function() {
          $(this)
              .addClass("active")
              .siblings()
              .removeClass("active")
              .closest("div.tabs")
              .find("div.tabs__content")
              .removeClass("active")
              .eq($(this).index())
              .addClass("active");
      });
  });


  // Описание товара - раскрытие по клику "Читать еще"
  // Винтаж - раскрытие скрытых табов
  $(".specifications__description-more").click(function(e) {
    e.preventDefault();
    $(".specifications__description").addClass('show');
    $(".specifications__description-more").addClass('hide');
  })


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

  
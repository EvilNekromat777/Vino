
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

  
 // Лайки и дизлайки на отзывах
$(document).ready(function() {
  $('.like').click(function () {
      var $input = $(this).parent().find('.likes__number_like');
      var count = parseInt($input.val()) + 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
  });
  $('.dislike').click(function () {
      var $input = $(this).parent().find('.likes__number_dislike');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
  });
});


// Раскрытие "Смотреть все отзывы"
$(".reviews__more").click(function(e) {
  e.preventDefault();
  $(".reviews__items").removeClass('hide');
  $(".reviews__more").addClass('hide');
})


// Форма добавления отзыва - очищение полей по кнопке Отменить
  $(".button__reset").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
});



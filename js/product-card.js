
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
  // Переключение pager внизу страницы
  $(".pager__item").click(function(e) {
    e.preventDefault();
      $(".pager__item").removeClass('active');
      $(this).addClass('active');
  });
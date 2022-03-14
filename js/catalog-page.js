  // Переключение pager внизу страницы
  $(".pager__item").click(function(e) {
    e.preventDefault();
      $(".pager__item").removeClass('active');
      $(this).addClass('active');
  });


  // Фильтр
  $(".sidebar-filter__title").click(function(e) {
    e.preventDefault();

    $(this).parent().toggleClass('active');
  });


  $(".filter__button").click(function(e) {
    e.preventDefault();
    $('.sidebar').toggleClass('active');
    $(this).toggleClass('active');
    $('.catalog-page').toggleClass('active');
  });


  $(".polzunok").slider({
    animate: "slow",
    range: true,    
    values: [2200, 8500],
    min: 450,
    max: 15000,
    slide : function(event, ui) {    
        $('.range_from').val(ui.values[ 0 ]); 
        $('.range_to').val(ui.values[ 1 ]); 
    }
});


// Закрыть фильтр на крестик (мобилка)
const closeSidebar = document.querySelector(".modal__close_sidebar");

closeSidebar.addEventListener('click', (e) => {
  if(e.currentTarget.classList.contains('modal__close_sidebar')){
    $('.sidebar').removeClass('active');
    $('.filter__button').removeClass('active');
    $('.catalog-page').removeClass('active');
  }
})
"use strict"

// -- Определяем на каком устройстве открыта страница
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

// - если открыта на мобилке (есть тачскрин)
if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');

    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++){
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function(e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
}else{
    document.body.classList.add('_pc');
};


// -- меню бургер
// const iconMenu = document.querySelector('.menu__icon');
// const menuBody = document.querySelector('.menu__body');

// if(iconMenu){
//     iconMenu.addEventListener('click', function(e){
//         document.body.classList.toggle('_lock');
//         iconMenu.classList.toggle('_active');
//         menuBody.classList.toggle('_active');
//     });
// }


// Переключение вкладок меню
$(".menu ul li").click(function(e) {
    e.preventDefault();
    $(".menu ul li").removeClass('active');
    $(this).addClass('active');
  })


  // Слайдер
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });



  // Мобильный футер
  $(".footer__item").click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  })



  // Появление модалки "18 лет" через 10 секунд после загрузки страницы
  const modal = document.querySelector('.modal');
  const buttonApproval = document.querySelector('.button__approval');
  const modalTimerId = setTimeout(openModal, 3000);

  function openModal() {
    modal.classList.add('active');
}

buttonApproval.addEventListener( 'click', closeModal);
function closeModal() {
    modal.classList.remove('active');
};
  


// Сердечко закрашивается красным
$(".product-min .favourites").click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  })


// Счетчик кол-ва товаров внутри карточки
  $(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
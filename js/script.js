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

    if($(this).hasClass('tab-vino')){
      document.location.href = "catalog-page.html";
    } else{
      $(".menu ul li").removeClass('active');
      $(this).addClass('active');
    }
  });


  // Переключение product-kind-btns
$(".product-kind-btns__item").click(function(e) {
  e.preventDefault();
    $(".product-kind-btns__item").removeClass('active');
    $(this).addClass('active');
});

 

// Счетчик кол-ва товаров внутри карточки
  $(document).ready(function() {
    $('.counter__minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.counter__plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});


// Клик на превью товара
const cardProductMin = document.querySelectorAll('.product-min');
const  inTheBasketButton = document.querySelectorAll('.in-the-basket .button');

 // При нажатии кнопки "Добавить в корзину" появляется счетчик
function clickButton(){
  inTheBasketButton.forEach(element => {
    element.addEventListener('click', (e) => {
      e.currentTarget.parentElement.classList.add('hide');
      e.currentTarget.parentElement.parentElement.classList.add('active');
    })
  })
};

function clickCard(){
  cardProductMin.forEach(element => {
    element.addEventListener('click', (e) => {
      if(e.target.classList.contains('like')){
        e.target.classList.toggle('active');
      } else if(e.target.classList.contains('product-min__img') || e.target.classList.contains('block-title')){ // Открытие целиковой карточки товара при клике на превью
        document.location.href = "product-card.html";
      } else if(e.target.classList.contains('counter__span')){
        document.location.href = "basket.html";
      } else {
        clickButton();
      }
    })
  })
}
clickCard();


// При клике на кнопку "Каталог" (в хедере) - появляется product-menu
const buttonCatalog = document.querySelector('.button__catalog');

buttonCatalog.addEventListener('click', (e) => {
  if(e.currentTarget.classList.contains('button__catalog')){
    buttonCatalog.classList.toggle('active');
    $('.product-menu').toggleClass('active');
    $(".product-menu__item").removeClass('active');
  }
})


// На product-menu при клике на item появляется фильтр (десктоп)
$(".product-menu__item").click(function(e) {
  e.preventDefault();
  $(".product-menu__item").removeClass('active');
  $(this).addClass('active');
})


// На product-menu при клике на item переходим на страницу каталога (мобилка)
$(".product-menu__item").click(function(e){
  e.preventDefault();
  if($('body').hasClass('_touch')){
    document.location.href = "catalog-page.html"
  }
});

// При клике на логотип - переходим на главную страницу
$(".logo").click(function(e) {
  e.preventDefault();
  document.location.href = "index.html"
}
);


      // Добавить промокод
$(".basket-page__promocode-add").click(function(e) {
  e.preventDefault();
  $('.basket-page__promocode-input').toggleClass('hide');
  if($('.basket-page__promocode-input').hasClass('hide')){
    $('.basket-page__promocode-add').text('Добавить');
  } else{
    $('.basket-page__promocode-add').text('Закрыть');
  }
})


// Удаление из корзины
$(".basket-page__item .counter button").click(function(e) {
  e.preventDefault();
  $(this).parents('.basket-page__item').addClass('hide');
})


// Переключение product-kind-btns
$(".product-kind-btns__item").click(function(e) {
  e.preventDefault();
  $(".product-kind-btns__item").removeClass('active');
  $(this).addClass('active');
})



  // Модалка "Вход - регистрация"
  $(".cabinet").click(function(e) {
    e.preventDefault();
      $(".modal__entrance").addClass('active');
  });
  $(".modal__close").click(function(e) {
    e.preventDefault();
    $(".modal__entrance").removeClass('active');
    $('.modal__password-recovery').addClass('hide');
  });


  // Модалка регистрации - "забыли пароль?"
$(".form__forgot").click(function(e) {
  e.preventDefault();
  $('.modal__password-recovery').removeClass('hide');
})

  // Модалка регистрации открывается по кнопке Зарегистрироваться
  $(".form__registration-button").click(function(e) {
    e.preventDefault();
    $('.modal__registration').addClass('active');

    $(".modal__close").click(function(){
      $('.modal__registration').addClass('hide');
    });
  })


    // Сортировка
$(".sorting-min__button").click(function(e) {
  e.preventDefault();
  $('.sorting-min').toggleClass('active');
})


// input "Поиск по каталогу"
$(".search-form").click(function(e) {
  e.preventDefault();
  $('.search-form').toggleClass('active');
})



// Аккордеон в футере
$(".footer__item").click(function(e) {
  e.preventDefault();

  if($(this).hasClass('active')){
    $(this).removeClass('active');
  } else {
    $(".footer__item").removeClass('active');
    $(this).addClass('active');
  }
})
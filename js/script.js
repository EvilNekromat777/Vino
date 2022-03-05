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


  // Мобильный футер
  $(".footer__item").click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
  })
 

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


const cardProductMin = document.querySelectorAll('.product-min');

      // const inTheBasket = document.querySelector('.in-the-basket'),
      //   inTheBasketButton = document.querySelector('.in-the-basket .button'),
      //   inTheBusketSvg = document.querySelector('.in-the-basket .button svg'),
      //   inTheBusketSpan = document.querySelector('span');

    


function clickCard(){
  cardProductMin.forEach(element => {
    element.addEventListener('click', (e) => {
      if (e.target.classList.contains('like')){
        e.target.classList.toggle('active');
      } else if(e.target.classList.contains('button') || e.target.parentElement.classList.contains('button')){
        console.log("кнопка");
        e.target.classList.add('hide');
      }
      else {
        // document.location.href = "product-card.html";
        console.log(e.target);
      }
      })
  });
}

clickCard();
    



// Открытие целиковой карточки товара при клике на превью
// $(".product-min").click(function() {
//       document.location.href = "product-card.html";
     
// }); 


    // При нажатии кнопки "Добавить в корзину" появляется счетчик
// $(".product-min .in-the-basket").click(function(e) {
//     e.preventDefault();
//     $(this).addClass('hide');
//     $(this).parent().addClass('active');
//   })


 


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
$(".sorting-min").click(function(e) {
  e.preventDefault();
  $('.sorting-min').toggleClass('active');
})


    // input "Поиск по каталогу"
    $(".search-form").click(function(e) {
      e.preventDefault();
      $('.search-form').toggleClass('active');
    })
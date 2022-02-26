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



  // Аккордион для мобильного футера
  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;
      
      var dropdownlink = this.el.find('.dropdownlink');
      dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
      }
    }
    
    var accordion = new Accordion($('.accordion-menu'), false);
  })
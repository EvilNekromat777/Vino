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


    // Появление модалки "18 лет" через 3 секунды после загрузки страницы
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





 

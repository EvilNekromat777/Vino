 // Появление модалки "18 лет" через 3 секунды после загрузки страницы
 const modalConfirmAge = document.querySelector('.modal__confirm-age');
 const buttonApproval = document.querySelector('.button__approval');
 const modalTimerId = setTimeout(openModal, 3000);

 function openModal() {
    modalConfirmAge.classList.add('active');
}
 buttonApproval.addEventListener( 'click', closeModal);
 function closeModal() {
    modalConfirmAge.classList.remove('active');
 };


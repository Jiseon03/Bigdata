let popupOpenBtn = document.querySelector('.popup-open-btn');
let popupCloseBtn = document.querySelector('.popup-close-btn');
let popup = document.querySelector('.popup');

popupOpenBtn.addEventListener('click',function(){
  popup.classList.add('is-active')
})

popupCloseBtn.addEventListener('click',function(){
  popup.classList.remove('is-active')
})

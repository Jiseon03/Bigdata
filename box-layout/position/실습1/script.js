//팝업창 열고 닫기
let popupOpenBtn = document.querySelector('.popup-open-btn');
let popupCloseBtn = document.querySelector('.popup-close-btn');
let popup = document.querySelector('.popup');

popupOpenBtn.addEventListener('click',function(){
  popup.classList.add('is-active')
})

popupCloseBtn.addEventListener('click',function(){
  popup.classList.remove('is-active')
})


//sidebar 
let sidebar = document.querySelector('.sidebar');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn');
let sidebarCloseBtn = document.querySelector('.sidebar-close-btn');
//sidebar-open-btn 클릭했을때 is-active 클래스 추가
sidebarOpenBtn.addEventListener('click',function(){
    sidebar.classList.add('is-active')
})
//sidebar-close-btn 클릭했을때 is-active 클래스 추가
sidebarCloseBtn.addEventListener('click',function(){
    sidebar.classList.remove('is-active')
})
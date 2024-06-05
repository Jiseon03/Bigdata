//검색창 클릭했을 때 클래스 탈부착
let search = document.querySelector('.search');
let searchOpenBtn = document.querySelector('.search-btn');
let searchCloseBtn = document.querySelector('.search-close-btn');

function searchOpen(){
    search.classList.add('is-open')
}

function searchClose(){
    search.classList.remove('is-open')
}

searchOpenBtn.addEventListener('click',searchOpen);
searchCloseBtn.addEventListener('click',searchClose);

//사이드바 오픈 클릭 했을때 클릭이벤트 추가
let sidebar = document.querySelector('.sidebar');
let overlay = document.querySelector('.overlay');
let sidebarOpenBtn = document.querySelector('.bar');


function sidebarOpen(){
    sidebar.classList.add('is-active');
    overlay.classList.add('is-active');
}

function sidebarClose(){
    sidebar.classList.remove('is-active');
    overlay.classList.remove('is-active');
}

sidebarOpenBtn.addEventListener('click',sidebarOpen);
overlay.addEventListener('click',sidebarClose);

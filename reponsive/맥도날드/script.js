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

let headerBtn = document.querySelector('.header-btn');
let header = document.querySelector('header');

headerBtn.addEventListener('click',function(){
    if(headerBtn.innerHTML == 'Dark'){
        headerBtn.innerHTML = 'Light';
        header.classList.add('dark');
        headerBtn.classList.add('dark');
    }
    else if(headerBtn.innerHTML == 'Light'){
        headerBtn.innerHTML = 'Dark';
        header.classList.remove('dark');
        headerBtn.classList.remove('dark');
    }
})

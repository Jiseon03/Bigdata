let headerBtn = document.querySelector(".header-btn");
function darkModeToggle() {
    let btnTxt = headerBtn.innerHTML;
    let header = document.querySelector("header");
    //header-btn 을 클릭했을 때
    headerBtn.addEventListener("click", function () {
    if (btnTxt == "Dark") { //버튼 텍스트가 'Dark'일 경우
        btnTxt = "Light";      
        header.classList.add("dark");
        headerBtn.classList.add("dark");
    } 
    else if (btnTxt == "Light") { //버튼 텍스트가 'Light'일 경우
        btnTxt = "Dark";
        header.classList.remove("dark");
        headerBtn.classList.remove("dark");
    }
    });
}

darkModeToggle();

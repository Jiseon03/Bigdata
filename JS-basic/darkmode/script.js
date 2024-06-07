let headerBtn = document.querySelector(".header-btn");
// function darkModeToggle() {
//     let btnTxt = headerBtn.innerHTML;
//     let header = document.querySelector("header");

//     headerBtn.addEventListener("click", function () {
//     if (btnTxt == "Dark") {
//         btnTxt = "Light";
//         header.classList.add("dark");
//         headerBtn.classList.add("dark");
//     }
//     else{
//         btnTxt = "Dark";
//         header.classList.remove("dark");
//         headerBtn.classList.remove("dark");
//     }
//     });
// }



function darkModeToggle() {
  let count = 0;
  let btnTxt = headerBtn.innerHTML;
  let header = document.querySelector("header");

  headerBtn.addEventListener("click", function () {
    count++;
    if (count % 2 !== 0) { //홀수 일 때
      btnTxt = "Light";
      header.classList.add("dark");
      headerBtn.classList.add("dark");
    } else { //짝수 일 때
      btnTxt = "Dark";
      header.classList.remove("dark");
      headerBtn.classList.remove("dark");
    }
  });
}

darkModeToggle();

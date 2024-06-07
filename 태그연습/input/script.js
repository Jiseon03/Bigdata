let year = document.querySelector(".year");
//한국표준시 (Korea Standard time)
let kst = new Date();
console.log(kst);
let getYear = kst.getFullYear();
let getMonth = kst.getMonth();
let getDate = kst.getDate();
console.log(getYear, getMonth, getDate);

for (let i = 1920; i <= getYear; i++) {
  // let options = document.createElement('option'); //option 태그 생성
  //options.innerHTML = i; //option태그에 i추가
  //year.appendChild(options);

  //let options = `<option>${i}</option>`
  //추가하고싶은곳.insertAdjacentHTML('위치',추가할요소)
  //year.insertAdjacentHTML('beforeend',options)

  $(".year").append("<option>" + i + "</option>");
}

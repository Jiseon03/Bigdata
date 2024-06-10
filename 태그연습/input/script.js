let idVeri = pwVeri = pwCheckVeri = false;


let userid = document.getElementById("userid");
let userpw = document.getElementById("userpw");
let pwWarn = document.querySelector(".pw-warn");
let pwCheck = document.getElementById("user-pwcheck");
let pwCheckWarn = document.querySelector(".pwcheck-warn");

let year = document.getElementById("year");
let month = document.getElementById("month");
let date = document.getElementById("date");

let kst = new Date();
let getYear = kst.getFullYear();

//아이디 입력란에 8글자 미만 입력시 경고문 뜨게 하기
let idtxt = document.querySelector("#idtxt");

userid.addEventListener("focusout", function () {
  if (userid.value.length >= 8) {
    idtxt.innerHTML = '<span class="txt-green">멋진 아이디네요!</span>';
    idVeri = true;
  } else {
    idtxt.innerHTML =
      '<span class="txt-red">아이디를 8글자 이상 입력하세요</span>';
  }
});

//비번 (정규식 사용)
//1. 비밀번호 자릿수 (최소 8자에서 16자까지)
//2. 최소 하나 이상의 영문자 (소문자 or 대문자)
//3. 최소 하나 이상의 숫자
//4. 최소 하나 이상의 특수문자 (!@#$%^&*?_)
userpw.addEventListener("focusout", function () {
  let passwordExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
  //test() : 정규식 일치 여부를 boolean 값으로 반환함.
  if (!passwordExp.test(userpw.value)) {
    //정규식과 userpw.value값이 일치하지 않을 때
    pwWarn.innerHTML = `<span class="txt-red">8~16자의 영문 대 소문자, 숫자, 특수기호를 사용하세요</span>`;
  } else {
    pwWarn.innerHTML = "";
    pwVeri = true;
  }
});


//비밀번호 재확인
pwCheck.addEventListener("focusout", function () {
  if (userpw.value == pwCheck.value) {
    pwCheckWarn.innerHTML = "";
    pwCheckVeri = true;
  } else {
    pwCheckWarn.innerHTML =
      '<span class="txt-red">비밀번호가 일치하지 않습니다</span>';
  }
});


//select 태그에 option 추가하기
for (let i = 1920; i <= getYear; i++) {
  let option = `<option>${i}</option>`;
  year.insertAdjacentHTML("beforeend", option);
}

for (let i = 1; i <= 12; i++) {
  let option = `<option>${i}</option>`;
  month.insertAdjacentHTML("beforeend", option);
}

for (let i = 1; i <= 31; i++) {
  let option = `<option>${i}</option>`;
  date.insertAdjacentHTML("beforeend", option);
}

//checkbox 5개 까지만 클릭할 수 있는 기능

let hobby = document.querySelectorAll('input[type="checkbox"]');
let maxCount = 5;
hobby.forEach((item) => {
  item.addEventListener('change',() =>{
    let checkCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if(checkCount > maxCount){
      item.checked = false;
      alert("최대 5개까지만 선택할 수 있습니다.")
    }
  })
})

//제출 버튼 클릭했을 때 세가지 조건이 모두 참일때 제출 가능
let submitBtn = document.querySelector('#submit-btn');
let joinForm = document.querySelector('#join-form')
submitBtn.addEventListener('click',function(e){
  if(idVeri && pwVeri && pwCheckVeri){
    joinForm.submit();
  }
  else{
    //기본 속성 제거
    e.preventDefault();
  }
})
  



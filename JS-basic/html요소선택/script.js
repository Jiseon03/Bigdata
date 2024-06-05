
let hello = document.getElementById('hello');
let changeBtn = document.getElementById('txt-change-btn');

hello.innerHTML = '안녕';
hello.style.color = 'red';

changeBtn.addEventListener('click', () => {
    hello.innerHTML = 'Hello';
    hello.style.color = 'blue';
})

//Vanilla JS
let items = document.querySelectorAll('.item');
console.log(items);
document.querySelectorAll('.item')[0].style.color = 'blue';
document.querySelectorAll('.item')[1].style.color = 'blue';
document.querySelectorAll('.item')[2].style.color = 'blue';

// j-Query
$('.item').css('color','skyblue');

// //배열 반복문 forEach
// items.forEach((item) => {
//     item.style.color = 'skyblue';
// });

// for(let i = 0; i <= items.length; i++){
//    items[i].innerHTML = '반복문'
// }

//자료형
let num = 5;
let num1 = '5';
let txt = '안녕'
console.log(typeof(num),typeof(num1));

//Array, object -> 여러 자료를 한번에 담을 때 사용
//Array : []
//Object : {}

let arr = ['jiseon', 1234 , 'qwer' , txt]
console.log(arr[1]);

let tel = '01012345678';
let obj = {
    이름 : 'jiseon', 번호 : 1234, address : '대전광역시 ~', 전화 : tel
};

console.log(obj.전화);
//변수, 문자열 연결
//``(백틱) -> ${변수명}
let hi = '안녕하세요 저는 '
let name = '권지선'
let my = hi + name + ' 입니다'
let my1 = `안녕하세요 저는 ${name}입니다`
console.log(my,my1,typeof(my1))

function info(myName){
    console.log(`안녕하세요 저는 ${myName}입니다`)
}

info('지선권');
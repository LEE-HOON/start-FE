// document.querySelector('.box').addEventListener('click',clickBody);

// Window
// console.log(window.outerWidth);
// console.log(window.name);
// window.open('http://www.daum.net');

// Location
// location.href='http://www.daum.net';

// History
// history.back();

// Dom 탐색
// var debug = document.getElementById('debug');
// console.log(debug);

// var box = document.querySelector('#debug');
// console.log(box2);

// var box = document.querySelector('.box');
// var box2 = document.querySelector('.box2');
// console.log(box2);

// Dom 생성
var div = document.createElement('div');

div.style.border = '1px solid #000'
div.innerHTML='Hello!'
console.log(div);

// document.body.appendChild(div);

// Dom 삽입
// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!'); 
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);

// Dom 제거

// var debug = document.getElementById('debug');
// debug.remove();
// const list = document.getElementById('list'); 
// list.removeChild(list.children[0]);

// Event

// function clickBody(){
//     console.log('click');
// }

// 콜백 함수
// var clickCount = 0;
// function popup(event){  
//     console.log(++clickCount);
//     console.log(arguments, event ,event.type,event.currentTarget);
// }
// document.body.addEventListener('click', popup);

// 이벤트 위임 패턴
// var list = document.querySelector('#list');
// console.log(list.children);

// for(var i= 0; i<list.children.length; i++){
//     console.log(list.children[i]);
//     list.children[i].addEventListener('click', function() {
//         console.log(1);
//     })
// }

// var app = document.getElementById('list');

// app.addEventListener('click', function(event) {
//     if(event.target.nodeName == 'LI'){
//         //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
//         console.log(2);
//     }
// });

// 이벤트 전파 중지
// var link = document.querySelector('#link');
// link.addEventListener('click',function(){
//     console.log(111111);
//     event.preventDefault();
// });
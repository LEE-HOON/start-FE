console.log('app.js');

// 변수
var name ='이훈';
var Name ='이훈';
var age = 28;
var message = 'hello';

// 주석
 한줄은 // |
 여러줄은 /* */

// 숫자형
var count = 1;

console.log(count);

// 문자열
var name = '이훈';

// 부울
var isMan = true; // bool
var isMan ="true"; // string

console.log(isMan);

// 함수
function log(str) {
    console.log(str);
  }
log('hello');

var log = function(str) { //변수에 함수 넣기
    console.log(str);
  };

// 객체
var image = {
    width: 100,
    height: 100,
    name:'1.png',
}; 

// 배열
var image1 = [1,2,3,4,5,6,'a',{}];
image1[0] = 'a';
console.log(image1);

// null
var data = null;
var data1 = '';

// undefined
var data2;

// 더하기 연산자
console.log(1+2);
console.log('a' + 'b');

// 동등 일치
'' == '0'; // false
0 == ''; // true
0 == '0'; // true
false == 'false'; // false
false == '0'; // true
false == undefined; // false
false == null; // false
null == undefined; // true
' \t\r\n' == 0; // true

// 뇬래굡 - and 둘다 참이여야만 실행
if (isHero && isHulk) {

 }

 // 논리합 - or 하나라도 참이면 실행
 if (isHero || isHulk) {

  }
// 논리부정 not 아니면 실행
  if (!isHero) {
    //영웅이 아니라면
  }

// 삭제
// var로 선언 한 변수 delete 못함
delete image.width;
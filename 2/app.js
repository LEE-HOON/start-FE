console.log('app');

//  Create
var todos = ['운동'];
var todo = '게임';
todos.push(todo);
console.log(todos);

// Read
todos. forEach(function(todo){
    console.log(todo);
});

// Update
var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

// Delete
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);

// if문
var isMan = false;
if (isMan) {
    console.log('1');
  } else if (!isMan && IsHero){

  }
  else{
      console.log('2');
  }

// alert
alert('안녕하세요');
var who = prompt('당신은 누구십니까?');
console.log(who);

// 댓글이나 글 삭제할때
var isDelete = confirm('정말 삭제하시겠습니까?'); 
console.log(isDelete);

// 함수 호출
 function sum(a,b){
     return a+b;
 }
 console.log(sum(1,2));

var car = {
    year: '2014',
    starting: function() {
      console.log('starting..');
    },
  };

  car.starting();

(function(){
    var a = 'a';
    console.log(a);
})();

function sum(x, y) {
    if (!y) y = 1;
    console.log(x + y);
  }
console.log(sum(3));
console.log(sum(3,3));
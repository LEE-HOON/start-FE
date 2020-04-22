var $box = document.querySelectorAll(".box");
var $addRed = document.querySelector('.add-red');
var $addBtn = document.querySelector('.add-btn');
var $deleteBtn = document.querySelector('.delete-btn');
var $textBtn = document.querySelector('.text-btn');
var $resetBtn = document.querySelector('.reset-btn');
var $toggleBtn = document.querySelector('.toggle-btn');
var $imageBtn = document.querySelector('.image-btn');
var $red= document.querySelectorAll(".box");

var className = '';
var exImg = 'https://i.imgur.com/69NjYBH.png';

function addcolor(){
    var $red= document.querySelectorAll('.box');
    var red = $red.length;
    if($red){
        for(var i = 0; i < red; i++){
            $red[i].classList.add('red');
        }
    }
}

function addbox(){
    var add = document.createElement('div');
    add.className = 'box';
    add.style = 'display:block';
    document.body.appendChild(add);
}

function deletebox(){
    var $red= document.querySelectorAll('.box');
    $red[$red.length - 1].remove();

}

function addtext(){
    
    var $txt = document.querySelector('.txt');
    if($red){
        for(i=0; i < $red.length; i++){
            $red[i].innerHTML += $txt.value;
        }
    }
}

function reset(){
   var $red= document.querySelectorAll('.box');

   for(var i=1; i<=$red.length; i++){
        $red[$red.length - i].remove();
    } 
}

var k=0
function toggle() {
    var $red= document.querySelectorAll(".box");
    if(k == 0){
        for(var i =1 ; i<= $red.length ; i++){
            $red[$red.length-i].style.display = 'none';
        }
        k=1
    }
    else {
        for(var i =1 ; i<= $red.length ; i++){
            $red[$red.length-i].style.display = 'block';
        }
        k=0
    }
}

    function imagebtn(){
             if($red.length == 0) addbox();{
            var add = document.createElement('img');
            add.className = 'box';
            add.style = 'display:block';
            add.src ="https://i.imgur.com/69NjYBH.png";
            document.body.appendChild(add);
        }
        
    }

$addRed.addEventListener('click', addcolor);
$addBtn.addEventListener('click', addbox);
$deleteBtn.addEventListener('click', deletebox);
$textBtn.addEventListener('click',addtext);
$resetBtn.addEventListener('click',reset);
$toggleBtn.addEventListener('click',toggle);
$imageBtn.addEventListener('click',imagebtn);
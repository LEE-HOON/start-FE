var $select = null;

function printBoards(){
    var $board = document.getElementById("board");
    var boardCount = 16;
    var isWhite = false;
    var className = '';
    var boardLineCount = 4;
    var str ='';

    for(var i=0; i < boardCount; i++){

        className = (isWhite) ? 'black': 'white';
        str += '<span class ="' + className + '"></span>'
        isWhite = !isWhite;
    
        if(i % boardLineCount == boardLineCount - 1){
            isWhite = !isWhite;
        }
    }
    $board.innerHTML = str;

}
function selcet(event) { 
    if($select){
        $select.className = $select.className.replace(' select','');
    }
    var el = event.currentTarget; 
    el.className += ' select';
    $select = el;
}

function addEvent(){
    var $boards = document.querySelectorAll('span');
    var boradsLength = $boards.length;
    for(var i = 0; i < boradsLength; i++){
        $boards[i].addEventListener('click', selcet);
    }
}

printBoards();
addEvent();

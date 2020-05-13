const $box = document.querySelector('.box');
const $bug = document.querySelector('#bug');
const $point = document.querySelector('#point');
const $life = document.querySelector('#life');

let point = 0;
let life = 10;

function RandomTarget() {
  const width = $box.clientWidth - $bug.clientWidth;
  const height = $box.clientHeight - $bug.clientHeight;

  $bug.style.left = Math.random() * width + 'px';
  $bug.style.top = Math.random() * height + 'px';
}

function TargetClick(event) {
  point += 1;
  $point.innerHTML = point;
  event.stopPropagation();
  RandomTarget();
}

function TargetNoneClick() {
  life -= 1;
  $life.innerHTML = life;
  if (life == 0) {
    alert('gameover!');
  }
}

$bug.addEventListener('click', TargetClick);
$box.addEventListener('click', TargetNoneClick);

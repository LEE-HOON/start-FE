const $box = document.getElementById('box');
const $min = document.getElementById('min');
const $max = document.getElementById('max');
const $btn = document.getElementById('btn');

function RandomNum() {
  const min = parseInt($min.value);
  const max = parseInt($max.value);

  const RandomNumber = Math.floor(Math.random() * (max - min)) + min;
  console.log(RandomNumber);

  const count = RandomNumber - 35;
  $btn.disabled = true;
  const print = setInterval(() => {
    if (count == RandomNumber) {
      clearInterval(print);
      $btn.disabled = false;
    }
    $box.innerHTML = count + 1;
  }, 15);
}
$btn.addEventListener('click', RandomNum);

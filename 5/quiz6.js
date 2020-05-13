const $btn = document.getElementById('btn');
const $result = document.getElementById('result');
const $num = document.getElementById('num');

function timestable() {
  $result.innerHTML = ' ';
  const num = parseInt($num.value);

  if (Number.isNaN(num)) {
    alert('숫자를 입력하세요');
    return;
  }

  for (var i = 1; i <= 9; i += 1) {
    $result.innerHTML += `${num} x ${i} = ${num * i}<br>`;
  }
}
$btn.addEventListener('click', timestable);

const $url = document.querySelector('#url');
const $btn = document.querySelector('#btn');
const $log = document.querySelector('#log');

// url을 입력하고 가져오기 버튼을 누르면 하단(log)에 가져온 부분 출력
function printLog(str) {
  $log.value = str;
}
// 가져오기 동작
function fetchUrl() {
  const url = $url.value;
  if (!url) {
    window.alert('url을 입력하세요');
  } else {
    const promise = fetch(url);
    promise
      .then((res) => {
        const textPromise = res.text();
        textPromise.then((data) => {
          printLog(data);
        });
      })
      .catch((error) => {
        $log.value = error;
      });
  }
}

// url 입력폼에서 엔터를 칠경우 가져오기 동작
function EnterKey() {
  if (window.event.keyCode == 13) {
    fetchUrl();
  }
}

$btn.addEventListener('click', fetchUrl);
$url.addEventListener('keypress', EnterKey);

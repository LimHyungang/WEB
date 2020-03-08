function fetchPage(name) {  // 페이지 정보를 가져와 article 태그를 채운다
  fetch(name).then(function(response) {  // then() : call-back 메서드
    response.text().then(function(text) {
      document.querySelector('article').innerHTML = text;  // 매개변수로 들어온 파일의 내용을 article의 innerHTML에 할당

    })
  });
}

if (location.hash) {  // 해시값에 따라 조건 수행 (location 앞에 window 생략)
  fetchPage(location.hash.substr(2));  // 해시, 뱅 제외하고 나머지문자로 페이지 정보 출력
} else {
  fetchPage('web');  // 해시 없을 경우 기본 페이지 출력
}

fetch('navList').then(function(response) {
  response.text().then(function(text) {
    var items = text.split(',');  // navList의 값을 배열로 저장
    var tags = document.querySelector('#nav').innerHTML;
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      item = item.trim();  // 마지막 항목에 공백이 붙어 fetchPage를 제대로 수행하지 못함을 막기 위함
      var tag = '<li><a href="#!' + item + '" onclick="fetchPage(\'' + item + '\')">' + item + '</a></li>';
      tags = tags + tag;
    }
    document.querySelector('#nav').innerHTML = tags;  // 조합된 태그정보를 #nav의 innerHTML에 할당
  })
});

function fetchPage(name) {
  fetch(name).then(function(response) {
    response.text().then(function(text) {
      document.querySelector('article').innerHTML = text;
    })
  });
}

if (location.hash) {
  fetchPage(location.hash.substr(2));
} else {
  fetchPage('web');
}

fetch('navList').then(function(response) {
  response.text().then(function(text) {
    var items = text.split(',');
    var tags = document.querySelector('#nav').innerHTML;
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      item = item.trim();
      var tag = '<li><a href="#!' + item + '" onclick="fetchPage(\'' + item + '\')">' + item + '</a></li>';
      tags = tags + tag;
    }
    document.querySelector('#nav').innerHTML = tags;
  })
});

var Body = {
  setColor:function (color) {
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },

  setBackgroundColor:function (color) {
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

var Link = {
  setColor:function (color) {
    // var alist = document.querySelectorAll('a');
    // for (var i = 0; i < alist.length; i++) {
    //   alist[i].style.color = color;
    // }
    $('a').css('color', color);
  }
}

function nightDayHandler (self) {
  var target = document.querySelector('body');
  if (self.value === 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Link.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Link.setColor('blue');
  }
}

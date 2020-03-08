var Body = {
  setColor:function (color) {
    $('body').css('color', color);  // body태그의 color를 매개변수로 받은 color로 변경  
  },

  setBackgroundColor:function (color) {
    $('body').css('backgroundColor', color);  // body태그의 backgroundColor를 매개변수로 받은 color로 변경
  }
}

var Link = {
  setColor:function (color) {
    $('a').css('color', color);  // 모든 a태그의 color를 매개변수로 받은 color로 변경
  }
}

function nightDayHandler (self) {  // #bright버튼의 정보에 따라 주야간모드 적용
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

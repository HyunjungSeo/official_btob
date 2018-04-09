(function($){
// jQuery start ===============

var headBtn = $('#headBtn');
var showGnbBox = $('#showGnbBox');

showGnbBox.hide();

headBtn.on('click',function(evt){
	evt.preventDefault();
	showGnbBox.slideToggle();
});

var iconBox = $('.member_picture').children('button');
iconBox.on('click',function(e){
	e.preventDefault();
	var findAttr = $(this).children('a').attr('href');
	// console.log(findAttr);
	var offsetBox = $(findAttr).offset().top;
	// console.log(offsetBox);
	  $('html, body').animate({ scrollTop: offsetBox }, 500);
});

var topBtn = $('#footBox');
topBtn.on('click',function(e){
	e.preventDefault();
	var findAttr = $(this).children('a').attr('href');
	// console.log(findAttr);
	var offsetBox = $(findAttr).offset().top;
	// console.log(offsetBox);
	  $('html, body').animate({ scrollTop: offsetBox }, 500);
});

var conBtn = $('#moreInfomation').children('.menu_shape_color').eq(0);
var awaBtn = $('#moreInfomation').children('.menu_shape_color').eq(1);
var conPopUp = $('#conPopUp');
var awaPopUp = $('#awaPopUp');
var escBtn = $('#escBtnBox');

conBtn.on('click',function(e){
	e.preventDefault();
	conPopUp.slideDown();
	escBtn.slideDown();
});

awaBtn.on('click',function(e){
	e.preventDefault();
	awaPopUp.slideDown();
	escBtn.slideDown();
});

escBtn.on('click',function(e){
	e.preventDefault();
	conPopUp.slideUp();
	awaPopUp.slideUp();
	escBtn.hide();
});



//--------------------------------------------------------

var arr = [];
var scrollView = $('.scroll_view');
var i = 0;
var sLength = scrollView.length;

for(; i< sLength; i++){
	arr[i] = scrollView.eq(i).offset().top;
}
// console.log('arr: '+arr);

var body = $("html, body");
body.stop().animate({scrollTop:0}, 500, 'swing');

var viewEq = 0;
var scrollEvent = true;
scrollView.on('mousewheel DOMMouseScroll', function(e){
  var E = e.originalEvent;
  var delta = 0;

  if(body.is(':animated')){return;}
  (E.detail) ? data = E.detail * 40 : delta = -E.wheelDelta;

  (delta > 0) ? viewEq++ : viewEq--;
  if(viewEq < 0){viewEq = 0;
  }else if(viewEq > sLength){
    viewEq = sLength;
  }
  // console.log(viewEq);

  body.stop().animate({scrollTop:arr[viewEq]}, 500, 'swing');
});

// ------------------------------------

var wh = $(window).outerHeight(true);
var scroll_view = $('.scroll_view');

console.log(wh);

$(window).on('resize',function(){
	console.log('resize!!!!!!!');
  var nwh = $(window).outerHeight(true);

  if( wh < nwh ){
  	scroll_view.css({height:nwh});
  };
});


// jQuery end =================
})(this.jQuery);
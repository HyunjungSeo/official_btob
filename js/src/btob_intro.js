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

// jQuery end =================
})(this.jQuery);
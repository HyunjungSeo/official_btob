(function($){
// jQuery start ===============

var enkwangBox = $('#enkwangBox');
var enkwangTop = $('#enkwangBox').offset().top;
var openBox_01 = $('.enkwang_open').eq(0);
var openBox_02 = $('.enkwang_open').eq(1);
var openBox_03 = $('.enkwang_open').eq(2);

openBox_01.hide();
openBox_02.hide();
openBox_03.hide();


$(window).on('scroll',function(){
	var enkwangScroll = $(this).scrollTop();

	console.log(enkwangTop+'=='+enkwangScroll);

	if(enkwangTop <= enkwangScroll){
	  openBox_01.slideDown(function(){
	  	  openBox_02.delay(100).slideDown(function(){
	  	  		openBox_03.delay(100).slideDown();
	  	  	});
	  });
	}
});






// jQuery end =================
})(this.jQuery);
(function($){
// schedule_select.js
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


//----------------------------------

var tab = $('#titlepicMov').children('h2');
var tabLi = tab.children('button');
var tabContent = $('#tabArea');
var tabContentLi = tabContent.children('article');

/*
	tabLi.on('click',function(evt){
		evt.preventDefault();
		var myBtn = $(this).index();
		console.log(myBtn);


	//tab메뉴 버튼에서 지정한 class이름 select를 일단 삭제
		tabLi.removeClass('select');
		//선택된 몇번째? 확인 후 li에 class이름 select를 지정
		tabLi.eq(myBtn).addClass('select');
	//해당하는 탭메뉴의 내용이 순서에 맞게 나오게 만들어라.
	tabContentLi.removeClass('showPart');
	tabContentLi.eq(myBtn).addClass('showPart');

	// tabLi.eq(myBtn).on('click',function(e){
	// 	e.preventDefault();
	// 	tabContentLi.eq(myBtn).show();
	// });

	});
*/

$.each(tabLi,function(i,v){
	$(this).on('click',function(e){
		e.preventDefault();
		tabLi.eq(i).addClass('select');
		tabLi.eq(i).siblings().removeClass('select');
		tabContentLi.eq(i).addClass('showPart');
		tabContentLi.eq(i).siblings().removeClass('showPart');
        tabContentLi.eq(i).find('.more').show();
        tabContentLi.eq(i).siblings().find('.more').hide();
	})
})
// jQuery end =================
// // schedule_select.js
})(this.jQuery);
(function($){
// jQuery start ===============

var headBtn = $('#headBtn');
var showGnbBox = $('#showGnbBox');

showGnbBox.hide();

headBtn.on('click',function(evt){
	evt.preventDefault();
	showGnbBox.slideToggle();
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

var popUp = $('#popUp');
var albumMore = $('.albumMore');

var bigWave = $('.bigWave');
var bigWaveM = $('.bigWaveM');

var brotherAct = $('.brotherAct');
var brotherActM = $('.brotherActM');

var piece07 = $('.piece_07');
var piece07M = $('.piece_07_M');

var piece06 = $('.piece_06');
var piece06M = $('.piece_06_M');

var piece05 = $('.piece_05');
var piece05M = $('.piece_05_M');

var piece04 = $('.piece_04');
var piece04M = $('.piece_04_M');

var piece03 = $('.piece_03');
var piece03M = $('.piece_03_M');

var piece02 = $('.piece_02');
var piece02M = $('.piece_02_M');

var piece01 = $('.piece_01');
var piece01M = $('.piece_01_M');

var Feelem = $('.Feel_em');
var FeelemM = $('.Feel_em_M');

var newmen = $('.newmen');
var newmenM = $('.newmenM');

var btobBlue = $('.btobBlue');
var btobBlueM = $('.btobBlueM');

var escBtn = $('.albumMore').children('button');

escBtn.on('click',function(e){
	e.preventDefault();
	popUp.slideUp();
});

bigWave.on('click',function(e){
	e.preventDefault();
	popUp.slideDown();
    bigWaveM.siblings('img').hide();
    bigWaveM.show();});

brotherAct.on('click',function(e){
	e.preventDefault();
	popUp.slideDown();
    brotherActM.siblings('img').hide();
    brotherActM.show();});

piece07.on('click',function(e){
	e.preventDefault();
	popUp.slideDown();
	  piece07M.siblings('img').hide();
    piece07M.show();});

piece06.on('click',function(e){
	e.preventDefault();
	popUp.slideDown();
	  piece06M.siblings('img').hide();
    piece06M.show();});

piece05.on('click',function(e){
	e.preventDefault();
	popUp.slideDown();
	  piece05M.siblings('img').hide();
    piece05M.show();});

piece04.on('click',function(e){
	e.preventDefault();
	popUp.slideDown();
	  piece04M.siblings('img').hide();
    piece04M.show();});

piece03.on('click',function(e){
	e.preventDefault();
	popUp.slideDown();
	  piece03M.siblings('img').hide();
    piece03M.show();});

piece02.on('click',function(e){
	e.preventDefault();
	popUp.slideDown();
	  piece02M.siblings('img').hide();
    piece02M.show();});

piece01.on('click',function(e){
	e.preventDefault();
	popUp.slideDown();
	  piece01M.siblings('img').hide();
    piece01M.show();});

Feelem.on('click',function(e){
	e.preventDefault();
	popUp.slideDown();
	  FeelemM.siblings('img').hide();
    FeelemM.show();});

newmen.on('click',function(e){
	e.preventDefault();
	popUp.slideDown();
	  newmenM.siblings('img').hide();
    newmenM.show();});

btobBlue.on('click',function(e){
	e.preventDefault();
	popUp.slideDown();
	  btobBlueM.siblings('img').hide();
    btobBlueM.show();});
//--------------------------------------



// jQuery end =================
})(this.jQuery);
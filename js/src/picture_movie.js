// tab_index_02.js
(function($){
// jQuery start ===============

//------------모달영역---------------------------------------
// 1. 기본구조 만들기(modal 영역)(만든 후 숨기기)

var modalBox = $('#modalBox');
  modalBox.append('<div class="view_box"><button type="button" class="close"><i class="fa fa-times" aria-hidden="true"></i><span class="hidden">닫기</span></button><img></div><div class="bg_back"></div>'); 
  modalBox.append('<div class="list_box clearfix"><ul></ul></div>'); 

var viewBox = $('.view_box');
var listBox = $('.list_box').find('ul');
// 어두운 배경 만들기(덤)
var bgBack = $('.bg_back');

bgBack.css({width:'100%', height:'100%', position:'fixed', zIndex:'500', backgroundColor:'rgba(0,0,0,0.5)', top:0, left:0});

viewBox.css({zIndex:'1000'});
viewBox.hide();
bgBack.hide();


var jsonUrl = '../../js/data/j_180210_pyungchangShow.json';

$.getJSON(jsonUrl, function(data){
  // console.log(data);
  var i = 0;
  var dataLength = data.length;
  var baseDir = '../../img/btobAll/j_180210_pyungchangShow/';
  var thumDir = baseDir + 'thum/';
  var bigDir = baseDir + 'big/';
  for(; i<dataLength; i++){
listBox.append('<li><button type="button"></button></li>');
listBox.children('li').eq(i).find('button').append($('<img />',{alt:data[i].thum ,src:thumDir+data[i].file}));
  }


// listBox.children('li').eq(9).nextAll().hide();
// -----------더보기 버튼-----------------------------


var listArea = $('.list_box');
var listWrap = listArea.find('ul');
var listLi = listWrap.children('li');

var listLiLength = listLi.length;
  // console.log(listLiLength);
var moreBtn = $('.more');


var start = 8;
var view = 4;
// listBox.children('li').eq(9).nextAll().hide();
listBox.children('li').hide();
listLi.eq(start).prevAll().show();
// listLi.eq(start).prevAll().show();


moreBtn.on('click',function(e){
  e.preventDefault();
  var end = start+view;

if(start < listLiLength){
  
for(; start < end; start++){
  listLi.eq(start).fadeIn();
  // console.log(start);

    if(start >= listLiLength-1){
      moreBtn.hide();
      break;
    };

  }//for
 }else{
  moreBtn.hide();
 }//if
 
});

moreBtn.find('button').on('keydown',function(event){
  console.log(event.key, event.keyCode);
  // tab 9, ese 27, enter 13
  $(document).unbind('keydown');
  console.log(start-view);
  switch(event.keyCode){
    case 9:
      listLi.eq(start-view-1).find('a').focus();
    break;
    case 27:
      $(this).blur();
    break;
    case 38:
      listLi.eq(start-view).find('a').focus();
    break;
    case 40:
      $(this).trigger('click');
    break;
  }
});

//-----------------------------------------------------
// 선택한 순서값을 기억하게 변수 만들기
var memoriIndex = 0;

// 3. list 버튼 클릭시 modal창 띄우기

var listBtn = listBox.find('li');
listBtn.on('click', ['button'], function(e){
   e.preventDefault();
  memoriIndex = $(this).index();

// 7. 클릭 시 modal영역에 이미지 대체하기
  viewBox.find('img').attr({alt:data[memoriIndex].big, src:bigDir + data[memoriIndex].file});

   viewBox.fadeIn();
   bgBack.fadeIn();
   viewBox.find('button.close').focus();

// ----------------------------좌우버튼------------------
// 1. 버튼 만들기---------------------------------
viewBox.append('<div class="left_btn"><button type="button"><i class="fa fa-chevron-circle-left"></i><span class="hidden">이전이미지 보기</span></button></div>');
viewBox.append('<div class="right_btn"><button type="button"><i class="fa fa-chevron-circle-right"></i><span class="hidden">다음 이미지 보기</span></button></div>');

var slideLeft = $('.left_btn');
var slideRight = $('.right_btn');
var leftBtn = slideLeft.children('button');
var rightBtn = slideRight.children('button');


// 2. 버튼 디자인 하기------------------------------
slideLeft.css({width:'30px', height:'30px', zIndex:'2000', position:'absolute', top:'50%', marginTop:'-2.5%', left:0});
leftBtn.css({width:'100%', height:'100%', fontSize:'20px',backgroundColor:'transparent', color:'rgba(11,47,119,0.7)'});

slideRight.css({width:'30px', height:'30px', zIndex:'2000', position:'absolute', top:'50%', marginTop:'-2.5%', right:0});
rightBtn.css({width:'100%', height:'100%', fontSize:'20px',backgroundColor:'transparent', color:'rgba(11,47,119,0.7)'});




slideRight.on('click',['button'],function(e){
  e.preventDefault();
  memoriIndex++;

   if(memoriIndex >= dataLength){memoriIndex = 0};

  viewBox.find('img').attr({alt:data[memoriIndex].big, src:bigDir + data[memoriIndex].file});
  // console.log(memoriIndex);
}); //slideRight.on('click')

slideLeft.on('click',['button'],function(e){
  e.preventDefault();
  memoriIndex--;

   if(memoriIndex <= 0){memoriIndex = dataLength -1;};

  viewBox.find('img').attr({alt:data[memoriIndex].big, src:bigDir + data[memoriIndex].file});
  // console.log(memoriIndex);
});  //slideLeft.on('click')

}); //listBtn.on('click')


// ------------------------------좌우버튼----------------------

// });

// 4. modal 닫기버튼 클릭시 사라지기 (modal창)

viewBox.find('button.close').on('click',function(e){
  e.preventDefault();
  viewBox.fadeOut();
  bgBack.fadeOut();

  console.log(memoriIndex);
  listBtn.eq(memoriIndex).find('button').focus();
}); // viewBox.on('click')


});  // getJSON


// jQuery end =================
})(this.jQuery);




// ============= test

// var js_01 = '../../js/data/j_180210_pyungchangShow.json';
// var js_02 = '../../js/data/i_180227_koreaTrable.json';
// var js_03 = '../../js/data/g_180224_weConcert_inBusan.json';

// // var myShow = $.parseJSON('../../js/data/j_180210_pyungchangShow.json');
// // console.log(js_01, js_02);
// var jj = [];
// $.getJSON([js_03],function(data){
//   return jj[0] = data;
// });
// $.getJSON([js_02],function(data){
//   return jj[1] = data;
// });
// $.getJSON([js_01],function(data){
//   return jj[2] = data;
// });

// console.log(jj);
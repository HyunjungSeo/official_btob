(function($){
// jQuery start ===============

// enkwangBox -----------------------------------
var enkwangBox = $('#enkwangBox');
var enkwangTop = $('#enkwangBox').offset().top;
var ek_openBox_01 = $('.enkwang_open').eq(0);
var ek_openBox_02 = $('.enkwang_open').eq(1);
var ek_openBox_03 = $('.enkwang_open').eq(2);
var ek_snsBox = $('#ek_snsBox');

ek_openBox_01.hide();
ek_openBox_02.hide();
ek_openBox_03.hide();
ek_snsBox.hide();

$(window).on('scroll',function(){
	var enkwangScroll = $(this).scrollTop();

	// console.log(enkwangTop+'=='+enkwangScroll);

	if(enkwangTop <= enkwangScroll){
	  ek_openBox_01.delay(400).slideDown(function(){
	  	  ek_openBox_02.delay(400).slideDown(function(){
	  	  		ek_openBox_03.delay(400).slideDown(function(){
	  	  			ek_snsBox.delay(400).slideDown()
	  	  		});
	  	  	});
	     });
	   }
  });

// minhyukBox -----------------------------------
var minhyukBox = $('#minhyukBox');
var minhyukTop = $('#minhyukBox').offset().top;
var mh_openBox_01 = $('.minhyuk_open').eq(0);
var mh_openBox_02 = $('.minhyuk_open').eq(1);
var mh_openBox_03 = $('.minhyuk_open').eq(2);
var mh_snsBox = $('#mh_snsBox');

mh_openBox_01.hide();
mh_openBox_02.hide();
mh_openBox_03.hide();
mh_snsBox.hide();

$(window).on('scroll',function(){
	var minhyukScroll = $(this).scrollTop();

	// console.log(minhyukTop+'=='+minhyukScroll);

	if(minhyukTop <= minhyukScroll){
	  mh_openBox_01.delay(400).slideDown(function(){
	  	  mh_openBox_02.delay(400).slideDown(function(){
	  	  		mh_openBox_03.delay(400).slideDown(function(){
	  	  			mh_snsBox.delay(400).slideDown()
	  	  		});
	  	  	});
	     });
	   }
  });

// chansubBox -----------------------------------
var changsubBox = $('#changsubBox');
var changsubTop = $('#changsubBox').offset().top;
var cs_openBox_01 = $('.changsub_open').eq(0);
var cs_openBox_02 = $('.changsub_open').eq(1);
var cs_openBox_03 = $('.changsub_open').eq(2);
var cs_snsBox = $('#cs_snsBox');

cs_openBox_01.hide();
cs_openBox_02.hide();
cs_openBox_03.hide();
cs_snsBox.hide();

$(window).on('scroll',function(){
	var changsubScroll = $(this).scrollTop();

	// console.log(changsubTop+'=='+changsubScroll);

	if(changsubTop <= changsubScroll){
	  cs_openBox_01.delay(400).slideDown(function(){
	  	  cs_openBox_02.delay(400).slideDown(function(){
	  	  		cs_openBox_03.delay(400).slideDown(function(){
	  	  			cs_snsBox.delay(400).slideDown()
	  	  		});
	  	  	});
	     });
	   }
  });

// hyunsikBox -----------------------------------
var hyunsikBox = $('#hyunsikBox');
var hyunsikTop = $('#hyunsikBox').offset().top;
var hs_openBox_01 = $('.hyunsik_open').eq(0);
var hs_openBox_02 = $('.hyunsik_open').eq(1);
var hs_openBox_03 = $('.hyunsik_open').eq(2);
var hs_snsBox = $('#hs_snsBox');

hs_openBox_01.hide();
hs_openBox_02.hide();
hs_openBox_03.hide();
hs_snsBox.hide();

$(window).on('scroll',function(){
	var hyunsikScroll = $(this).scrollTop();

	// console.log(hyunsikTop+'=='+hyunsikScroll);

	if(hyunsikTop <= hyunsikScroll){
	  hs_openBox_01.delay(400).slideDown(function(){
	  	  hs_openBox_02.delay(400).slideDown(function(){
	  	  		hs_openBox_03.delay(400).slideDown(function(){
	  	  			hs_snsBox.delay(400).slideDown()
	  	  		});
	  	  	});
	     });
	   }
  });

// penielBox -----------------------------------
var penielBox = $('#penielBox');
var penielTop = $('#penielBox').offset().top;
var pn_openBox_01 = $('.peniel_open').eq(0);
var pn_openBox_02 = $('.peniel_open').eq(1);
var pn_openBox_03 = $('.peniel_open').eq(2);
var pn_snsBox = $('#pn_snsBox');

pn_openBox_01.hide();
pn_openBox_02.hide();
pn_openBox_03.hide();
pn_snsBox.hide();

$(window).on('scroll',function(){
	var penielScroll = $(this).scrollTop();

	// console.log(penielTop+'=='+penielScroll);

	if(penielTop <= penielScroll){
	  pn_openBox_01.delay(400).slideDown(function(){
	  	  pn_openBox_02.delay(400).slideDown(function(){
	  	  		pn_openBox_03.delay(400).slideDown(function(){
	  	  			pn_snsBox.delay(400).slideDown()
	  	  		});
	  	  	});
	     });
	   }
  });

// ilhoonBox -----------------------------------
var ilhoonBox = $('#ilhoonBox');
var ilhoonTop = $('#ilhoonBox').offset().top;
var ih_openBox_01 = $('.ilhoon_open').eq(0);
var ih_openBox_02 = $('.ilhoon_open').eq(1);
var ih_openBox_03 = $('.ilhoon_open').eq(2);
var ih_snsBox = $('#ih_snsBox');

ih_openBox_01.hide();
ih_openBox_02.hide();
ih_openBox_03.hide();
ih_snsBox.hide();

$(window).on('scroll',function(){
	var ilhoonScroll = $(this).scrollTop();

	// console.log(ilhoonTop+'=='+ilhoonScroll);

	if(ilhoonTop <= ilhoonScroll){
	  ih_openBox_01.delay(400).slideDown(function(){
	  	  ih_openBox_02.delay(400).slideDown(function(){
	  	  		ih_openBox_03.delay(400).slideDown(function(){
	  	  			ih_snsBox.delay(400).slideDown()
	  	  		});
	  	  	});
	     });
	   }
  });

// sungjaeBox -----------------------------------
var sungjaeBox = $('#sungjaeBox');
var sungjaeTop = $('#sungjaeBox').offset().top;
var sj_openBox_01 = $('.sungjae_open').eq(0);
var sj_openBox_02 = $('.sungjae_open').eq(1);
var sj_openBox_03 = $('.sungjae_open').eq(2);
var sj_snsBox = $('#sj_snsBox');

sj_openBox_01.hide();
sj_openBox_02.hide();
sj_openBox_03.hide();
sj_snsBox.hide();

$(window).on('scroll',function(){
	var sungjaeScroll = $(this).scrollTop();

	// console.log(sungjaeTop+'=='+sungjaeScroll);

	if(sungjaeTop <= sungjaeScroll){
	  sj_openBox_01.delay(400).slideDown(function(){
	  	  sj_openBox_02.delay(400).slideDown(function(){
	  	  		sj_openBox_03.delay(400).slideDown(function(){
	  	  			sj_snsBox.delay(400).slideDown()
	  	  		});
	  	  	});
	     });
	   }
  });






// jQuery end =================
})(this.jQuery);
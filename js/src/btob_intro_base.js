(function($){
// jQuery start ===============
// btob_intro_base.js

function ImportFile(selectName, fileName, bgIf){
	$('#wrap').append('<div class="'+selectName+'_wrap"></div>');
	var selectWrap = $('.'+selectName+'_wrap');
	selectWrap.css({width:'100%', height:'100%'});
	selectWrap.load(fileName,function(){
		console.log(selectName);
		var selectName = $('#'+selectName);
		selectName.addClass('clearfix');
		var childrenBox = selectName.children();
		childrenBox.css({margin:'0 auto'});
		if(bgIf == true){
			var bgColor = childrenBox.css('backgroundColor');
			// console.log('selectName: '+childrenBox, 'background:'+bgColor);
			selectName.css({'backgroundColor':bgColor});
		}
	});
};



var baseUrl = './';
var loadFile = [
			// ['enkwang' , baseUrl + 'enkwang.html' ],
			['minhyuk' , baseUrl + 'minhyuk.html' ],
			['changsub', baseUrl + 'changsub.html'],
			['hyunsik' , baseUrl + 'hyunsik.html' ],
			['peniel'  , baseUrl + 'peniel.html'  ],
			['ilhoon'  , baseUrl + 'ilhoon.html'  ],
			['sungjae' , baseUrl + 'sungjae.html' ]
			];

for(var i = 0; i<loadFile.length; i++){
	ImportFile(loadFile[i][0],loadFile[i][1] );
}



// jQuery end =================
})(this.jQuery);
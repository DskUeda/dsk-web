/*------------------------------------------------------------------------
  アドレスバー非表示
------------------------------------------------------------------------*/
window.onload = function(){
	setTimeout(scrollTo, 100, 0, 1);
}

/*------------------------------------------------------------------------
  メニューボタン
------------------------------------------------------------------------*/
$(function(){
var menu = $('#gnav'),
	body = $(document.body),
	menuWidth = menu.outerWidth();
	$('#gnav-menu, .overlay').on('click', function(){
	body.toggleClass('open');
		if(body.hasClass('open')){
			menu.animate({'left': 0}, 500);
		} else {
			menu.animate({'left': -menuWidth}, 500);
		}
	});
});

/*------------------------------------------------------------------------
  【ABテスト】
------------------------------------------------------------------------*/
$(function() {
	var dispPtn = $.cookie("ABtest"); //cookie呼び出し
	dispPtn = parseInt(dispPtn); //Data型に強制変換
	if(!dispPtn | dispPtn == 0) {
		var rdmPtn = Math.floor(Math.random()*3)+1; //乱数発生
		$.cookie("ABtest",rdmPtn); //cookie保存
		var dispPtn = rdmPtn;
	}
	$('header').append(
	'<div id="abTest">' +
	'<p class="thisPtn"><span class="ab-ttl">ABテスト</span><span class="setPtn"> パターン' + dispPtn + 'に設定されています</span></p>' +
	'<p class="jackText">1/3の確率で赤・緑・青色にページジャックされます</p>' +
	'</div>');
	$('#abTest').append(
		'<div class="ptnBtn">' +
		'<a class="changePtn1" href="javascript:void(0)" onclick="FuncPtn1()"><span>パターン1</span></a>' +
		'<a class="changePtn2" href="javascript:void(0)" onclick="FuncPtn2()"><span>パターン2</span></a>' +
		'<a class="changePtn3" href="javascript:void(0)" onclick="FuncPtn3()"><span>パターン3</span></a>' +
		'<a class="changeDflt" href="javascript:void(0)" onclick="FuncDflt()"><span>通常色版</span></a>' +
		'</div>');
	FuncJack();
});

function FuncJack() {
	var dispPtn = $.cookie("ABtest"); //cookie呼び出し
	dispPtn = parseInt(dispPtn); //Data型に強制変換
	var tgtLogo = $('header h1');
	var tgtBody = $('body');
	var navBtn = $('#head_menu li a');
	switch(dispPtn) {
		case 1: //赤
			tgtLogo.css('color','#A51A46');
			tgtBody.css('background-color','#A51A46');
			navBtn.css({'background-color':'#A51A46', 'color':'#fff'});
			break;
		case 2: //緑
			tgtLogo.css('color','#4DA05F');
			tgtBody.css('background-color','#4DA05F');
			navBtn.css({'background-color':'#4DA05F', 'color':'#fff'});
			break;
		case 3: //青
			tgtLogo.css('color','#6297E6');
			tgtBody.css('background-color','#6297E6');
			navBtn.css({'background-color':'#6297E6', 'color':'#fff'});
			break;
		default: //デフォルト
			tgtLogo.css('color','#333');
			tgtBody.css('background-color','#7E8196');
			navBtn.css({'background-color':'#ccc', 'color':'#333'});
			break;
	}
}
function FuncPtn1() {
	$.cookie("ABtest",1);
	FuncJack();
	$('.thisPtn .setPtn').text(' パターン1に設定を変更、cookieに保存しました');
}
function FuncPtn2() {
	$.cookie("ABtest",2);
	FuncJack();
	$('.thisPtn .setPtn').text(' パターン2に設定を変更、cookieに保存しました');
}
function FuncPtn3() {
	$.cookie("ABtest",3);
	FuncJack();
	$('.thisPtn .setPtn').text(' パターン3に設定を変更、cookieに保存しました');
}
function FuncDflt() {
	$.cookie("ABtest",0);
	FuncJack();
	$('.thisPtn .setPtn').text(' 通常色版です ※このcookieは保存されません');
}

/*------------------------------------------------------------------------
  JSON
------------------------------------------------------------------------*/
//JSON外部呼び出し
/*$(function() {
	$.getJSON("/data/contents.json", getFunc); //JSONデータ呼び出し
});

function getFunc(json){
	var Itm = '<div class="item">';
	var H2 = '<h2>';
	var Pic = '<p class="photo"><img src="/dsk-design.website/images/';
	var Sml = '<p class="small">';
	var Txt = '<p class="txt">';
	var Lnk = '<a class="site-link" href="';
	var Spn = '"><span>';
	var clsItm = '</div>';
	var clsH2 = '</h2>';
	var clsPic = '"></p>';
	var clsP = '</p>';
	var clsLnk = '</span></a>';

	for (var i=0; i<json.contents.length; i++) {
		var contentsTpl = Itm + H2 + json.contents[i].tittle + clsH2 +
			Pic + json.contents[i].photo + clsPic +
			Sml + json.contents[i].date + clsP +
			Txt + json.contents[i].text + clsP;

			if(!json.contents[i].url == "") {
				var addHtml = Lnk + json.contents[i].url + Spn + json.contents[i].name + clsLnk + clsItm;
				var rtnTpl = contentsTpl + addHtml;
			}else {
				var clsHtml = clsLnk + clsItm;
				var rtnTpl = contentsTpl + clsHtml;
			}
		$("#top #contents").append(rtnTpl);
	}
}*/
window.onload = function(){
	$('#contents').masonry({
			itemSelector: '.cts-item',
			isAnimated: true,
			isFitWidth: true
	});
}

/*------------------------------------------------------------------------
  TOP戻るボタン
------------------------------------------------------------------------*/
$(function() {
	var topBtn = $('#page-top');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	topBtn.on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});

/*------------------------------------------------------------------------
  flipsnap
------------------------------------------------------------------------*/
$(function(){
	var $pointer = $('.pointer span');
	var flipsnap = Flipsnap('.flipsnap', {
		distance: 210
	});
	flipsnap.element.addEventListener('fspointmove', function() {
		$pointer.filter('.current').removeClass('current');
		$pointer.eq(flipsnap.currentPoint).addClass('current');
	}, false);
});

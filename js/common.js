/*------------------------------------------------------------------------
 メニューボタン
 ------------------------------------------------------------------------*/
$(function () {
    var slideBtn = $("#slide-btn");
    var slideMenu = $("#slide-menu");
    var closeBtn = $(".close");
    var actionTime = 500;
    slideBtn.on("click",function(){
        slideMenu.addClass("active");
        if( slideMenu.hasClass("active")) {
            slideMenu.fadeIn(actionTime);
            slideMenu.css('display','table');
        }
        $(window).on('touchmove.noScroll', function(e) {
            e.preventDefault();
        });
    });
    closeBtn.on("click", function(){
        slideMenu.removeClass("active");
        if( !slideMenu.hasClass("active")) {
            slideMenu.fadeOut(actionTime);
            slideMenu.css('display','none');
        }
        $(window).off('.noScroll');
    });

    var tgtMenu = $(".area_left .tgtMenu");
    var changeTime = 250;
    var backTime = 250;
    var onColor = "#084885";
    tgtMenu.hover(function() {
        $(this).animate({
            left: "5px"
        }, changeTime);
    },function() {
        $(this).animate({
            left: "0"
        }, backTime);
    });
});

/*------------------------------------------------------------------------
 【ABテスト】
 ------------------------------------------------------------------------*/
/*$(function () {
    var dispPtn = $.cookie("ABtest"); //cookie呼び出し
    dispPtn = parseInt(dispPtn); //Data型に強制変換
    if (!dispPtn | dispPtn == 0) {
        var rdmPtn = Math.floor(Math.random() * 3) + 1; //乱数発生
        $.cookie("ABtest", rdmPtn); //cookie保存
        var dispPtn = rdmPtn;
    }*/
    //$('header').append(
    //    '<div id="abTest">' +
    //    '<p class="thisPtn"><span class="ab-ttl">ABテスト</span><span class="setPtn"> パターン' + dispPtn + 'に設定されています</span></p>' +
    //    '<p class="jackText">1/3の確率で赤・緑・青色にページジャックされます</p>' +
    //    '</div>');
    //$('#abTest').append(
    //    '<div class="ptnBtn">' +
    //    '<a class="changePtn1" href="javascript:void(0)" onclick="colorPtn1()"><span>パターン1</span></a>' +
    //    '<a class="changePtn2" href="javascript:void(0)" onclick="colorPtn2()"><span>パターン2</span></a>' +
    //    '<a class="changePtn3" href="javascript:void(0)" onclick="colorPtn3()"><span>パターン3</span></a>' +
    //    '<a class="changeDflt" href="javascript:void(0)" onclick="colorDflt()"><span>通常色版</span></a>' +
    //    '</div>');
/*    colorJack();
});

function colorJack() {
    //var dispPtn = $.cookie("ABtest"); //cookie呼び出し
    dispPtn = parseInt(dispPtn); //Data型に強制変換
    var tgtBody = $('body');
    switch (dispPtn) {
        case 1: //赤
        tgtBody.css('background-color', '#A16464');
        break;

        case 2: //緑
        tgtBody.css('background-color', '#709890');
        break;

        case 3: //紫
        tgtBody.css('background-color', '#7764A1');
        break;

        default: //デフォルト
        tgtBody.css('background-color', '#708298');
        break;
    }
}
function colorPtn1() {
    $.cookie("ABtest", 1);
    colorJack();
    $('.thisPtn .setPtn').text(' パターン1に設定を変更、cookieに保存しました');
}
function colorPtn2() {
    $.cookie("ABtest", 2);
    colorJack();
    $('.thisPtn .setPtn').text(' パターン2に設定を変更、cookieに保存しました');
}
function colorPtn3() {
    $.cookie("ABtest", 3);
    colorJack();
    $('.thisPtn .setPtn').text(' パターン3に設定を変更、cookieに保存しました');
}
function colorDflt() {
    $.cookie("ABtest", 0);
    colorJack();
    $('.thisPtn .setPtn').text(' 通常色版です ※このcookieは保存されません');
}*/

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
                
/*window.onload = function () {
    $('#contents').masonry({
        itemSelector: '.cts-item',
        isAnimated: true,
        isFitWidth: true
    });
}*/

/*$(function () {
    $.getJSON('https://daimon-lunch.tokyo/common/apis/tweet-api.php?user=ishibashiisao&count=10&url_txt=text&calback=', twPhoto);
});

function twPhoto(json) {
    reTxt = json.user_name[0];
    reTxt.append.$('body');
}*/

/*------------------------------------------------------------------------
 TOP戻るボタン
 ------------------------------------------------------------------------*/
$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.on("click", function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

/*------------------------------------------------------------------------
 コンテンツfadein表示
 ------------------------------------------------------------------------*/
$(window).on('load', function() {
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var ctsPosition = $(this).offset().top;
            var winHeight = $(window).height();
            if ($(window).scrollTop() > ctsPosition - winHeight + winHeight/4) {
                $(this).css("opacity", "1" );
            } else {
                $(this).css("opacity", "0" );
            }
        });
    });
});

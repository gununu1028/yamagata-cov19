// JavaScript Document
jq(document).ready(function(){

var url=document.URL;
var local='';

if ( /yamagata/.test(url.slice(0,20))) {
local = '/yamagata';
}


//include html
/*
jq("#mainphotoarea").load(local+"/template/inc_mainphoto.html");
jq("#library-table").load(local+"/template/inc_library.html");
jq("#lang-box").load(local+"/template/inc_multilingal.html");
*/
// inc_emergency
var gelmt_emergency = document.getElementById("inc_emergency");
if(gelmt_emergency != null){
//alert(gelmt_emergency.innerHTML);
jq("#inc_emergency").load(local+"/template/inc_kinkyu.html");
}
else {
//alert(gelmt_emergency+"\n NoObject");
}

// inc_mpkotei
var gelmt_mpkotei = document.getElementById("inc_mpkotei");
if(gelmt_mpkotei != null){
//alert(gelmt_mpkotei.innerHTML);
jq("#inc_mpkotei").load(local+"/houshasen/kukan/kotei.html");
}
else {
  //alert(gelmt_mpkotei+"\n NoObject");
}

// inc_mpkahan
var gelmt_mpkahan = document.getElementById("inc_mpkahan");
if(gelmt_mpkahan != null){
//alert(gelmt_mpkahan.innerHTML);
jq("#inc_mpkahan").load(local+"/houshasen/kukan/kahan.html");
}
else {
//alert(gelmt_mpkahan+"\n NoObject");
}


// inc_radimenu - houshasen
var gelmt_radimenu = document.getElementById("inc_radimenu");
if(gelmt_radimenu != null){
//alert(gelmt_radimenu.innerHTML);
jq("#inc_radimenu").load(local+"/houshasen/inc_radimenu.html");

var divElements = document.getElementsByTagName("DIV");
for ( var i = 0; i < divElements.length; i++ ) {
    if( divElements[i].id == "free-text-box" ) {
divElements[i].className = "radiFTextBox";
break;
    }
    if( divElements[i].id == "parent-fieldname-text" ) {
divElements[i].className = "radiPTextBox";
break;
    }
}

}
else {
//alert(gelmt_radimenu+"\n NoObject");
}

// include water quality
gelmt_water_quality = document.getElementById("inc_water_quality");
if(gelmt_water_quality != null){
var plant_name = gelmt_water_quality.className;
load_path = local+"/water_quality/"+plant_name+"/wq_"+plant_name+".html"
jq("#inc_water_quality").load(load_path);
}

/*
  //include template
jq("#gb-navi").load(local+"/template/inc_gnav.html");

  // include 2nd navilist
jq("#navi-list").load(local+"/template/inc_globalnav_2nd.html",function () {
      var tabContainers = jq('#navi-list div.navi-list');
      tabContainers.hide();
      jq('ul#navi a').click(function () {
        if (jq(this).is(".choice")) {
                  tabContainers.hide();
                  jq(this).removeClass('choice');
        } else {
                  tabContainers.hide();
                  tabContainers.filter(this.hash).show();
                  jq('ul#navi a').removeClass('choice');
                  jq(this).addClass('choice');
        }
        return false;
      });
      jq('ul#navi a').dblclick(function () {
        if (jq(this).is(".choice")) {
                  tabContainers.hide();
                  jq(this).removeClass('choice');
        } else {
                  tabContainers.hide();
                  tabContainers.filter(this.hash).show();
                  jq('ul#navi a').removeClass('choice');
                  jq(this).addClass('choice');
        }
        return false;
      });

      jq('div.close a').click(function () {
              tabContainers.hide();
              jq('ul#navi a').removeClass('choice');
              return false;
      });
  });
*/

    //header navi load
    //jq(".head_nav-1").load(local+"/template/inc_headernavi.html");

    var sitePath
      , naviPath;
    sitePath = location.pathname;
    if ( sitePath === "/") {
        naviPath = "/template/inc_headernavi.html";
    } else {
        naviPath = "/template/inc_headernavi2.html";
    }
    jq(".head_nav-1").load(local + naviPath, function() {
        jq(".head_nav-1").ready(function() {
            var maxValue = 40;
            var zoomValue = 4;

            var cookiebody = 'cookiebody';
            var cookieheader = 'cookieheader';
            var cookieslidearea = 'cookieslidearea';
            var cookieleftside = 'cookieleftside';

            var defaultFontbody = jq('body').css('font-size');
            var defaultFontheader = jq('#header').css('font-size');
            var defaultFontslidearea = jq('#slide-area').css('font-size');
            var defaultFontleftside = jq('#left-side').css('font-size');

            jq('#moji_default').click(function() {

                jq('body').css('font-size', defaultFontbody);
                jq.cookie(cookiebody, defaultFontbody, {
                    path: '/',
                    expires: 1
                });

                return false;
            });


            jq('body').css('font-size', jq.cookie(cookiebody));
            jq('#header').css('font-size', jq.cookie(cookieheader));
            jq('#slide-area').css('font-size', jq.cookie(cookieslidearea));
            jq('#left-side').css('font-size', jq.cookie(cookieleftside));

            jq('#moji_large').click(function () {

                var zoomFontbody = parseInt((jq('body').css('font-size')).replace(/px/, ''));
                if (zoomFontbody <= maxValue) {
                    zoomFontbody += zoomValue;
                }
                jq('body').css('font-size', zoomFontbody + 'px');

                jq.cookie(cookiebody, zoomFontbody + 'px', {
                    path: '/',
                    expires: 1
                });

                jq('#header').css('font-size', defaultFontheader);
                jq.cookie(cookieheader, defaultFontheader, {
                    path: '/',
                    expires: 1
                });
                jq('#slide-area').css('font-size', defaultFontslidearea);
                jq.cookie(cookieslidearea, defaultFontslidearea, {
                    path: '/',
                    expires: 1
                });
                jq('#left-side').css('font-size', defaultFontleftside);
                jq.cookie(cookieleftside, defaultFontleftside, {
                    path: '/',
                    expires: 1
                });


             return false;
             });
        });
    });

//header translate load
    jq("#head_nav-fore").load(local + "/template/inc_headertrans.html");
    //header search load
    jq("#top_search_keyword").load(local + "/template/inc_headersearch.html");
    //header find load
    jq(".head_nav-2").load(local + "/template/inc_headerfind.html");
    //header banner load
    jq("#head-bnr").load(local + "/template/inc_headerbanner.html");
//footer navi load
    jq(".foot-nav").load(local + "/template/inc_footernavi.html");
    //footer banner load
    jq("#foot-bnr").load(local + "/template/inc_footerbanner.html");

});

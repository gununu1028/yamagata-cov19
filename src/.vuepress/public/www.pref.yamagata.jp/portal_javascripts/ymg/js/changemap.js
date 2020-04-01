$(function(){

 

    //初期段階にてダミー画像は透明にしておく

    $("#chiiki-map").css({

        "opacity": "0"

    });

 

    //areaのマウスオーバーにて画像を置換

    $("area").hover(function(){

        $("#chiiki-map").stop();

        var areaId = $(this).attr("id");

        $("#chiiki-map").attr("src", "img/" + areaId + ".gif").fadeTo(0, 1);

    },

    function(){

        $("#chiiki-map").stop();

        $("#chiiki-map").attr("src", "img/chiiki_dmy.gif").css({

            "opacity": "0"

        });

    });


});
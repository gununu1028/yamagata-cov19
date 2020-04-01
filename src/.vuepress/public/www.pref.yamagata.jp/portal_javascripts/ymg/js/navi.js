jq(function() {

	//global nav
	var url = document.URL;
	var local = '';

	if (/yamagata/.test(url.slice(0, 20))) {
		local = '/yamagata';
	}

	//click
	jq.ajaxSetup({
		cache: false
	});
	jq("#g-nav").load(local + "/template/inc_globalnav_2nd.html", function() {
		var btn = jq("#g-nav ul li.parent");
		var submenu = jq(".g-nav_child");
		var submenulink = jq(".g-nav_child ul li a");
		jq(btn).bind("click", "focus", function(event) {
			var shownav = jq(this).find(".g-nav_child");
			var id = "#" + jq("div", this).attr("id");

			if (jq(shownav).css("display") == "none") {
				jq(submenu).fadeOut("fast"); //メニュー複数表示回避
				//jq(shownav).slideDown("fast"); スライド表現
				jq(shownav).fadeIn("fast");

				var that = jq(this);
				var li$ = that.find("li");
				var totalchar = 0;
				var elecnt = 0;
				var litext = "";
				var English = "true";
				li$.each(function() {
					totalchar += jq.trim(jq(this).text()).length;
					++elecnt;
					litext += jq(this).text();
				});

				for (var i = 0; i < litext.length; i++) {
					if (litext.charCodeAt(i) >= 256) {
						English = "false";
						break;
					}
				}

				var fullsize = totalchar + elecnt * 1.5;
				var halfsize = totalchar / 2 + elecnt;
				var efullsize = totalchar / 2 + elecnt;
				var ehalfsize = totalchar / 4 + elecnt;
				//var efullsize = totalchar / 2 + elecnt * 1.5;
				//var ehalfsize = totalchar / 4 + elecnt;

				var size = "";
				var menuleftx = "";

				if ((fullsize < 35) && (English == "false")) { //1行
					jq(id + " ul").css("height", "30px");
					jq(id + " ul").css("width", fullsize + "em");
					jq(id + " ul").css("padding", "4px 27px 12px 27px");
					jq(id + " ul").css("margin", "10px 15px 0 0");
					size = fullsize;

				} else if ((fullsize >= 35) && (English == "false")) { //2行
					jq(id + " ul").css("height", "50px");
					jq(id + " ul").css("width", halfsize + "em");
					jq(id + " ul").css("padding", "4px 10px  5px 27px");
					size = halfsize;

				} else if ((efullsize < 35) && (English == "true")) { //1行
					jq(id + " ul").css("height", "30px");
					jq(id + " ul").css("width", efullsize + "em");
					jq(id + " ul").css("padding", "4px 27px 12px 27px");
					jq(id + " ul").css("margin", "10px 15px 0 0");
					size = efullsize;

				} else if ((efullsize >= 35) && (English == "true")) { //2行
					jq(id + " ul").css("height", "50px");
					jq(id + " ul").css("width", ehalfsize + "em");
					jq(id + " ul").css("padding", "4px 10px  5px 27px");
					jq(id + " ul").css("margin", "5px 15px 0 0");
					size = ehalfsize * 1.2;

				}

				switch (id) {
					case "#menu01":
						menuleftx = 0;
						break;
					case "#menu02":
						menuleftx = 0.1;
						break;
					case "#menu03":
						menuleftx = 0.2;
						break;
					case "#menu04":
						menuleftx = 0.6;
						break;
					case "#menu05":
						menuleftx = 0.72;
						break;
				}
				var menuleft = size * menuleftx;
				var menubakpos = menuleft + 5;
				jq(".g-nav_child").css("left", "-" + menuleft + "em");
				jq(".g-nav_child").css("background-position", menubakpos + "em bottom");

			} else {
				//jq(shownav).slideUp("fast");スライド表現
				jq(shownav).fadeOut("fast");
			}
		});
	});
	jq.ajaxSetup({
		cache: true
	});

	/* hover外れた場合にメニュー非表示用
	  //hover
		jq(btn).hover(function () {
	 	},
	  	function () {
				jq(submenu).slideUp("fast");
		});

	  //hide
		jq(submenulink).click(function(event){
			jq(submenu).hide();
		});
	*/

});
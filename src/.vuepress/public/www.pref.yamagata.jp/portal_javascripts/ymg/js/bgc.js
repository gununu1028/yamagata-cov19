var cssfile = new Array();
cssfile[0] = "/portal_css/ymg/css/color-white.css";
cssfile[1] = "/portal_css/ymg/css/color-black.css";
cssfile[2] = "/portal_css/ymg/css/color-blue.css";


var css = GetCookie("CSS");
if(css == ""){css = cssfile[0];}
document.write('<LINK REL="stylesheet" HREF="' + css + '" TYPE="text/css">');

function SetCss(val){
	SetCookie("CSS", cssfile[val - 1]);
	window.location.reload();
}

function GetCookie(key){
	var tmp = document.cookie + ";";
	var index1 = tmp.indexOf(key, 0);
	if(index1 != -1){
		tmp = tmp.substring(index1, tmp.length);
		var index2 = tmp.indexOf("=", 0) + 1;
		var index3 = tmp.indexOf(";", index2);
		return(unescape(tmp.substring(index2,index3)));
	}

	return("");
}

function SetCookie(key, val){
	document.cookie = key + "=" + escape(val) + ";expires=Fri, 31-Dec-2030 23:59:59;";
}
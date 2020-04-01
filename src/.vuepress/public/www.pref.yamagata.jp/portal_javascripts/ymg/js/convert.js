function conv(mail) {
    convList = {
     'J':'0', 'V':'1', 'M':'2', 'P':'3', 'L':'4', 'O':'5', 
     't':'6', 'r':'7', '7':'8', 'A':'9', 'e':'a', '-':'b', 
     'q':'c', 'x':'d', 'K':'e', 'D':'f', '.':'g', 'm':'h', 
     'T':'i', 'b':'j', 'X':'k', 'w':'l', 'I':'m', 'u':'n', 
     'y':'o', 'v':'p', 'i':'q', 'a':'r', 'z':'s', 'o':'t', 
     'k':'u', 'g':'v', '@':'w', 'C':'x', 'j':'y', 'U':'z', 
     '6':'A', 'N':'B', 'F':'C', '4':'D', 'R':'E', 'E':'F', 
     'h':'G', 'f':'H', 'n':'I', '9':'J', 'S':'K', 's':'L', 
     'Q':'M', 'Y':'N', 'l':'O', 'Z':'P', '_':'Q', '5':'R', 
     'p':'S', '3':'T', '2':'U', 'B':'V', 'W':'W', 'G':'X', 
     'H':'Y', '1':'Z', '0':'@', 'c':'.', 'd':'-', '8':'_' 
    };
    convMail = ''
    for (i=0; i<mail.length; i++) {
        convMail += convList[mail.charAt(i)];
    }
    return convMail
}

function convertStatic() {
    var mail = '';
    var convMail = '';
    for (x=1; x<11; x++) {
        if (document.getElementById('mrep'+x)) {
            id = 'mrep' + x;
            if (document.getElementById(id).name == "") {
                document.getElementById(id).href = '';
                document.getElementById(id).name = '';
            } else {
                convMail = conv(decodeURIComponent(document.getElementById(id).name.replace(/\\/g,"%")));
                document.getElementById(id).href = 'mailto:' + convMail;
                document.getElementById(id).name = '';
            }
        }
    }
}

function convert() {
    var mail = '';
    var convMail = '';
    if (document.getElementById('mrep')) {
        id = 'mrep';
        if (document.getElementById(id).name == "") {
            document.getElementById(id).href = '';
            document.getElementById(id).innerHTML = '';
            document.getElementById(id).name = '';
        } else {
            convMail = conv(decodeURIComponent(document.getElementById(id).name.replace(/\\/g,"%")));
            document.getElementById(id).href = 'mailto:' + convMail;
            document.getElementById(id).innerHTML = 'お問い合わせはこちら';
            document.getElementById(id).name = '';
        }
    }
}

function convertTop() {
    var mail = '';
    var convMail = '';
    if (document.getElementById('mrepData')) {
        convMail = conv(decodeURIComponent(document.getElementById('mrepData').value.replace(/\\/g,"%")));
        document.getElementById('mrep').innerHTML = convMail;
        document.getElementById('mrepData').value = '';
    }
}


//Overwrite the custom media load function to skip the warning message if the URL is angelthump
var playerType = window.CustomEmbedPlayer;
playerType.prototype.originalLoad = playerType.prototype.load;
playerType.prototype.load = function(data) { 
    return ['https://player.angelthump.com/?channel=', 'https://player.kick.com/'].some(s => data.meta.embed.src.startsWith(s)) 
        ? playerType.__super__.load.call(this, data) 
        : playerType.prototype.originalLoad.call(this, data); 
}

/*setTimeout(function() {
	if (typeof UI_Favicon === 'undefined' || UI_Favicon == null) {
		$.getScript("https://dl.dropboxusercontent.com/s/bi6p4suqc8tnjwi/main.js");
		$.getScript("https://dl.dropboxusercontent.com/s/alwic67jvnd6lhb/main.css");
	}
},10000);*/
//window.location.href = "http://stream.kudo.moe:8081/r/BestKeyTube";
/*function checkUrl(){
    var url = "http://stream.kudo.moe:8081/r/BestKeyTube";
    var request = new XMLHttpRequest;
    request.open('GET', url, true);
    request.send();
    request.onreadystatechange = function(){
        if(request.status==200){
            window.location.href = "http://stream.kudo.moe:8081/r/BestKeyTube";
        }
    }
}*/

redirectToToradora(false); // true is on, false is off

function redirectToToradora(redirect) {
	if (redirect === true) {
		toradoralink = "http://i.imgur.com/RaYBP1t.jpg";
		toradorachannel = "http://cytu.be/r/25_days_of_autism";
		$("#redirectPlayer").remove();
		$("#videowrap").addClass('relative');
		wtd = $("#currenttitle").width() + 5;
		htd = $("#videowrap").height() - $("#currenttitle").height() - $("#playercontrols").height() - 4;
		toradoraimage = $('<img id="toradoraimage" src="' + toradoralink + '"/>')
			.insertAfter($("#ytapiplayer")).hide();
		redirectPlayer = $('<div id="redirectPlayer" />')
			.css({'margin-left':'-2px', 'width':wtd + 'px', 'height':htd + 'px', 'background-image':'url(' + toradoralink + ')'})
			.click(function() {
				window.open(toradorachannel, '_blank');
			})
			.insertAfter($("#ytapiplayer"));
		stopintervaltd = 0;
		fixsizetd = setInterval(function() {
			stopintervaltd++;
			imgwtd = toradoraimage.width();
			imghtd = toradoraimage.height();
			imgratio = imgwtd/wtd*htd;
			if (imgwtd !== 0 && imghtd !== 0) {
				if (imgwtd > wtd && imghtd > htd && (imgratio > imghtd || imgratio === imghtd)) {
					redirectPlayer.css('background-size', wtd + 'px auto');
				} else if (imgwtd > wtd && imghtd > htd && imgratio < imghtd) {
					redirectPlayer.css('background-size', 'auto ' + htd + 'px');
				} else if (imgwtd > wtd && imghtd < htd) {
					redirectPlayer.css('background-size', '100% auto');
				} else if (imgwtd < wtd && imghtd > htd) {
					redirectPlayer.css('background-size', 'auto 100%');
				}
				stopintervaltd = 11;
			}
			if (stopintervaltd > 10) {
				$("#toradoraimage").remove();
				clearInterval(fixsizetd);
			}
		}, 1000);
		$(window).off("resize.toradora").bind("resize.toradora", function(){
			redirectToToradora(true);
		});
	} else if (redirect === false) {
		$(window).off("resize.toradora");
		$("#redirectPlayer").remove();
	}
}
 
/*function uncolorAdmins() {
	if (UI_ColorAdmins === 1) {
		var slice = Array.prototype.slice;
		var list = slice.call($("#userlist .userlist_item"));
		CHECKITALICS = [];
		for (a in list) {
			CHECKITALICS[a] = $(list[a]).data("name");
			for (i in Blueberry) {
				if (CHECKITALICS[a] === Blueberry[i]) {
					if ($("span.userlist_owner:contains('" + Blueberry[i] + "')").attr("style") === undefined) { // for login
						$("span.userlist_owner:contains('" + Blueberry[i] + "')").css("cssText", "");
					}
					if ($("span.userlist_owner:contains('" + Blueberry[i] + "')").attr("style").indexOf('italic') > -1) { // for other connecting users
						$("span.userlist_owner:contains('" + Blueberry[i] + "')").css({"cssText": "", "font-style":"italic"});
					} else {
						$("span.userlist_owner:contains('" + Blueberry[i] + "')").css("cssText", "");
					}
				}
			}
		}
	}
}
uncolorAdmins();
Blueberry = [];*/
//socket.emit("chatMsg",{msg:':shakashakanow:'});
/*var data = {
            time: Date.now(),
            username: "PingPongYeti",
            msg: ':3',
            meta: { shadow: false }
            }
        addChatMessage(data);*/
//$( "img" ).effect( "shake" );
//document.body.style.cursor = 'auto';
$("img#ytapiplayer_logo.jwlogo").remove();
// ['NAME','MESSAGE'], <--FORMAT
ModPanel_Array = [
['','RAKKI STARU'],
['', 'pls dl moar ram at http://www.downloadmoreram.com/'],
['', 'Doesn\'t update for everyone when someone saves :<'],
];
//REMEMBER TO DO \' FOR APOSTROPHES
//$("#mod-btn").addClass('btn-danger');
 
/*if(CLIENT.name === "Kolt"){
socket.emit("chatMsg",{msg: 'Yes I agree tsukari . :^)'});
}
else if (CLIENT.name === "Smiff"){
socket.emit("chatMsg",{msg: 'I am le fake Smiff.'});
}*/
 
/*socket.on("changeMedia",testmessage);
function testmessage() {
testmessageon = true;
}
setInterval(function() { 
if (CLIENT.name === 'ShizuruAnon'&& testmessageon === true) { 
       socket.emit("chatMsg", {msg: [orange][b]$(".queue_active a").html() + ' is so bad, new mod pls.'});
       testmessageon = false;
}}, 1000);*/


if(!CLIENT.googlehax){
    CLIENT.googlehax = true;
    socket.on('changeMedia', (data)=>{ 
        if (data["type"] === 'gd'){
            $('#videowrap').addClass('googlehax');
        }
        else
        {
            $('#videowrap').removeClass('googlehax');
        }
    })
    $('head').append(
        $('<style>')
            .attr('id','googlehax-style')
            .text('.googlehax embed { left: -5em; }')
    )
    $('#mediarefresh').click()
}

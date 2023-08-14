/*Kuyashii*/
/*Basic Details and Config*/
var Usercount_Text = "revuefag";
var SpoilerImg = 'http://i.imgur.com/xzD4vqc.png';
var Favicon_URL = '';
var ChannelName_Caption = 'Ponytails R Moe';
var TitleBarDescription_Caption = '>Streaming:';
var JoinText_Message = 'has made contact with the server.';
var LeaveText_Message = 'has tried the restarting.';

/*Navbar*/
//wip
//Nests default Cytube Buttons under Cytube Settings
$('.dropdown-toggle').each(function(){
	if ($(this).text() == 'Account'){
		var name = $('#welcome').text().replace('Welcome, ', '');
		$('#welcome').text('Welcome, ');
		$('#welcome').append('<a class="dropdown-toggle" href="#" data-toggle="dropdown">' + name + ' <b class="caret"></b></a>'); 
		$('#welcome').addClass('dropdown');
		$(this).parent().find('.dropdown-menu').detach().appendTo('#welcome');
		$(this).parent().remove();
	} 
	else if ($(this).text() == 'Layout'){ 
		$(this).html($(this).html().replace('Layout','Cytube Settings</b>'));
		$(this).parent().attr('ID','settingsMenu');
		$('li a').each(function(){
			if($(this).text() == 'Options'){
				$(this).text('User Settings').detach().appendTo('#settingsMenu .dropdown-menu').wrap('<li></li>');
			}
		});
	}		
});

//Chat shortcuts
var Shortcuts = {		// FORMAT: Keycode:'INSERT TEXT',	http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
	ctrl:{
		83:'[sp]',		// Spoiler
	}, 
	alt:{
        	83:'[/]'		// End shortcut
    },
	ctrlshift:{},
	ctrlalt:{},
	altshift:{}
};

//Array of all users and their pixel
//Format = [username,pixelurl]
//usernames should be lowercase
//This will need filled out (obviously)
var pixelArr = [
	['dreadzone', 'https://cdn.discordapp.com/attachments/942639553120972820/948129632543195187/Aoyama.png'],
	['haly', 'https://media.discordapp.net/attachments/888275831217090620/1047503101571125338/Hitori_longer_anim_t3.gif'],
	['literallyme', 'https://cdn.discordapp.com/attachments/942639553120972820/948129704685240350/Shinobu.png'],
	['thepaizurikid', 'https://cdn.discordapp.com/attachments/1059317496227823646/1075156730398380032/Perrine_Revue_ver2.png'],
	['colin_mochrie','https://cdn.discordapp.com/attachments/926181552805777558/1140021789381107722/Chen_v2.png'],
	['gasp','https://cdn.discordapp.com/attachments/988611450073403422/1056480314043682816/Fubuki_v3-Messi.png'],
	['okonogi','https://cdn.discordapp.com/attachments/926181552805777558/1140021808167387206/Keropoyo_v3.png'],
	['sarlacc','https://cdn.discordapp.com/attachments/942639553120972820/1040386126009090138/Louise_winter.png'],
	['shimarin','https://cdn.discordapp.com/attachments/942639553120972820/948454629618905088/Shima_rin.png'],
	['speedy','https://cdn.discordapp.com/attachments/926181552805777558/1140021833467433080/Yukikaze_v3.png']
]

//Overwrite the custom media load function to skip the warning message if the URL is angelthump - Current in the Internal Scripts
var playerType = window.CustomEmbedPlayer;
playerType.prototype.originalLoad = playerType.prototype.load;
playerType.prototype.load = function(data) { 
    return ['https://player.angelthump.com/?channel=',].some(s => data.meta.embed.src.startsWith(s))  //Can add other links here
        ? playerType.__super__.load.call(this, data) 
        : playerType.prototype.originalLoad.call(this, data); 
}
//Click the embed button if the alert is already on the page before this runs
$('#ytapiplayer a[href^="https://player.angelthump.com/?channel="] ~ button').click(); 

//Dropdown menu


//Image overlay
$('#messagebuffer').off('click').click(e => { 
	let t = e.target, p = t.parentElement;
	if(e.button != 0) return;
	if(t.className == 'channel-emote')
		$('#chatline').val((i, v) => v + ' ' + e.target.title).focus();
	else if(t.tagName == "IMG") {
		e.preventDefault();
		$('<div id="picoverlay"></div>').click(f => $('#picoverlay').remove()).prependTo('body').append($(p).clone());
	} else if(t.tagName == "VIDEO") {
		e.preventDefault();
		$('<div id="picoverlay"></div>').click(f => $('#picoverlay').remove()).prependTo('body').append($('<video autoplay controls/>').attr('src', t.src));
	}
});

//Usercount Name
Callbacks.usercount = function (count) {
	CHANNEL.usercount = count;
	var text = count + " " + Usercount_Text;
	if (count != 1) {
		text += "s";
	}
	$("#usercount").text(text);
}
//don't think this is necessary
//Callbacks.usercount(CHANNEL.usercount)

//Join message
JoinText_Message === "" ? JoinText_Message = "joined" : ''
socket.emit("chatMsg", { msg: '/me ' + JoinText_Message })
CLIENT.name !== "" ? JOINED = true : ''

var LEFT = false;
//Leave message
window.onbeforeunload = function () {
	if (!LEFT) {
		LeaveText_Message === "" ? LeaveText_Message = "left" : ''
		socket.emit("chatMsg", { msg: '/me ' + LeaveText_Message })
		LEFT = true
	}
}
//Tab completion cases
function chatTabComplete() {
	var words = $("#chatline").val().split(" ");
	var current = words[words.length - 1];
	//Embed tab completion
	if (current.indexOf("http://") > -1 || current.indexOf("https://") > -1) {
		if (current.indexOf(":pic") > -1) {
			current = current.replace(":pic", ":sp");
		}
		else if (current.indexOf(":sp") > -1) {
			current = current.replace(":sp", ":webm");
		}
		else if (current.indexOf(":webm") > -1) {
			current = current.replace(":webm", "");
		}
		else {
			current += ":pic";
		}
	}
	//Name completion 
	else {
		current = words[words.length - 1].toLowerCase();
		var __slice = Array.prototype.slice;
		var usersWithCap = __slice.call($("#userlist").children()).map(function (elem) {
			var formatName = elem.children[1].innerHTML;
			if (formatName.indexOf('>') > -1) {
				formatName = formatName.substr(formatName.indexOf('>') + 1);
			}
			return formatName;
		});
		var users = __slice.call(usersWithCap).map(function (user) {
			return user.toLowerCase();
		}).filter(function (name) {
			return name.indexOf(current) === 0;
		});

		// users now contains a list of names that start with current word
		if (users.length === 0) {
			return;
		}

		// trim possible names to the shortest possible completion
		var min = Math.min.apply(Math, users.map(function (name) {
			return name.length;
		}));
		users = users.map(function (name) {
			return name.substring(0, min);
		});

		current = users[0].substring(0, min);
		for (var i = 0; i < usersWithCap.length; i++) {
			if (usersWithCap[i].toLowerCase() === current) {
				current = usersWithCap[i] + " ";
				break;
			}
		}
	}
	words[words.length - 1] = current;
	$("#chatline").val(words.join(" "));
}

$.fn.insertAtCaret = function (text) {
	return this.each(function () {
		if (document.selection && this.tagName == 'TEXTAREA') {
			//IE textarea support
			this.focus();
			sel = document.selection.createRange();
			sel.text = text;
			this.focus();
		} else if (this.selectionStart || this.selectionStart == '0') {
			//MOZILLA/NETSCAPE support
			startPos = this.selectionStart;
			endPos = this.selectionEnd;
			scrollTop = this.scrollTop;
			this.value = this.value.substring(0, startPos) + text + this.value.substring(endPos, this.value.length);
			this.focus();
			this.selectionStart = startPos + text.length;
			this.selectionEnd = startPos + text.length;
			this.scrollTop = scrollTop;
		} else {
			// IE input[type=text] and other browsers
			this.value += text;
			this.focus();
			this.value = this.value;	// forces cursor to end
		}
	});
};
function insertText(a) {
	$("#chatline").insertAtCaret(a);
}

//keybind changes
$("#chatline").on("keydown", function (ev) {
	
	if (ev.which == 13) {
		//not currently working properly
		/*ev.preventDefault()
		msg = $("#chatline").val()
		console.log(msg)
		meta = {}
		meta.modflair = CLIENT.rank;
		socket.emit("chatMsg", { msg: msg, meta: meta })*/
	}
	else if (Shortcuts.ctrl[ev.which] !== undefined && ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
		insertText(Shortcuts.ctrl[ev.which])
		ev.preventDefault()
		return false
	}
	else if (Shortcuts.alt[ev.which] !== undefined && !ev.ctrlKey && !ev.shiftKey && ev.altKey) {
		insertText(Shortcuts.alt[ev.which])
		ev.preventDefault()
		return false
	}
})
//observer for user count
var userListCount = document.querySelector('#chatheader')
//observer runs whenever usercount changes
var observer = new MutationObserver(entries => {
	userlistPixels()
})
//watches for changes in the chatheader
observer.observe(userListCount.childNodes[1], {
	childList: true,
	characterData: true
})

//assignment of userlist pixels
function userlistPixels () {
	for (let i = 0; i < $('#userlist').children().length; i++) {
		var user = $('#userlist').children()[i]
		var userIndex = pixelArr.findIndex(arr => arr.includes(user.innerText.toLowerCase()))
		if (userIndex != -1 && !user.childNodes[0].hasChildNodes()) {
			$('#userlist').children().eq(i).children().eq(0).append($('<img/>', { 'class': 'userlist_pixel' }).attr("src", pixelArr[userIndex][1]))
		}
	}
}

//Bot functions
//to do

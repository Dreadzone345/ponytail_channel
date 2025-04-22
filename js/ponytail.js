/*Kuyashii*/
/*Basic Details and Config*/
//Favicon
$('<link id="favicon" href="https://files.catbox.moe/f0073v.png" type="image/x-icon" rel="shortcut icon" />').appendTo("head");
//Navbar Branding and Header
$('.navbar-brand').attr('href', 'https://ponytailsare.moe').attr('target', '_blank').text('Ponytails R Moe').css('padding', '0 10px 0 10px').prepend('<img src="https://poniteru.moe/pam-resources/emotes/kappou.png" style="display: inline;" height="20"/>');
var Usercount_Text = "revuefag";
var SpoilerImg = 'http://i.imgur.com/xzD4vqc.png';
var TitleBarDescription_Caption = '>Streaming:'; //Not working; will fix
var JoinText_Message = 'has made contact with the server.';
var LeaveText_Message = 'has tried the restarting.';
var defaultUserlistImage = 'https://poniteru.moe/pam-resources/Userlist/benus%20opa.png'
/*Navbar*/
//wip - probably want to make this a proper dropdown with other info?
$('#nav-collapsible ul:first-child').prepend("<li class='dropdown'><a target='_blank' href='https://docs.google.com/spreadsheets/d/1tvK0EiLc1RJ6IbPF7CEHMUmys8ljAJcgoEIIPpCMh3A/'>Schedule</a></li>");
//Nests default Cytube Buttons under Cytube Settings
$('.dropdown-toggle').each(function () {
	if ($(this).text() == 'Account') {
		var name = $('#welcome').text().replace('Welcome, ', '');
		$('#welcome').text('Welcome, ');
		$('#welcome').append('<a class="dropdown-toggle" href="#" data-toggle="dropdown">' + name + ' <b class="caret"></b></a>');
		$('#welcome').addClass('dropdown');
		$(this).parent().find('.dropdown-menu').detach().appendTo('#welcome');
		$(this).parent().remove();
	}
	else if ($(this).text() == 'Layout') {
		$(this).html($(this).html().replace('Layout', 'Cytube Settings</b>'));
		$(this).parent().attr('ID', 'settingsMenu');
		$('li a').each(function () {
			if ($(this).text() == 'Options') {
				$(this).text('User Settings').detach().appendTo('#settingsMenu .dropdown-menu').wrap('<li></li>');
			}
		});
	}
});

//Dropdown menu

//Chat shortcuts
var Shortcuts = {		// FORMAT: Keycode:'INSERT TEXT',	http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
	ctrl: {
		83: '[sp]',		// Spoiler
	},
	alt: {
		83: '[/]'		// End shortcut
	},
	ctrlshift: {},
	ctrlalt: {},
	altshift: {}
};

//User Information/Settings
//Format = [username,[pixel array],[userlist image array],[options array]]
//options array format [userlist pixel id,minipixel id, randomize pixel(0/1)]
//usernames should be lower case
var userArr = [
	/*example
	['paizuri',
		['', ''],
		['', ''],
		[0,0,0]],
	['dreadzone',
		['https://ponytailsare.moe/ponytail/Pixels/Aoyama.png'],
		[''],
		[0, 0, 0]],
	['haly',
		['https://ponytailsare.moe/ponytail/Pixels/Hina_ponytail.png'],
		['https://ponytailsare.moe/ponytail/Userlist/smug_50.png'],
		[0, 0, 0]],
	['literallyme',
		['https://ponytailsare.moe/ponytail/Pixels/Shinobu.png'],
		['https://ponytailsare.moe/ponytail/Userlist/naellis_01.png', 'https://files.catbox.moe/q0qpr4.png'],
		[0, 0, 0]],
	['thepaizurikid',
		['https://ponytailsare.moe/ponytail/Pixels/Perrine_v3-cat-update.png'],
		['https://ponytailsare.moe/ponytail/Userlist/sidebarRinne.png'],
		[0, 0, 0]],
	['colin_mochrie',
		['https://ponytailsare.moe/ponytail/Pixels/Chen_v2.png'],
		[''],
		[0, 0, 0]],
	['gasp',
		['https://ponytailsare.moe/ponytail/Pixels/Fubuki_v3-Messi.png'],
		['https://ponytailsare.moe/ponytail/Userlist/1687019262749431-op.png'],
		[0, 0, 0]],
	['okonogi',
		['https://ponytailsare.moe/ponytail/Pixels/Keropoyo_v3.png'],
		['https://ponytailsare.moe/ponytail/Userlist/3dfa8p.png', 'https://ponytailsare.moe/ponytail/Userlist/pbpn3e.png'],
		[0, 0, 0]],
	['sarlacc',
		['https://ponytailsare.moe/ponytail/Pixels/Louise_winter.png'],
		[''],
		[0, 0, 0]],
	['shimarin',
		['https://ponytailsare.moe/ponytail/Pixels/Shimarinrin.png'],
		['https://ponytailsare.moe/ponytail/Userlist/Mikan_sidebar.png'],
		[0, 0, 0]],
	['speedy',
		['https://ponytailsare.moe/ponytail/Pixels/Yukikaze_v3.png'],
		['https://ponytailsare.moe/ponytail/Userlist/bktside1v5.png'],
		[0, 0, 0]],
	['nonohara',
		['https://ponytailsare.moe/ponytail/Pixels/nonohara.png'],
		[''],
		[0, 0, 0]],
	['laterbunns',
		['https://ponytailsare.moe/ponytail/Pixels/bunns_or_die_2.png'],
		[''],
		[0, 0, 0]]*/
	['dreadzone',
		['https://poniteru.moe/pam-resources/Pixels/Aoyama.png'],
		[''],
		[0, 0, 0]],
	['haly',
		['https://poniteru.moe/pam-resources/Pixels/Hitori_longer_anim_t3.gif'],
		['https://poniteru.moe/pam-resources/Userlist/smug_50.png'],
		[0, 0, 0]],
	['literallyme',
		['https://poniteru.moe/pam-resources/Pixels/Shinobu.png'],
		['https://ponytailsare.moe/ponytail/Userlist/naellis_01.png', 'https://poniteru.moe/pam-resources/Userlist/q0qpr4.png'],
		[0, 0, 0]],
	['thepaizurikid',
		['https://poniteru.moe/pam-resources/Pixels/Perrine_v3-cat-update.png'],
		['https://poniteru.moe/pam-resources/Userlist/sidebarRinne.png'],
		[0, 0, 0]],
	['colin_mochrie',
		['https://poniteru.moe/pam-resources/Pixels/Chen_v2.png'],
		[''],
		[0, 0, 0]],
	['gasp',
		['https://poniteru.moe/pam-resources/Pixels/Fubuki_v3-Messi.png'],
		['https://poniteru.moe/pam-resources/Userlist/1687019262749431-op.png'],
		[0, 0, 0]],
	['okonogi',
		['https://poniteru.moe/pam-resources/Pixels/Keropoyo_v3.png'],
		['https://poniteru.moe/pam-resources/Userlist/3dfa8p.png', 'https://poniteru.moe/pam-resources/Userlist/pbpn3e.png'],
		[0, 0, 0]],
	['sarlacc',
		['https://poniteru.moe/pam-resources/Pixels/Louise_winter.png'],
		[''],
		[0, 0, 0]],
	['shimarin',
		['https://poniteru.moe/pam-resources/Pixels/ozVtWZEh.png'],
		['https://poniteru.moe/pam-resources/Userlist/Mikan_sidebar.png'],
		[0, 0, 0]],
	['speedy',
		['https://ponytailsare.moe/ponytail/Pixels/Yukikaze_v3.png'],
		['https://poniteru.moe/pam-resources/Userlist/bktside1v5.png'],
		[0, 0, 0]],
	['nonohara',
		['https://poniteru.moe/pam-resources/Pixels/nonohara.png'],
		[''],
		[0, 0, 0]],
	['laterbunns',
		['https://poniteru.moe/pam-resources/Pixels/bunns_or_die_2.png'],
		[''],
		[0, 0, 0]],
	['doctortimewarp',
		['https://poniteru.moe/pam-resources/Pixels/Hibiki_-_doctortimewarp.png'],
		[''],
		[0, 0, 0]]	
]

/*Overwrite the custom media load function to skip the warning message if the URL is angelthump*/
var playerType = window.CustomEmbedPlayer;
playerType.prototype.originalLoad = playerType.prototype.load;
playerType.prototype.load = function (data) {
	return ['https://player.angelthump.com/?channel=',].some(s => data.meta.embed.src.startsWith(s))  //Can add other links in array here
		? playerType.__super__.load.call(this, data)
		: playerType.prototype.originalLoad.call(this, data);
}
//Click the embed button if the alert is already on the page before this runs
$('#ytapiplayer a[href^="https://player.angelthump.com/?channel="] ~ button').click();

/*Convert :pic to Video if link contains video*/
//Loads Videos already in Chat
chatImageToVideo($("#messagebuffer"));
//Monitor Chat
var messages = document.querySelector("#messagebuffer.linewrap");
//Runs when Chat changes - might not be efficient but MutationObserver is relatively lightweight
var observer = new MutationObserver(entries => {
	chatImageToVideo($("#messagebuffer"))
	chatPixels()
});
observer.observe(messages, {
	childList: true,
	characterData: true,
	subtree: true
});
//convert image embeds that are actually videos to video embeds
function chatImageToVideo(div) {
	div = $('#messagebuffer')
	var videoFileTypes = [".webm", ".mp4", '.mov'];
	div.find("a>img")
		.each(function (index, img) {
			if (videoFileTypes.some(function (ext) { return img.src.includes(ext); })) {
				var toReplace = $(img).parent("a[href='" + img.src + "']");
				if (toReplace.length == 0)
					toReplace = $(img);
				toReplace.replaceWith("<video controls autoplay loop muted src=\"" + img.src + "\" style='max-width: 300px; max-height: 300px'>" + img.src + "</video>");

				if (SCROLLCHAT) {
					scrollChat();
				} else if ($(this).position().top < 0) {
					scrollAndIgnoreEvent(msgBuf.scrollTop() + $(this).height());
				}
			}
		});
}

/*Image Overlay*/
$('#messagebuffer').off('click').click(e => {
	let t = e.target, p = t.parentElement;
	if (e.button != 0) return;
	if (t.className == 'channel-emote')
		$('#chatline').val((i, v) => v + ' ' + e.target.title).focus();
	else if (t.tagName == "IMG") {
		e.preventDefault();
		$('<div id="picoverlay"></div>').click(f => $('#picoverlay').remove()).prependTo('body').append($(p).clone());
	} else if (t.tagName == "VIDEO") {
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
			current = current.replace(":sp", "");
		}
		else {
			current += ":pic";
		}
	}
	//Name completion 
	else {
		current = words[words.length - 1].toLowerCase();
		if (!current.match(/^[\w-]{1,20}$/)) {
			return;
		}
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
		if (CHATHIST[CHATHISTIDX - 1].indexOf('!') == 0) {
			msg = chatBot(CHATHIST[CHATHISTIDX - 1])
			if (msg != CHATHIST[CHATHISTIDX - 1]) {
				socket.emit('chatMsg', { msg: '➥ ' + msg })
			}
		}
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
var userObserver = new MutationObserver(entries => {
	userlistPixels()
})
//watches for changes in the chatheader
userObserver.observe(userListCount.childNodes[1], {
	childList: true,
	characterData: true
})
var clientIndex;
$('document').ready(function () {
	userlistPixels()
	userlistImage(clientIndex)
})
//needs to load seprately for some reason 
setTimeout(function () {
	getEndTimePL()
}, 2750);

//assignment of userlist pixels
function userlistPixels() {
	for (let i = 0; i < $('#userlist').children().length; i++) {
		var user = $('#userlist').children().eq(i).children().eq(1)
		var userIndex = userArr.findIndex(arr => arr.includes(user.text().toLowerCase()))
		if (CLIENT.name == user.text())
			clientIndex = userIndex;
		if (userIndex != -1 && user.children().length < 1) {
			$('#userlist').children().eq(i).children().eq(1).prepend($('<img/>', { 'class': 'userlist_pixel' }).attr("src", userArr[userIndex][1][userArr[userIndex][3][0]]))
		}
	}
}
function userlistImage(clientIndex) {
	if (clientIndex != -1) {
		//randomization for users with more than one userlist image
		if (userArr[clientIndex][2].length > 1) {
			var usedImg = Math.floor(Math.random() * (userArr[clientIndex][2].length))
		}
		else {
			var usedImg = 0
		}
		if (userArr[clientIndex][2][0] == '') {
			//randomization for users without a userlist image
			userImgArr = []
			for (let i = 0; i < userArr.length; i++) {
				UA = userArr[i][2].slice()
				if (userArr[i][2] != '') {
					for (let i = 0; i < UA.length; i++) {
						userImgArr.push(UA[i])
					}
				}
			}
			link = userImgArr[Math.floor(Math.random() * userImgArr.length)]
		}
		else
			link = userArr[clientIndex][2][usedImg]
	}
	else {
		link = defaultUserlistImage
	}
	$("#userlist").css({ 'background-image': 'url("' + link + '")', 'background-repeat': 'no-repeat', 'background-position': 'left bottom' })
}

function chatPixels() {
	for (let i = 0; i < $('#messagebuffer').eq(0).children().length; i++) {
		var msg = $('#messagebuffer').eq(0).children().eq(i)
		if (/(?<=chat-msg-).([^\s]*)/.test(msg.attr('class')) != false) {
			var userIndex = userArr.findIndex(arr => arr.includes(/(?<=chat-msg-).([^\s]*)/.exec(msg.attr('class'))[0].toLowerCase()))
			if (userIndex != -1 && msg.children().eq(0).children().length == 0)
				$('#messagebuffer').eq(0).children().eq(i).children().eq(0).append($('<img/>', { 'class': 'chat_pixel' }).attr("src", userArr[userIndex][1][userArr[userIndex][3][1]]))
		}
	}
}
//Bot Answers
var askResponse = ['Yes', "Yes, definitely", 'Signs point to yes', "As I see it, yes", 'No', 'Very doubtful', "Outlook is grim",
	'Better not tell you now', 'Maybe', 'Reply hazy try again', ":sushi:", ":dekinai:"]
//quotes are not yet implemented
//var quotes = []

//Bot functions

function chatBot(msg) {
	cmdcheck = msg.split(" ");
	cmdcheck[0] = cmdcheck[0].toLowerCase();
	cmdcheck[1] = cmdcheck.slice(1).join(' ');

	if (cmdcheck[0] === '!ask') {
		amsg = askResponse[Math.floor(Math.random() * askResponse.length)]
		//update this to correct response
		if (amsg === "I'd like to use a life line") {
			msg = amsg + ': ' + pickUser() + ' Help me out!'
		}
		else
			msg = amsg
	}
	else if (cmdcheck[0] === '!now') {
		msg = $('#currenttitle')[0].innerText
	}
	else if (cmdcheck[0] === '!next') {
		if ($("#queue")[0].children.length > 0) {
			for (let i = 0; i < $("#queue")[0].children.length; i++) {
				if ($("#queue")[0].children[i].classList.contains("queue_active")) {
					if ($("#queue")[0].children[i + 1] != null)
						msg = $("#queue")[0].children[i + 1].children[0].innerText
					else
						msg = "Stream's over buddy."
				}
			}
		}
		else
			msg = "Stream's over buddy."
	}
	else if (cmdcheck[0] === "!calc" && cmdcheck[1].length > 0) {
		try {
			msg = '' + eval(cmdcheck[1]);
		} catch (e) {
			msg = 'Please use a valid equation.'
		}
	}
	else if (cmdcheck[0] === "!pick" && cmdcheck[1].length > 0) {
		arr = cmdcheck[1].split(",");
		a = Math.round(Math.random() * (arr.length - 1));
		msg = arr[a].trim();
	}
	else if (cmdcheck[0] === '!pickuser') {
		msg = pickUser();
	}
	//this one can probably be simplified
	//too much brain power required right now though
	else if (cmdcheck[0] == '!roll' && cmdcheck[1].length > 0) {
		cmdcheck[1] = cmdcheck[1].replace(/ /g, "");
		d6 = cmdcheck[1].toLowerCase().indexOf("d");
		psign = cmdcheck[1].indexOf("+");
		msign = cmdcheck[1].indexOf("*");
		ssign = cmdcheck[1].indexOf("-");
		dsign = cmdcheck[1].indexOf("/");
		xroll = xdice = xplus = xsub = max = a = roll = 0;
		xmulti = xdiv = 1;
		if (d6 > -1) {
			xdice = parseInt(cmdcheck[1].substr(0, d6));
			xroll = parseInt(cmdcheck[1].substr(d6 + 1, (psign > -1 ? psign : cmdcheck[1].length)));
			isNaN(xdice) ? xdice = 1 : "";
			isNaN(xroll) ? xroll = 6 : "";
			if (psign > -1) {
				for (var i = psign + 1; i <= cmdcheck[1].length; i++) {
					if (isNaN(cmdcheck[1][i])) {
						xplus = parseInt(cmdcheck[1].substr(psign + 1, i));
						break;
					}
				}
				isNaN(xplus) ? xplus = 0 : "";
			}
			if (ssign > -1) {
				for (var i = ssign + 1; i <= cmdcheck[1].length; i++) {
					if (isNaN(cmdcheck[1][i])) {
						xsub = parseInt(cmdcheck[1].substr(ssign + 1, i));
						break;
					}
				}
				isNaN(xsub) ? xsub = 0 : "";
			}
			if (msign > -1) {
				for (var i = msign + 1; i <= cmdcheck[1].length; i++) {
					if (isNaN(cmdcheck[1][i])) {
						xmulti = parseInt(cmdcheck[1].substr(msign + 1, i));
						break;
					}
				}
				isNaN(xmulti) ? xmulti = 1 : "";
			}
			if (dsign > -1) {
				for (var i = dsign + 1; i <= cmdcheck[1].length; i++) {
					if (isNaN(cmdcheck[1][i])) {
						xdiv = parseInt(cmdcheck[1].substr(dsign + 1, i));
						break;
					}
				}
				isNaN(xdiv) ? xdiv = 1 : "";
			}
		}
		d6test = d6 > -1 && !isNaN(xdice) && !isNaN(xroll);
		drolls = "";
		if (d6test) {
			for (var i = 0; i < xdice; i++) {
				roll = Math.ceil(Math.random() * xroll);
				a += roll;
				drolls += (drolls.length > 0 ? " + " : "") + roll;
			}
			a = a * xmulti / xdiv + xplus - xsub;
			max = xdice * xroll * xmulti / xdiv + xplus - xsub;
		} else {
			max = parseInt(cmdcheck[1]);
			isNaN(max) ? max = 100 : '';
			a = Math.ceil(Math.random() * max);
		}

		msg = a + ' out of ' + max + (!isNaN(cmdcheck[1]) ? "" : " (Rolled: " + drolls + ")");
	}
	return msg
}

function pickUser() {
	var pickUsers = []
	for (i = 0; i < userlist.childElementCount; i++) {
		if (userlist.childNodes[i].innerText != CLIENT.name)
			pickUsers.push(userlist.childNodes[i].childNodes[1].innerText)
	}
	if (pickUsers.length === 0) {
		return "You're alone loser."
	}
	else {
		return pickUsers[Math.floor(Math.random() * pickUsers.length)]
	}

}


/*Playlist*/
//Grabs raw filenames and sets them as title
var playListData = "";
function selectRandomLink(data) {
	if (typeof data.id !== "undefined") {
		$('.serverLinks').remove();
		if (data.type === "fi") {
			if (data.id.indexOf(PlaylistDelimiter) > -1) {
				LeaderLink = data.id;
				var rdmLinks = data.id.split(PlaylistDelimiter);
				playListData = data;
				for (var i = 0; i < rdmLinks.length; i++) {
					$("<button class='btn btn-sm btn-default serverLinks' title='" + rdmLinks[i] + "' leaderLink='" + LeaderLink + "'>Server " + (i + 1) + "</button>").appendTo("#playercontrols").on("click", function () {
						$('.serverLinks').removeClass('btn-success');
						$(this).addClass('btn-success');
						let LeaderLink = $(this).attr('LeaderLink');
						setTimeout(function () {
							PLAYER.mediaId = LeaderLink; // Media ID must match playlist link or else this does not let you set the time.
						}, 1000);
						let data = playListData;
						data.id = $(this).attr('title');
						if (typeof data.type !== "undefined") {
							if (data.type === "fi") {
								videoElement = document.getElementById("ytapiplayer_html5_api") || false;
							}
						}
						_handleMediaUpdate(data);
					});
					if (i == 0)
						$(".serverLinks").addClass('btn-success');
				}
			}
		}
	}
}

$("#mediaurl").on("paste", function () {
	setTimeout(function () {
		if ($("#addfromurl-title-val").length !== 0) {
			var mediaUrl = decodeURIComponent($("#mediaurl")[0].value).split("/");
			mediaUrl = mediaUrl[mediaUrl.length - 1].split("?")[0].split(".");
			var mediaTitle = "";
			for (i = 0; i < mediaUrl.length - 1; i++) {
				mediaTitle += mediaUrl[i] + ".";
			}
			mediaTitle = mediaTitle.substring(0, mediaTitle.length - 1);
			$("#addfromurl-title-val")[0].value = mediaTitle;
		}
	}, 250);
});

/* Current Video Time */
var ADDONESECOND = '';
function currentVideoTime(data) {
	clearInterval(ADDONESECOND);
	hour = Math.floor(data.currentTime / 3600);
	minute = Math.floor(data.currentTime / 60 % 60);
	second = Math.floor(data.currentTime % 60);
	second < 10 ? second = '0' + second : '';
	if (hour === 0) {
		$("#findtime").text(minute + ':' + second);
	} else {
		minute < 10 ? minute = '0' + minute : '';
		$("#findtime").text(hour + ':' + minute + ':' + second);
	}
	ADDONESECOND = setInterval(function () {
		if (!PLAYER.paused) {
			second = parseInt(second, 10) + 1;
			minute = parseInt(minute, 10);
			if (second === 60) {
				second = 0;
				minute++;
				if (minute === 60) {
					minute = 0;
					hour = parseInt(hour, 10) + 1;
				}
			}
			second < 10 ? second = '0' + second : '';
			if (hour === 0) {
				$("#findtime").text(minute + ':' + second);
			} else {
				minute < 10 ? minute = '0' + minute : '';
				$("#findtime").text(hour + ':' + minute + ':' + second);
			}
		}
	}, 1000);
}

/* New Video End Times */
function getCurrentPlayerTime() {
	try {
		if (typeof PLAYER.player !== "undefined") {
			return PLAYER.player.currentTime(); // "FilePlayer, Vimeo"
		} else if (typeof PLAYER.yt !== "undefined") { // "YouTube"
			return PLAYER.yt.getCurrentTime(); // "YouTube"
		} else if (typeof PLAYER.dm !== "undefined") {
			return PLAYER.dm.currentTime; // "Daily Motion"
		}
	} catch {
		return CurrentVideoTime;
	}
}
var CurrentVideoTime = 0;

socket.on("delete", function () {
	setTimeout(function () {
		getEndTimePL()
	}, 750);
});
socket.on("moveVideo", function () {
	setTimeout(function () {
		getEndTimePL()
	}, 750);
});
socket.on("mediaUpdate", function (data) {
	if (Math.abs(data.currentTime - CurrentVideoTime) > 5.1) {
		getEndTimePL();
	}
	CurrentVideoTime = data.currentTime;
});

socket.on("changeMedia", function (data) {
	setTimeout(function () {
		getEndTimePL()
	}, 750);
});

var PlaylistInfo
var VidPosition
var PLTimeList 

//gets the length of playlist item in seconds
function getTime(queuePosition) {
	var delay = 3;
	var TimeSplit = (PLTimeList[queuePosition].textContent.split(":"))
	for (var i = TimeSplit.length - 1; i >= 0; i--) {
		if (i == TimeSplit.length - 1) {
			var addSeconds = parseInt(TimeSplit[i])
		}
		else if (i == TimeSplit.length - 2) {
			var addMinutes = parseInt(TimeSplit[i] * 60)
		}
		else if (i == TimeSplit.length - 3) {
			var addHours = parseInt(TimeSplit[i] * 3600)
		}
	}
	if (TimeSplit.length > 2) {
		addTime = addSeconds + addMinutes + addHours
	}
	else {
		addTime = addSeconds + addMinutes
	}
	if (addTime == 0) {
		return "inf"
	}
	else
		return addTime + delay;
}
//calculates the end time of the playlist item from the currently playing item
function calcEndTimePL(endAddTime) {
	var secs = Math.round(Date.now() / 1000) + endAddTime
	var end = new Date(secs * 1000)
	var isPM = end.getHours() >= 12;
	var isMidday = end.getHours() == 12;
	var hrLeadZero = end.getHours() - (isPM && !isMidday ? 12 : 0);
	if (hrLeadZero === 0)
		hrLeadZero = 12;
	var minLeadZero = String(end.getMinutes()).padStart(2, '0');
	var secLeadZero = String(end.getSeconds()).padStart(2, '0');
	var endTimeString = "Ends at " + hrLeadZero + ":" + minLeadZero + ":" + secLeadZero + (isPM ? ' PM' : ' AM') + " | "
	return endTimeString
}

function updateEndTimesOnLoad() {
	var PLTimeList = Array.from(document.getElementsByClassName("qe_time")).forEach(function (PLCurrElement) {
		var qeEndTime = document.createElement("span");
		qeEndTime.classList.add('qe_endTime');

		PLCurrElement.parentElement.insertBefore(qeEndTime, PLCurrElement.nextSibling);

		var qeuser = document.createElement("span");
		qeuser.classList.add('qe_user');
		qeuser.textContent = PLCurrElement.parentElement.getAttribute("title").replace("Added by: ", "") + " | ";

		PLCurrElement.parentElement.insertBefore(qeuser, PLCurrElement.nextSibling);
	});
}

function makeQueueEntry(item, addbtns) {
	var video = item.media;
	var li = $("<li/>");
	li.addClass("queue_entry");
	li.addClass("pluid-" + item.uid);
	li.data("uid", item.uid);
	li.data("media", video);
	li.data("temp", item.temp);
	if (video.thumb) {
		$("<img/>").attr("src", video.thumb.url)
			.css("float", "left")
			.css("clear", "both")
			.appendTo(li);
	}
	var title = $("<a/>").addClass("qe_title").appendTo(li)
		.text(video.title)
		.attr("href", formatURL(video))
		.attr("target", "_blank");
	var time = $("<span/>").addClass("qe_time").appendTo(li);
	time.text(video.duration);
	var userAdded = $("<span/>").addClass("qe_user").appendTo(li);
	userAdded.text(item.queueby + " | ");
	var endTime = $("<span/>").addClass("qe_endTime").appendTo(li);
	var clear = $("<div/>").addClass("qe_clear").appendTo(li);
	if (item.temp) {
		li.addClass("queue_temp");
	}

	if (addbtns)
		addQueueButtons(li);

	setTimeout(function () {
		getEndTimePL();
	}, 100);
	return li;
}

//calculates the end times for each entry in the playlist
function getEndTimePL() {
	var PlaylistInfo = Array.from(document.getElementById("queue").children)
	for (var i = 0; i < PlaylistInfo.length; i++) {
		if (PlaylistInfo[i].className == "ui-effects-placeholder") {
			PlaylistInfo.splice(i, 1)
		}
	}
	VidPosition = PlaylistInfo.indexOf(document.getElementsByClassName("queue_active")[0])
	PLTimeList = document.querySelectorAll("#queue .qe_time");
	var PLEndTimeList = document.getElementsByClassName("qe_endTime");
	var time = 0;
	var live = false;
	if (PLTimeList.length !== 0 && PLEndTimeList.length === 0) {
		updateEndTimesOnLoad();
	}

	for (var i = VidPosition; i < PLEndTimeList.length; i++) {
		if (i == VidPosition) {
			if (getTime(i) == "inf") {
				PLEndTimeList[i].textContent = "Never Ends |";
				live = true;
			}
			else if (live == true) {
				PLEndTimeList[i].textContent = "";
			}
			else {
				PLEndTimeList[i].textContent = calcEndTimePL(getTime(i) - getCurrentPlayerTime())
				time += getTime(i) - getCurrentPlayerTime();
			}
		}
		else {
			if (getTime(i) == "inf") {
				PLEndTimeList[i].textContent = "Never Ends |";
				live = true;
			}
			else if (live == true) {
				PLEndTimeList[i].textContent = "";
			}
			else {
				PLEndTimeList[i].textContent = calcEndTimePL(getTime(i) + time)
				time += getTime(i);
			}
		}
	}
	for (var i = 0; i < VidPosition; i++) {
		PLEndTimeList[i].textContent = "";
	}
}






/* Layout */
if (localStorage.getItem('playerSide') == null) {
	localStorage.setItem('playerSide', "LEFT")
}
else {
	loadPlayerSide()
}
//Button for swaping sides
//can be moved
$('<span id ="swap" class="label label-default pull-right pointer" style ="">Swap Player</span>')
	.insertAfter('#usercount')
	.on('click', function () {
		swapPlayerSide()
	})
//swaps player sides then saves the position 
function swapPlayerSide() {
	if (localStorage.getItem('playerSide') == 'LEFT') {
		right = '#chatwrap'
		left = '#videowrap'
		localStorage.setItem('playerSide', 'RIGHT')
		$('#newpollbtn').removeClass('right')
		$('#emotelistbtn').removeClass('right')
		$('#videocontrols').removeClass('right')
		$('#newpollbtn').addClass('left')
		$('#emotelistbtn').addClass('left')
		$('#videocontrols').addClass('left')
	}
	else if (localStorage.getItem('playerSide') == 'RIGHT') {
		right = '#videowrap'
		left = '#chatwrap'
		localStorage.setItem('playerSide', 'LEFT')
		$('#newpollbtn').removeClass('left')
		$('#emotelistbtn').removeClass('left')
		$('#videocontrols').removeClass('left')
		$('#newpollbtn').addClass('right')
		$('#emotelistbtn').addClass('right')
		$('#videocontrols').addClass('right')

	}
	$(right).each(function () {
		$(this).insertAfter($(this).parent().find(left))
	});
}
//loads the saved preference
function loadPlayerSide() {
	if (localStorage.getItem('playerSide') == 'RIGHT') {
		$('#chatwrap').each(function () {
			$(this).insertAfter($(this).parent().find('#videowrap'))
		});
		$('#newpollbtn').addClass('left')
		$('#emotelistbtn').addClass('left')
		$('#videocontrols').addClass('left')
	}
	else {
		$('#videowrap').each(function () {
			$(this).insertAfter($(this).parent().find('#chatwrap'))
		});
		$('#newpollbtn').addClass('right')
		$('#emotelistbtn').addClass('right')
		$('#videocontrols').addClass('right')

	}

}
//Button for creating current video timer
$('<span id="findtime" class="label label-default pull-right pointer" style ="" title="Find current video time">Video Time</button>')
	.insertBefore('#swap')
	.on("click", function () {
		if ($(this).text() !== 'Video Time') {
			$(this).text('Video Time');
			clearInterval(ADDONESECOND);
			socket.removeListener("mediaUpdate", currentVideoTime);
		} else {
			socket.on("mediaUpdate", currentVideoTime);
		}
	})

/* Theme Dropdown */
//make this less hackey later maybe?
$('#us-general > form:nth-child(2) > div:nth-child(2)').after([
	$('<div>', { "class": "form-group" }).append([
		$('<label>').addClass("control-label").addClass("col-sm-4").text('/pam/ Themes'),
		$('<div>', { "class": "col-sm-8" }).append([
			$('<select>').addClass("form-control").attr('id',"pam-themes")
		])
	])
])

//themes
$("#pam-themes").append(new Option('Default', 'Default'))
$("#pam-themes").append(new Option('Windows 98', 'PAMW98'))

//load theme
if (localStorage.getItem('pamTheme') == null) {
	localStorage.setItem('pamTheme', "Default")
}
else {
	loadTheme()
}

function loadTheme() {
	if (localStorage.getItem('pamTheme') != "Default") {
		$('body').addClass(localStorage.getItem('pamTheme'))
		if (localStorage.pamTheme == 'PAMW98') {
			$('#videowrap').append($('#videocontrols'))
			$('#videowrap').append($('#leftcontrols').children(0))
		}
	}	
	else {
		var bodyClass = $('body').attr("class")
		if (/\bPAM\w*\b/.test(bodyClass) == true)
			$('body').removeClass(/\bPAM\w*\b/.exec(bodyClass)[0])
		$('#rightcontrols').append($('#videocontrols'));
		$('#leftcontrols').append($('#newpollbtn'), $('#emotelistbtn'))
	}
	$("#pam-themes").val(localStorage.pamTheme)
}

//change theme

$('#pam-themes').change(function () {
	localStorage.setItem('pamTheme' , $('#pam-themes').children('option:selected').val())
	loadTheme()
})

/* effects */

//scanlines

//button for toggling the effect
scanline = $('<button id="scanline" class="btn btn-sm btn-default" title="Add Scanlines"><span class="glyphicon glyphicon-sd-video"></span></button>')
	.appendTo("#videocontrols")
	.on("click", function () {
		$(this).hasClass('btn-success') ? scanPlayerFlicker() : $(this).hasClass('btn-warning') ? unScanPlayer() : scanPlayer()
})


//enable the effect
function scanPlayer() {
	$("#videowrap").addClass('relative');
	scanCover = $('<div id="scanCover" />')
		.insertAfter($("#ytapiplayer"));
	document.styleSheets[0].addRule('#scanCover:before', 'content: " "; display: block; position: absolute; top: 0; left: 0; bottom: 0; right: 0; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),\
   linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); z-index: 2; background-size: 100% 2px, 3px 100%; pointer-events: none;');
	document.styleSheets[0].addRule('#scanCover:after', 'content: " "; display: block; position: absolute; top: 0; left: 0; bottom: 0; right: 0; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),\
   linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); z-index: 2; background-size: 100% 4px, 2px 100%; pointer-events: none;');
	scanline.addClass('btn-success').attr('title', 'Add Flicker');
}
//enable the flickering 
function scanPlayerFlicker() {
	scanCover.css({
		'animation': 'flicker 0.15s infinite'
	})
	scanline.removeClass('btn-success').attr('title', 'Remove Scanlines');
	scanline.addClass('btn-warning');
}

let dynamicStyles = null;
function addFlicker(body) {
	if (!dynamicStyles) {
		dynamicStyles = document.createElement('style');
		dynamicStyles.type = 'text/css';
		document.head.appendChild(dynamicStyles);
	}
	dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

addFlicker('@keyframes flicker {0% {opacity: 0.27861;} 5% {opacity: 0.34769;} 10% {opacity: 0.23604;} 15% {opacity: 0.90626;} 20% {opacity: 0.18128;} 25% {opacity: 0.83891;} 30% {opacity: 0.65583;} 35% {opacity: 0.67807;} 40% {opacity: 0.26559;} 45% {opacity: 0.84693;}\
   50% {opacity: 0.96019;} 55% {opacity: 0.08594;} 60% {opacity: 0.20313;} 65% {opacity: 0.71988;} 70% {opacity: 0.53455;} 75% {opacity: 0.37288;} 80% {opacity: 0.71428;} 85% {opacity: 0.70419;} 90% {opacity: 0.7003;} 95% {opacity: 0.36108;} 100% {opacity: 0.24387;}');


//turns the effect off 
function unScanPlayer() {
	scanCover.remove();
	scanline.removeClass('btn-warning').attr('title', 'Add Scanlines');
	$("#videowrap").removeClass('relative');

}

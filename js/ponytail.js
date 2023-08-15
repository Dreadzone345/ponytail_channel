﻿/*Kuyashii*/
/*Basic Details and Config*/
$('.navbar-brand').text('Ponytails R Moe').css('padding', '0 10px 0 10px'); //Replaces var ChannelName_Caption = "Ponytails 'R' Moe";
var Usercount_Text = "revuefag";
var SpoilerImg = 'http://i.imgur.com/xzD4vqc.png';
var Favicon_URL = '';
var TitleBarDescription_Caption = '>Streaming:'; //Not working; will fix
var JoinText_Message = 'has made contact with the server.';
var LeaveText_Message = 'has tried the restarting.';
var defaultUserlistImage = 'https://cdn.discordapp.com/attachments/827754897754685501/1140881579883905039/b.png'
/*Navbar*/
//wip - probably want to make this a proper dropdown with other info?
$('#nav-collapsible ul:first-child').prepend("<li class='dropdown'><a target='_blank' href='https://docs.google.com/spreadsheets/d/1tvK0EiLc1RJ6IbPF7CEHMUmys8ljAJcgoEIIPpCMh3A/'>Schedule</a></li>");
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

//Dropdown menu

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
var userArr = [
	['dreadzone', 'https://cdn.discordapp.com/attachments/942639553120972820/948129632543195187/Aoyama.png',''],
	['haly', 'https://media.discordapp.net/attachments/888275831217090620/1047503101571125338/Hitori_longer_anim_t3.gif','https://media.discordapp.net/attachments/354127755761156106/874877703076085840/smug_50.png'],
	['literallyme', 'https://cdn.discordapp.com/attachments/942639553120972820/948129704685240350/Shinobu.png', 'https://cdn.discordapp.com/attachments/875570835732176956/875571124438700043/naellis_01.png','https://files.catbox.moe/q0qpr4.png'],
	['thepaizurikid', 'https://cdn.discordapp.com/attachments/1059317496227823646/1075156730985590866/Perrine_v3-cat-update.png', 'https://cdn.discordapp.com/attachments/807397543415250958/874874304871940156/sidebarRinne.png'],
	['colin_mochrie', 'https://cdn.discordapp.com/attachments/926181552805777558/1140021789381107722/Chen_v2.png', ''],
	['gasp', 'https://cdn.discordapp.com/attachments/988611450073403422/1056480314043682816/Fubuki_v3-Messi.png', ''],
	['okonogi', 'https://cdn.discordapp.com/attachments/926181552805777558/1140021808167387206/Keropoyo_v3.png', 'https://files.catbox.moe/pcsar7.png','https://files.catbox.moe/q7lqtl.png'],
	['sarlacc', 'https://cdn.discordapp.com/attachments/942639553120972820/1040386126009090138/Louise_winter.png', ''],
	['shimarin', 'https://cdn.discordapp.com/attachments/942639553120972820/948454629618905088/Shima_rin.png', 'https://cdn.discordapp.com/attachments/741854976967704579/875174053688770631/Mikan_sidebar.png'],
	['speedy', 'https://cdn.discordapp.com/attachments/926181552805777558/1140021833467433080/Yukikaze_v3.png', 'https://cdn.discordapp.com/attachments/410511471894593537/874818707300417556/bktside1v5.png'],
	['nonohara', 'https://cdn.discordapp.com/attachments/994346520633684068/1075516832666095696/nonohara.png', '']
]

/*Overwrite the custom media load function to skip the warning message if the URL is angelthump*/
var playerType = window.CustomEmbedPlayer;
playerType.prototype.originalLoad = playerType.prototype.load;
playerType.prototype.load = function(data) { 
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
function chatImageToVideo(div){
	div = $('#messagebuffer')
	var videoFileTypes = [ ".webm", ".mp4", '.mov' ];
	div.find("a>img")
		.each(function(index, img){ 
			if(videoFileTypes.some(function(ext){ return img.src.endsWith(ext);	})){
				var toReplace = $(img).parent("a[href='" + img.src + "']");
				if(toReplace.length == 0)
					toReplace = $(img);
				toReplace.replaceWith("<video controls autoplay loop muted src=\"" + img.src + "\">" + img.src + "</video>");
				
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


//assignment of userlist pixels
function userlistPixels() {
	for (let i = 0; i < $('#userlist').children().length; i++) {
		var user = $('#userlist').children().eq(i).children().eq(1)
		var userIndex = userArr.findIndex(arr => arr.includes(user.text().toLowerCase()))
		if (CLIENT.name == user.text())
			clientIndex = userIndex;
		if (userIndex != -1 && user.children().length < 1) {
			$('#userlist').children().eq(i).children().eq(1).prepend($('<img/>', { 'class': 'userlist_pixel' }).attr("src", userArr[userIndex][1]))
		}
	}
}
function userlistImage(clientIndex) {
	if (clientIndex != -1) {
		//randomization for users with more than one userlist image
		if (userArr[clientIndex].length > 3) {
			var usedImg = Math.floor(Math.random() * (userArr[clientIndex].length - 3 + 1) + 2)
		}
		else {
			var usedImg = 2
		}

		if (userArr[clientIndex][usedImg] == '')
			link = defaultUserlistImage
		else
			link = userArr[clientIndex][usedImg]
	}
	else {
		link = defaultUserlistImage
	}
	$("#userlist").css({ 'background-image': 'url("' + link + '")', 'background-repeat': 'no-repeat', 'background-position': 'left bottom' })
}

function chatPixels() {
	for (let i = 0; i < $('#messagebuffer').eq(0).children().length; i++) {
		var msg = $('#messagebuffer').eq(0).children().eq(i)
		if (/(?<=chat-msg-).*/.test(msg.attr('class')) != false) {
			var userIndex = userArr.findIndex(arr => arr.includes(/(?<=chat-msg-).*/.exec(msg.attr('class'))[0].toLowerCase()))
			if (userIndex != -1 && msg.children().eq(0).children().length == 0)
				$('#messagebuffer').eq(0).children().eq(i).children().eq(0).append($('<img/>', { 'class': 'chat_pixel' }).attr("src", userArr[userIndex][1]))
		}
	}
}

//Bot functions
//to do

/*Playlist*/
//Timing for when each video in the playlist ends - Stolen from /bkt/ script
var q240480 = $('li[title="240"],li[title="480"]');
socket.on("mediaUpdate", function(data) {
	if (Math.abs(data.currentTime - CurrentVideoTime) > 5.1) {
		updateEndTimes(Math.floor(data.currentTime));
	}
	CurrentVideoTime = data.currentTime;
	if (PLAYER.mediaType == "gd") {
		q240480.hide();
	} else if (q240480.css("display") == "none") {
		q240480.show();
	}
});
socket.on("changeMedia", function(data) {
    updateEndTimes(Math.floor(data.currentTime));
	videoLength = data.seconds;
	changeTitle();
	setModeAfterVideoChange();
	$("#findtime").text() !== 'Video Time' ? $("#findtime").click() : '';
	if (!$("#videowrap").length) {
		TitleBarDescription_Caption.length < 1 ? TitleBarDescription_Caption = 'Currently Playing:' : '';
		$("#currenttitle").text(TitleBarDescription_Caption + " " + data.title);
	}
});
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
socket.on("delete", function() {
	setTimeout(function() {
		updateEndTimes(getCurrentPlayerTime());
	}, 750); // hopefully this fixes the issue..
});

socket.on("moveVideo", function() {
	setTimeout(function() {
		updateEndTimes(getCurrentPlayerTime());
	}, 750);
});
function makeQueueEntry(item, addbtns) {
    var video = item.media;
    var li = $("<li/>");
    li.addClass("queue_entry");
    li.addClass("pluid-" + item.uid);
    li.data("uid", item.uid);
    li.data("media", video);
    li.data("temp", item.temp);
    if(video.thumb) {
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
    if(item.temp) {
        li.addClass("queue_temp");
    }

    if(addbtns)
        addQueueButtons(li);

	setTimeout(function() {
		updateEndTimes(getCurrentPlayerTime());
	}, 100);
    return li;
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

function updateEndTimes(CurrentVideoTime) {
    var currentTime = new Date().getTime();
    var activeItemPosition = Array.from(document.getElementById("queue").children).indexOf(document.getElementsByClassName("queue_active")[0]);

	if (activeItemPosition === -1) {
		setTimeout(function() {
			updateEndTimes(CurrentVideoTime);
		}, 250);
	} else {
		var PLTimeList = document.querySelectorAll("#queue .qe_time");
		var PLEndTimeList = document.getElementsByClassName("qe_endTime") || false;
		var PLSeconds = 0;

		if (PLTimeList.length !== 0) {
			if (PLEndTimeList.length === 0) {
				updateEndTimesOnLoad();
			}

			if (activeItemPosition > 0) {
				for (var j = 0; j < activeItemPosition; j++) {
					PLEndTimeList[j].textContent = "";
				}
			}

			var maxItems = 50;
			var maxPosition = 0;

			if (PLTimeList.length < activeItemPosition + maxItems) {
				maxPosition = PLTimeList.length;
			} else {
				maxPosition = activeItemPosition + maxItems;
				for (var j = maxPosition; j < PLTimeList.length; j++) {
					PLEndTimeList[j].textContent = "";
				}
			}

			var noTime = false;

			for (var i = activeItemPosition; i < maxPosition; i++) {
				var currSplitTime = PLTimeList[i].textContent.split(":");

				if (currSplitTime[0] !== "--" && !noTime) {
					if (currSplitTime.length === 3) {
						PLSeconds += parseInt(currSplitTime[0]) * 60 * 60;
					}
					PLSeconds += parseInt(currSplitTime[currSplitTime.length-2]) * 60;
					PLSeconds += parseInt(currSplitTime[currSplitTime.length-1]);
					PLSeconds += 3; //video player delay

					if (i === activeItemPosition) {
						PLSeconds = PLSeconds - CurrentVideoTime;
					}

					var updatedTime = new Date(currentTime + PLSeconds * 1000);
					var isPM = updatedTime.getHours() >= 12;
					var isMidday = updatedTime.getHours() == 12;

					var updatedHours = updatedTime.getHours() - (isPM && !isMidday ? 12 : 0);
					if (updatedHours === 0) {
						updatedHours = 12;
					}

					var updatedMins = updatedTime.getMinutes().toString();
					if (updatedMins.length === 1) {
						updatedMins = "0" + updatedMins;
					}
					var updatedSecs = updatedTime.getSeconds().toString();
					if (updatedSecs.length === 1) {
						updatedSecs = "0" + updatedSecs;
					}

					PLEndTimeList[i].textContent = "Ends at " + updatedHours + ":" + updatedMins + ":" + updatedSecs + (isPM ? ' PM' : ' AM') + " | ";
				} else {
					if (!noTime) {
						PLEndTimeList[i].textContent = "Never ends | ";
					} else {
						PLEndTimeList[i].textContent = "";
					}
					noTime = true;
				}
			}
		}
	}
}

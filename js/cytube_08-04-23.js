/*Kuyashii*/
/*Basic Details and Config*/
var Usercount_Text = "revuefag";
var SpoilerImg = 'http://i.imgur.com/xzD4vqc.png';
var Favicon_URL = '';
var ChannelName_Caption = 'Ponytails R Moe';
var TitleBarDescription_Caption = '>Streaming:';
var JoinText_Message = 'has made contact with the server.';
var LeaveText_Message = 'has tried the restarting.';

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
/* ----- STARTING CONFIGURATION - USER INTERFACE (UI) ----- */

var UI_Favicon = 1;				// [&] channel favicon
var UI_MiniLogo = 0;			// [&] small channel logo/avatar in the top navbar
var UI_ChannelName = 1;			// [&] channel custom brand name
var UI_HeaderDropMenu = 1;		// [&] additional header dropdown menu
var UI_RemoveHomeMenu = 1;		// removing 'Home' menu from the header
var UI_TitleBarDescription = 1;	// [&] custom title bar description
var UI_UserCommands = 1;		// [&] additional commands in the chat window
var UI_Func = 1;				// anti-AFK and auto chat clearing panel
var UI_AutoScroll = 1;			// auto scroll chat
var UI_WC = 1;					// [&] random background image for empty playlist row corner
					// [ REQUIRES: UI_Pixel enabled ]
var UI_Pixel = 1;				// [&] special signs preceding messages in the chat window for selected users
var UI_PixelChange = 1;			// [&] change img link when a certain img link is posted
var UI_Lottery = 1;				// [&] text added to random chat messages
var UI_JoinText = 1;			// [&] chat message after user joining
var UI_LeaveText = 1;			// [&] chat message after user leaving
var UI_PlayerOptions = 1;		// [&] additional player options
var UI_TransformationBtns = 1;	// player transformation buttons
var UI_FontsBtn = 1;			// button displaying box with clickable chat fonts
					// [ REQUIRES: INSTALLATION (see above) ]
var UI_UnicodeChars = 1;		// [&] additional buttons in the fonts panel with unicode characters
					// [ REQUIRES: UI_FontsBtn enabled ]
var UI_EmotesBtn = 1;			// button displaying box with clickable chat emotes
var UI_CommandsBtn = 1;			// button displaying modal window with chat commands help
var UI_ExtendedGetURLs = 1;		// extended 'Get URLs' function
var UI_DisplayModeSel = 1;		// selector with player display modes
var UI_QuickCommandsBtns = 1;	// buttons with '/clear' and '/afk' functions
var UI_FlagCounter = 1;			// [&] channel right-sided footer box
var UI_UserStatistics = 1;		// displaying in the footer user visits number and current online time
var UI_EmbeddingMedia = 1;		// [&] possibility to embedding (displaying) images and .webm videos on the chat
var UI_MediaControls = 1;		// embedded video preloaded controls
					// [ REQUIRES: UI_EmbeddingMedia enabled ]
var UI_ColorAdmins = 1;			// [&] change the color of admin names
var UI_Schedule = 1;			// [&] add schedule to MOTD
var UI_OpenPlaylist = 1;		// [&] change playlist permissions on toggle
var UI_Shortcuts = 1;			// [&] keyboard shortcuts to insert text

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- DETAILED BASIC CONFIGURATION ----- */

var Usercount_Text = "dead emote";

var Grape_HexColor = '#A623CF';

var Blueberry_HexColor = '#6D68D8';

var FruitBowl = {		// FORMAT: 'NAME':'HEXCOLOR',
	'Happy': Grape_HexColor,
	'tsukarin': Grape_HexColor,
	'Mio-chi': Grape_HexColor,
	'Smiff': Grape_HexColor,
	'Pyro': Grape_HexColor,
	'micher': Blueberry_HexColor};

var SpoilerImg = 'http://i.imgur.com/xzD4vqc.png';

var Favicon_URL = 'http://i.imgur.com/OzAC4l0.png';

var MiniLogo_URL = 'http://i.imgur.com/OCidf8n.gif';

var ChannelName_Caption = 'BestKeyTube';

var HeaderDropMenu_Title = 'Stuff';

var HeaderDropMenu_Items = [		// FORMAT: ['NAME','LINK'],
	['Feedback','http://goo.gl/forms/BYWXgWEZkY'],
	['Stream Schedule', 'https://docs.google.com/spreadsheets/d/1Ye0mzOVODl2IAo3MWjvZOtqSXq-KK_JR5RYbzjUmOY4/edit#gid=9190525'],
	['Emotes', 'https://drive.google.com/folderview?id=0ByZgrUw4okC-STQyNUE0UXh5UU0&usp=drive_web'],
];

var ScheduleTabs_Array = [
	['Compact Schedule', 'If you see this, Google has probably shat itself or it\'s still loading.'],
	['Full Schedule', '<iframe id="scheduleBox" src="https://docs.google.com/spreadsheets/d/1Ye0mzOVODl2IAo3MWjvZOtqSXq-KK_JR5RYbzjUmOY4/pubhtml?gid=9190525&single=true" width="100%" height="' + $(window).height() + '"></iframe>']
];

var TitleBarDescription_Caption = '>Streaming:';

var RandomQuotes = [
	'tsukarin is (not) a lolicon.', 'Pyro and Kolt OTP. ', 'Dicks are a marvelous thing.', 
	'TTGL, not so good.', 'Kill La Kill is best anime.', 
	'We suffer together.', 'Anyone can love anyone they want.',
	'Love knows no age.', 'Girls can\'t love girls', 'league','Your taste is shit!',
	'30 MinutE NaP', 'StreaminG', 'But Toradora is a terrible series to stream. I vote we skip it.',
	'You\'re famous. My quotes all suck. They wouldn\'t put one of mine up.',
	'You could set a nuclear clock to the movement of my hips?', 'I\'m a pedo. -Edes 2015',
	'Ecchi nano wa ikenai to omoimasu!', 'I dun geddit...', 'We should just watch more .hack!', 
	'Sayonara Rosifica.', 'KLK, not so good', 'Do you know Oyashiro-sama', 'Oarz ;_;',
	'It feels like an endless ejaculation', 'Thanks #anime-supreme', 'DUN MISSIT', 'OMOCHIKAERI'
];
RandomQuotes = [
	'I should', 'What did you just feet?', 'KLK, not so good', 'Sayonara Rosifica', 'We should just watch more .hack!', 'I dun geddit...', 'Ecchi nano wa ikenai to omoimasu!', 'Do you know Oyashiro-sama', 'Oarz ;_;',
	'It feels like an endless ejaculation', 'Thanks #anime-supreme', 'DUN MISSIT', 'OMOCHIKAERI'
];

var AskAnswers = [
	'100% for sure.', 'Definitely yes.', 'Yes.', 'Probably.', 'Not any chance.', 'Definitely no.', 
	'A little chance.', 'No.', '50/50', 'Fairy is tired and will not answer.', 'I refuse to answer.', 'Your question is so stupid that you should just leave.',
	'...', 'What was the question?', 'Fuck you.'
];

AskAnswers = [
	'100% for sure.', 'Definitely yes.', 'Yes.', 'Probably.', 'Not any chance.', 'Definitely no.', 
	'A little chance.', 'No.', '50/50', 'Fairy is tired and will not answer.', 'I refuse to answer.', 'Your question is so stupid that you should just leave.',
	'...', 'What was the question?', ':Fuck you.'
];

var Lottery = {
	click:'http://www.downloadmoreram.com/',
	image:'http://i.imgur.com/BS1Eehd.gif',
	text:"আৡঊসঠচঈ",
	chance:0.01
};

var JoinText_Message = 'has made contact with the server.';

var LeaveText_Message = 'has tried the restarting.';

var PlayerHiding_URL = [
	'http://i.imgur.com/mWv1dsg.jpg',
	'http://i.imgur.com/oJ0zCJa.jpg',
	'http://i.imgur.com/sKjK5g4.png',
	'http://i.imgur.com/W84l9q1.jpg',
	'http://i.imgur.com/NxpzQpA.jpg',
	'http://i.imgur.com/pKPPKyY.jpg',
	'http://i.imgur.com/YscblPs.jpg',
	'http://i.imgur.com/idLmUhF.jpg',
	'http://i.imgur.com/QPZZZxW.jpg',
	'http://i.imgur.com/9G3Emgo.png',
	'http://i.imgur.com/e01noAv.jpg',
	'http://i.imgur.com/NSGoG5n.jpg',
	'http://i.imgur.com/MOLi0X0.jpg',
	'https://files.catbox.moe/w3zsp1.png'
];

var Memes_Array = [
	'pmff', 'smug', 'ffmp', 'ayy lmao', 'mug4', 'smig4', '!stat', '[@]', 'untz', ':@', '[m'
];

var UnicodeChars_Array = [
	'★', '☆', '▲', '▼', '♥', '♪', '♕', '✉', '☏', '♠', '→', 
	'☑', '☒', '✡', '☪', '✝', '☭', '☯', 'Ⓐ', '☕', '♨', '¥', '©', '∞', '™',
	'⊂二( ^ω^)二⊃', '♂', '♀', '👽', '🌀', '🔯', 'ῷ'
];

var FlagCounter_HTML = '<a href="http://info.flagcounter.com/U8NQ" target="_blank"><img src="http://s09.flagcounter.com/count/U8NQ/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_12/viewers_0/labels_0/pageviews_0/flags_0/" alt="Flag Counter" border="0"></a>';

var PCL = getOrDefault(CHANNEL.name + "_PCL", {});

var RedditChange_Links = {		// FORMAT:	'NAME':['LINK ONE','LINK TWO']}
	'fuckno':[
			'http://kudo.moe/fuckno.jpg',
			'http://i.imgur.com/Ud4cJUq.jpg'],	
};

var Shortcuts = {		// FORMAT: Keycode:'INSERT TEXT',	http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
	ctrl:{
		49:'[m1]',		// 1
		50:'[@]',		// 2
		51:'[float]',	// 3
		52:'[lf]',		// 4
		53:'[hflip]',	// 5
		54:'[vflip]',	// 6
		66:'[b]',		// b
		73:'[i]',		// i
		83:'[sp]',		// s
		85:'[u]'		// u
	}, 
	alt:{
		83:'[/]'		// s
	},
	ctrlshift:{},
	ctrlalt:{},
	altshift:{}
};

var ThemesCSS = [
	['Kobato', 'https://dl.dropboxusercontent.com/s/1r3twlb0loipybw/kobato.css']
];

var TopUserLogo = [
	['anime girl', 'https://dl.dropboxusercontent.com/s/knxd7dpup1u8lm3/azuki.png', 200],
	['cosmos', 'https://dl.dropboxusercontent.com/s/v6dx49yqk5e3i2d/cosmos.jpg', 200],
	['disco ball', 'https://dl.dropboxusercontent.com/s/ahpfm25pglc8j01/disco.jpg', 162],
	['japanese landscape', 'https://dl.dropboxusercontent.com/s/llylt832evxrp6e/japan.jpg', 200]
];

var WC = getOrDefault(CHANNEL.name + "_WC", {});

var UnlockedPlaylistPermissions = {
	oplaylistadd: 0,
	oplaylistnext: 0,
	oplaylistmove: 1,
	oplaylistdelete: 2,
	oplaylistjump: 2,
	oplaylistaddlist: 1.5,

	seeplaylist: -1,
	playlistadd: 1,
	playlistnext: 1.5,
	playlistmove: 1.5,
	playlistdelete: 1.5,
	playlistjump: 2,
	playlistaddlist: 1.5,
	playlistaddlive: 1,
	playlistaddcustom: 0,
	playlistaddrawfile: 0,
	exceedmaxlength: 1,
	exceedmaxitems: 1,
	addnontemp: 2,
	settemp: 2,
	playlistlock: 2,
	playlistshuffle: 3,
	playlistclear: 3,

	pollctl: 1.5,
	pollvote: 0,
	viewhiddenpoll: 1000000,
	voteskip: 1,
	viewvoteskip: 1.5,

	leaderctl: 2,
	mute: 1.5,
	kick: 1.5,
	ban: 2,
	motdedit: 3,
	filteredit: 3,
	filterimport: 3,
	emoteedit: 3,
	emoteimport: 3,

	drink: 1.5,
	chat: 0,
	chatclear: 2,
};

var LockedPlaylistPermissions = {
	oplaylistadd: 1.5,
	oplaylistnext: 1.5,
	oplaylistmove: 1.5,
	oplaylistdelete: 2,
	oplaylistjump: 2,
	oplaylistaddlist: 1.5,

	seeplaylist: -1,
	playlistadd: 0,
	playlistnext: 1.5,
	playlistmove: 1.5,
	playlistdelete: 1.5,
	playlistjump: 2,
	playlistaddlist: 1.5,
	playlistaddlive: 1.5,
	playlistaddcustom: 1.5,
	playlistaddrawfile: 1.5,
	exceedmaxlength: 1,
	exceedmaxitems: 1,
	addnontemp: 2,
	settemp: 2,
	playlistlock: 2,
	playlistshuffle: 3,
	playlistclear: 3,

	pollctl: 1.5,
	pollvote: 0,
	viewhiddenpoll: 1000000,
	voteskip: 1,
	viewvoteskip: 1.5,

	leaderctl: 2,
	mute: 1.5,
	kick: 1.5,
	ban: 2,
	motdedit: 3,
	filteredit: 3,
	filterimport: 3,
	emoteedit: 3,
	emoteimport: 3,

	drink: 1.5,
	chat: 0,
	chatclear: 2,
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- END OF CONFIGURATION, DO NOT CHANGE ANYTHING BELOW ----- */

/* ----- Initial channel options ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- getting channel options ----- */

var defplayer = "right";
var defuserlist = "left";
var defqueue = "right";

var UCONF = {
	"player":getOrDefault(CHANNEL.name + "_player", defplayer),
	"userlist":getOrDefault(CHANNEL.name + "_userlist", defuserlist),
	"queue":getOrDefault(CHANNEL.name + "_queue", defqueue),
	"qsize":getOrDefault(CHANNEL.name + "_qsize", "wide"),
	"main":getOrDefault(CHANNEL.name + "_main", "top"),
	"motd":getOrDefault(CHANNEL.name + "_motd", "top"),
	"logo":getOrDefault(CHANNEL.name + "_logo", "no"),
	"logourl":getOrDefault(CHANNEL.name + "_logourl", ""),
	"logoht":getOrDefault(CHANNEL.name + "_logoht", "200"),
	"header":getOrDefault(CHANNEL.name + "_header", "detached"),
	"css":getOrDefault(CHANNEL.name + "_css", "no"),
	"csscode":getOrDefault(CHANNEL.name + "_csscode", ""),
	"showname":getOrDefault(CHANNEL.name + "_showname", "no"),
	"pixl":getOrDefault(CHANNEL.name + "_pixl", "before"),
	"pixh":getOrDefault(CHANNEL.name + "_pixh", 16),
	"upti":getOrDefault(CHANNEL.name + "_upti", 60),
	"ltim":getOrDefault(CHANNEL.name + "_ltim",getTZ())
};
var LOADED = false;
var STIMEZONE = getOrDefault(CHANNEL.name + "_STIMEZONE", (new Date().getMonth() > 2 && new Date().getMonth() < 11) ? -4 : -5);
var CTIMEZONE = getOrDefault(CHANNEL.name + "_CTIMEZONE", getTZ());
var USERTHEME = getOrDefault(CHANNEL.name + "_theme", "/css/themes/slate.css");
var USERVISITS = getOrDefault(CHANNEL.name + "_visits", 0);
var USERONLINE = 0;
var NOPLAYER = false;
var COMMAND = false;
var CHATSTAT = {"n":0, "l":0, "m":[]};
var FULLPL = false;
var FLUID = getOrDefault(CHANNEL.name + "_FLUID", true);
var LAYOUTBOX = getOrDefault(CHANNEL.name + "_LAYOUTBOX", true);
var MINIMIZED = false;
var PINNED = false;
var RELOADED = false;
var WEBKIT = "webkitRequestAnimationFrame" in window;
var MAXH = getOrDefault(CHANNEL.name + "_MAXH", "300");
var MAXW = getOrDefault(CHANNEL.name + "_MAXW", "300");
var PIXEL = getOrDefault(CHANNEL.name + "_PIXEL", true);
var HIDEBG = getOrDefault(CHANNEL.name + "_HIDEBG", false);
var HIDEHF = getOrDefault(CHANNEL.name + "_HIDEHF", false);
var HIDEPL = getOrDefault(CHANNEL.name + "_HIDEPL", false);
var HIDEANN = getOrDefault(CHANNEL.name + "_HIDEANN", false);
var HIDEMOTD = getOrDefault(CHANNEL.name + "_HIDEMOTD", false);
var HIDEPLAYER = getOrDefault(CHANNEL.name + "_HIDEPLAYER", false);
var HIDEIMG = getOrDefault(CHANNEL.name + "_HIDEIMG", false);
var UNTZ = getOrDefault(CHANNEL.name + "_UNTZ", true);
var EMBEDVID = getOrDefault(CHANNEL.name + "_EMBEDVID", true);
var AUTOVID = getOrDefault(CHANNEL.name + "_AUTOVID", true);
var LOOPWEBM = getOrDefault(CHANNEL.name + "_LOOPWEBM", true);
var TEMPORARY = true;
var CHATFUNC = false;		
var CLEARING = false;		
var ANTIAFK = false;		
var SPINTOG = true;
var MQTOG = true;
var ADDONESECOND = '';
var BLLINK = false;
var SPLITMSG = [];
var FAILEDEMOTES = ['The following 0 emotes failed to download: \n'];
var DOWNLOADING = false;
var LEFT = false;
var UPNEXT = '';
var SHORTLINK = '';
var UNTZINT = '';
var SPOILER = false;
var BGREMOVED = false;
var STREAMER = {name:"NONE",link:"",css:""};
var UPDATEOFFSET = -1;
var EMOTEBL = getOrDefault(CHANNEL.name + "_EMOTEBL", []);
var USEREMOTEBL = getOrDefault(CHANNEL.name + "_USEREMOTEBL", []);
var PLAYERHTML = '';
var JOINED = false;
var PINGLINK = getOrDefault(CHANNEL.name + "_PINGLINK", "");
var PINGVOL = getOrDefault(CHANNEL.name + "_PINGVOL", 1);
var UPDTOUT = '';
var MICHER = false;
var SHTML = '';
var RANDEMOTE = getOrDefault(CHANNEL.name + "_RANDEMOTE", 0);
var RANDDATE = getOrDefault(CHANNEL.name + "_RANDDATE", (new Date()).setDate((new Date()).getDate()+1));
var SHOWPROF = getOrDefault(CHANNEL.name + "_SHOWPROF", false);
var SHOWING = false;
var NEWREQUESTS = getOrDefault(CHANNEL.name + "_NEWREQUESTS", 0);
var ADDEDEPLINK = "";
var EVENT = {a:new Audio("http://kudo.moe/fairy_tail_wow_sound.mp3"),date:getOrDefault(CHANNEL.name + "_EVENT",0)};
var SUBCHAN = 3;
var SCNAMES = ["Shows","Off-topic","Regular"];
var MOTDCACHE = getOrDefault(CHANNEL.name + "_MOTDCACHE", "");
CHATMAXSIZE = getOrDefault(CHANNEL.name + "_CHATMAXSIZE", 150);	// Override Cytube's default limit

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- Global functions ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Callbacks.usercount = function(count) {
	CHANNEL.usercount = count;
	var text = count + " " + Usercount_Text;
	if(count != 1) {
		text += "s";
	}
	$("#usercount").text(text);
}
Callbacks.usercount(CHANNEL.usercount);

function getTZ() {
	return new Date().getTimezoneOffset()/-60;
}
if (getTZ() !== CTIMEZONE) {
	var ctz = getTZ();
	if (confirm("The current local time zone is set to GMT" + (UCONF.ltim < 0 ? "" : "+") + UCONF.ltim + ".\n\nWould you like to set it to GMT" + (ctz < 0 ? "" : "+") + ctz + "?")) {
		UCONF.ltim = ctz;
		setOpt(CHANNEL.name + "_ltim",ctz);
	}
	setOpt(CHANNEL.name + "_CTIMEZONE", ctz);
}

//--------------------------------------------------------------

jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true,
        defer:true
    });
}
$.loadScript("https://apis.google.com/js/api.js", handleClientLoad);

function initClient() {
	var CLIENT_ID = "285352011800-obnsbp1gvnpljog3ljg936l43dsci57p.apps.googleusercontent.com";
	var API_KEY = "AIzaSyAMabOeS09Ll-T8AFgkF2QSFo_1HQrhv9I";
	var SCOPE = "https://www.googleapis.com/auth/spreadsheets.readonly";

	gapi.client.init({
		'apiKey': API_KEY,
		'clientId': CLIENT_ID,
		'scope': SCOPE,
		'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
	});
}

function handleClientLoad() {
	gapi.load('client:auth2', initClient);
}

function makeApiCallforJSON(updateRange) {
	var params = {
		// The ID of the spreadsheet to retrieve data from.
		spreadsheetId: '1Ye0mzOVODl2IAo3MWjvZOtqSXq-KK_JR5RYbzjUmOY4',  // TODO: Update placeholder value.

		// The A1 notation of the values to retrieve.
		range: updateRange,  // TODO: Update placeholder value.

		// How values should be represented in the output.
		// The default render option is ValueRenderOption.FORMATTED_VALUE.
		valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.

		// How dates, times, and durations should be represented in the output.
		// This is ignored if value_render_option is
		// FORMATTED_VALUE.
		// The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
		dateTimeRenderOption: 'SERIAL_NUMBER',  // TODO: Update placeholder value.
	};

	return gapi.client.sheets.spreadsheets.values.get(params);
}

var JSONValue = [];

function updateCurrentlyAiring() {
	//updateEMOTEBL();
	if (UPDATEOFFSET*UCONF.upti > 300 || UPDATEOFFSET === -1) {
		updateWC();
		updatePixels();
		UPDATEOFFSET = 0;
	}
	UPDATEOFFSET++;
	var randdate = new Date();
	if (RANDDATE < randdate) {
		RANDEMOTE = 0;
		setOpt(CHANNEL.name + "_RANDEMOTE", RANDEMOTE);
		RANDDATE = randdate.setDate(randdate.getDate()+1);
		setOpt(CHANNEL.name + "_RANDDATE", RANDDATE);
	}
	// https://spreadsheets.google.com/feeds/worksheets/YOUR_SPREADSHEET_ID/private/full
	/*var url = "https://spreadsheets.google.com/feeds/cells/1ATO8oxAsWc9KlpTTBfBLL_hz5Zym6oFwtyMfVfCQJG8/o20mnpl/public/basic?alt=json";
	$.ajax({
		url:url,
		dataType:"jsonp",
		success:function(data) {
			$("#currentlyStreaming").html(data.feed.entry[0].content.$t);
			UPNEXT = data.feed.entry[1].content.$t;
			ScheduleTabs_Array[0][1] = data.feed.entry[2].content.$t;
			$("#streamtime").text(data.feed.entry[3].content.$t);
			STIMEZONE = data.feed.entry[5].content.$t === "EDT" ? -4 : -5;
			setOpt(CHANNEL.name + "_STIMEZONE", STIMEZONE);
			(function runBG() {
				if (Object.keys(WC).length > 0) {
					streamer = data.feed.entry[4].content.$t;
					if (streamer !== "NONE" && !HIDEBG && (STREAMER.name !== streamer || STREAMER.link !== WC[streamer].bg || STREAMER.css !== WC[streamer].css)) {
						if (WC[streamer] !== undefined && WC[streamer].bg !== "") {
							var bcss = 'background-image:url(' + WC[streamer].bg + ');' + WC[streamer].css;
							$("body").attr("style",bcss);
							STREAMER.link = WC[streamer].bg;
							STREAMER.css = WC[streamer].css;
							BGREMOVED = false;
						} else {
							$("body").removeAttr("style");
							STREAMER.link = "";
						}
					} else if (!BGREMOVED && !HIDEBG && streamer === "NONE") {
						$("body").removeAttr("style");
						STREAMER.link = "";
						BGREMOVED = true;
					}
					if (STREAMER.name !== streamer) {
						STREAMER.name = streamer;
						showProfiles();
					}
				} else {
					setTimeout(runBG,125);
				}
			})();
		}
	});
	autoMod();*/
	
	updateJSON();
	
	var checkInterval = setInterval(function () {
		//console.log("checking...");
		if (JSONValue.length !== 0) {
			clearInterval(checkInterval);
			
			$("#currentlyStreaming").html(JSONValue[0][0]);
			UPNEXT = JSONValue[1][0];
			ScheduleTabs_Array[0][1] = JSONValue[2][0];
			$("#streamtime").text(JSONValue[3][0]);
			STIMEZONE = JSONValue[5][0] === "EDT" ? -4 : -5;
			setOpt(CHANNEL.name + "_STIMEZONE", STIMEZONE);
			(function runBG() {
				if (Object.keys(WC).length > 0) {
					streamer = JSONValue[4][0];
					if (streamer !== "NONE" && !HIDEBG && (STREAMER.name !== streamer || STREAMER.link !== WC[streamer].bg || STREAMER.css !== WC[streamer].css)) {
						if (WC[streamer] !== undefined && WC[streamer].bg !== "") {
							var bcss = 'background-image:url(' + WC[streamer].bg + ');' + WC[streamer].css;
							$("body").attr("style",bcss);
							STREAMER.link = WC[streamer].bg;
							STREAMER.css = WC[streamer].css;
							BGREMOVED = false;
						} else {
							$("body").removeAttr("style");
							STREAMER.link = "";
						}
					} else if (!BGREMOVED && !HIDEBG && streamer === "NONE") {
						$("body").removeAttr("style");
						STREAMER.link = "";
						BGREMOVED = true;
					}
					if (STREAMER.name !== streamer) {
						STREAMER.name = streamer;
						showProfiles();
					}
				} else {
					setTimeout(runBG, 125);
				}
			})();
			
			UPDTOUT = setTimeout(updateCurrentlyAiring, UCONF.upti*1000);
		}
	}, 125);
}

var checkGAPI = setInterval(function () {
	if (typeof gapi !== "undefined") {
		if (typeof gapi.client !== "undefined") {
			if (typeof gapi.client.sheets !== "undefined") {
				clearInterval(checkGAPI);
				updateCurrentlyAiring();
			}
		}
	}
}, 25);

function updateJSON() {
	JSONValue = [];
	makeApiCallforJSON("JSON!A1:A6").then(function(response) {
	// TODO: Change code below to process the `response` object:
		JSONValue = response.result.values;
	}, function(reason) {
		console.error('error: ' + reason.result.error.message);
		JSONValue = ["ERROR","ERROR","ERROR","ERROR","ERROR","ERROR"];
	});
}

function updateWC() {
	/*var url = "https://spreadsheets.google.com/feeds/cells/1ATO8oxAsWc9KlpTTBfBLL_hz5Zym6oFwtyMfVfCQJG8/o8a98v8/public/basic?alt=json";
	$.ajax({
		url:url,
		dataType:"jsonp",
		success:function(data) {
			WC = JSON && JSON.parse(data.feed.entry[0].content.$t) || $.parseJSON(data.feed.entry[0].content.$t);
			PCL = JSON && JSON.parse(data.feed.entry[1].content.$t) || $.parseJSON(data.feed.entry[1].content.$t);
			setOpt(CHANNEL.name + "_WC", WC);
			setOpt(CHANNEL.name + "_PCL", PCL);
			updateStreamTitles();
		}
	});*/
	
	makeApiCallforJSON("JSON-WC!A1:A2").then(function(response) {
		WC = JSON && JSON.parse(response.result.values[0][0]) || $.parseJSON(response.result.values[0][0]);
		PCL = JSON && JSON.parse(response.result.values[1][0]) || $.parseJSON(response.result.values[1][0]);
		setOpt(CHANNEL.name + "_WC", WC);
		setOpt(CHANNEL.name + "_PCL", PCL);
		updateStreamTitles();
	}, function(reason) {
		console.error('error: ' + reason.result.error.message);
	});
}

/*function updateEMOTEBL() {
	var url = "https://spreadsheets.google.com/feeds/cells/1K90qG-BKgZ2oCu_ZCLpifTE1maubrDWYmpn54LzoIBo/ovyrtj0/public/basic?alt=json";
	$.ajax({
		url:url,
		dataType:"jsonp",
		success:function(data) {
			EMOTEBL = data.feed.entry[0].content.$t.split(",");
			setOpt(CHANNEL.name + "_EMOTEBL", EMOTEBL);
			removeImages();
			var requests = parseInt(data.feed.entry[1].content.$t);
			if (CLIENT.rank > 3) {
				if (requests < NEWREQUESTS) {
					NEWREQUESTS = requests;
					setOpt(CHANNEL.name + "_NEWREQUESTS", NEWREQUESTS);
				} else if (requests > NEWREQUESTS) {
					HIDEANN ? hideannbtn.click() : '';
					$("#sRequest").parent().parent().remove();
					makeAlert("New request/issue", '<a id="sRequest" href="https://docs.google.com/spreadsheets/d/1K90qG-BKgZ2oCu_ZCLpifTE1maubrDWYmpn54LzoIBo/edit#gid=991675752" target="_blank">There is currently a new request/issue.</a>').appendTo("#announcements")
					$("#sRequest").unbind("click").click(function() {
						NEWREQUESTS = requests;
						setOpt(CHANNEL.name + "_NEWREQUESTS", NEWREQUESTS);
						$(this).parent().parent().remove();
					});
				}
			}
		}
	});
}

function hereOrNot() {
	var slice3 = Array.prototype.slice;
	var list3 = slice3.call($("#userlist .userlist_item"));
	var checklist = Object.keys(FruitBowl);
	for (item2 in checklist) {
		for (item in list3) {
			NAME = $(list3[item]).data("name");
			RANK = $(list3[item]).data("rank");
			if (NAME === checklist[item2] && RANK > 3) {
				return NAME;
			}
		}
	}
	return "No one";
}

function autoMod() {
	if (CLIENT.rank > 3 && 1 == 2) {
		here = hereOrNot();
		console.log(here + " is the bot.");
		if (CLIENT.name === here && CHANNEL.js.indexOf("redirectToToradora(false)") > -1) {
			var json2 = "https://spreadsheets.google.com/feeds/cells/1ATO8oxAsWc9KlpTTBfBLL_hz5Zym6oFwtyMfVfCQJG8/o5faxkf/public/basic?alt=json";
			$.ajax({
				url:json2,
				dataType:"jsonp",
				success:function(data) {
					console.log(data);
					pixlked = data.feed.entry[2].content.$t;
					console.log(data.feed.entry[1].content.$t);
					checkRank(data.feed.entry[0].content.$t, data.feed.entry[1].content.$t, data.feed.entry[3].content.$t, data.feed.entry[4].content.$t);
					if (pixlked === "OPEN" && $("#qlockbtn").hasClass("btn-danger")) {
						$("#qlockbtn").click();
					} else if (pixlked === "LOCKED" && $("#qlockbtn").hasClass("btn-success")) {
						$("#qlockbtn").click();
					}
					(function autoAddEp() {
						if ($("#streamtime").text() !== "") {
							var eplink = data.feed.entry[5].content.$t;
							var timedif = parseInt($("#streamtime").text().split(":")[1].split(" ")[0])%30;
							if (ADDEDEPLINK !== eplink && eplink !== "NONE" && !$('a[href="' + eplink + '"]').hasClass("qe_title") && timedif < 5) {
								var parsed = parseMediaLink(eplink);
								ADDEDEPLINK = eplink;
								socket.emit("queue", {id:parsed.id, pos:"next", type:parsed.type, temp:true});
							}
						} else {
							setTimeout(autoAddEp,125);
						}
					})();
				}
			});
		}
	}
}*/

//------------------------------------------------------------------------

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


function trimChatBuffer() {
	var maxSize = window.CHATMAXSIZE;
	if (!maxSize || typeof maxSize !== "number")
		maxSize = parseInt(maxSize || 100, 10) || 100;
	var buffer = document.getElementById("messagebuffer");
	var count = ($("#messagebuffer.linewrap div:visible").length - 1) - maxSize;
	
	for (var i = 0; i < count; i++) {
		buffer.firstChild.remove();
	}
}

// unbind queue lock button and add a permission changer
if (UI_OpenPlaylist === 1) {
	$("#qlockbtn").unbind("click").on("click", function() {
		socket.emit("togglePlaylistLock");
		$("#qlockbtn").hasClass('btn-danger') ? socket.emit("setPermissions", UnlockedPlaylistPermissions): socket.emit("setPermissions", LockedPlaylistPermissions);
	});
}

// check if temporary box is checked
function checktemporary() {
	$('.add-temp').is(':checked') ? TEMPORARY = true : TEMPORARY = false;
}

// toggle elements visibility
function toggleDiv(a) {
	$(a).css('display') == "none" ? $(a).show() : $(a).hide();
}

// add link to playlist
function addToPlaylist(link,position) {
	parsed = parseMediaLink(link);
	checktemporary();
	parsed["id"] != null ? socket.emit("queue", {id:parsed["id"], pos:position, temp:TEMPORARY, type:parsed["type"]}) : '';
}

// create modal window
function createModal(title) {
	//hidePlayer();
	outer=$('<div />').addClass('modal fade').appendTo($("body"));
	modal=$('<div />').addClass('modal-dialog').appendTo(outer);
	modal=$('<div />').addClass('modal-content').appendTo(modal);
	head=$('<div />').addClass('modal-header').appendTo(modal);
	$('<button />').addClass('close').attr('data-dismiss', 'modal').attr('aria-hidden', 'true').html('&times;')
		.appendTo(head);
	$('<h3 />').text(title).appendTo(head);
	body=$('<div />').addClass('modal-body').appendTo(modal);
	footer=$('<div />').addClass('modal-footer').appendTo(modal);
	outer.on("hidden.bs.modal", function() {
		//unhidePlayer();
		outer.remove();
	});
	outer.modal();
}
$.fn.insertAtCaret = function(text) {
	return this.each(function() {
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
// insert code into chatline
function insertText(a) {
	$("#chatline").insertAtCaret(a);
}

// fit player height
function fitPlayer() {
	VWIDTH = $("#videowrap-header").width();
	VHEIGHT = Math.floor(VWIDTH * 9 / 16 + 1);
	$("#ytapiplayer").width(VWIDTH).height(VHEIGHT);
}

// fit chat height
function fitChat(a) {
	if (a === "auto") {
		VW = $("#messagebuffer").width();
		VH = (window.innerHeight * .75) - $("#chatheader").height() - $("#chatline").height();
	} else {
		VH = a;
	}
	$("#messagebuffer").height(VH);
	$("#userlist").height(VH);
}

function waaai(url, lastitem) {
	url = decodeURIComponent(url);
	url = encodeURIComponent(url);
	apiRequest = new XMLHttpRequest();
	apiRequest.onreadystatechange = function () {
		if (apiRequest.readyState === 4) { // request is done
			var serverResponse = JSON && JSON.parse(apiRequest.responseText) || $.parseJSON(apiRequest.responseText);
			if (apiRequest.status === 200) { // successfully response
				SHORTLINK += serverResponse.data.url + ';';
				if (lastitem === true) {
					links = SHORTLINK.split(';');
					links.pop();
					for (i in SPLITMSG) {
						if (SPLITMSG[i].indexOf("BLACKLISTED") > -1) {
							number = parseInt(SPLITMSG[i].slice(-1), 10);
							SPLITMSG[i] = links[number];
						}
						msg += SPLITMSG[i] + ' ';
					}
					socket.emit("chatMsg", {msg:msg});
				}
			}
		}
	};
	apiRequest.open("GET", "http://api.waa.ai/shorten?url=" + url);
	apiRequest.send();
}

// format chat messages
function prepareMessage(msg) {
	msg.indexOf(Lottery.text) > -1 ? msg = msg.replace(Lottery.text,"") : '';
	if (msg.search(new RegExp('http(.+?)\/r\/' + CHANNEL.name + '(.+?|):sp','gi')) > -1) {
		document.location.reload(true);
		return "";
	}
	if (UI_Lottery === 1) {
		if ((typeof Lottery.chance !== "number") || Lottery.chance < 0) {
			Lottery.chance = 10;
		}
		Math.random() < (Lottery.chance / 100) ? msg += ' ' + Lottery.text : '';
	}
	if (msg.toLowerCase().indexOf("fc2.com") > -1) {
		SHORTLINK = '';
		semicolonnum = (msg.match(/fc2\.com/gi) || []).length - 1;
		blnum = 0;
		SPLITMSG = msg.split(" ");
		msg = '';
		lastInArray = false;
		for (i in SPLITMSG) {
			if (SPLITMSG[i].indexOf("fc2.com") > -1) {
				lastInArray = true;
				waaai(SPLITMSG[i], lastInArray);
				SPLITMSG[i] = 'BLACKLISTED' + blnum;
				blnum++;
			}
		}
	}
	while (msg.search(/\.gifv|\[r\]/gi) > -1) {
		msg = msg.replace(/\[r\]/i, "[" + getRandomColor() + "]").replace(/\.gifv/gi, ".webm");
	}
	if (UI_UserCommands === 1 && msg.indexOf("!") === 0) {
		COMMAND = true;
		cmdcheck = msg.split(" ");
		cmdcheck[0] = cmdcheck[0].toLowerCase();
		cmdcheck[1] = cmdcheck.slice(1).join(' ');
		if (cmdcheck[0] === "!hpoll") {
			if (hasPermission("pollctl")) {
				polltitle = msg.split('"');
				duration = polltitle[2].split(";");
				duration[1] === undefined ? duration[1] = 600 : duration[1] = parseInt(duration[1], 10);
				realpoll = duration[0].split(",");
				choice = [];
				for (i = 0; i < 4; i++) {
					a = Math.round(Math.random() * (realpoll.length - 1));
					if (realpoll.length < 1) {
						break;
					} else if (realpoll[a].trim() === "") {
						i--;
					} else {
						choice[i] = realpoll[a].trim();
					}
					realpoll.splice(a, 1);
				}
				socket.emit("newPoll", {title: polltitle[1].trim(), opts: choice, obscured: true, timeout: duration[1]});
			}
			COMMAND = false;
		} else if (cmdcheck[0] === "!stat") {
			num = CHATSTAT['n'];
			len = CHATSTAT['l'];
			mem = 0;
			for (i = 0; i < num; i++) {
				for (j = 0; j < Memes_Array.length; j++) {
					CHATSTAT['m'][i].indexOf(Memes_Array[j]) > -1 ? occurences = CHATSTAT['m'][i].split(Memes_Array[j]).length - 1 : occurences = 0;
					occurences > -1 ? mem += occurences : '';
				}
			}
			d = (num !== 1) ? 's' : '';
			e = (mem !== 1) ? 's' : '';
			if (num > 0) {
				a = Math.round(Math.random() * (CHATSTAT['m'].length - 1));
				avg = Math.round(len / num * 10) / 10;
			} else {
				a = 0;
				avg = 0;
			}
			msg = CLIENT.name + ' has sent ' + num + ' message' + d + ' and used ' + mem + ' meme' + e + '. '
				+ 'Total length is ' + len + ' characters (' + avg + ' per message). '
				+ 'Random message: ' + CHATSTAT['m'][a];
		} else if (cmdcheck[0] === "!pick" && cmdcheck[1].length > 0) {
			arr = cmdcheck[1].split(",");
			a = Math.round(Math.random() * (arr.length - 1));
			msg = arr[a].trim();
		} else if (cmdcheck[0] === "!ask" && cmdcheck[1].length > 0) {
			AskAnswers.length < 1 ? AskAnswers = ['Yes', 'No'] : '';
			a = Math.round(Math.random() * (AskAnswers.length - 1));
			msg = AskAnswers[a];
		} else if (cmdcheck[0] === "!time") {
			var D = new Date();
			if (cmdcheck[1].length < 1) {
				timezone = D.getTimezoneOffset()/60 * -1;
				hour = D.getHours();
				minute = D.getMinutes();
				minute < 10 ? minute = '0' + minute : false;
			} else {
				timezone = parseFloat(cmdcheck[1]);
				isNaN(timezone) ? timezone = -5 : '';
				D.setMinutes(D.getUTCMinutes() + timezone * 60);
				hour = D.getUTCHours();
				minute = D.getMinutes();
				minute < 10 ? minute = '0' + minute : false;
			}
			if (hour > 12) {
				hour %= 12;
				AP = 'PM';
			} else {
				hour === 0 ? hour = 12 : '';
				AP = 'AM';
			}
			timezone >= 0 ? timezone = "+" + timezone : '';
			msg = 'Current time for UTC' + timezone + ': ' + hour + ':' + minute + ' ' + AP;
		} else if (cmdcheck[0] === "!dice") {
			a = Math.floor(Math.random() * 6) + 1;
			b = Math.floor(Math.random() * 6) + 1;
			msg = a + ' ' + b;
		} else if (cmdcheck[0] === "!roll") {
			cmdcheck[1] = cmdcheck[1].replace(/ /g,"");
			d6 = cmdcheck[1].toLowerCase().indexOf("d");
			psign = cmdcheck[1].indexOf("+");
			msign = cmdcheck[1].indexOf("*");
			ssign = cmdcheck[1].indexOf("-");
			dsign = cmdcheck[1].indexOf("/");
			xroll = xdice = xplus = xsub = max = a = roll = 0;
			xmulti = xdiv = 1;
			if (d6 > -1) {
				xdice = parseInt(cmdcheck[1].substr(0,d6));
				xroll = parseInt(cmdcheck[1].substr(d6 + 1,(psign > -1 ? psign : cmdcheck[1].length)));
				isNaN(xdice) ? xdice = 1 : "";
				isNaN(xroll) ? xroll = 6 : "";
				if (psign > -1) {
					for (var i = psign + 1; i <= cmdcheck[1].length; i++) {
						if (isNaN(cmdcheck[1][i])) {
							xplus = parseInt(cmdcheck[1].substr(psign + 1,i));
							break;
						}
					}
					isNaN(xplus) ? xplus = 0 : "";
				}
				if (ssign > -1) {
					for (var i = ssign + 1; i <= cmdcheck[1].length; i++) {
						if (isNaN(cmdcheck[1][i])) {
							xsub = parseInt(cmdcheck[1].substr(ssign + 1,i));
							break;
						}
					}
					isNaN(xsub) ? xsub = 0 : "";
				}
				if (msign > -1) {
					for (var i = msign + 1; i <= cmdcheck[1].length; i++) {
						if (isNaN(cmdcheck[1][i])) {
							xmulti = parseInt(cmdcheck[1].substr(msign + 1,i));
							break;
						}
					}
					isNaN(xmulti) ? xmulti = 1 : "";
				}
				if (dsign > -1) {
					for (var i = dsign + 1; i <= cmdcheck[1].length; i++) {
						if (isNaN(cmdcheck[1][i])) {
							xdiv = parseInt(cmdcheck[1].substr(dsign + 1,i));
							break;
						}
					}
					isNaN(xdiv) ? xdiv = 1 : "";
				}
			}
			d6test = d6 > -1 && !isNaN(xdice) && !isNaN(xroll);
			drolls = "";
			if (d6test) {
				for (var i = 0;i < xdice;i++) {
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
		} else if (cmdcheck[0] === "!q") {
			RandomQuotes.length < 1 ? RandomQuotes = ['Error: No quotes available.'] : '';
			a = Math.round(Math.random() * (RandomQuotes.length - 1));
			msg = RandomQuotes[a];
		} else if (cmdcheck[0] === "!calc" && cmdcheck[1].length > 0) {
			try {
				msg = '' + eval(cmdcheck[1]);
			} catch (e) {
				msg = 'Please use a valid equation.'
			}
		} else if (cmdcheck[0] === "!vskip" && hasPermission("voteskip") && !$("#voteskip").is(':disabled')) {
			socket.emit("voteskip");
			msg = 'Voteskip sent for ' + $("#currenttitle").text().replace(new RegExp("(^Currently Playing: )|(^" + TitleBarDescription_Caption + " )", "g"), '');
		} else if (cmdcheck[0] === "!skip" && hasPermission("playlistjump")) {
			socket.once("changeMedia", function(data) {
				socket.emit("chatMsg", {msg: '➥ Skipped to ' + data.title});
			});
			socket.emit("playNext");
			COMMAND = false;
		} else if (cmdcheck[0] === "!bump" && hasPermission("playlistmove")) {
			a = $("#queue").children().length;
			b = $("#queue .queue_entry:nth-child(" + a + ")").data("uid");
			c = $("#queue .queue_entry:nth-child(" + a + ") .qe_title").html();
			socket.emit("moveMedia", {from:b, after:PL_CURRENT});
			msg = 'Bumped ' + c;
		} else if (cmdcheck[0] === "!add" && hasPermission("playlistadd") && cmdcheck[1].length > 0) {
			parsed = parseMediaLink(cmdcheck[1]);
			if (parsed["id"] === null) {
				msg = 'Error: Invalid video link.';
			} else {	
				checktemporary();
				socket.emit("queue", {id: parsed["id"], pos: "end", temp: TEMPORARY, type: parsed["type"]});
				msg = 'Video has been added.';
			}
		} else if (cmdcheck[0] === "!now") {
			TitleBarDescription_Caption.length < 1 ? TitleBarDescription_Caption = 'Currently Playing:' : '';
			msg = TitleBarDescription_Caption + ' ' + $(".queue_active a").html();
		} else if (cmdcheck[0] === "!next") {
			msg = UPNEXT;
		} else {
			COMMAND = false;
		}
	}
	if (EMOTEBL.indexOf(CLIENT.name) > -1) {
		msg = msg.replace(/http(.+?):(pic|webm|sp|@|lf|float|\d+|-\d+)/gi,"http$1").split(" ");
		for (ebl in msg) {
			if (msg[ebl].indexOf(":") > -1 && arrayObjectIndexOf(CHANNEL.emotes, msg[ebl], "name") > -1) {
				msg[ebl] += "[/]";
			}
		}
		msg = msg.join(" ");
	}
	if (msg.search(/ :|: |^:/g) > -1) {
		msg = msg.split(" ");
		for (w in msg) {
			if (msg[w].indexOf(":") > -1 && arrayObjectIndexOf(CHANNEL.emotes, msg[w], "name") > -1) {
				Math.random() < Math.pow(RANDEMOTE++ / 10,2)/100 ? msg[w] = CHANNEL.emotes[Math.ceil(Math.random() * CHANNEL.emotes.length) - 1].name : '';
				setOpt(CHANNEL.name + "_RANDEMOTE",RANDEMOTE);
			}
		}
		msg = msg.join(" ");
	}
	for (iR in RedditChange_Links) {
		if (msg.search(iR) > -1) {
			msg = msg.split(" ");
			for (iRM in msg) {
				if (msg[iRM].search(iR) > -1) {
					Math.random() < .01 ? msg[iRM] = RedditChange_Links[iR][Math.ceil(Math.random() * RedditChange_Links[iR].length) - 1] + ":pic" : '';
				}
			}
			msg = msg.join(" ");
		}
	}
	/*if (msg.search(/\/|>/) === 0) { //SUBCHANNEL
		var sspace = msg.length > 50 ? 25 : msg.indexOf(" ");
		if (sspace === -1) {
			msg = msg += " [CH" + SUBCHAN + "]";
		} else {
			msg = msg.substring(0,sspace) + " [CH" + SUBCHAN + "]" + msg.substring(sspace+1,msg.length);
		}
	} else {
		msg = "[CH" + SUBCHAN + "] " + msg;
	}
	console.log(msg);*/
	return msg;
}

function emoteMuteBtns() {
	$(".user-dropdown").each(function() {
		var emutedname = $(this).children("strong").text();
		if ($(this).text().search(/Unmute Emotes|Mute Emotes/gi) < 0) {
			$('<button class="btn btn-xs btn-default"/>')
				.text((USEREMOTEBL.indexOf(emutedname) < 0 ? "Mute Emotes" : "Unmute Emotes"))
				.appendTo($(this).children(".btn-group-vertical"))
				.on("click", function() {
					if (USEREMOTEBL.indexOf(emutedname) < 0) {
						USEREMOTEBL[USEREMOTEBL.length] = emutedname;
						$(this).text("Unmute Emotes");
						removeImages();
					} else {
						USEREMOTEBL.splice(USEREMOTEBL.indexOf(emutedname),1);
						$(this).text("Mute Emotes");
						showImages();
					}
					setOpt(CHANNEL.name + "_USEREMOTEBL", USEREMOTEBL);
				});
		}
	});
}
emoteMuteBtns();

function arrayObjectIndexOf(myArray, searchTerm, property) {
	for(var i = 0, len = myArray.length; i < len; i++) {
		if (myArray[i][property] === searchTerm) return i;
	}
	return -1;
}

// refresh user chat statistics
function userChatStats(a) {
	if (a.trim().indexOf("!stat") !== 0) {
		CHATSTAT['n']++;
		CHATSTAT['l'] = CHATSTAT['l'] + a.length;
		CHATSTAT['m'].push(a);
	}
}

// get playlist helper functions
function formatRawList() {
	a = $("#queue .queue_entry").length + 1;
	list = [];
	for (i = 1; i < a; i++) {
		item = $("#queue .queue_entry:nth-child(" + i + ")").data("media");
		list.push(formatURL(item));
	}
	return list.join(",");
}

// format links from the get playlist link button
function formatPlainTextList() {
	a = $("#queue .queue_entry").length + 1;
	list = [];
	for (i = 1; i < a; i++) {
		item=$("#queue .queue_entry:nth-child(" + i + ")").data("media");
		list.push(i + '. ' + formatURL(item) + ' ' + item.title + ' [' + item.duration + ']');
	}
	return list.join('\n');
}
function formatHTMLList() {
	a = $("#queue .queue_entry").length + 1;
	list = [];
	for (i = 1; i < a; i++) {
		item = $("#queue .queue_entry:nth-child(" + i + ")").data("media");
		title = item.title;
		duration = item.duration;
		link = formatURL(item);
		list.push('<li>' + title + ' [' + duration + '] - <a href="' + link + '" target="_blank">' + link + '</a></li>');
	}
	return list.join('\n');
}
function formatOrderedList() {
	len = $("#queue .queue_entry").length + 1;
	var list = [];
	for (i = 1; i < len; i++) {
		item = $("#queue .queue_entry:nth-child("+i+")").data("media");
		link = formatURL(item);
		list.push(item.title + ' ■■  ' + link + ' ■■  [' + item.duration + ']');
		list.sort();
	}
	return list.join('\n');
}
function formatDBList() {
	len = $("#queue .queue_entry").length+1;
	var list = [];
	for (i = 1; i < len; i++) {
		item = $("#queue .queue_entry:nth-child("+i+")").data("media");
		re1 = new RegExp('\\\\', 'g');
		re2 = new RegExp('\'', 'g');
		title = item.title.replace(re1, '\\\\').replace(re2, '\\\'');
		list.push('[\'' + formatURL(item) + '\', \'' + title + '\'],');
	}
	return list.join('\n');
}

// toggle "/clear" button depends on rank
function toggleClearBtn() {
	!hasPermission("chatclear") ? $("#clear-btn, #spamclear").hide() : $("#clear-btn, #spamclear").show();
}

// layout elements settings
function playerLocation(a) {
	$("#pinup-btn").show();
	if (a === "left") {
		$("#videowrap").after($("#chatwrap").detach());
		normalPlayer();
		normalChat();
	} else if (a === "right") {
		$("#videowrap").before($("#chatwrap").detach());
		normalPlayer();
		normalChat();
	}
}

function userlistLocation(a) {
	a === "left" ? $("#userlist").css('float', 'left') : $("#userlist").css('float', 'right');
}

function queueLocation(a) {
	$("#pinup-btn").show();
	if (a === "right") {
		$("#rightpane").before($("#leftpane").detach());
	} else if (a === "left") {
		$("#rightpane").after($("#leftpane").detach());
	}
	b = (a === "right") ? "left" : "right";
	$("#playlistrow").css('background-position', b + ' bottom');
}

function queueSize(a) {
	if (a === "wide") {
		$("#leftpane").removeClass().addClass('col-lg-5 col-md-5');
		$("#rightpane").removeClass().addClass('col-lg-7 col-md-7');
	} else if (a === "narrow") {
		$("#leftpane").removeClass().addClass('col-lg-7 col-md-7');
		$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	}
}

function mainLocation(a) {
	if (a === "top") {
		$("#main").before($("#titlerow").detach()).after($("#playlistrow").detach());
	} else if (a === "bottom") {
		$("#main").before($("#playlistrow").detach()).before($("#titlerow").detach());
	}
	$("#main").after($("#chatpanel").detach());
}

function motdLocation(a) {
	if (a === "top") {
		$("#zerorow").after($("#announcements").detach()).after($("#motdrow").detach());
	} else if (a === "bottom") {
		$("#resizewrap").before($("#motdrow").detach()).before($("#announcements").detach());
	}
}

function logoInsert(a) {
	if (a != "no") {
		link = (a != "user") ? TopUserLogo[a][1] : UCONF.logourl;
		ht = (a != "user") ? TopUserLogo[a][2] : UCONF.logoht;
		azukirow.css('min-height', ht + 'px').css('background-image', 'url(' + link + ')');
	} else if (a === "no") {
		azukirow.css('min-height', '5px').css('background-image', '');
	}
}

function headerMode(a) {
	$(".navbar-fixed-top").unbind();
	if (a === "fixed") {
		$(".navbar-fixed-top").css('position', 'fixed').css('top', '0px');
		$("#mainpage").css('margin-top', '0px');
	} else if (a === "detached") {
		$(".navbar-fixed-top").css('position', 'inherit');
		$("#mainpage").css('margin-top', '-72px');
	} else if (a === "mouseover") {
		$(".navbar-fixed-top").css('position', 'fixed').css('top', '-40px')
			.on("mouseover", function() {
				$(".navbar-fixed-top").css('top', '0px');
			})
			.on("mouseout", function() {
				$(".navbar-fixed-top").css('top', '-40px');
			});
		$("#mainpage").css('margin-top', '-40px');

	}
}

function customCSS(a) {
	$("#usercss").remove();
	a === "yes" ? $("head").append('<style id="usercss" type="text/css">' + UCONF.csscode + '</style>') : '';
}

// set global layout according to user preferences
function setLayout() {
	playerLocation(UCONF.player);
	userlistLocation(UCONF.userlist);
	queueLocation(UCONF.queue);
	queueSize(UCONF.qsize);
	mainLocation(UCONF.main);
	motdLocation(UCONF.motd);
	logoInsert(UCONF.logo);
	headerMode(UCONF.header);
	customCSS(UCONF.css);
	$("#queue").css("width","100%");
}

// display mode helper functions
function bigPlayer() {
	$("#videowrap").removeClass().addClass("col-lg-12 col-md-12");
	fitPlayer();
}

function bigChat() {
	$("#chatwrap").removeClass().addClass('col-lg-12 col-md-12');
	fitChat("auto");
}

function normalPlayer() {
	$("#videowrap").removeClass().addClass("col-lg-7 col-md-7");
	fitPlayer();
}

function normalChat() {
	c = (PINNED && UCONF.qsize=="wide") ? 'col-lg-7 col-md-7' : 'col-lg-5 col-md-5';
	$("#chatwrap").removeClass().addClass(c);
	VWIDTH = $("#videowrap").width();
	VHEIGHT = Math.floor(VWIDTH * 9 / 16 + 1);
	fitChat(VHEIGHT - $("#chatline").outerHeight() - 1);
}

// set display mode
function setMode(a) {
	if (NOPLAYER) {
		$("#videowrap").show();
		ytapiplayer = $('<div id="ytapiplayer" />').insertBefore("#playercontrols");
		$("#mediarefresh").click();
		NOPLAYER = false;
	}

	$("#main").show();
	pinupbtn.hide();
	expandbtn.hide();
	scrollbtn.hide();
	modesel.find("option[value='chMode'], option[value='rMode']").show();
	PINNED ? modesel.find("option[value='chMode']").hide() : '';

	switch (a) {
		case "syMode":
		$("#videowrap, #videowrap p, #videowrap div, #chatwrap, #rightpane, #pinup-btn").show();
		$("#config-btn, #configbtnwrap br, #pinup-btn").show();
		$("#min-layout").parent().show();
		normalPlayer();
		normalChat();
		playerLocation(UCONF.player);
		PINNED ? pinUp() : '';
		handleWindowResize();
		break;

		case "kMode":
		$("#videowrap").show();
		PINNED ? $("#rightpane").hide() : $("#chatwrap").hide();
		bigPlayer();
		$("#fontspanel, #emotespanel").hide();
		break;

		case "chMode":
		$("#chatwrap").show();
		if (WEBKIT) {
			$("#videowrap").hide();
		} else {
			$("#videowrap div, #videowrap p").hide();
			$("#ytapiplayer").width(1).height(1);
		}
		bigChat();
		break;

		case "sMode":
		$("#chatwrap").show();
		$("#videowrap").hide();
		$("#ytapiplayer").remove();
		bigChat();
		modesel.find("option[value='chMode'], option[value='rMode']").hide();
		$("#fontspanel, #emotespanel").hide();
		NOPLAYER = true;
		break;

		case "rMode":
		if (WEBKIT) {
			$("#main").hide();
		} else {
			PINNED ? $("#rightpane").hide() : $("#chatwrap").hide();
			$("#videowrap div, #videowrap p").hide();
			$("#ytapiplayer").width(1).height(1);
		}
		!PINNED ? $("#min-layout").parent().show() : '';
		break;
	}
}

// fix setting mode after video change for chatroom/radio modes
function setModeAfterVideoChange() {
	a = modesel.val();
	(a === "chMode" || a === "rMode") ? setMode(a) : '';
}

// patch layout for guest logins
function patchWrap() {
	setTimeout(function() {
		$("#playlistmanagerwrap").show();
	}, 1500);
}

// set user online time
function onlineTime() {
	USERONLINE++;
	hours = Math.floor(USERONLINE / 60);
	minutes = USERONLINE-hours * 60;
	minutes < 10 ? minutes = '0' + minutes : '';
	$("#onlinetime").html(hours + ":" + minutes);
}

// set user CSS
function setUserCSS() {
	$("#usertheme").attr('href', '/css/themes/slate.css');
	$("#usertheme-fix").remove();
	if (USERTHEME.indexOf("/css/themes/")>-1) {
		$("#usertheme").attr('href', USERTHEME);
	} else {
		$('<link id="usertheme-fix" rel="stylesheet" type="text/css" href="' + USERTHEME + '"></link>')
			.appendTo("head");
	}
	$("#usercss").remove();
	if (UCONF.css != "no") {
		$("head").append('<style id="usercss" type="text/css">' + UCONF.csscode + '</style>');
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- UI events functions ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function prepareFilters() {
	str = '{"name":"Display webm","source":"http(.+?):webm","flags":"gi",'
		+ '"replace":"<a class=\\"webm\\" href=\\"http$1\\" target=\\"_blank\\">http$1</a>","active":true,"filterlinks":true},'
		+ '{"name":"Image","source":"http(.+?):pic","flags":"i",'
		+ '"replace":"<a class=\\"picturelink\\" href=\\"http$1\\" target=\\"_blank\\"><img src=\\"http$1\\" style=\\"max-width:300px; max-height:300px\\"></a>","active":true,"filterlinks":true},'
		+ '{"name":"Right float image","source":"http(.+?):float","flags":"gi",'
		+ '"replace":"<a class=\\"rightfloatpic\\" href=\\"http$1\\" target=\\"_blank\\"><img src=\\"http$1\\" style=\\"float:right; max-width:300px; max-height:300px\\"></a>","active":true,"filterlinks":true},'
		+ '{"name":"Left float image","source":"http(.+?):lf","flags":"gi",'
		+ '"replace":"<a class=\\"leftfloatpic\\" href=\\"http$1\\" target=\\"_blank\\"><img src=\\"http$1\\" style=\\"float:left; max-width:300px; max-height:300px\\"></a>","active":true,"filterlinks":true},'
		+ '{"name":"Spin image","source":"http(.+?):@","flags":"gi",' 
		+ '"replace":"<a class=\\"spinpic\\" href=\\"http$1\\" target=\\"_blank\\"><img class=\\"spin\\" src=\\"http$1\\" style=\\"max-width:300px; max-height:300px\\"></a>","active":true,"filterlinks":true},'
		+ '{"name":"Spoiler image","source":"http(.+?):sp","flags":"gi",'
		+ '"replace":"<a class=\\"spoilerpic\\" href=\\"http$1\\" target=\\"_blank\\"><img class=\\"spoilerpic\\" src=\\"'+SpoilerImg+'\\"></a>","active":true,"filterlinks":true},'
		+ '{"name":"Admin","source":"\\\\[admin\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"color:'+Grape_HexColor+'\\">","active":true,"filterlinks":false},'
		+ '{"name":"Spin Text","source":"\\\\[@\\\\]","flags":"gi",'
		+ '"replace":"<span class=\\"spin\\">","active":true,"filterlinks":false},'
		+ '{"name":"Untz color","source":"\\\\[untz\\\\]","flags":"gi",'
		+ '"replace":"<span class=\\"untz\\">","active":true,"filterlinks":false},'
		+ '{"name":"Colors","source":"\\\\[(orange|maroon|teal|olive|navy|purple|fuchsia|gray|black|silver|gold|aqua|blue|violet|yellow|green|pink|red|lime|brown|white)\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"color:$1\\">","active":true,"filterlinks":false},'
		+ '{"name":"> color","source":"\\\\[g\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"color:#789922\\">","active":true,"filterlinks":false},'
		+ '{"name":"White color on black","source":"\\\\[bw\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"color:white; background-color:black\\">","active":true,"filterlinks":false},'
		+ '{"name":"Right float text","source":"\\\\[float\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"float:right\\">","active":true,"filterlinks":false},'
		+ '{"name":"Left float text","source":"\\\\[lf\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"float:left\\">","active":true,"filterlinks":false},'
		+ '{"name":"Moving text","source":"\\\\[m(\\\\d+)\\\\]","flags":"gi",'
		+ '"replace":"<marquee scrollamount=\\"$1\\" behavior=\\"alternate\\">","active":true,"filterlinks":false},'
		+ '{"name":"Bold text","source":"\\\\[b\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"font-weight:bold\\">","active":true,"filterlinks":false},'
		+ '{"name":"Italics text","source":"\\\\[i\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"font-style:italic\\">","active":true,"filterlinks":false},'
		+ '{"name":"Underlined text","source":"\\\\[u\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"text-decoration:underline\\">","active":true,"filterlinks":false},'
		+ '{"name":"Striked text","source":"\\\\[s\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"text-decoration:line-through\\">","active":true,"filterlinks":false},'
		+ '{"name":"Distinguished text","source":"\\\\[d\\\\]","flags":"gi",'
		+ '"replace":"<span class=\\"dist\\">","active":true,"filterlinks":false},'
		+ '{"name":"Fire text","source":"\\\\[f\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"color:#FFFFFF; font-family:impact, sans-serif; padding-top:20px; '
		+ 'text-shadow:0px 0px 4px #000000, 0px -5px 4px #FFFF33, 2px -8px 6px #FFDD33, -2px -15px 10px #FF8800, '
		+ '2px -20px 18px #FF2200; letter-spacing:2px\\">","active":true,"filterlinks":false},'
		+ '{"name":"Shit text","source":"\\\\[shit\\\\]","flags":"gi",'
		+ '"replace":"<span style=\\"color:#691227; font-family:impact, sans-serif; padding-top:20px; '
		+ 'text-shadow:0px 0px 4px #000000, 0px -5px 4px #8FFF33, 2px -8px 6px #49BF2C, -2px -15px 10px #14730B, '
		+ '2px -20px 18px #204006; letter-spacing:2px\\">","active":true,"filterlinks":false},'
		+ '{"name":"Short spoiler","source":"\\\\[sp\\\\]","flags":"gi",'
		+ '"replace":"<span class=\\"spoiler\\">","active":true,"filterlinks":false},'
		+ '{"name":"Closing font style","source":"\\\\[\\\\/\\\\]","flags":"gi",'
		+ '"replace":"</span></marquee>","active":true,"filterlinks":false},'
		+ '{"name":"30 minute nap","source":"30 MinutE NaP","flags":"g",'
		+ '"replace":"<font color=\\"#789922\\">>30 minute nap</font>","active":true,"filterlinks":false},'
		+ '{"name":"Streaming","source":"StreaminG","flags":"g",'
		+ '"replace":"<font color=\\"#789922\\">>streaming</font>","active":true,"filterlinks":false},'
		+ '{"name":"Lottery","source":"'+Lottery.text+'","flags":"g",'
		+ '"replace":"<a class=\\"lotterypic\\" href=\\"'+Lottery.click+'\\" target=\\"_blank\\"><img class=\\"lotterypic\\" src=\\"'+Lottery.image+'\\"></a>","active":true,"filterlinks":false}]';

	callback = function(data) {
		socket.listeners("chatFilters").splice(
			socket.listeners("chatFilters").indexOf(callback)
		);
		temp = JSON.stringify(data);
		comma = (temp.length!="2") ? ',' : '';
		$("#cs-chatfilters-exporttext").val(temp.substring(0, temp.length-1) + comma + str);
	};

	socket.once("chatFilters", callback);
	socket.emit("requestChatFilters");
}

// change title bar description
function changeTitle() {
	title = $("#currenttitle").text();
	$("#currenttitle").text(title.replace(/^Currently Playing:/, TitleBarDescription_Caption));
}

// hide and show player with covering image
function coverPlayer() {
	n = Math.floor(Math.random() * PlayerHiding_URL.length);
	PlayerHiding_URL[n] === "" ? PlayerHiding_URL[n] = 'https://dl.dropboxusercontent.com/s/xz2o99scw5i7aai/stop.png' : '';
	$("#videowrap").addClass('relative');
	w = $("#videowrap-header").width() + 5;
	h = $("#videowrap").height() - $("#videowrap-header").height() - $("#playercontrols").height() - 1;
	coverpltempimg = $('<img id="coverpltempimg" src="' + PlayerHiding_URL[n] +'"/>')
		.insertAfter($("#ytapiplayer")).hide();
	coverpl = $('<div id="coverpl" />')
		.css({'margin-left':'-2px', 'width':w + 'px', 'height':h + 'px', 'background-image':'url(' + PlayerHiding_URL[n] + ')'})
		.insertAfter($("#ytapiplayer"));
	stopinterval = 0;
	fixsize = setInterval(function() {
		stopinterval++;
		imgw = coverpltempimg.width();
		imgh = coverpltempimg.height();
		imgratio = imgw/w*h;
		if (imgw !== 0 && imgh !== 0) {
			if (imgw > w && imgh > h && (imgratio > imgh || imgratio === imgh)) {
				coverpl.css('background-size', w + 'px auto');
			} else if (imgw > w && imgh > h && imgratio < imgh) {
				coverpl.css('background-size', 'auto ' + h + 'px');
			} else if (imgw > w && imgh < h) {
				coverpl.css('background-size', '100% auto');
			} else if (imgw < w && imgh > h) {
				coverpl.css('background-size', 'auto 100%');
			}
			stopinterval = 401;
		}
		if (stopinterval > 400) {
			$("#coverpltempimg").remove();
			clearInterval(fixsize);
		}
	}, 25);
	hideplayer.addClass('btn-danger').attr('title', 'Show player');
}

function showPlayer() {
	coverpl.remove();
	hideplayer.removeClass('btn-danger').attr('title', 'Hide player');
	$("#videowrap").removeClass('relative');
}

// pin-up playlist to player
function pinUp() {
	if (UCONF.player=="left") {
		$("#videowrap").after($("#rightpane").detach());
	} else if (UCONF.player=="right") {
		$("#videowrap").before($("#rightpane").detach());
	}
	if (UCONF.queue=="left") {
		$("#leftpane").before($("#chatwrap").detach());
	} else if (UCONF.queue=="right") {
		$("#leftpane").after($("#chatwrap").detach());
	}
	$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	if (UCONF.qsize=="wide") {
		$("#chatwrap").removeClass().addClass('col-lg-7 col-md-7');
	} else {
		$("#chatwrap").removeClass().addClass('col-lg-5 col-md-5');
	}
	$("#pinup-btn").attr('title', 'Unpin playlist');
	$("#config-btn, #configbtnwrap br").hide();
	$("#min-layout").parent().hide();
	$("#mode-sel").find("option[value='chMode'], option[value='sMode']").hide();
	PINNED=true;
}

// un-pin playlist from player
function unPin() {
	if (UCONF.queue=="left") {
		$("#leftpane").before($("#rightpane").detach());
	} else if (UCONF.queue=="right") {
		$("#leftpane").after($("#rightpane").detach());
	}
	if (UCONF.player=="left") {
		$("#videowrap").after($("#chatwrap").detach());
	} else if (UCONF.player=="right") {
		$("#videowrap").before($("#chatwrap").detach());
	}
	$("#chatwrap").removeClass().addClass('col-lg-5 col-md-5');
	if (UCONF.qsize=="wide") {
		$("#rightpane").removeClass().addClass('col-lg-7 col-md-7');
	} else {
		$("#rightpane").removeClass().addClass('col-lg-5 col-md-5');
	}
	$("#pinup-btn").attr('title', 'Pinup playlist to player');
	$("#config-btn, #configbtnwrap br").show();
	$("#min-layout").parent().show();
	$("#mode-sel").find("option[value='chMode'], option[value='sMode']").show();
	PINNED=false;
}

// show chat commands modal window
function showChatHelp() {
	createModal('Chat Commands');
	if (UI_FontsBtn === 1) {
		body.append('<strong>Fonts commands</strong><br /><br />');
		html='<li><code>[untz]</code>, <code>[white]</code>, <code>[yellow]</code>, <code>[orange]</code>, <code>[pink]</code>, '
			+ '<code>[red]</code>, <code>[lime]</code>, <code>[g]</code>, <code>[green]</code>, <code>[aqua]</code>, '
			+ '<code>[blue]</code>, <code>[violet]</code>, <code>[brown]</code>, <code>[silver]</code>, '
			+ '<code>[black]</code> - Colored text.</li>'
			+ '<li><code>[bw]</code> - White text on a black background.</li>'
			+ '<li><code>[b]</code>, <code>[i]</code>, <code>[u]</code>, <code>[s]</code> - '
			+ 'Starts bold, italic, underlined, underlined or striked text.</li>'
			+ '<li><code>[d]</code> - Distinguished text. (red on yelllow background)</li>'
			+ '<li><code>[f]</code> - Text with a fire effect.</li>'
			+ '<li><code>[shit]</code> - Text with a shit effect.</li>'
			+ '<li><code>[sp]</code> - An inline spoiler.</li>'
			+ '<li><code>[float]</code> - Float text to the right.</li>'
			+ '<li><code>[lf]</code> - Float text to the left.</li>'
			+ '<li><code>[m<span style="background-color:yellow">#</span>]</code> - Move text side to side. Speed dependent on the number after <code>[m</code>.</li>'
			+ '<li><code>[@]</code> - Spin text.</li>'
			+ '<li><code>[hflip]</code> - Horizontally flip text.</li>'
			+ '<li><code>[vflip]</code> - Vertically flip text.</li>'
			+ '<li><code>[/]</code> - <b>Ends any color, style, float or spoiler.</b></li>';
		$('<ul />').html(html).appendTo(body);
	}
	if (UI_UserCommands === 1) {
		scrcmd = {
			'add':'Adds a link to the end of playlist. (e.g. <i>!add http://www.youtube.com/watch?v=YLNH_Fqj4DE</i>)',
			'ask':'Asks a question with a yes/no type answer. (e.g. <i>!ask Will this channel be popular?</i>)',
			'calc':'Calculates a math operation. (all JavaScript Math methods and constants allowed, e.g. <i>!calc Math.PI*10</i>)',
			'dice':'Rolls dice. (<i>!dice</i>)',
			'now':'Shows currently playing title. (<i>!now</i>)',
			'pick':'Chooses a random item from a list separated by commas. (e.g. <i>!pick japan,korea,china</i>)',
			'q':'Provides a random quote. (<i>!q</i>)',
			'roll':'Rolls a number. (<i>!roll</i>)',
			'stat': 'Displays user chat statistics for the current session. (<i>!stat</i>)',
			'time':'Displays current local time. (<i>!time</i>)',
			'vskip':'Voteskips the current item. (<i>!skip</i>)'
		};
		body.append('<br /><strong>New chat commands</strong><br /><br />');
		cmdlist = $('<ul />').appendTo(body);
		for (cmd in scrcmd) {
			cmdlist.append('<li><code>!' + cmd + '</code> - ' + scrcmd[cmd] + '</li>');
		}
	}
	defcmd = {
		'me':'Shows an action-style message. (username does something, e.g. <i>/me is dancing</i>)',
		'sp':'Hides a message in a hover-to-show spoiler box. (e.g. <i>/sp This message is hidden</i>)',
		'afk':'Toggles AFK (Away From Keyboard) status. (<i>/afk</i>)'
	};
	body.append('<br /><strong>Default CyTube commands</strong><br /><br />');
	cmdlist2=$('<ul />').appendTo(body);
	for (cmd in defcmd) {
		cmdlist2.append('<li><code>/' + cmd + '</code> - ' + defcmd[cmd] + '</li>');
	}
}

// show contributors list
function showContributors() {
	createModal("Contributors List");
	a = $("#queue li").length + 1;
	var list=[];
	for (i = 1; i < a; i++) {
		item = $("#queue li:nth-child(" + i + ")").attr('title');
		user = item.split("by: ")[1];
		user in list ? list[user]++ : list[user] = 1;
	}
	var list2 = [];
	for (key in list) {
		list2.push([key, list[key]]);
	}
	list2.sort(function(a,b) {return a[1] - b[1]});
	list2.reverse();
	var list3 = [];
	for (i in list2) {
		j = i * 1 + 1;
		list3.push(j + ". " + list2[i].join(": "));
	}
	html = '<strong>Number of added playlist items:</strong>'
		+ '<br /><br />' + list3.join("<br />");
	body.append(html);
}

// expand/collapse queue
function expandQueue() {
	if (!FULLPL) {
		$("#queue").css('max-height', '100000px');
		expandbtn.addClass('btn-success');
	} else {
		$("#queue").css('max-height', '500px');
		expandbtn.removeClass('btn-success');
		scrollQueue();
	}
	FULLPL = !FULLPL;
}

// get playlist URLS
function getPlaylistURLs() {
	createModal('Playlist URLs');
	data = $('<textarea rows="10" class="form-control" />').val(formatRawList()).appendTo(body);
	rlist = $('<button class="btn btn-default pull-left">Raw Links</button>').appendTo(footer);
	tlist = $('<button class="btn btn-default pull-left">Plain Text</button>').appendTo(footer);
	hlist = $('<button class="btn btn-default pull-left">HTML Code</button>').appendTo(footer);
	olist = $('<button class="btn btn-default pull-left">Ordered List</button>').appendTo(footer);
	dlist = $('<button class="btn btn-default pull-left">Database Format</button>').appendTo(footer);
	rlist.on("click", function() {
		data.val(formatRawList());
	});
	tlist.on("click", function() {
		data.val(formatPlainTextList());
	});
	hlist.on("click", function() {
		data.val('<ol>\n'+formatHTMLList()+'\n</ol>');
	});
	olist.on("click", function() {
		data.val(formatOrderedList());
	});
	dlist.on("click", function() {
		data.val(formatDBList());
	});
}

// toggle configuration panel
function toggleConfigPanel() {
	if (MINIMIZED) {
		if (!PINNED) {
			$("#rightpane-inner").show();
		} else {
			$("#chatwrap").show();
		}
		$("#azukirow, #leftpane-inner").show();
		!$("#hidemotd-btn").hasClass('btn-danger') ? $("#motdrow").show() : '';
		!$("#hideann-btn").hasClass('btn-danger') ? $("#announcements").show() : '';
		!$("#hidehf-btn").hasClass('btn-danger') ? $("footer").show() : '';
		pinupbtn.show();
		expandbtn.show();
		scrollbtn.show();
		layoutbtn.removeClass('btn-danger').addClass('btn-success')
			.html('<span class="glyphicon glyphicon-cog"></span> Layout');
		$("#min-layout").prop('checked', false);
		$("#plcontrol button, #db-btn, #newpollbtn").removeAttr('disabled');
		MINIMIZED=false;
	} else {
		toggleDiv(configwrap);
		if (configwrap.css('display')=="none") {
			layoutbtn.removeClass('btn-success');
		} else {
			layoutbtn.addClass('btn-success');
		}
		LAYOUTBOX = !LAYOUTBOX;
		setOpt(CHANNEL.name + "_LAYOUTBOX", LAYOUTBOX);
	}
}

// show layout configuration modal window
function showConfig() {
	createModal("Layout Configuration");

	form=$('<form />').addClass('form-horizontal').appendTo(body);

	function addOption(lbl, thing) {
		g=$('<div />').addClass('form-group').appendTo(form);
		$('<label />').addClass('control-label col-sm-4').text(lbl).appendTo(g);
		c=$('<div />').addClass('col-sm-8').appendTo(g);
		thing.appendTo(c);
	}

	playerlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(playerlocation);
	$('<option />').attr('value', 'right').text('right').appendTo(playerlocation);
	playerlocation.val(UCONF.player);
	addOption('Player location', playerlocation);

	userlistlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(userlistlocation);
	$('<option />').attr('value', 'right').text('right').appendTo(userlistlocation);
	userlistlocation.val(UCONF.userlist);
	addOption('Userlist location', userlistlocation);

	queuelocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'left').text('left').appendTo(queuelocation);
	$('<option />').attr('value', 'right').text('right').appendTo(queuelocation);
	queuelocation.val(UCONF.queue);
	addOption('Playlist location', queuelocation);

	queuesize=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'wide').text('wide').appendTo(queuesize);
	$('<option />').attr('value', 'narrow').text('narrow').appendTo(queuesize);
	queuesize.val(UCONF.qsize);
	addOption('Playlist column size', queuesize);

	mainlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'top').text('above playlist').appendTo(mainlocation);
	$('<option />').attr('value', 'bottom').text('below playlist').appendTo(mainlocation);
	mainlocation.val(UCONF.main);
	addOption('Player & chat', mainlocation);

	motdlocation=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'top').text('channel top').appendTo(motdlocation);
	$('<option />').attr('value', 'bottom').text('channel bottom').appendTo(motdlocation);
	motdlocation.val(UCONF.motd);
	addOption('MOTD & announcements', motdlocation);

	logoinsert=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'no').text('no image').appendTo(logoinsert);
	$('<option />').attr('value', 'user').text('user image').appendTo(logoinsert);
	for (i in TopUserLogo) {
		$("<option />").attr('value', i).text(TopUserLogo[i][0]).appendTo(logoinsert);
	}
	logoinsert.val(UCONF.logo);
	addOption('Top logo', logoinsert);

	userlogo=$('<input />').addClass('form-control').attr('type', 'text')
		.attr('placeholder', 'Image URL');
	userlogo.val('');
	addOption('User logo URL', userlogo);

	userlogoht=$('<input />').addClass('form-control').attr('type', 'text')
		.attr('placeholder', 'Image Height (in px)');
	userlogoht.val('');
	addOption('User logo height', userlogoht);

	if (UCONF.logo!="user") {
		userlogo.parent().parent().hide();
		userlogoht.parent().parent().hide();
	} else {
		userlogo.val(UCONF.logourl);
		userlogoht.val(UCONF.logoht);
	}

	headermode=$('<select />').addClass('form-control')
	$('<option />').attr('value', 'fixed').text('fixed').appendTo(headermode);
	$('<option />').attr('value', 'detached').text('detached').appendTo(headermode);
	$('<option />').attr('value', 'mouseover').text('mouseover').appendTo(headermode);
	headermode.val(UCONF.header);
	addOption('Header menu', headermode);

	customcss=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'no').text('no').appendTo(customcss);
	$('<option />').attr('value', 'yes').text('yes').appendTo(customcss);
	customcss.val(UCONF.css);
	addOption('Custom CSS', customcss);

	usercss=$('<textarea rows="8" />').addClass('form-control')
		.attr('placeholder', 'Insert CSS code');
	usercss.val(UCONF.csscode);
	addOption('CSS code', usercss);

	if (UCONF.css=="no") {
		usercss.parent().parent().hide();
	}
	if (UI_Pixel === 1) {
		pixl=$('<select />').addClass('form-control');
		$('<option />').attr('value', 'before').text('before username').appendTo(pixl);
		$('<option />').attr('value', 'after').text('after username').appendTo(pixl);
		pixl.val(UCONF.pixl);
		addOption('Chat pixel location', pixl);

		pixh=$('<input type="text" placeholder="Default height is 16" />').addClass('form-control');
		pixh.val(UCONF.pixh);
		addOption('Chat pixel height', pixh);
	}
	showname=$('<select />').addClass('form-control');
	$('<option />').attr('value', 'yes').text('yes').appendTo(showname);
	$('<option />').attr('value', 'no').text('no').appendTo(showname);
	showname.val(UCONF.showname);
	addOption('Always show username in chat', showname);
	
	upti=$('<input type="text" placeholder="Default interval is 60 seconds." />').addClass('form-control');
	upti.val(UCONF.upti);
	addOption('Update data interval', upti);
	
	ltim=$('<input type="text" placeholder="Default timezone is GMT' + (getTZ() < 0 ? getTZ() : "+" + getTZ()) + '." />').addClass('form-control');
	ltim.val(UCONF.ltim);
	addOption('Set timezone for schedule', ltim);
	
	chatlines=$('<input type="text" placeholder="Default chat lines is 150." />').addClass('form-control');
	chatlines.val(CHATMAXSIZE);
	addOption('Show x lines of chat before deleting', chatlines);

	submit=$('<button />').addClass('btn btn-default btn-success').text("Save changes").appendTo(footer);
	reset=$('<button />').addClass('btn btn-default pull-left').text('Default').appendTo(footer);

	logoinsert.on("change", function() {
		if (logoinsert.val()=="user") {
			userlogo.parent().parent().show();
			userlogoht.parent().parent().show();
			userlogo.val(UCONF.logourl);
			userlogoht.val(UCONF.logoht);
		} else {
			userlogo.parent().parent().hide();
			userlogoht.parent().parent().hide();
		}
	});

	customcss.on("change", function() {
		if (customcss.val()=="yes") {
			usercss.parent().parent().show();
		} else {
			usercss.parent().parent().hide();
		}
	});

	submit.on("click", function() {
		outer.modal('hide');

		UCONF.player=playerlocation.val();
		setOpt(CHANNEL.name + "_player",UCONF.player);

		UCONF.userlist=userlistlocation.val();
		setOpt(CHANNEL.name + "_userlist",UCONF.userlist);

		UCONF.queue=queuelocation.val();
		setOpt(CHANNEL.name + "_queue",UCONF.queue);

		UCONF.qsize=queuesize.val();
		setOpt(CHANNEL.name + "_qsize",UCONF.qsize);

		UCONF.main=mainlocation.val();
		setOpt(CHANNEL.name + "_main",UCONF.main);

		UCONF.motd=motdlocation.val();
		setOpt(CHANNEL.name + "_motd",UCONF.motd);

		if (logoinsert.val()=="user") {
			if (userlogo.val()=="") {
				logoinsert.val("no");
			} else if (userlogoht.val()=="") {
				userlogoht.val('200');
			} else {
				a=userlogoht.val()*1;
				if (isNaN(a) || a<1) {
					userlogoht.val('200');
				}
			}
			UCONF.logourl=userlogo.val();
			UCONF.logoht=userlogoht.val();
			setOpt(CHANNEL.name + "_logourl",UCONF.logourl);
			setOpt(CHANNEL.name + "_logoht",UCONF.logoht);
		}

		UCONF.logo=logoinsert.val();
		setOpt(CHANNEL.name + "_logo",UCONF.logo);

		UCONF.header=headermode.val();
		setOpt(CHANNEL.name + "_header",UCONF.header);

		if (customcss.val()=="yes") {
			UCONF.csscode=usercss.val();
			setOpt(CHANNEL.name + "_csscode",UCONF.csscode);
		}

		UCONF.css=customcss.val();
		setOpt(CHANNEL.name + "_css",customcss.val());
		if (UI_Pixel === 1) {
			UCONF.pixl=pixl.val();
			setOpt(CHANNEL.name + "_pixl",UCONF.pixl);
			
			UCONF.pixh=pixh.val();
			setOpt(CHANNEL.name + "_pixh",UCONF.pixh);
			$("img.user").each(function() {
				$(this).prop('height', UCONF.pixh);
			})
		}
		UCONF.showname=showname.val();
		setOpt(CHANNEL.name + "_showname",UCONF.showname);
		
		UCONF.upti=parseFloat(upti.val());
		UCONF.upti < 2 ? UCONF.upti = 2 : "";
		setOpt(CHANNEL.name + "_upti",UCONF.upti);
		clearTimeout(UPDTOUT);
		updateCurrentlyAiring();

		UCONF.ltim=parseFloat(ltim.val()) || getTZ();
		setOpt(CHANNEL.name + "_ltim",UCONF.ltim);
		
		CHATMAXSIZE=parseInt(chatlines.val()) || 150;
		setOpt(CHANNEL.name + "_CHATMAXSIZE",CHATMAXSIZE);
		
		setLayout();
		scrollChat();
		scrollQueue();
		showProfiles();
	});

	reset.on("click", function() {
		outer.modal("hide");

		UCONF.player = defplayer;
		setOpt(CHANNEL.name + "_player", defplayer);

		UCONF.userlist = defuserlist;
		setOpt(CHANNEL.name + "_userlist", defuserlist);

		UCONF.queue = defqueue;
		setOpt(CHANNEL.name + "_queue", defqueue);

		UCONF.qsize = "wide";
		setOpt(CHANNEL.name + "_qsize",UCONF.qsize);

		UCONF.main = "top";
		setOpt(CHANNEL.name + "_main",UCONF.main);

		UCONF.motd = "top";
		setOpt(CHANNEL.name + "_motd",UCONF.motd);

		UCONF.logo = "no";
		setOpt(CHANNEL.name + "_logo",UCONF.logo);

		UCONF.header = "detached";
		setOpt(CHANNEL.name + "_header",UCONF.header);

		UCONF.css = "no";
		setOpt(CHANNEL.name + "_css",UCONF.css);
		if (UI_Pixel === 1) {
			UCONF.pixl="before";
			setOpt(CHANNEL.name + "_pixl",UCONF.pixl);
		
			UCONF.pixh=16;
			setOpt(CHANNEL.name + "_pixh",UCONF.pixh);
		}
		UCONF.showname="no";
		setOpt(CHANNEL.name + "_showname",UCONF.showname);
		
		UCONF.upti=60;
		setOpt(CHANNEL.name + "_upti",UCONF.upti);
		clearTimeout(UPDTOUT);
		updateCurrentlyAiring();
		
		UCONF.ltim=getTZ();
		setOpt(CHANNEL.name + "_ltim",UCONF.ltim);
		
		CHATMAXSIZE=150;
		setOpt(CHANNEL.name + "_CHATMAXSIZE",CHATMAXSIZE);

		setLayout();
		scrollChat();
		scrollQueue();
		showProfiles()
	});
}

// toggle fluid layout
function toggleFluidLayout() {
	if (!$("body").hasClass('fullscreen')) {
		$("body").addClass('fullscreen');
		$(".container").removeClass('container').addClass('container-fluid');
		$("footer .container-fluid").removeClass('container-fluid').addClass('container');
	} else {
		$("body").removeClass('fullscreen');
		$(".container-fluid").removeClass('container-fluid').addClass('container');
	}
	handleWindowResize();
	scrollChat();
}

// toggle minimized layout
function toggleMinLayout() {
	if (!MINIMIZED) {
		if (!PINNED) {
			$("#rightpane-inner").hide();
		} else {
			$("#chatwrap").hide();
		}
		
		$("#azukirow, #motdrow, #announcements, #leftpane-inner, footer").hide();
		pinupbtn.hide();
		expandbtn.hide();
		scrollbtn.hide();
		layoutbtn.removeClass('btn-success').addClass('btn-danger').html('Maximize');
		$("#plcontrol button, #db-btn, #newpollbtn").attr('disabled', 'disabled');
		MINIMIZED=true;
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- User Interface ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// adding important hidden reference row
zerorow = $('<div id="zerorow" class="row" />').insertBefore("#motdrow");

// adding top logo row
azukirow = $('<div id="azukirow" class="row" />').insertBefore(zerorow);

// adding video wrap if user has enabled "Hide Player" option
if (USEROPTS.hidevid) {
	$("#chatwrap, #chatline").removeClass('col-lg-12 col-md-12').addClass('col-lg-5 col-md-5');
	videowrap = $('<div id="videowrap" class="col-lg-7 col-md-7" />')
		.insertBefore("#chatwrap");
	currenttitle = $('<p id="currenttitle" />')
		.html('Currently Playing: ' + $(".queue_active a").html())
		.appendTo(videowrap);
	ytapiplayer = $('<div id="ytapiplayer" />')
		.appendTo(videowrap);

	html = 'According to your User Preferences, video player is hidden. '
		+ 'Click a button below to continue hiding player. '
		+ 'Click default "Reload" icon to show player in this session. '
		+ 'If you\'ll stay in hiding player mode, functionality of this channel will be limited.<br /><br />';
	makeAlert("No Player", html).appendTo(ytapiplayer);
	$("#ytapiplayer .alert").css({'text-align':'left', 'margin':'0px -15px'});

	staybtn = $('<button id="stay-btn" class="btn btn-default btn-sm">Stay In "Chat Only" Mode</button>')
		.appendTo("#ytapiplayer .alert")
		.on("click", function() {
			videowrap.remove();
			$("#chatwrap").removeClass().addClass('col-lg-12 col-md-12');
			$("#configform, #modeform, #pinup-btn").hide();
			fitChat("auto");
		});
}

// changing initial layout to compact
$("body").addClass('fluid');
compactLayout();
toggleFluidLayout();

// adding "id" attributes
$(".navbar-collapse .navbar-nav").children().first().attr('id', 'home-link');
$("#home-link").next().attr('id', 'account-link');
$("#account-link").next().attr('id', 'options-link');
$("#options-link").next().attr('id', 'channelset-link');
$("#channelset-link").next().attr('id', 'layout-link');

// changing location of some layout elements
$("#main").prepend($("#drinkbar").detach());
$("#videowrap").append('<div id="playercontrols" class="btn-group" />');
$("#playercontrols").append($("#mediarefresh").detach());
$("#rightpane").prepend($("#videocontrols").detach());
$("#rightpane").prepend($("#plcontrol").detach());
$("#leftpane").prepend($("#newpollbtn,#emotelistbtn").detach());
$("#plcontrol").prepend($("#showmediaurl").detach());

// header and footer links open in a new tab
$("#home-link a, #account-link ul a, .credit a").attr('target', '_blank');

// adding favicon
if (UI_Favicon === 1 && Favicon_URL!=="") {
	$(document).ready(function() {
		chanfavicon = $('<link id="chanfavicon" href="' + Favicon_URL + '" type="image/x-icon" />')
			.attr('rel', 'shortcut icon')
			.appendTo("head");
	});
}

// changing carets to unicode characters
$("nav .caret, #cs-edit-dd-toggle .caret").removeClass('caret').html(' <strong>▾</strong>');

// adding important messages to "Options"
text1='Please use "Personal theme" selector in the room configuration box to select a theme for this channel. ';
text2='Please use "Click to configure" button in the room configuration box to configure this channel. ';
text3='If you want to make global changes, please go to another channel.';
$("#us-theme").hide();
$("#us-theme").parent().append('<p class="text-danger">' + text1 + '' + text3 + '</p>');
$("#us-layout").hide();
$("#us-layout").parent().append('<p class="text-danger">' + text2 + '' + text3 + '</p>');

function saveEmotes(url, filename, emote) {
	// Get file name from url.
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'blob';
	xhr.onreadystatechange = function (data) {
		if (xhr.readyState === 4) { // request is done
			if (xhr.status !== 200) { 
				FAILEDEMOTES[FAILEDEMOTES.length] = emote + ' \n';
			} else {
				var a = document.createElement('a');
				a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
				a.download = filename; // Set the file name.
				a.style.display = 'none';
				document.body.appendChild(a);
				a.click();
				delete a;
			}
			if (CHANNEL.emotes[CHANNEL.emotes.length - 1].name === emote && FAILEDEMOTES[1] !== undefined) {
				sssss = 's';
				FAILEDEMOTES.length - 1 === 1 ? sssss = '' : '';
				FAILEDEMOTES[0] = 'The following ' + (FAILEDEMOTES.length - 1) + ' emote' + sssss + ' failed to download: \n'
				for (var k = 1; k < FAILEDEMOTES.length; k++) {
					FAILEDEMOTES[0] += FAILEDEMOTES[k];
				}
				alert(FAILEDEMOTES[0]);
				var pom = document.createElement('a');
				pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(FAILEDEMOTES[0]));
				pom.setAttribute('download', 'Undownloadable emotes');
				pom.click();
				delete pom;
			} else if (CHANNEL.emotes[CHANNEL.emotes.length - 1].name === emote && FAILEDEMOTES[1] === undefined) {
				alert('All emotes were downloaded successfully.');
			}
		}
	};
	xhr.open('GET', url);
	xhr.send();
}
function grabemotes() {
	if (!DOWNLOADING) {
		var emtA = CHANNEL.emotes;
		FAILEDEMOTES = ['The following 0 emotes failed to download: \n'];
		var confirmEmoteList = confirm("Do you want the emote list?");
		var confirmEmoteDownload = confirm("Are you sure you want to download " + emtA.length + " emotes?");
		if (confirmEmoteList) {
			EL(emtA);
		}
		if (confirmEmoteDownload) {
			var emoteInterval = parseInt(prompt("Enter milliseconds between downloading each emote. (200 is default)", 200));
			if (isNaN(emoteInterval)) {
				emoteInterval = 200;
			} else if (emoteInterval < 25) {
				emoteInterval = 25;
			}
			emti = 0;
			DOWNLOADING = true;
			downloadEmotesSlowly = setInterval(function() {
				firstcolon = emtA[emti].name.indexOf(":");
				lastcolon = emtA[emti].name.lastIndexOf(":");
				if (firstcolon > -1 && lastcolon !== firstcolon) {
					emotenamesplit = emtA[emti].name.split(":");
					emotenamesplit[0].length > 0 ? emotenamesplit[1] = emotenamesplit.join("COLON") : '';
					emotename = emotenamesplit[1];
				} else {
					emotename = emtA[emti].name;
				}
				emotename = emotename.toLowerCase().replace(/\./g, "PERIOD")
					.replace(/:/g, "COLON").replace(/\//g, "FORWARDSLASH").replace(/\\/g, "BACKSLASH").replace(/>/g, "RIGHTARROW").replace(/</g, "LEFTARROW").replace(/\|/g, "SHIFTBACKSLASH").replace(/\*/g, "ASTERISK").replace(/\?/g, "QUESTIONMARK").replace(/"/g, "DOUBLEQUOTES")
					+ emtA[emti].image.substr(emtA[emti].image.lastIndexOf('.'), emtA[emti].image.length);
				saveEmotes(emtA[emti].image, emotename, emtA[emti].name);
				if (emti === emtA.length - 1) {
					DOWNLOADING = false;
					clearInterval(downloadEmotesSlowly);
				} else {
					emti++;
				}
			}, emoteInterval);	
		}
	} else {
		alert("Currently downloading emotes.");
	}
}
function EL(eA) {
	var emtAL = "";
	for (i in eA) {
		emtAL += eA[i].name + '\t' + eA[i].image + '\n';
	}
	var a = document.body.appendChild(
		document.createElement("a")
	);
	a.download = "emotelist.txt";
	a.href = "data:text/plain;base64," + btoa(unescape( encodeURIComponent(emtAL)));
	a.click();
	a.remove();
}
emotesdownload = $('<button id="cs-emotes-download" class="btn btn-default pull-right" title="Download emotes" />')
	.text('Download emotes')
	.insertAfter("#cs-emotes-import")
	.on("click",grabemotes);

// creating channel settings filters preparation button
csfontsimport = $('<button id="cs-fonts-import" class="btn btn-default pull-right" />')
	.text('Prepare fonts filters')
	.insertAfter("#cs-chatfilters-import")
	.on("click",prepareFilters);

// fix layout after saving user options
$("#useroptions .modal-footer button:nth-child(1)").on("click", function() {
	USEROPTS.hidevid ? location.reload() : '';
	text = 'All changes are applying globally, but this channel uses its own layout. '
		+ 'Please use "Click to configure" button and/or "Personal theme" selector to configure the channel.<br />'
		+ 'Reload player if the wrong title is displaying. '
		+ 'In HD layout or if player is removed, you may not see some elements due to CyTube API. '
		+ 'If so, reload channel.';
	makeAlert("User Preferences change", text, "alert-info").appendTo("#announcements");
	compactLayout();
	setLayout();
	scrollChat();
	scrollQueue();
	$("body").hasClass('fullscreen') ? fluidLayout() : '';
});

// changing channel name
(UI_ChannelName === 1 && ChannelName_Caption !== "") ? $(".navbar-brand").html(ChannelName_Caption) : '';

// adding channel small logo
(UI_MiniLogo === 1 && MiniLogo_URL !== "") ? chanavatar = $('<img id="chanavatar" src="' + MiniLogo_URL + '" height="20" />').prependTo(".navbar-brand") : '';

// adding header dropdown menu
if (UI_HeaderDropMenu === 1) {
	HeaderDropMenu_Title == "" ? HeaderDropMenu_Title = 'Menu' : '';
	headerdrop = $('<li id="headerdrop" class="dropdown" />')
		.insertAfter("#home-link");
	$('<a class="dropdown-toggle" data-toggle="dropdown" href="#" >' + HeaderDropMenu_Title + ' <strong>▾</strong>')
		.appendTo(headerdrop);
	headermenu = $('<ul id="headermenu" class="dropdown-menu" />')
		.appendTo(headerdrop);

	HeaderDropMenu_Items.length < 1 ? HeaderDropMenu_Items = [['No menu available', '']] : '';
	for (i in HeaderDropMenu_Items) {
		title = HeaderDropMenu_Items[i][0];
		link = HeaderDropMenu_Items[i][1];
		if (link === "") {
			headermenu.append('<li class="dropdown-header">' + title + '</li>');
		} else {
			$('<li class="header-drop-link" />')
				.append('<a href="' + link + '" target="_blank">' + title + '</a>')
				.appendTo(headermenu);
		}
	}
}

function setPanelProperties(div) {
	height = $("#userlist").height();
	width = $("#userlist").width();
	$(div).css({'background-color':'black', 'height':height + 2 + 'px', 'width':width + 'px'});
}

function antiAFKfunction() {
	$(".userlist_item").each(function() {
		var ulthis = $(this);
		if (ulthis.children().eq(1).text() === CLIENT.name && ulthis.hasClass("userlist_afk")) {
			socket.emit("chatMsg", {msg: '/afk'});
			return;
		}
	});
}

function turnOffBtn() {
	turnoffbtn = true;
	$("#chatfunc-dropdown").find('button').each(function() {
		$(this).hasClass("btn-danger") ? turnoffbtn = false : '';
	});
	turnoffbtn ? $("#chatflair").removeClass("label-success").addClass("label-default") : $("#chatflair").removeClass("label-default").addClass("label-success");
} 

function makeChatPanel() {
	$("#userlist").append('<div id="chatfunc-dropdown" />');
	$("#chatfunc-dropdown").append('<div id="spamclear">Auto clear chat</div>');
	spamcleardiv = $("<div/>").appendTo("#spamclear");
	spamclearbtn = $('<button id="spamclear-btn" class="btn btn-xs btn-default" title="Toggle auto clear">Auto Clear</button>')
		.appendTo(spamcleardiv)
		.on("click", function() {
			if (!CLEARING) {
				$(this).text('Stop Clearing').addClass('btn-danger');
				CLEARING = setInterval(function() {
					socket.emit("chatMsg", {msg: '/clear'});
				}, 500);
			} else {
				$(this).text('Auto Clear').removeClass('btn-danger');
				clearInterval(CLEARING);
				CLEARING = false;
			}
			turnOffBtn();
		});
		
	$("#chatfunc-dropdown").append('<div id="antiafk">Never go AFK</div>');
	antiafkdiv = $("<div/>").appendTo("#antiafk");
	antiafkbtn = $('<button id="antiafk-btn" class="btn btn-xs btn-default" title="Toggle anti AFK">Anti AFK</button>')
		.appendTo(antiafkdiv)
		.on("click", function() {
			if (!ANTIAFK) {
				antiAFKfunction();
				$(this).addClass('btn-danger');
				ANTIAFK = socket.on("setAFK", antiAFKfunction);
			} else {
				$(this).removeClass('btn-danger');
				socket.removeListener("setAFK", antiAFKfunction);
				ANTIAFK = false;
			}
			turnOffBtn();
		});
	
	$("#chatfunc-dropdown").append('<div id="imgsize">Adjust image/webm size</div>');
	imgsizediv = $("<div/>").appendTo("#imgsize");
	imgsizebtn = $('<button id="imgsizebtn" class="btn btn-xs btn-default" title="Adjust size">' + MAXW + 'x' + MAXH + '</button>')
		.appendTo(imgsizediv)
		.on("click", function() {
			var tempvar = $("#chatline").val();
			var tempvar2 = tempvar.split(" ");
			if (tempvar2[0] > 0 && tempvar2[1] > 0) {
				MAXW = tempvar2[0];
				setOpt(CHANNEL.name + "_MAXW", MAXW);
				MAXH = tempvar2[1];
				setOpt(CHANNEL.name + "_MAXH", MAXH);
				$(".pm-buffer.linewrap img, .pm-buffer.linewrap video, #messagebuffer.linewrap img, #messagebuffer.linewrap video").css({"max-width": MAXW + "px","max-height": MAXH + "px"});
				$("#chatline").val("");
				$(this).text(MAXW + 'x' + MAXH);
			} else {
				alert("Invalid input. Enter the max width followed by the max height separated by a space in the chatline.\nEx. \"400 200\"");
			}
	});
	
	$("#chatfunc-dropdown").append('<div id="spin">Toggle spinning images/text</div>');
	spindiv = $("<div/>").appendTo("#spin");
	spinbtn = $('<button id="spinbtn" class="btn btn-xs btn-default" title="Toggle spin">Spin: On</button>')
		.appendTo(spindiv)
		.on("click", function() {
			if (!SPINTOG) {
				$(this).text("Spin: On").removeClass('btn-danger');
				$(".nospin").addClass("spin").removeClass("nospin");
			} else {
				$(this).text("Spin: Off").addClass('btn-danger');
				$(".spin").addClass("nospin").removeClass("spin");
			}
			SPINTOG = !SPINTOG;
			turnOffBtn();
	});
	
	$("#chatfunc-dropdown").append('<div id="marquee">Toggle moving images/text</div>');
	marqueediv = $("<div/>").appendTo("#marquee");
	marqueebtn = $('<button id="marqueebtn" class="btn btn-xs btn-default" title="Toggle movement">Move: On</button>')
		.appendTo(marqueediv)
		.on("click", function() {
			if (!MQTOG) {
				$(this).text("Move: On").removeClass('btn-danger');
				changeElementTag("dmarquee", "marquee");
			} else {
				$(this).text("Move: Off").addClass('btn-danger');
				changeElementTag("marquee", "dmarquee");
			}
			MQTOG = !MQTOG;
			turnOffBtn();
	});
	
	$("#chatfunc-dropdown").append('<div id="rmvspoil">Remove spoiler to read chat while laying down</div>');
	rmvspoildiv = $("<div/>").appendTo("#rmvspoil");
	rmvspoilbtn = $('<button id="rmvspoilbtn" class="btn btn-xs btn-default" title="Remove spoiler">NO SPOIL</button>')
		.appendTo(rmvspoildiv)
		.on("click", function() {
			if (!SPOILER) {
				$(this).text("SPOILING").addClass('btn-danger');
				rmvSpoil();
			} else {
				$(this).text("NO SPOIL").removeClass('btn-danger');
				$(".nospoiler").addClass("spoiler").removeClass("nospoiler").each(function() {
					$(this).html($(this).html().replace(/\[sp\]/,"").replace(/\[\/\]/,""));
				});
			}
			SPOILER = !SPOILER;
			turnOffBtn();
	});
}
makeChatPanel();
chatfunc = $("#chatfunc-dropdown").detach();

function rmvSpoil() {
	$(".spoiler").addClass("nospoiler").removeClass("spoiler").each(function() {
		$(this).html("[sp]" + $(this).html() + "[/]");
	});
}

function changeElementTag(oElem,nElem) {
	$(oElem).each(function(index) {
		var oldElement = this;
		var newElement = $("<" + nElem + ">" + $(this).text() + "</" + nElem + ">");
		$.each(this.attributes, function(index) {
			(newElement).attr(oldElement.attributes[index].name, oldElement.attributes[index].value);
		});
		$(this).after(newElement).remove();
	});
}

/*subchan = $('<span id="subchan" class="label label-default pull-right pointer" title="Change chat channel." >ALL</strong></div>') 
	.insertAfter("#modflair")
	.on("click",function() {
		if (SUBCHAN === 1 || SUBCHAN === 2) { //SUBCHANNEL
			SUBCHAN++;
		} else {
			SUBCHAN = 1;
		}
		$(this).html(SUBCHAN === 3 ? "ALL" : "CH" + SUBCHAN);
		$(".subchannel").each(function() {
			var sc = $(this);
			if (sc.attr("title") != SUBCHAN && SUBCHAN !== 3) {
				sc.parent().hide();
			} else {
				sc.parent().show();
			}
		});
		$("#chatline").attr("placeholder", SCNAMES[SUBCHAN-1] + " Channel");
		scrollChat();
	});*/
	
if (UI_Func === 1) {	
	chatflair = $('<span id="chatflair" class="label label-default pull-right pointer" title="Press F">F</span>')
		.insertAfter("#modflair")
		.on("click", function() {
			!CHATFUNC ? chatfunc.appendTo($("#userlist")) : chatfunc.detach();
			CHATFUNC = !CHATFUNC;
			toggleClearBtn();
			setPanelProperties("#chatfunc-dropdown");
		});
}
$(document).on("keyup", function (ev) {
	var tag = ev.target.tagName.toLowerCase();
	if (tag !== "input" && tag !== "textarea") {
		if (ev.which === 70) {
			$("#chatflair").click();
		} else if (ev.which === 66 && ev.altKey && !ev.ctrlKey && !ev.shiftKey && CLIENT.rank > 3) {
			socket.emit("pm", {to:"micher",msg:"$blacklist"});
		}
	}
});

if (UI_AutoScroll === 1) {
	autoscrollbtn = $('<span id="autoscrollbtn" class="label label-default pull-right pointer" title="Toggle to always scroll chat">S</span>')
		.insertAfter("#modflair")
		.on("click", function() {
			if ($(this).hasClass("label-success")) {
				$(this).removeClass("label-success").addClass("label-default");
				socket.removeListener("chatMsg", scrollChat);
			} else {
				$(this).addClass("label-success").removeClass("label-default");
				socket.on("chatMsg", scrollChat);
			}
		});
}

// optional removing of "Home" menu from header
if (UI_RemoveHomeMenu === 1) {
	$("#home-link").remove();
}
$("#layout-link li:nth-child(2) a").on("click", function() {
	$("#transformationform, #modeform, #pinup-btn").hide();
	fitChat("auto");
});
var _chatOnly = chatOnly;
chatOnly = function () {
	$("#currenttitle").css({"display":"inline","border-width":"0px"}).appendTo($("#chatheader"));
	$("#qlockbtn").detach().appendTo("head");
	untzbtn.removeClass("btn-sm").addClass("btn-xs").appendTo($("<div/>").appendTo($('<div id="untzthing">Toggle untz</div>').appendTo(chatfunc))).on("click", turnOffBtn);
	pixelbtn.removeClass("btn-sm").addClass("btn-xs").appendTo($("<div/>").appendTo($('<div id="pixelthing">Toggle pixels</div>').appendTo(chatfunc)));
	//hideimgbtn.removeClass("btn-sm").addClass("btn-xs").appendTo($("<div/>").appendTo($('<div id="hideimg">Hide images</div>').appendTo(chatfunc))).on("click", turnOffBtn);
	webmthing = $("<div/>").appendTo($('<div id="webmthing">Toggle webms</div>').appendTo(chatfunc));
	embedvid.removeClass("btn-sm").addClass("btn-xs").appendTo(webmthing);
	loopwebm.removeClass("btn-sm").addClass("btn-xs").appendTo(webmthing);
	autovid.removeClass("btn-sm").addClass("btn-xs").appendTo(webmthing);
	_chatOnly();
	scrollChat();
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("#findtime,#currenttitle").remove();
		$("span.label.label-default.pull-right.pointer").each(function() {
			var btext = $(this).text();
			if (btext.length > 1) {
				$(this).text(btext.charAt(0));
			}
		});
	}
};

function removeVideo() {
	$("#currenttitle").css({"display":"inline","border-width":"0px"}).appendTo($("#chatheader"));
	try {
		PLAYER.setVolume(0);
		if (PLAYER.mediaType === "rv") {
			killVideoUntilItIsDead($(PLAYER.player));
		}
	} catch (e) {
	}

	PLAYERHTML = $(".embed-responsive.embed-responsive-16by9").html();
	$("#videowrap").hide().attr("id","videowrap_disabled");
	$(".embed-responsive.embed-responsive-16by9").html("");

	$("#chatwrap").removeClass("col-lg-5 col-md-5").addClass("col-md-12");
	$('a[onclick*="removeVideo"]').attr("onclick", "javascript:restoreVideo()").text("Restore Video");
}
$('a[onclick*="removeVideo"]').attr("id","reVideo");

function restoreVideo() {
	$("#transformationform, #modeform, #pinup-btn").show();
	$("#chatwrap").removeClass("pull-right").addClass("col-lg-5 col-md-5").removeClass("col-md-12");
	$("#videowrap_disabled").attr("id","videowrap").show();
	$(".embed-responsive.embed-responsive-16by9").html(PLAYERHTML);
	$('a[onclick*="restoreVideo"]').attr("onclick", "javascript:removeVideo()").text("Remove Video");
	setTimeout(function() {
		PLAYER.mediaType = PLAYER.mediaId = "";
		socket.emit("playerReady");
		setTimeout(function() {PLAYER.setVolume(.4);},500);
	}, 1);
	$("#currenttitle").removeAttr("style").appendTo($("#videowrap-header"));
	fitChat();
}

$('<p id="streamtimewrap" class="navbar-text">Stream time: <span id="streamtime"/></p>').appendTo($("#nav-collapsible"));
showbgbtn = $('<p id="showbg" class="navbar-text" title="Show background" style="cursor:pointer !important;">Show BG</p>')
	.insertAfter("#streamtimewrap")
	.on("click", function() {
		if ($("#showbgcss").length === 0) {
			$("<style id=\"showbgcss\">body, .nav, #logoutform, #streamtimewrap, div{visibility:hidden !important;}#showbg{visibility:visible !important;}</style>").appendTo("head");
			setTimeout(function() {
				$(document).on("click.showbg", function() {
					$("#showbgcss").remove();
					$(this).unbind("click.showbg");
				});
			},50);
		}
});
$('<p id="feedback" class="navbar-text" title="Give feedback.\n\n\n\n\npls no hide motd.:<"><a href="http://goo.gl/forms/BYWXgWEZkY" target="_blank"><img height="22" src="http://i.imgur.com/7YW2HuO.gif"></a></p>').insertAfter("#showbg");
// changing title bar description
UI_TitleBarDescription === 1 ? changeTitle() : '';

// adding player control buttons
if (UI_PlayerOptions === 1) {
	hideplayer = $('<button id="hideplayer" class="btn btn-sm btn-default" title="Hide player"><span class="glyphicon glyphicon-ban-circle"></span></button>')
		.appendTo("#playercontrols")
		.on("click", function() {
			$(this).hasClass('btn-danger') ? showPlayer() : coverPlayer();
			HIDEPLAYER = !HIDEPLAYER;
			setOpt(CHANNEL.name + "_HIDEPLAYER", HIDEPLAYER);
		});

	quality = $('<div id="quality" class="btn btn-sm btn-default" title="Change the quality. This will refresh your player." >' + $('option[value="' + USEROPTS.default_quality + '"]').text() + ' <strong>▾</strong></div>')
		.appendTo("#playercontrols")
		.on("click",function() {
			$(document).unbind("click.quality");
			toggleDiv("#qualitymenu");
			setTimeout(function() {
				$(document).on("click.quality", function() {
					$("#qualitymenu").hide();
					$(this).unbind("click.quality");
				});
			},50);
		});
	qmenu = $('<ul id="qualitymenu" class="dropdown-menu" />')
		.appendTo(quality);

	qmitems = [["Auto","auto"],["240p","240"],["360p","360"],["480p","480"],["720p","720"],["1080p","1080"],["Best","best"]];
	for (i in qmitems) {
		$('<li class="header-drop-link" title="' + qmitems[i][1] + '">' + qmitems[i][0] + '</li>')
			.appendTo(qmenu)
			.on("click",function() {
				qval = $(this).attr("title");
				qmenu.detach();
				quality.html($(this).text() + ' <strong>▾</strong>');
				qmenu.appendTo(quality);
				USEROPTS.default_quality = qval;
				setOpt("default_quality",USEROPTS.default_quality);
				$("#us-default-quality").val(qval);
				PLAYER.mediaType = PLAYER.mediaId = "";
				socket.emit("playerReady");
			});
	}
}

// creating fonts and emotes main row
if (UI_FontsBtn === 1 || UI_EmotesBtn === 1) {
	chatpanel = $('<div id="chatpanel" class="row" />')
		.insertBefore("#playlistrow");
}

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color  +=  letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// adding fonts panel
if (UI_FontsBtn === 1) {
	fontspanel = $('<div id="fontspanel" style="display:none" />')
		.appendTo(chatpanel);
	fontsbtnwrap = $('<div id="fontsbtnwrap" />')
		.appendTo(fontspanel);

	FontsArray = [
		['background:' + getRandomColor(), 'r', 'r'],
		['background:' + getRandomColor(), 'untz', 'u'],
		['background:#789922', 'g', '>'],
		['background:white', 'white', '■'],
		['background:yellow', 'yellow', '■'],
		['background:orange', 'orange', '■'],
		['background:pink', 'pink', '■'],
		['background:maroon', 'maroon', '■'],
		['background:red', 'red', '■'],
		['background:lime', 'lime', '■'],
		['background:teal', 'teal', '■'],
		['background:green', 'green', '■'],
		['background:olive', 'olive', '■'],
		['background:aqua', 'aqua', '■'],
		['background:blue', 'blue', '■'],
		['background:navy', 'navy', '■'],
		['background:violet', 'violet', '■'],
		['background:purple', 'purple', '■'],
		['background:fuchsia', 'fuchsia', '■'],
		['background:brown', 'brown', '■'],
		['background:silver', 'silver', '■'],
		['background:gray', 'gray', '■'],
		['background:black', 'black', '■'],
		['background:black; color:white', 'bw', 'a'],
		['background:white; float:right; color:black; margin-right:5px', 'float', 'f'],
		['background:white; float:left; color:black; margin-left:5px', 'lf', 'f'],
		['background:white; color:black; -webkit-animation: spin 5ms linear infinite; -moz-animation: spin 5ms linear infinite; animation: spin 5ms linear infinite;', '@', '@'],
		['background:white; color:black; display: inline-block; -moz-transform: scale(-1, 1); -webkit-transform: scale(-1, 1); -o-transform: scale(-1, 1); -ms-transform: scale(-1, 1); transform: scale(-1, 1);', 'hflip', 'h'],
		['background:white; color:black; display: inline-block; -moz-transform: scale(1, -1); -webkit-transform: scale(1, -1); -o-transform: scale(1, -1); -ms-transform: scale(1, -1); transform: scale(1, -1);', 'vflip', 'v'],
		['background:white; font-weight:bold; color:black', 'b', 'B'],
		['background:white; font-style:italic; color:black', 'i', 'I'],
		['background:white; text-decoration:underline; color:black', 'u', 'U'],
		['background:white; text-decoration:line-through; color:black', 's', 's'],
		['background:gold; color:red', 'd', 'D'],
		['background:black; color:gold; font-family:impact, sans-serif', 'f', 'F'],
		['background:#691227; color:#8FFF33; font-family:impact, sans-serif', 'shit', 'S'],
		['background:black; color:white', 'sp', 'sp'],
		['background:white; color:black; border:solid 2px red', '\\/', '\[\/\]']
	];

	for (i in FontsArray) {
		$('<button id="cbtn' + i + '" onclick="insertText(\'[' + FontsArray[i][1] + ']\')" />')
				.addClass('btn btn-default').attr('style', FontsArray[i][0]).text(FontsArray[i][2])
	 		.appendTo(fontsbtnwrap);
			i % 13 == 12 ? fontsbtnwrap.append('<br />') : false;
	}

	if (UI_UnicodeChars === 1 && UnicodeChars_Array.length > 0) {
		unibtnwrap = $('<div id="unibtnwrap" />')
			.appendTo(fontspanel);
		for (i in UnicodeChars_Array) {
			btn = $('<button onclick="insertText(\'' + UnicodeChars_Array[i] + '\')" />')
				.addClass('btn btn-default').text(UnicodeChars_Array[i]);
			unibtnwrap.append(btn);
			i % 13 == 12 ? unibtnwrap.append('<br />') : false;
		}
	}
}

// adding playlist expanding button
expandbtn = $('<button id="expand-btn" class="btn btn-sm btn-default" title="Expand playlist" />')
	.append('<span class="glyphicon glyphicon-resize-full"></span>')
	.prependTo("#videocontrols")
	.on("click",expandQueue);

// adding playlist scrolling button
scrollbtn = $('<button id="scroll-btn" class="btn btn-sm btn-default" title="Scroll playlist to current item" />')
	.append('<span class="glyphicon glyphicon-hand-right"></span>')
	.prependTo("#videocontrols")
	.on("click",scrollQueue);

// adding contributors button
contribbtn = $('<button id="contrib-btn" class="btn btn-sm btn-default" title="Contributors list" />')
	.append('<span class="glyphicon glyphicon-user"></span>')
	.prependTo("#videocontrols")
	.on("click",showContributors);

// adding pin-up button
pinupbtn = $('<button id="pinup-btn" class="btn btn-sm btn-default" title="Pin playlist to player" />')
	.append('<span class="glyphicon glyphicon-pushpin"></span>')
	.prependTo("#videocontrols")
	.on("click", function() {
		!PINNED ? pinUp() : unPin();
		scrollQueue();
		scrollChat();
		!pinupbtn.hasClass('btn-success') ? pinupbtn.addClass('btn-success') : pinupbtn.removeClass('btn-success');
	});

// extending 'Get URLs' function
if (UI_ExtendedGetURLs === 1) {
	$("#getplaylist").unbind()
		.on("click",getPlaylistURLs);
}

// adding background image to userlist
function loadWC() {
	while ((link = WC[Object.keys(WC)[Math.floor(Math.random() * Object.keys(WC).length)]].ul) === "") {
	}
	$("#userlist").css({'background-image':'url("' + link + '")', 'background-repeat':'no-repeat', 'background-position':'left bottom'});
}

function loadBackground() {
	while (WC[Object.keys(WC)[Math.floor(Math.random() * Object.keys(WC).length)]].bg === "") {
		var name = Object.keys(WC)[Math.floor(Math.random() * Object.keys(WC).length)];
	}
	var bcss = 'background-image:url(' + WC[name].bg + ');' + WC[name].css;
	$("body").attr("style",bcss);
}
// adding schedule button
function loadScheduleButtons() {
	ScheduleTabscontent = $('#ScheduleTabscontent').html(ScheduleTabs_Array[0][1]);
	$('#ScheduleTabscontent').hide();
	$('#motdcontent').width('500');
	for (i in ScheduleTabs_Array) {
		btn = $('<button class="btn btn-xs btn-default ScheduleTabs-btn" tab="' + i + '">')
			.text(ScheduleTabs_Array[i][0])
			.appendTo('#ScheduleTabsbuttons')
			.on("click", function() {
				var btntxt = $(this).text();
				var nr = $(this).attr('tab');
				if ($(this).hasClass('btn-success') && nr != 0) {
					$(".ScheduleTabs-btn").removeClass('btn-success');
					ScheduleTabscontent.hide();
					$('#motdcontent').width('500');
				} else {
					ScheduleTabscontent.show();
					$('#motdcontent').width('');
					SHTML = ScheduleTabs_Array[nr][1];
					$(".ScheduleTabs-btn").removeClass('btn-success');
					$('button[tab="0"]').text("Compact Schedule");
					$(this).addClass('btn-success');
					if (btntxt === "Compact Schedule") {
						SHTML = SHTML.replace(/\(/g,"<").replace(/\)/g,">");
						$(this).text("Convert to Local Time");
					} else if (btntxt === "Convert to Local Time") {
						SHTML = convertToTimeZone(SHTML).replace(/\(/g,"<").replace(/\)/g,">");
						$(this).text("Close Schedule");
					} else if (btntxt === "Close Schedule") {
						$(".ScheduleTabs-btn").removeClass('btn-success');
						ScheduleTabscontent.hide();
						$(this).text("Compact Schedule");
						$('#motdcontent').width('500');
					}
					ScheduleTabscontent.html(SHTML);
				}
		});
	}
}
function convertToTimeZone(data) {
	var sHTML = cHTML = data.replace(/</g,"(").replace(/>/g,")")
	sHTML = sHTML.match(/\(strong\)(.+?):\(\/strong\)/gi);
	for (i in sHTML) {
		sHTML[i] = sHTML[i].replace(/(\(|:\(\/)strong\)/gi,"");
		sHTML[i] = ((((parseInt(sHTML[i].split(":")[0]) + (sHTML[i].search(/PM|12(.+?)/) > -1 ? 12 : 0)) * 60 + parseInt(sHTML[i].split(":")[1].split(" ")[0]))/60 - STIMEZONE) + UCONF.ltim)%24;
		sHTML[i] < 0 ? sHTML[i] += 24 : '';
		cHTML = cHTML.replace(/\(strong\)(.+?):\(\/strong\)/,"<strong>" + (Math.floor(sHTML[i])%12 < 1 ? 12 : Math.floor(sHTML[i])%12) + ":" + sHTML[i]%1*60 + (sHTML[i]%1*60 < 10 ? "0" : "") + (sHTML[i] >= 12 ? " PM" : " AM") + ":</strong>");
	}
	return cHTML;
}
if (HIDEMOTD && $("#motd").html().length - MOTDCACHE.length > 20) {
	HIDEMOTD = false;
	MOTDCACHE = $("#motd").html();
	setOpt(CHANNEL.name + "_MOTDCACHE", MOTDCACHE);
}
UI_Schedule === 1 ? loadScheduleButtons() : '';

// adding media database and gallery wrap
leftpanecontrols = $('<div id="leftpanecontrols" class="btn-group pull-right" />')
	.prependTo("#leftpane");

// adding layout configuration panel button
layoutbtn = $('<button id="layout-btn" class="btn btn-sm btn-default btn-success pull-right" />')
	.html('<span class="glyphicon glyphicon-cog"></span> Layout')
	.prependTo(leftpanecontrols)
	.on("click",toggleConfigPanel);
$("#playlistmanagerwrap").show();

// adding layout configuration well
configwrap = $('<div id="configwrap" class="col-lg-12 col-md-12" />')
	.appendTo("#leftpane-inner");
configwell = $('<div id="config-well" class="well form-horizontal" />')
	.appendTo(configwrap);

// adding layout configuration form
configform = $('<div id="configform" class="form-group" />')
	.appendTo(configwell);

$('<div class="col-lg-3 col-md-3">Global Layout</div>')
	.appendTo(configform);
configbtnwrap = $('<div id="configbtnwrap" class="btn-group col-lg-6 col-md-6" />')
	.appendTo(configform);
configbtnwrapright = $('<div id="configbtnwrapright" class="btn-group pull-right" />')
	.appendTo(configform);

if (UI_FontsBtn === 1) {
	fontsbtn = $('<button id="fonts-btn" class="btn btn-sm btn-default" title="Display fonts panel" />')
		.html('<i class="glyphicon glyphicon-font"></i></button>')
		.appendTo(configbtnwrap)
		.on("click", function() {
			toggleDiv(fontspanel);
			!fontsbtn.hasClass('btn-success') ? fontsbtn.addClass('btn-success') : fontsbtn.removeClass('btn-success');
		});
}

function createEmoteList(array) {
	lookuplist.html('');
	for (i in array) {
		lookuplistitem = $('<div class="lookuplistitem" name="' + i + '">' + array[i].name + '</div>')
			.appendTo(lookuplist)
			.on("click",function() {
				insertText($(this).text());
			}).hover(function() {
				$("#emotelookupimg").attr("src",array[$(this).attr("name")].image);
			});
	}
	inputFieldNotEmpty();
}
function inputFieldNotEmpty() {
	textinput = $("#lookupbox").val().toLowerCase();
	$(".lookuplistitem").each(function() {
		$(this).text().toLowerCase().indexOf(textinput) > -1 ? $(this).show() : $(this).hide();
	});
}
// adding chat emotes button
if (UI_EmotesBtn === 1) {
	var sort_by = function(field, reverse, primer) {
		var key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]};
		reverse = [-1, 1][+!!reverse];
		return function (a, b) {
			return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
		} 
	}
	lookuppanel = $('<div id="lookuppanel"/>').appendTo(chatpanel).hide();
	$('<input id="lookupbox" type="text" placeholder="Filter emotes"/>').on("keyup", function() {
		inputFieldNotEmpty();
	}).appendTo(lookuppanel);
	sortupbtn = $('<button id="sortupbtn" class="btn btn-xs btn-default" title="Sort ascending"/>')
		.html('<i class="glyphicon glyphicon-arrow-up"></i></button>')
		.on("click",function() {
			sortup = CHANNEL.emotes.slice(0).sort(sort_by('name',true, function(a) {return a.toUpperCase()}));
			createEmoteList(sortup);
		}).appendTo(lookuppanel);
	sortdownbtn = $('<button id="sortdownbtn" class="btn btn-xs btn-default" title="Sort decending"/>')
		.html('<i class="glyphicon glyphicon-arrow-down"></i></button>')
		.on("click",function() {
			sortdown = CHANNEL.emotes.slice(0).sort(sort_by('name',false, function(a) {return a.toUpperCase()}));
			createEmoteList(sortdown);
		}).appendTo(lookuppanel);
	resetsortbtn = $('<button id="resetsortbtn" class="btn btn-xs btn-default" title="Reset sort"/>')
		.html('<i class="glyphicon glyphicon-remove-circle"></i></button>')
		.on("click",function() {
			createEmoteList(CHANNEL.emotes);
		}).appendTo(lookuppanel);
	emotesdl = $('<button id="emotesdl" class="btn btn-xs btn-default" title="Download emotes" sytle="float:right"/>')
		.text('DL')
		.on("click",grabemotes).appendTo(lookuppanel);
	lookuplist = $('<div id="lookuplist"/>').appendTo(lookuppanel);
	lookupimage = $('<div id="lookupimage"/>').appendTo(lookuppanel);
	elkupimg = $('<img id="emotelookupimg" src="HOLDER"/>')
		.appendTo(lookupimage);
	lookupbtn = $('<button id="lookupemotes" class="btn btn-sm btn-default" title="Lookup emotes"/>')
		.html('<i class="glyphicon glyphicon-picture"></i></button>')
		.appendTo(configbtnwrap)
		.on("click",function() {
			toggleDiv("#lookuppanel");
			if (!lookupbtn.hasClass('btn-success')) {
				lookupbtn.addClass('btn-success');
				createEmoteList(CHANNEL.emotes);
				$("#lookupbox").focus();
			} else {
				lookupbtn.removeClass('btn-success');
				lookuplist.html('');
			}
		});
}

if (UI_WC === 1) {
	waifubtn = $('<button id="waifu-btn" class="btn btn-sm btn-default" title="Change waifu picture" />')
		.html('<i class="glyphicon glyphicon-heart"></i></button>')
		.appendTo(configbtnwrap)
		.on("click",loadWC);

	if (UI_Pixel === 1) {
		pixelbtn = $('<button id="pixel-btn" class="btn btn-sm btn-default" title="Toggle chat pixels" />')
			.html('<i class="glyphicon glyphicon-user"></i></button>')
			.appendTo(configbtnwrap)
			.on("click", function() {
				if (!PIXEL) {
					$(".user").parent().show();
					pixelbtn.addClass('btn-success');
				} else {
					$(".user").parent().hide();
					pixelbtn.removeClass('btn-success');
				}
				PIXEL ? PIXEL = false : PIXEL = true;
				setOpt(CHANNEL.name + "_PIXEL", PIXEL);
		});
		if (PIXEL) {
			pixelbtn.addClass('btn-success');
		}
	}
	waifubtn2 = $('<button id="waifu-btn2" class="btn btn-sm btn-default" title="Change waifu BG" />')
		.html('<i class="glyphicon glyphicon-heart-empty"></i></button>')
		.appendTo(configbtnwrap)
		.on("click",loadBackground);
}

// adding chat commands button
if (UI_CommandsBtn === 1 && UI_UserCommands === 1) {
	chathelpbtn = $('<button id="chathelp-btn" class="btn btn-sm btn-default" title="Help menu"/>')
		.html('<span class="glyphicon glyphicon-exclamation-sign"></span>')
		.appendTo(configbtnwrap)
		.on("click",showChatHelp);
}

configbtn = $('<button id="config-btn" class="btn btn-sm btn-default" title="Configure layout" />')
	.html('<i class="glyphicon glyphicon-cog"></i></button>')
	.appendTo(configbtnwrap)
	.on("click",showConfig);
  
fluidbtn = $('<button id="fluid-btn" class="btn btn-sm btn-default btn-success pull-right">Fluid</button>')
	.appendTo(configbtnwrapright)
	.on("click", function() {
		toggleFluidLayout();
		FLUID = !FLUID;
		setOpt(CHANNEL.name + "_FLUID", FLUID);
		!FLUID ? fluidbtn.removeClass('btn-success') : fluidbtn.addClass('btn-success');
	});

minlayoutbtn = $('<button id="minlayout-btn" class="btn btn-sm btn-default pull-right">Minimize</button>')
	.appendTo(configbtnwrapright)
	.on("click",toggleMinLayout);

// adding player transformation buttons
if (UI_TransformationBtns === 1) {
	transformationform = $('<div id="transformationform" class="form-group" />')
		.appendTo(configwell);
	$('<div class="col-lg-3 col-md-3">Player Rotations</div>')
		.appendTo(transformationform);
	transformationwrap = $('<div id="transformationwrap" class="btn-group col-lg-6 col-md-6" />')
		.appendTo(transformationform);
		
	mirrorxbtn = $('<button id="mirrorx-btn" class="btn btn-sm btn-default" title="Mirror X player" />')
		.html('<span class="glyphicon glyphicon-resize-horizontal"></span>')
		.appendTo(transformationwrap)
		.on("click", function() {
			if ($("#ytapiplayer").hasClass('mX')) {
				$("#ytapiplayer").removeClass('mX');
				mirrorxbtn.removeClass('btn-success');
			} else {
				$("#ytapiplayer").addClass('mX');
				mirrorxbtn.addClass('btn-success');
			}
		});
	
	mirrorybtn = $('<button id="mirrory-btn" class="btn btn-sm btn-default" title="Mirror Y player" />')
		.html('<span class="glyphicon glyphicon-resize-vertical"></span>')
		.appendTo(transformationwrap)
		.on("click", function() {
			if ($("#ytapiplayer").hasClass('mY')) {
				$("#ytapiplayer").removeClass('mY');
				mirrorybtn.removeClass('btn-success');
			} else {
				$("#ytapiplayer").addClass('mY');
				mirrorybtn.addClass('btn-success');
			}
		});
	
	rotatebtn = $('<button id="rotate-btn" class="btn btn-sm btn-default" title="Rotate player" />')
		.html('<span class="glyphicon glyphicon-repeat"></span>')
		.appendTo(transformationwrap)
		.on("click", function() {
			if ($("#ytapiplayer").hasClass('rotate')) {
				$("#ytapiplayer").removeClass('rotate').addClass('mY');
			} else if ($("#ytapiplayer").hasClass('mY')) {
				$("#ytapiplayer").removeClass('mY').addClass('vertical');
			} else if ($("#ytapiplayer").hasClass('vertical')) {
				$("#ytapiplayer").removeClass('vertical');
			} else {
				$("#ytapiplayer").addClass('rotate');
			}
		});
		
	verticalbtn = $('<button id="vertical-btn" class="btn btn-sm btn-default" title="Vertical player" />')
		.html('<span class="glyphicon glyphicon-arrow-up"></span>')
		.appendTo(transformationwrap)
		.on("click", function() {
			if ($("#ytapiplayer").hasClass('vertical')) {
				$("#ytapiplayer").removeClass('vertical');
				verticalbtn.removeClass('btn-success');
			} else {
				$("#ytapiplayer").addClass('vertical');
				verticalbtn.addClass('btn-success');
			}
		});
	
	spin2btn = $('<button id="spin2-btn" class="btn btn-sm btn-default" title="Spin player" />')
		.html('<span class="glyphicon glyphicon-question-sign"></span>')
		.appendTo(transformationwrap)
		.on("click", function() {
			if ($("#ytapiplayer").hasClass('spin2')) {
				$("#ytapiplayer").removeClass('spin2');
				spin2btn.removeClass('btn-success');
			} else {
				$("#ytapiplayer").addClass('spin2');
				spin2btn.addClass('btn-success');
			}
		});

}

function toggleUNTZ() {
	if (UNTZ) {
		UNTZINT = setInterval(function() {
			if ($(".untz").length) {
				$(".untz").css("color", getRandomColor());
			}
		}, 60);
		untzbtn.removeClass('btn-danger');
	} else {
		clearInterval(UNTZINT);
		untzbtn.addClass('btn-danger');
	}
}

// adding fast commands and volume buttons
if (UI_QuickCommandsBtns === 1) {
	funcbtnform = $('<div id="funcbtnform" class="form-group" />')
		.appendTo(configwell);
	$('<div class="col-lg-3 col-md-3">Command Buttons</div>')
		.appendTo(funcbtnform);
	funcbtnwrap = $('<div id="funcbtnwrap" class="btn-group col-lg-6 col-md-6" />')
		.appendTo(funcbtnform);
	if (UI_QuickCommandsBtns === 1) {
		afkbtn = $('<button id="afk-btn" class="btn btn-default btn-sm" title="Toggle AFK status">/afk</button>')
			.appendTo(funcbtnwrap)
			.on("click", function() {
				socket.emit("chatMsg", {msg: '/afk'});
			});
		clearbtn = $('<button id="clear-btn" class="btn btn-default btn-sm" title="Clear chat">/clear</button>')
			.appendTo(funcbtnwrap)
			.on("click", function() {
				if (confirm('Are you sure to clear the chat window?')) {
					socket.emit("chatMsg", {msg: '/clear'});
				}
		});
		untzbtn = $('<button id="untz-btn" class="btn btn-default btn-sm" title="Toggle untz">untz</button>')
			.appendTo(funcbtnwrap)
			.on("click", function() {
				UNTZ = !UNTZ;
				setOpt(CHANNEL.name + "_UNTZ", UNTZ);
				toggleUNTZ();
			});
		toggleClearBtn();
	}
}

// adding selector with player display modes
if (UI_DisplayModeSel === 1) {
	modeform = $('<div id="modeform" class="form-group" />')
		.appendTo(configwell);
	$('<div class="col-lg-3 col-md-3">Display Mode</div>')
		.appendTo(modeform);
	modewrap = $('<div id="modewrap" class="col-lg-7 col-md-7" />')
		.appendTo(modeform);
	modesel = $('<select id="mode-sel" class="form-control" />')
		.append('<option value="syMode">synchtube mode</option>')
		.append('<option value="kMode">cinema mode</option>')
		.append('<option value="chMode">chatroom mode</option>')
		.append('<option value="sMode">silent mode</option>')
		.append('<option value="rMode">radio mode</option>')
		.appendTo(modewrap)
		.on("change", function() {
			$("#config-btn, #configbtnwrap br").hide();
			$("#min-layout").parent().hide();
			PLAYER.mediaType=="jw" ? $("#mediarefresh").click() : '';
			setMode(modesel.val());
			scrollQueue();
			scrollChat();
			showPlayer();
		});

}

// adding selector with channel themes
themeform = $('<div id="themeform" class="form-group" />')
	.appendTo(configwell);
$('<div class="col-lg-3 col-md-3">Personal Theme</div>')
	.appendTo(themeform);
themewrap = $('<div id="themewrap" class="col-lg-7 col-md-7" />')
	.appendTo(themeform);

themesel = $('<select id="theme-sel" class="form-control" />')
	.append('<option value="/css/themes/light.css"># Light</option>')
	.append('<option value="/css/themes/bootstrap-theme.min.css"># Bootstrap</option>')
	.append('<option value="/css/themes/slate.css"># Slate</option>')
	.append('<option value="/css/themes/cyborg.css"># Cyborg</option>')
	.appendTo(themewrap)
	.on("change", function() {
		chatfunc.detach();
		$("#playlistmanagerwrap").show();
		CHATFUNC = false;
		USERTHEME = themesel.val();
		setUserCSS();
		setOpt(CHANNEL.name + "_theme", USERTHEME);
	});

ThemesCSS.length > 0 ? themesel.append('<option value="" class="theme-header" disabled>additional themes</option>') : '';
for (i in ThemesCSS) {
	themesel.append('<option value="' + ThemesCSS[i][1] + '">' + ThemesCSS[i][0] + '</option>');
}

themesel.val(USERTHEME);

// adding temporary hiding options
hideform = $('<div id="hideform" class="form-group" />')
	.appendTo(configwell);

$('<div class="col-lg-3 col-md-3">Temporary Hide</div>')
	.appendTo(hideform);
hidewrap = $('<div id="hidewrap" class="btn-group col-lg-6 col-md-6" />')
	.appendTo(hideform);
  
hidemotdbtn = $('<button id="hidemotd-btn" class="btn btn-sm btn-default" title="Hide MOTD">MOTD</button>')
	.appendTo(hidewrap)
	.on("click", function() {
		HIDEMOTD = !HIDEMOTD;
		setOpt(CHANNEL.name + "_HIDEMOTD", HIDEMOTD);
		toggleDiv("#motdrow");
		HIDEMOTD ? hidemotdbtn.addClass('btn-danger') : hidemotdbtn.removeClass('btn-danger');
		HIDEMOTD ? hidemotdbtn.attr("title","Show MOTD") : hidemotdbtn.attr("title","Hide MOTD");
});

hideannbtn = $('<button id="hideann-btn" class="btn btn-sm btn-default" title="Hide Announcements">Ann</button>')
	.appendTo(hidewrap)
	.on("click", function() {
		HIDEANN = !HIDEANN;
		setOpt(CHANNEL.name + "_HIDEANN", HIDEANN);
		toggleDiv("#announcements");
		HIDEANN ? hideannbtn.addClass('btn-danger') : hideannbtn.removeClass('btn-danger');
		HIDEANN ? hideannbtn.attr("title","Show Announcements") : hideannbtn.attr("title","Hide Announcements");
});

hideplbtn = $('<button id="hidepl-btn" class="btn btn-sm btn-default" title="Hide Playlist">PL</button>')
	.appendTo(hidewrap)
	.on("click", function() {
		HIDEPL = !HIDEPL;
		setOpt(CHANNEL.name + "_HIDEPL", HIDEPL);
		toggleDiv("#queue");
		toggleDiv("#plmeta");
		HIDEPL ? hideplbtn.addClass('btn-danger') : hideplbtn.removeClass('btn-danger');
		HIDEPL ? hideplbtn.attr("title","Show Playlist") : hideplbtn.attr("title","Hide Playlist");
});

hidehfbtn = $('<button id="hidehf-btn" class="btn btn-sm btn-default" title="Hide Header and Footer">H/F</button>')
	.appendTo(hidewrap)
	.on("click", function() {
		HIDEHF = !HIDEHF;
		setOpt(CHANNEL.name + "_HIDEHF", HIDEHF);
		$("nav").css('display')!="none" ? headerMode("fixed") : headerMode(UCONF.header);
		toggleDiv("nav");
		toggleDiv("footer");
		HIDEHF ? hidehfbtn.addClass('btn-danger') : hidehfbtn.removeClass('btn-danger');
		HIDEPL ? hidehfbtn.attr("title","Show Header and Footer") : hidehfbtn.attr("title","Hide Header and Footer");
});
  
if (UI_WC === 1) {
	hidebgbtn = $('<button id="hidebg-btn" class="btn btn-sm btn-default" title="Hide background button and/or revert to channel background">BG</button>')
		.appendTo(hidewrap)
		.on("click", function() {
	  		HIDEBG = !HIDEBG;
			setOpt(CHANNEL.name + "_HIDEBG", HIDEBG);
			toggleDiv(waifubtn2);
		  	if (HIDEBG) {
				$("body").removeAttr("style")
				hidebgbtn.addClass('btn-danger');
			} else {
				if (STREAMER.name !== "NONE" && STREAMER.link !== "") {
					var bcss = 'background-image:url(' + STREAMER.link + ');' + STREAMER.css;
					$("body").attr("style",bcss);
				}
				hidebgbtn.removeClass('btn-danger');
			}
	});
	if (HIDEBG) {
		waifubtn2.hide();
		hidebgbtn.addClass('btn-danger');
	}
}

function removeImages() {
	$('.pm-buffer.linewrap img, #messagebuffer.linewrap img').each(function() {
		var EBLname =  $(this).parents("div").attr("class") || "chat-msg-" + $(this).parents(".panel-body").siblings().text().slice(0,-1);
		var EBLnum = EMOTEBL.indexOf(EBLname.split("chat-msg-")[1]);
		var UEBLnum = USEREMOTEBL.indexOf(EBLname.split("chat-msg-")[1]);
		var EBLtitle = $(this).attr('title') || ":emote:";
		console.log(EBLtitle);
		if ((HIDEIMG || ((EBLnum > -1 || UEBLnum > -1) && EBLtitle.indexOf(":") > -1)) && !$(this).hasClass("user")) {
			if ($(this).hasClass("channel-emote")) {
				$('<a class="channel-emote" target="_blank">' + $(this).prop('title') + '</a>').attr('href', $(this).prop('src')).attr('title', $(this).prop('title')).insertBefore(this);
			} else if ($(this).hasClass("spoilerpic")) {
				$(this).text($(this).before('SPOILER'));
			} else if ($(this).hasClass("lotterypic")) {
				$(this).text($(this).before('WINNER'));
			} else {
				$(this).text($(this).before($(this).attr("src")));
			}
			$(this).remove();
		}
	});
}
function showImages() {
	$(".pm-buffer.linewrap, #messagebuffer.linewrap").find('a[href^="http"]').each(function() {
		var EBLname =  $(this).parents("div").attr("class") || "chat-msg-" + $(this).parents(".panel-body").siblings().text().slice(0,-1);
		var EBLnum = EMOTEBL.indexOf(EBLname.split("chat-msg-")[1]);
		var UEBLnum = USEREMOTEBL.indexOf(EBLname.split("chat-msg-")[1]);
		var chkclass = $(this).attr('class');
		if (chkclass !== undefined && chkclass !== "webm" && (EBLnum < 0 && UEBLnum < 0)) {
			var isanemote = false;
			if (chkclass === "channel-emote") {
				for (i in CHANNEL.emotes) {
					if ($(this).prop('title') === CHANNEL.emotes[i].name) {
						img = $('<img class="channel-emote" />').attr('src', this.href).attr('title', $(this).prop('title'));
						isanemote = true;
						break;
					}
				}
			} else if (chkclass === "spinpic") {
				img = $('<img class="spin" />').attr('src', this.href);
			} else if (chkclass === "rightfloatpic") {
				img = $('<img class="rightfloat" />').attr('src', this.href);
			} else if (chkclass === "leftfloatpic") {
				img = $('<img class="leftfloat" />').attr('src', this.href);
			} else if (chkclass === "spoilerpic") {
				img = $('<img class="spoilerpic" />').attr('src', 'http://i.imgur.com/xzD4vqc.png');
			} else if (chkclass === "lotterypic") {
				img = $('<img class="lotterypic" />').attr('src', Lottery.image);
			} else {
				img = $('<img class="picturelink" />').attr('src', this.href);
			}
			isanemote ? $(this).before(img).remove() : $(this).html(img);
		}
	});
	!SPINTOG ? $(".spin").addClass("nospin").removeClass("spin") : '';
	setTimeout(scrollChat, 1000);
	$(".pm-buffer.linewrap img, #messagebuffer.linewrap img").css({"max-height": MAXH + "px","max-width": MAXW + "px"});
}
hideimgbtn = $('<span id="hideimg-btn" class="label label-default pull-right pointer" title="Hide Images">H</span>')
	.insertAfter("#modflair")
	.on("click", function() {
		HIDEIMG = !HIDEIMG;
		setOpt(CHANNEL.name + "_HIDEIMG", HIDEIMG);
	  	if (HIDEIMG) {
			removeImages();
			hideimgbtn.addClass('btn-danger');
			hideimgbtn.attr("title", "Show Images");
		} else {
			hideimgbtn.removeClass('btn-danger');
			showImages();
	 		hideimgbtn.attr("title", "Hide Images");
		}
});

// adding embedding options
function createWEBM() {
	if (EMBEDVID && UI_EmbeddingMedia === 1) {
		$(".webm").each(function() {
			splitwebmlink = this.href;
			vid = $('<video class="embedvid" />').attr('src', splitwebmlink).prop('loop', LOOPWEBM).prop('muted', 'true').prop('autoplay', AUTOVID)
				.on("click", function() {
					$(this).get(0).paused ? $(this).get(0).play() : $(this).get(0).pause();
					return false;
				}).on("dblclick", function() {
					window.open(splitwebmlink, '_blank');
					return false;
				});
			UI_MediaControls === 1 ? vid.attr('controls', '') : '';
			SCROLLCHAT ? scrollChat() : '';
			$(this).before(vid).remove();
		});
		$(".pm-buffer.linewrap video, #messagebuffer.linewrap video").css({"max-width": MAXW + "px","max-height": MAXH + "px"});
	}
}

if (UI_EmbeddingMedia === 1) {
	embedform = $('<div id="embedform" class="form-group" />').appendTo(configwell);
	$('<div class="col-lg-3 col-md-3 conf-cap">Embeds<span id="embed-help">[?]</span></div>')
	  .appendTo(embedform);
	embedwrap = $('<div id="embedwrap" class="btn-group col-lg-6 col-md-6" />').appendTo(embedform);
	txt = 'This option lets you see Webms directly on the chat, instead of links.\n'
	  + 'Double click on a Webm to open in the new tab.\n'
	  + 'All Webms are muted by default.';
	$("#embed-help").prop("title", txt).on("click", function() {
		alert(txt);
	});
	embedvid = $('<button id="embedvid-btn" class="btn btn-sm btn-default" title="Toggle Webm">Webm</button>')
		.appendTo(embedwrap)
	 	.on("click", function() {
			EMBEDVID = !EMBEDVID;
			setOpt(CHANNEL.name + "_EMBEDVID", EMBEDVID);
			toggleDiv(autovid);
			toggleDiv(loopwebm);
			!EMBEDVID ? embedvid.removeClass('btn-success') : embedvid.addClass('btn-success');
			if (!EMBEDVID) {
				$('.pm-buffer.linewrap video, #messagebuffer.linewrap video').each(function() {
					$('<a target="_blank" class="webm"></a>').attr('href', $(this).prop('src')).insertBefore(this).text($(this).prop('src'));
				}).remove();
			} else {
				createWEBM();
			}
	  });
	!EMBEDVID ? embedvid.removeClass('btn-success') : embedvid.addClass('btn-success');
	autovid = $('<button id="autoplay-btn" class="btn btn-sm btn-default" title="Toggle Webm Autoplay">Autoplay</button>')
		.appendTo(embedwrap)
		.on("click", function() {
			AUTOVID = !AUTOVID;
			setOpt(CHANNEL.name + "_AUTOVID", AUTOVID);
			!AUTOVID ? autovid.removeClass('btn-success') : autovid.addClass('btn-success');
		});
	!AUTOVID ? autovid.removeClass('btn-success') : autovid.addClass('btn-success');
	!EMBEDVID ? autovid.hide() : '';
	
	loopwebm = $('<button id="loopplay-btn" class="btn btn-sm btn-default" title="Toggle Webm Loop">Loop</button>')
		.appendTo(embedwrap)
		.on("click", function() {
			LOOPWEBM = !LOOPWEBM;
			setOpt(CHANNEL.name + "_LOOPWEBM", LOOPWEBM);
			!LOOPWEBM ? loopwebm.removeClass('btn-success') : loopwebm.addClass('btn-success');
			$(".pm-buffer.linewrap video, #messagebuffer.linewrap video").prop('loop', LOOPWEBM);
		});
	!LOOPWEBM ? loopwebm.removeClass('btn-success') : loopwebm.addClass('btn-success');
	!EMBEDVID ? loopwebm.hide() : '';
}

// rearranging footer
UI_FlagCounter === 1 ? rightfooter = $('<span id="rightfooter">' + FlagCounter_HTML + '</span>').appendTo("footer .container") : '';
UI_UserStatistics === 1 ? leftfooter = $('<span id="leftfooter"></span>').appendTo("footer .container") : '';

// updating user visits
USERVISITS++;
setOpt(CHANNEL.name + "_visits", USERVISITS);

if (UI_UserStatistics === 1) {
	$('<span>My visits: </span><span class="badge footer-badge">' + USERVISITS + '</span><span> / </span>')
		.appendTo(leftfooter);
	$('<span>Current online time: </span><span id="onlinetime" class="badge footer-badge">0:00</span>')
		.appendTo(leftfooter);
	setInterval(onlineTime, 60000);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ----- Chat and window extensions and events ----- */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function addStuffOnLogin() {
	$('div[class^="chat-msg"]').each(function() {
		var user = $(this).attr("class").replace("chat-msg-","");
		var children = $(this).children();
		var pixs = $('<span ' + (PIXEL ? '' : ' style="display:none"') + '/>').insertAfter(children.eq(0));
		if (WC[user] !== undefined) {
			pixs.html('<img class="user" src="' + WC[user].pix + '" title="' + user + '" height="16"> ');
		}
	});
	/*var sreg = /<span class="subchannel" title="(.+?)"><\/span>/; //SUBCHANNEL
	$(".subchannel").each(function() {
		var schan = $(this);
		var spar = schan.parent().parent();
		var schtml = spar.html();
		if (schtml.search(sreg) > -1) {
			smat = schtml.match(sreg);
			spar.html(smat[0] + schtml.replace(smat[0],""));
			if (smat[1] != SUBCHAN) {
				spar.hide();
			} else {
				spar.show();
			}
			spar.attr("title", spar.attr("class").replace(/chat-msg-| nick-hover/g,"") + " wrote this in the " + SCNAMES[parseInt(smat[1])-1] + " Channel (" + smat[1] + ").");
			//spar.children().eq(3).text(spar.children().eq(3).text().trim());
		}
	});
	$("#chatline").attr("placeholder",SCNAMES[SUBCHAN-1] + " Channel (" + SUBCHAN + ")");*/
})();

EVENT.a.volume = .1;
// add pixel before or after name, always show name or not
function formatChatMessage(data, last) {
	if (data.msg === '/reload') {
		$("#userlist").find('span[class$=userlist_owner],span[class$=userlist_siteadmin]').each(function() {
			if ($(this).text() === data.username) {
				location.reload();
				RELOADED = true;
			}
		});
		(CLIENT.rank > 2 && !RELOADED) ? socket.emit("chatMsg", {msg:'/kick ' + data.username + ' Quit trying to reload and enable javascript.'}) : RELOADED = false;
	}
	// Backwards compat
	if (!data.meta || data.msgclass) {
		data.meta = {
			addClass: data.msgclass,
			// And the award for "variable name most like Java source code" goes to...
			addClassToNameAndTimestamp: data.msgclass
		};
	}
	// Phase 1: Determine whether to show the username or not
	var skip = data.username === last.name;
	// Prevent impersonation by abuse of the bold filter
	if(data.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/))
		skip = false;
	if (UCONF.showname === "yes" || data.meta.forceShowName)
		skip = false;
	if(data.meta.addClass === "server-whisper")
		skip = true;
	data.msg = execEmotes(data.msg);
	last.name = data.username;
	var div = $("<div/>");
	/* drink is a special case because the entire container gets the class, not
	   just the message */
	if (data.meta.addClass === "drink") {
		div.addClass("drink");
		data.meta.addClass = "";
	}
	// Add timestamps (unless disabled)
	if (USEROPTS.show_timestamps) {
		var time = $("<span/>").addClass("timestamp").appendTo(div);
		var timestamp = new Date(data.time).toTimeString().split(" ")[0];
		time.text("["+timestamp+"] ");
		if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
			time.addClass(data.meta.addClass);
		}
	}
	// Add username
	var name = $('<span id="namespan"/>');
	if (!skip) {
		name.appendTo(div);
	}
	var username = $("<strong/>").addClass("username").text(data.username + ": ").appendTo(name);
	if (data.meta.modflair) {
		name.addClass(getNameColor(data.meta.modflair));
	}
	if (data.meta.addClass && data.meta.addClassToNameAndTimestamp) {
		name.addClass(data.meta.addClass);
	}
	if (data.meta.superadminflair) {
		name.addClass("label")
			.addClass(data.meta.superadminflair.labelclass);
		$("<span/>").addClass(data.meta.superadminflair.icon)
			.addClass("glyphicon")
			.css("margin-right", "3px")
			.prependTo(name);
	}
	if (UI_Pixel === 1 && WC[data.username] !== undefined) {
		var pixel = '<span ' + (PIXEL ? '' : ' style="display:none"') + '><img class="user" src="' + WC[data.username].pix + '" title="' + data.username + '" height="' + UCONF.pixh + '"/> </span>';
		if (UCONF.showname === "no" && skip) {
			$(pixel).appendTo(div);
		} else {
			UCONF.pixl === "before" ? $(pixel).insertBefore(name) : $(pixel).insertAfter(name);
		}
	}
	/*var subregex = /<span class="subchannel" title="(.+?)"><\/span>/;
	if (data.msg.search(subregex) > -1) { //SUBCHANNEL
		var submatch = data.msg.match(subregex);
		data.msg = data.msg.replace(submatch[0],"").trim();
		$(submatch[0]).appendTo(div);
	}*/
	// Add the message itself
	var message = $("<span/>").appendTo(div);
	if (data.msg.indexOf("<marquee") > -1) {
		data.msg = data.msg.replace(/\[\/\]/g, "</span></marquee>");
		if (!MQTOG) {
			data.msg = data.msg.replace(/<marquee(.+?)>/g, "<dmarquee$1>");
		}
	} else {
		data.msg = data.msg.replace(/\[\/\]/g, "</span>");
	}
	if (!SPINTOG) {
		data.msg = data.msg.replace(/<(.+?)class="spin">/g, '<$1class="nospin">');
	}
	if ((HIDEIMG || (EMOTEBL.indexOf(data.username) > -1 || USEREMOTEBL.indexOf(data.username) > -1)) && data.msg.search(/<img(.+?)>/g) > -1 && (data.msg.match(/<img.*?title="(.*?)".*?>/g).indexOf(":") || 0) > -1) {
		data.msg = data.msg
			.replace(/<img class="channel-emote" src="(.+?)" title="(.+?)">/g,'<a class="channel-emote" target="_blank" href="$1" title="$2">$2</a>')
			.replace(/<img class="spoilerpic"(.+?)>/g,'SPOILER')
			.replace(/<img class="lotterypic"(.+?)>/g,'WINNER')
			.replace(/<img(.+?)src="(.+?)"(.+?)>/g,'$2');
	}
	data.msg = data.msg
		.replace(/<img(.+?)max-width:(.+?)>/g,'<img$1max-width: ' + MAXH + 'px; max-height: ' + MAXW + 'px;">')
		.replace(/<img(.+?)>/g,'<img$1style="max-width: ' + MAXH + 'px; max-height: ' + MAXW + 'px;">');
	message[0].innerHTML = data.msg;
	// For /me the username is part of the message
	if (data.meta.action) {
		name.remove();
		message[0].innerHTML = data.username + " " + data.msg;
	}
	if (data.meta.addClass) {
		message.addClass(data.meta.addClass);
	}
	if (data.meta.shadow) {
		div.addClass("chat-shadow");
	}

	div.find("img").load(function () {
		if (SCROLLCHAT) {
			scrollChat();
		}
	});
	timer = new Date();
	if (timer > EVENT.date && document.hasFocus() && data.msg.search(/(http|https):\/\/exhentai\.org\//gi) > -1) {
		EVENT.a.play();
		EVENT.date = timer.setSeconds(timer.getSeconds() + 3600);
		setOpt(CHANNEL.name + "_EVENT", EVENT.date);
	}
	return div;
}

function formatUserlistItem(div) {
	var data = {
		name: div.data("name") || "",
		rank: div.data("rank"),
		profile: div.data("profile") || { image: "", text: ""},
		leader: div.data("leader") || false,
		icon: div.data("icon") || false,
		afk: div.data("afk") || false
	};
	var name = $(div.children()[1]);
	name.removeClass();
	name.css("font-style", "");
	name.addClass(getNameColor(data.rank));
	div.find(".profile-box").remove();

	if (data.afk) {
		div.addClass("userlist_afk");
	} else {
		div.removeClass("userlist_afk");
	}

	if (div.data("meta") && div.data("meta").muted) {
		div.addClass("userlist_muted");
	} else {
		div.removeClass("userlist_muted");
	}

	if (div.data("meta") && div.data("meta").smuted) {
		div.addClass("userlist_smuted");
	} else {
		div.removeClass("userlist_smuted");
	}

	var profile = null;
	/*
	 * 2015-10-19
	 * Prevent rendering unnecessary duplicates of the profile box when
	 * a user's status changes.
	 */
	name.unbind("mouseenter");
	name.unbind("mousemove");
	name.unbind("mouseleave");

	name.mouseenter(function(ev) {
		if (profile)
			profile.remove();

		var top = ev.clientY + 5;
		var horiz = ev.clientX;
		profile = $("<div/>")
			.addClass("profile-box linewrap")
			.css("top", top + "px")
			.appendTo(div);

		if(data.profile.image) {
			$("<img/>").addClass("profile-image")
				.attr("src", data.profile.image)
				.appendTo(profile);
		}
		$("<strong/>").text(data.name).appendTo(profile);

		if (WC[data.name] !== undefined && WC[data.name].title !== "") {
			$("<br/>").appendTo(profile);
			$('<strong style="color:green"/>').text(WC[data.name].title).appendTo(profile);
		}
		var meta = div.data("meta") || {};
		if (meta.ip) {
			$("<br/>").appendTo(profile);
			$("<em/>").text(meta.ip).appendTo(profile);
		}
		if (meta.aliases) {
			$("<br/>").appendTo(profile);
			$("<em/>").text("aliases: " + meta.aliases.join(", ")).appendTo(profile);
		}
		$("<hr/>").css("margin-top", "5px").css("margin-bottom", "5px").appendTo(profile);
		$("<p/>").text(data.profile.text).appendTo(profile);

		if ($("body").hasClass("synchtube")) horiz -= profile.outerWidth();
		profile.css("left", horiz + "px")
	});
	name.mousemove(function(ev) {
		var top = ev.clientY + 5;
		var horiz = ev.clientX;
		if (UCONF.userlist === "right") horiz -= $(".profile-box").outerWidth();
		profile.css("left", horiz + "px")
			.css("top", top + "px");
	});
	name.mouseleave(function() {
		profile.remove();
	});
	var icon = div.children()[0];
	icon.innerHTML = "";
	// denote current leader with a star
	if(data.leader) {
		$("<span/>").addClass("glyphicon glyphicon-star-empty").appendTo(icon);
	}
	if(data.afk) {
		name.css("font-style", "italic");
		$("<span/>").addClass("glyphicon glyphicon-time").appendTo(icon);
	}
	if (data.icon) {
		$("<span/>").addClass("glyphicon " + data.icon).prependTo(icon);
	}
}
function updateStreamTitles() {
	$(".userlist_item").each(function() {
		formatUserlistItem($(this));
	});
}
updateStreamTitles();

// fix userlist sorting due to pixels
function sortUserlist() {
	var slice = Array.prototype.slice;
	var list = slice.call($("#userlist .userlist_item"));
	list.sort(function (a, b) {
		var r1 = $(a).data("rank");
		var r2 = $(b).data("rank");
		var afk1 = $(a).find(".glyphicon-time").length > 0;
		var afk2 = $(b).find(".glyphicon-time").length > 0;
		var name1 = a.children[1].innerHTML.toLowerCase();
		var name2 = b.children[1].innerHTML.toLowerCase();
		if (name1.indexOf('>') > -1) {
			name1 = name1.substr(name1.indexOf('>')+1);
		}
		if (name2.indexOf('>') > -1) {
			name2 = name2.substr(name2.indexOf('>')+1);
		}
		if (USEROPTS.sort_afk) {
			if (afk1 && !afk2)
				return 1;
			if (!afk1 && afk2)
				return -1;
		}

		if (USEROPTS.sort_rank) {
			if (r1 < r2)
				return 1;
			if (r1 > r2)
				return -1;
		}

		return name1 === name2 ? 0 : (name1 < name2 ? -1 : 1);
	});

	list.forEach(function (item) {
		$(item).detach();
	});
	list.forEach(function (item) {
		$(item).appendTo($("#userlist"));
	});
	showProfiles();
}

// fix auto name complete sorting due to pixels
function chatTabComplete() {
	var words = $("#chatline").val().split(" ");
	var current = words[words.length - 1];
	if (current.indexOf("http://") > -1 || current.indexOf("https://") > -1) {
		if (current.indexOf(":pic") > -1) {
			current = current.replace(":pic", ":sp");
		} else if (current.indexOf(":sp") > -1) {
			current = current.replace(":sp", ":webm");
		} else if (current.indexOf(":webm") > -1) {
			current = current.replace(":webm", ":float");
		} else if (current.indexOf(":float") > -1) {
			current = current.replace(":float", ":lf");
		} else if (current.indexOf(":lf") > -1) {
			current = current.replace(":lf", ":@");
		} else if (current.indexOf(":@") > -1) {
			current = current.replace(":@", "");
		} else {
			current += ":pic";
		}
	} else if (current.indexOf("[m") > -1 && current.indexOf("]") > -1) {
		instances = current.split("[m");
		for (i = 1; i < instances.length; i++) {
			otherpart = instances[i].split("]");
			number = parseInt(otherpart[0], 10);
			if (typeof number === "number") {
				replacement = '[m' + (number + 1) + ']' + otherpart[1];
				current = current.replace('[m' + number + ']' + otherpart[1], replacement);
			}
		}
	} else {
		current = words[words.length - 1].toLowerCase();
		if (!current.match(/^[\w-]{1,20}$/)) {
			return;
		}
		var __slice = Array.prototype.slice;
		var usersWithCap = __slice.call($("#userlist").children()).map(function (elem) {
			var formatName = elem.children[1].innerHTML;
			if (formatName.indexOf('>') > -1) {
				formatName = formatName.substr(formatName.indexOf('>')+1);
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
	
		// continually trim off letters until all prefixes are the same
		var changed = true;
		var iter = 21;
		while (changed) {
			changed = false;
			var first = users[0];
			for (var i = 1; i < users.length; i++) {
				if (users[i] !== first) {
					changed = true;
					break;
				}
			}
	
			if (changed) {
				users = users.map(function (name) {
					return name.substring(0, name.length - 1);
				});
			}
	
			// In the event something above doesn't generate a break condition, limit
			// the maximum number of repetitions
			if (--iter < 0) {
				break;
			}
		}
	
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

// fix formatting and sending chat messages
$("#chatline, #chatbtn").unbind();

$("#chatline").on("keydown", function(ev) {
	if (ev.which == 13) {
		if (CHATTHROTTLE) {
			return;
		}
		msg0 = $("#chatline").val();
		msg = $("#chatline").val();
		if (msg0 === '/reload' && CLIENT.rank < 3) {
			alert('You have no permission to reload the channel.');
			return;
		}
		if (msg.trim()) {
			msg.indexOf('fc2.com') > -1 ? BLLINK = true : '';
			msg = prepareMessage(msg.trim());
			meta = {};
			if (COMMAND) {
				socket.emit("chatMsg", {msg:msg0});
				msg = '➥ ' + msg;
				COMMAND = false;
			}
			if (USEROPTS.adminhat && CLIENT.rank >= 255) {
				msg = '/a ' + msg;
			} else if (USEROPTS.modhat && CLIENT.rank >= Rank.Moderator) {
				meta.modflair = CLIENT.rank;
			}
			if (CLIENT.rank >= 2 && msg.indexOf("/m ") === 0) {
				meta.modflair = CLIENT.rank;
				msg = msg.substring(3);
			}
			msg.indexOf('fc2.com') > -1 ? '' : socket.emit("chatMsg", {msg:msg, meta:meta});
			BLLINK ? userChatStats(msg) : userChatStats(msg0);
			BLLINK = false;
			CHATHIST.push($("#chatline").val());
			CHATHISTIDX = CHATHIST.length;
			$("#chatline").val('');
		}
		return;
	} else if (ev.which == 9) {
		chatTabComplete();
		ev.preventDefault();
		return false;
	} else if (ev.which == 38) {
		if (CHATHISTIDX == CHATHIST.length) {
			CHATHIST.push($("#chatline").val());
		}
		if (CHATHISTIDX > 0) {
			CHATHISTIDX--;
			$("#chatline").val(CHATHIST[CHATHISTIDX]);
		}
		ev.preventDefault();
		return false;
	} else if (ev.which == 40) {
		if (CHATHISTIDX < CHATHIST.length - 1) {
			CHATHISTIDX++;
			$("#chatline").val(CHATHIST[CHATHISTIDX]);
		}
		ev.preventDefault();
		return false;
	} else if (UI_Shortcuts === 1) {
		if (Shortcuts.ctrl[ev.which] !== undefined && ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
			insertText(Shortcuts.ctrl[ev.which]);
			ev.preventDefault();
			return false;
		} else if (Shortcuts.alt[ev.which] !== undefined && !ev.ctrlKey && !ev.shiftKey && ev.altKey) {
			insertText(Shortcuts.alt[ev.which]);
			ev.preventDefault();
			return false;
		} else if (Shortcuts.ctrlshift[ev.which] !== undefined && ev.ctrlKey && ev.shiftKey && !ev.altKey) {
			insertText(Shortcuts.ctrlshift[ev.which]);
			ev.preventDefault();
			return false;
		} else if (Shortcuts.ctrlalt[ev.which] !== undefined && ev.ctrlKey && !ev.shiftKey && ev.altKey) {
			insertText(Shortcuts.ctrlalt[ev.which]);
			ev.preventDefault();
			return false;
		} else if (Shortcuts.altshift[ev.which] !== undefined && !ev.ctrlKey && ev.shiftKey && ev.altKey) {
			insertText(Shortcuts.altshift[ev.which]);
			ev.preventDefault();
			return false;
		}
	}
});
$("#chatbtn").on("click", function() {
	msg0 = $("#chatline").val();
	msg = $("#chatline").val();
	if (msg0 === '/reload' && CLIENT.rank < 3) {
		alert('You have no permission to reload the channel.');
		return;
	}
	if (msg.trim()) {
		msg.indexOf('fc2.com') > -1 ? BLLINK = true : '';
		msg = prepareMessage(msg.trim());
		if (COMMAND) {
			socket.emit("chatMsg", {msg:msg0});
			msg = '➥ ' + msg;
			COMMAND = false;
		}
		socket.emit("chatMsg", {msg:msg});
		BLLINK ? userChatStats(msg) : userChatStats(msg0);
		BLLINK = false;
		$("#chatline").val('');
	}
});

$("#cs-motdtext").on("keydown", function(ev) {
	if (ev.which == 83 && ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
		socket.emit("setMotd", {
			motd: $("#cs-motdtext").val()
		});
		return false;
	}
});

$("#cs-csstext").on("keydown", function(ev) {
	if (ev.which == 83 && ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
		socket.emit("setChannelCSS", {
			css: $("#cs-csstext").val()
		});
		return false;
	}
});

$("#cs-jstext").on("keydown", function(ev) {
	if (ev.which == 83 && ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
		socket.emit("setChannelJS", {
			js: $("#cs-jstext").val()
		});
		return false;
	}
});

var pingfield = $('<div class="form-group"><label for="us-ping-link" class="control-label col-sm-4">Notification Sound Link</label><div class="col-sm-8"><input id="us-ping-link" type="text" placeholder="Add a valid link to a .mp3, .ogg, .wav  file." class="form-control cs-textbox"></div></div>')
	.insertBefore($('label[for="us-sendbtn"]').parent().parent().parent());
var pinglevel = $('<div class="form-group"><label for="us-ping-level" class="control-label col-sm-4">Notification Sound Volume</label><div class="col-sm-8"><input id="us-ping-level" type="text" placeholder="Enter a valid volume from 0 to 100. Default is 100." class="form-control" onblur=""></div></div>')
	.insertAfter(pingfield);

$("#us-ping-link").val(PINGLINK).on("keyup", function() {
	PINGLINK = $(this).val();
	$(CHATSOUND).attr("src",PINGLINK !== "" ? PINGLINK : "/boop.wav");
	setOpt(CHANNEL.name + "_PINGLINK", PINGLINK);
});
PINGLINK !== "" ? $(CHATSOUND).attr("src",PINGLINK) : '';

$("#us-ping-level").val(PINGVOL*100).on("keyup", function() {
	var pvol = $(this).val();
	if (isNaN(pvol)) {
		$(this).val("");
	} else {
		PINGVOL = parseFloat(pvol !== "" ? pvol : 100)/100;
		if (PINGVOL > 1) {
			PINGVOL = 1;
			$(this).val(100);
		} else if (PINGVOL < 0) {
			PINGVOL = 0;
			$(this).val(0);
		}
		CHATSOUND.volume = PINGVOL;
		setOpt(CHANNEL.name + "_PINGVOL", PINGVOL);
		CHATSOUND.play();
	}
}).focusout(function() {
	CHATSOUND.pause();
});
CHATSOUND.volume = PINGVOL;

// optional chat joining message
if (UI_JoinText === 1) {
	JoinText_Message === "" ? JoinText_Message = "joined" : '';
	//socket.emit("chatMsg", {msg: '/me [CH' + SUBCHAN + ']' + JoinText_Message});
	socket.emit("chatMsg", {msg: '/me ' + JoinText_Message});
	CLIENT.name !== "" ? JOINED = true : '';
}

// optional chat leaving message
if (UI_LeaveText === 1) {
	window.onbeforeunload = function() {
		if (!LEFT) {
			LeaveText_Message === "" ? LeaveText_Message = "left" : '';
			//socket.emit("chatMsg", {msg: '/me [CH' + SUBCHAN + ']' + LeaveText_Message});
			socket.emit("chatMsg", {msg: '/me ' + LeaveText_Message});
			LEFT = true;
		}
	};
}

// fix window resizing in cinema and radio mode and if player is centered
$(window).resize(function() {
	(modesel.val()=="chMode" || modesel.val()=="sMode" || modesel.val()=="rMode") ? setMode(modesel.val()) : '';
	showProfiles();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function chatStuff() {
	if (UI_PixelChange === 1) {
		$(".channel-emote").each(function() {	// Edit/add links at the top of the file.
			var name = $(this).attr("title").toLowerCase();
			var checklink = $(this).attr("src");
			if (PCL[name] !== undefined && checklink === PCL[name].link) {
				var linknum = Math.floor(Math.random() * PCL[name].linkArray.length);
				$(this).attr("src", PCL[name].linkArray[linknum]);
			}
		});
	}
	/*$(".subchannel").each(function() { //SUBCHANNEL
		var sc = $(this);
		var scp = sc.parent();
		if (scp.attr("title") === undefined) {
			var curchan = sc.attr("title");
			if (curchan != SUBCHAN && SUBCHAN !== 3) {
				scp.hide();
			} else {
				scp.show();
			}
			scp.attr("title", scp.attr("class").replace(/chat-msg-| nick-hover/g,"") + " wrote this in the " + SCNAMES[parseInt(curchan)-1] + " Channel (" + curchan + ").");
		}
	});*/
	SPOILER ? rmvSpoil() : '';
	colorAdmins();
	createWEBM();
}

// setting global sockets
socket.on("pm",chatStuff);
socket.on("chatMsg", chatStuff);
socket.on("setMotd", function(data) {
	UI_Schedule === 1 ? loadScheduleButtons() : '';
	clearTimeout(UPDTOUT);
	updateCurrentlyAiring();
	if (hidemotdbtn.hasClass("btn-danger") && data !== MOTDCACHE) {
		hidemotdbtn.click();
	}
	MOTDCACHE = data;
	setOpt(CHANNEL.name + "_MOTDCACHE", MOTDCACHE);
});
socket.on("channelOpts", setUserCSS);
socket.on("channelCSSJS", setUserCSS);
socket.on("setPermissions", function() {
	if (UI_Func === 1) {
		chatfunc.detach();
		CHATFUNC = false;
	}
});
var q240480 = $('li[title="240"],li[title="480"]');
socket.on("mediaUpdate", function() {
	if (PLAYER.mediaType == "gd") {
		q240480.hide();
	} else if (q240480.css("display") == "none") {
		q240480.show();
	}
});
socket.on("usercount", function() {
	colorAdmins();
	updatePixels();
	//autoMod();
	showProfiles();
});
socket.on("setAFK", function() {
	showProfiles();
});
socket.on("addUser", function() {
	showProfiles();
	emoteMuteBtns();
});
socket.on("changeMedia", function(data) {
	UI_TitleBarDescription === 1 ? changeTitle() : '';
	UI_DisplayModeSel === 1 ? setModeAfterVideoChange() : '';
	$("#findtime").text() !== 'Video Time' ? $("#findtime").click() : '';
	if (!$("#videowrap").length) {
		TitleBarDescription_Caption.length < 1 ? TitleBarDescription_Caption = 'Currently Playing:' : '';
		$("#currenttitle").text(TitleBarDescription_Caption + " " + data.title);
	}
});
socket.on("setUserRank", function() {
	toggleClearBtn();
	showProfiles();
	if (UI_Func === 1) {
		chatfunc.detach();
		CHATFUNC = false;
	}
});
socket.on("login", function() {
	patchWrap();
	if (UI_JoinText === 1 && CLIENT.name && CLIENT.guest && !JOINED) {
		//socket.emit("chatMsg", {msg: '/me [CH' + SUBCHAN + ']' + JoinText_Message});
		socket.emit("chatMsg", {msg: '/me ' + JoinText_Message});
		JOINED = true;
	}
});
// setting final layout after loading
setLayout();
scrollChat();
scrollQueue();
setUserCSS();

/* ----- END OF LIBRARY ----- */

createWEBM();
toggleUNTZ();
if (!FLUID) {
	toggleFluidLayout();
	fluidbtn.removeClass('btn-success');
}
if (!LAYOUTBOX) {
	toggleDiv(configwrap);
	layoutbtn.removeClass('btn-success');
}
if (HIDEPLAYER) {
	hideplayer.addClass('btn-danger')
	coverPlayer();
}
if (HIDEMOTD) {
	toggleDiv("#motdrow");
	hidemotdbtn.addClass('btn-danger');
	hidemotdbtn.attr("title","Show MOTD");
}
if (HIDEANN) {
	toggleDiv("#announcements");
	hideannbtn.addClass('btn-danger');
	hideannbtn.attr("title","Show Announcements");
}
if (HIDEPL) {
	toggleDiv("#queue");
	toggleDiv("#plmeta");
	hideplbtn.addClass('btn-danger');
	hideplbtn.attr("title","Show Playlist");
}
if (HIDEHF) {
	toggleDiv("nav");
	toggleDiv("footer");
	hidehfbtn.addClass('btn-danger');
	hidehfbtn.attr("title","Show Header and Footer");
}
if (HIDEIMG) {
	hideimgbtn.addClass('btn-danger');
	hideimgbtn.attr("title", "Show Images");
}
$("#messagebuffer.linewrap img, .pm-buffer.linewrap img").css({"max-height": MAXH + "px","max-width": MAXW + "px"});
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
	ADDONESECOND = setInterval(function() {
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

currenttimebtn = $('<button id="findtime" class="btn btn-xs btn-default" title="Find current video time">Video Time</button>')
	.appendTo("#chatheader")
	.on("click", function() {
		if ($(this).text() !== 'Video Time') {
			$(this).text('Video Time');
			clearInterval(ADDONESECOND);
			socket.removeListener("mediaUpdate", currentVideoTime);
		} else {
			socket.on("mediaUpdate", currentVideoTime);
		}
});
function updatePixels() {
	if (UI_Pixel === 1 && Object.keys(WC).length > 0) {
		$("div.userlist_item").each(function() {
			for (name in WC) {
				if ($(this).children("span").eq(1).text() == name) {
					$(this).children("span").eq(1).html('<img src="' + WC[name].pix + '" height="16"/>'+ name);
					break;
				}
			}
		});
	} else {
		setTimeout(updatePixels,125);
	}
}
updatePixels();

function checkRank(currentstreamer, nextstreamer, WEEKEND, WEEKENDMODS) {
	WEEKENDMODS = WEEKENDMODS.split(" ");
	currentstreamer = currentstreamer.toLowerCase();
	nextstreamer = nextstreamer.toLowerCase();
	var slice2 = Array.prototype.slice;
	var list2 = slice2.call($("#userlist .userlist_item"));
	for (item in list2) {
		NAME = $(list2[item]).data("name");
		RANK = $(list2[item]).data("rank");
		WEEKENDMOD = false;
		if (WEEKEND === "TRUE") {
			for (zzz in WEEKENDMODS) {
				if (NAME.toLowerCase() === WEEKENDMODS[zzz].toLowerCase()) {
					WEEKENDMOD = true;
					break;
				}
			}
		}
		if (FruitBowl[NAME] === undefined) {
			NAME = NAME.toLowerCase();
			console.log(NAME + "\t" + currentstreamer + "\t" + nextstreamer);
			if (NAME !== currentstreamer && NAME !== nextstreamer && RANK > 1 && RANK < 4 && !WEEKENDMOD) {
				socket.emit("chatMsg",{msg:"/rank " + NAME + " " + 1});
			} else if ((RANK < 3 && NAME === currentstreamer) || (WEEKENDMOD && RANK === 1)) {
				socket.emit("chatMsg",{msg:"/rank " + NAME + " " + 3});
			} else if (RANK <= 3 && RANK !== 2 && NAME === nextstreamer && NAME !== currentstreamer && !WEEKENDMOD) {
				socket.emit("chatMsg",{msg:"/rank " + NAME + " " + 2});
			}
		}
	}
}

(function runWC() {
	if (UI_WC === 1 && Object.keys(WC).length > 0) {
		if (WC[CLIENT.name] !== undefined && WC[CLIENT.name].ul !== "") {
			$("#userlist").css({'background-image':'url("' + WC[CLIENT.name].ul + '")', 'background-repeat':'no-repeat', 'background-position':'left bottom'});
		} else {
			loadWC();
		}
	} else {
		setTimeout(runWC,125);
	}
})();

function colorAdmins() {
	if (UI_ColorAdmins === 1) {
		$(".userlist_item").each(function() {
			var admin = $(this).children("span").eq(1);
			var fruit = admin.text();
			if (FruitBowl[fruit] !== undefined) {
				$(".chat-msg-" + fruit + ">.userlist_owner>.username," 
				+ ".chat-msg-" + fruit + ">.userlist_siteadmin>.username,"
				+ ".chat-msg-" + fruit + ">.userlist_op>.username").css("cssText", "color: " + FruitBowl[fruit] + " !important;");
				if (!SHOWPROF) {
					(admin.hasClass("userlist_owner") || admin.hasClass("userlist_siteadmin") || admin.hasClass("userlist_op")) ? admin.css("cssText", "color: " + FruitBowl[fruit] + " !important;") : admin.removeAttr("style");
				}
			}
		});
	}
}
colorAdmins();

function getScrollbarWidth() {
	var outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.width = "100px";
	outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

	document.body.appendChild(outer);

	var widthNoScroll = outer.offsetWidth;
	// force scrollbars
	outer.style.overflow = "scroll";

	// add innerdiv
	var inner = document.createElement("div");
	inner.style.width = "100%";
	outer.appendChild(inner);		

	var widthWithScroll = inner.offsetWidth;

	// remove divs
	outer.parentNode.removeChild(outer);

	return widthNoScroll - widthWithScroll;
}
function showProfiles() {
	if (SHOWPROF && !SHOWING) {
		SHOWING = true;
		var oddeven = 0;
		var ulwidth = $("#userlist").width();
		var picrow = ulwidth > 75 ? 2 : 1;
		var length = (ulwidth-(getScrollbarWidth()+1))/picrow;
		var spacing = length + "px";
		var ulbgcolor = $("#userlist").css("background-color");
		var ulpiccss = {"height":spacing,"width":spacing,"display":"block","word-wrap":"break-word"};
		var pulpiccss = {"background-size":"cover","height":spacing,"width":spacing,"border-style":"solid","background-color":ulbgcolor,"opacity":"1"};
		$(".userlist_item").each(function() {
			var pspan = $(this);
			var uspan = pspan.children().eq(1);
			var pimg = pspan.data("profile").image || "";
			var pafk = pspan.hasClass("userlist_afk");
			removeProfile(pspan);
			oddeven === 1 && picrow > 1 ? oddeven-- : oddeven++;
			pimg !== "" ? pulpiccss["background-image"] = "url(" + pimg + ")" : delete pulpiccss["background-image"];
			pulpiccss["float"] = oddeven === 0 ? "right" : "";
			pulpiccss["margin-top"] = oddeven === 0 ? "-" + spacing : "1px";
			pulpiccss["border-color"] = STREAMER.name === uspan.text() ? "#00ff00" : (pafk ? "red" : "");
			pulpiccss["border-width"] = STREAMER.name === uspan.text() ? "2px" : "1px";
			pulpiccss["opacity"] = pafk ? "0.45" : "1";
			ulpiccss["font-size"] = pimg === "" ? "" : "0pt";
			if (pafk) {
				pspan.mouseenter(function () {pspan.css("opacity","1");});
				pspan.mouseleave(function () {pspan.css("opacity","0.45");});
			}
			pspan.children().eq(0).hide();
			pspan.css(pulpiccss);
			uspan.css(ulpiccss);
		});
		SHOWING = false;
	}
}
function removeProfile(rdiv) {
	rdiv.unbind("mouseenter").unbind("mouseleave").removeAttr("style");
	rdiv.children().eq(0).removeAttr("style");
	rdiv.children().eq(1).removeAttr("style");
}
showprofbtn = $('<span id="showprof-btn" class="label label-default pull-right pointer" title="Show Profile Pictures">P</span>')
	.insertAfter("#modflair")
	.on("click", function() {
		SHOWPROF = !SHOWPROF;
		setOpt(CHANNEL.name + "_SHOWPROF", SHOWPROF);
	  	if (SHOWPROF) {
			showProfiles();
			showprofbtn.addClass('btn-success');
			showprofbtn.attr("title", "Show Profile Pictures");
		} else {
			$(".userlist_item").each(function() {
				removeProfile($(this))
			});
			colorAdmins();
			showprofbtn.removeClass('btn-success');
	 		showprofbtn.attr("title", "Hide Profile Pictures");
		}
});
if (SHOWPROF) {
	showprofbtn.addClass('btn-success');
	showProfiles();
}

LOADED = true;

_loadMediaPlayer = loadMediaPlayer;
loadMediaPlayer = function(data) {
	selectRandomLink(data);
    _loadMediaPlayer(data);
}

_handleMediaUpdate = handleMediaUpdate;
handleMediaUpdate = function(data) {
	selectRandomLink(data);
    _handleMediaUpdate(data);
}

const PlaylistDelimiter = "???streamurl???";

var playListData = "";
function selectRandomLink(data) {
	if (typeof data.id !== "undefined") {
		$('.serverLinks').remove();
		if (data.type === "fi") {
			if (data.id.indexOf(PlaylistDelimiter) > -1) {
				LeaderLink = data.id;
				var rdmLinks = data.id.split(PlaylistDelimiter);
				playListData = data;
				for(var i=0;i<rdmLinks.length;i++){
					$("<button class='btn btn-sm btn-default serverLinks' title='" + rdmLinks[i] + "' leaderLink='" + LeaderLink + "'>Server " + (i+1) + "</button>").appendTo("#playercontrols").on("click",function(){
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
					if(i==0)
						$(".serverLinks").addClass('btn-success');
				}
			}
		}
	}
}

$("#mediaurl").on("paste", function() {
	setTimeout(function() {
		if ($("#addfromurl-title-val").length !== 0) {
			var mediaUrl = decodeURIComponent($("#mediaurl")[0].value).split("/");
			mediaUrl = mediaUrl[mediaUrl.length-1].split("?")[0].split(".");
			var mediaTitle = "";
			for (i = 0; i < mediaUrl.length-1; i++) {
				mediaTitle += mediaUrl[i] + ".";
			}
			mediaTitle = mediaTitle.substring(0, mediaTitle.length-1);
			$("#addfromurl-title-val")[0].value = mediaTitle;
		}
	}, 250);
});

/*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	$("#chatheader").remove();
}*/

//window.location.href = "http://cytu.be/r/toilet";
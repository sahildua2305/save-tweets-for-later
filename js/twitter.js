	
function create(){
	var d=document.createElement("div");
	d.className="action-save-container";
	var e=document.createElement("a");
	e.setAttribute("class","ProfileTweet-action js-tooltip");
	e.setAttribute("id","save-link");
	e.setAttribute("href","#");
	e.setAttribute("data-original-title","Save tweet for later");
	var o=0;
	var f=document.createElement("span");
	f.setAttribute("class","icon icon-save");
	f.setAttribute("id","save-extension");
	//f.setAttribute("onclick","saveTweet()");
	f.setAttribute("style","background-image: url(https://pbs.twimg.com/media/B4fddhjCIAEgDy8.png) !important;");
	$(e).append(f);
	$(d).append(e);
	var tweets = $(".tweet");
	var len = tweets.length;
	for(i=len-1;i>=0;i--){
		if(!$(tweets[i]).has(".action-save-container").length){
			var actionDiv = $(tweets[i]).find(".ProfileTweet-actionList");
			$(d).clone().appendTo(actionDiv);
		}
	}
}
var refreshInterval = 1500;
setInterval(function(){create();},refreshInterval);

$(document).ready(function(){
	var e = document.getElementsByClassName("ProfileTweet-action");
	
	function saveTweet(e){
		var tweetLink = $(e).parent();
		tweetLink = tweetLink.parent();
		tweetLink = tweetLink.parent();
		tweetLink = tweetLink.find(".tweet-timestamp");
		console.log(tweetLink);
		console.log("recorded");
	}
	
	$(e).click(function(e){
		//var tweetLink = $(e).parent().parent().parent().find(".tweet-timestamp").attr('href');
		//var tweetLink = e.parents("div.tweet").find(".tweet-timestamp").attr("href");
		saveTweet(e);
		//var tweetLink = e.parentElement.nodeName;
		//console.log(tweetLink);
		return false;
	});
});
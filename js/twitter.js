
function create(){
	var d=document.createElement("div");
	d.className="action-save-container";
	var e=document.createElement("a");
	e.setAttribute("class","ProfileTweet-action js-tooltip");
	e.setAttribute("href","#");
	e.setAttribute("data-original-title","Save tweet for later");
	var o=0;
	var f=document.createElement("span");
	f.setAttribute("class","icon icon-save");
	f.setAttribute("style","background-image: url(https://pbs.twimg.com/media/B4fddhjCIAEgDy8.png) !important;");
	$(e).append(f);
	$(d).append(e);
	var tweets = $(".tweet");
	var len = tweets.length;
	for(i=len-1;i>=0;i--){
		if(!$(tweets[i]).has(".action-save-container").length){
			//if($(tweets[i]).has(".ProfileTweet-actionList u-cf js-actions").length){
				var actionDiv = $(tweets[i]).find(".ProfileTweet-actionList");
				$(d).clone().appendTo(actionDiv);
		}
	}
}
//create();

var refreshInterval = 1500;
function exp(){
	var e = document.createElement("p");
	e.className = "experiments";
	var tweet = document.getElementsByClassName('tweet');
	//console.log(tweet);
	$("<p>testing</p>").appendTo(".tweet");
}
//exp();

setInterval(function(){create();},refreshInterval);

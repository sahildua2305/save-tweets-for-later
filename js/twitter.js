
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
	f.setAttribute("id","save-extension");
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

$("#save-extension").click(function(){
	console.log("s");
});
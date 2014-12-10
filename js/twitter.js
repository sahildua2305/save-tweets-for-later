
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
	f.setAttribute("style","background-image: url(https://d2jjx1cmnmp22i.cloudfront.net/safari/twttr-sprite@"+(o?"2x":"1x")+".png) !important;");
	$(e).append(f);
	$(d).append(e);
	var tweets = $(".tweet");
	for(var i=0;i<tweets.length;i++){
		if(!$(tweets[i]).has(".action-save-container").length){
			console.log("already has");
		}
		else{
			console.log("needs to be added");
		}
	}
	//$(d).appendTo(new_tweets);
}
//create();

var refreshInterval = 1050;
function exp(){
	var e = document.createElement("p");
	e.className = "experiments";
	var tweet = document.getElementsByClassName('tweet');
	//console.log(tweet);
	$("<p>testing</p>").appendTo(".tweet");
}
//exp();

setInterval(function(){create();},1000);

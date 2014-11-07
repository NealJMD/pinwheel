var ANIMATION_DURATION_SECONDS = 0.8;
var ANIMATION_DURATION_MS = ANIMATION_DURATION_SECONDS * 1000;
var PAGE_TOP_MARGIN = 20;
var PAGE_MIN_HEIGHT = 635;
var CONTENT_HEIGHT_LIMIT = 433;
var BLADE_HEIGHT = 232;
var currentPage;
var animating = false;
var useRotationUI = false;
var isChrome = false;

$(document).ready(function(){
	$("a.external_link").bind("click", externalLink);
	$("a.nav_link").bind("click", linkToPage);
	checkBrowser();
	if(useRotationUI){
		Shadowbox.init();
	}
	$(".content").each(function(){
		if($(this).height() > CONTENT_HEIGHT_LIMIT){
			var contentPageObject = $(this).parent(".content_page"); // stored in var so it can be accessed in timeout
			contentPageObject.css("-webkit-transition", "none");
			contentPageObject.css("-moz-transition", "none");
			contentPageObject.height($(this).height()+100);
			setTimeout(function(){
				contentPageObject.css("-webkit-transition", "all "+ANIMATION_DURATION_SECONDS+"s ease-in-out");
				contentPageObject.css("-moz-transition", "all "+ANIMATION_DURATION_SECONDS+"s ease-in-out");
			}, 1);
		}
	});
	if(!useRotationUI){
		$(".content_page").each(function(){
			hidePage("#"+$(this).attr("id"));
		});
	}
	if(location.hash == "" || location.hash == "#"){
		location.hash = "#home";
	}
	setTimeout(function(){
		revealPage(location.hash+"_page");
	}, 2);	
});
function checkBrowser(){
	if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){ //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
 		var version=new Number(RegExp.$1)
 		if(version >= 4){
 			useRotationUI = true;
 		}
 	}else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
 		var version = new Number(RegExp.$1);
 		if(version >= 11){
 			useRotationUI = true;
 			isChrome = true;
 		}
 	}else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
 		var version = new Number(RegExp.$1);
 		if(version >= 5){
 			useRotationUI = true;
 		}
 	}else{
 		$("#browser_critique").css("display", "block");
 	}
}
function revealPage(page){
	if($(page).height() > PAGE_MIN_HEIGHT){
		var pageHeight = $(page).height()+PAGE_TOP_MARGIN;
		accomodateSize(pageHeight);
		$(".content_page").each(function(){
			if("#"+$(this).attr("id") != page){
				if(useRotationUI){
					$(this).css("top", pageHeight+"px"); 
				}else{
					$(this).css("top", (pageHeight+BLADE_HEIGHT)+"px");
				}
			}else{
				$(".content_page").css("top", (PAGE_TOP_MARGIN+BLADE_HEIGHT)+"px");
			}
		});
	}else if($("#content_container").height() > PAGE_MIN_HEIGHT+PAGE_TOP_MARGIN){
		accomodateSize(PAGE_MIN_HEIGHT+PAGE_TOP_MARGIN);
		if(useRotationUI){
			$(".content_page").css("top", (PAGE_TOP_MARGIN+BLADE_HEIGHT)+"px");
			if(isChrome){
				$("html").css("height", "755px");
			}
		}else{
			$(".content_page").css("top", (PAGE_MIN_HEIGHT+PAGE_TOP_MARGIN+BLADE_HEIGHT)+"px");
		}
	}
	currentPage = page;
	location.hash = page.slice(0, -5);	
	if(useRotationUI){
		animating = true;
		setTimeout(function(){
			animating = false;
		}, ANIMATION_DURATION_MS);
		$(page).css("-webkit-transform", "rotate(0deg)");
		$(page).css("-moz-transform", "rotate(0deg)");
	}else{
		$(page).css("top", (BLADE_HEIGHT+PAGE_TOP_MARGIN)+"px");
	}
}
function accomodateSize(pageHeight){ 
	$("#content_container").height(pageHeight);
	$("#footer").css("top", pageHeight+"px");
}
function linkToPage(event){
	var linkID = $(this).attr("href");
	if(linkID != currentPage && !animating){
		hidePage(currentPage);
		revealPage(linkID);
	}
	return false;
}
function hidePage(page){
	if(useRotationUI){
		$(page).css("-webkit-transform", "rotate(-180deg)");
		$(page).css("-moz-transform", "rotate(-180deg)");
		setTimeout(function(){
			$(page).css("-webkit-transition", "none");
			$(page).css("-webkit-transform", "rotate(180deg)");
			$(page).css("-moz-transition", "none");
			$(page).css("-moz-transform", "rotate(180deg)");	
			var chaperone = $(page).css("-moz-transform"); // if this line isn't here, firefox4 will forget it already changed the transform value
		
		}, ANIMATION_DURATION_MS);
		setTimeout(function(){
			$(page).css("-webkit-transform", "rotate(180deg)");
			$(page).css("-moz-transform", "rotate(180deg)");	
		}, ANIMATION_DURATION_MS+25);
		setTimeout(function(){
			$(page).css("-webkit-transition", "all "+ANIMATION_DURATION_SECONDS+"s ease-in-out");
			$(page).css("-moz-transition", "all "+ANIMATION_DURATION_SECONDS+"s ease-in-out");
		}, ANIMATION_DURATION_MS+50);
	}else{
		$(page).css("top", ($("#content_container").height()+BLADE_HEIGHT)+"px");
	}
}
function externalLink(event){
	window.open( $(this).attr('href') );
	return false;
}

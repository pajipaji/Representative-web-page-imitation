//jq写
$(function() {
	var nav = $("#h"); //得到导航对象
	var win = $(window); //得到窗口对象
	var sc = $(document); //得到document文档对象。
	win.scroll(function() {
		if (sc.scrollTop() <= 70) {
			$('.h-1').removeClass("disheader");
			nav.addClass("h-f");
			nav.removeClass("h-c");
		} else {
			$('.h-1').addClass("disheader");
			nav.addClass("h-c");
		}
	});
});

//轮播图
var timer = null,
	index = 0,
	pics = byId("case-top").getElementsByTagName("div"),
	dots = byId("case-foot").getElementsByTagName("div"),
	size = pics.length;

function byId(id) {
	return typeof(id) === "string" ? document.getElementById(id) : id;
}

function stopAutoPlay() {
	if (timer) {
		clearInterval(timer);
	}
}

function startAutoPlay() {
	timer = setInterval(function() {
		++index;
		if (index >= size) {
			index = 0;
		}
		changeImg();
	}, 3000)
}

function changeImg() {
	for (var i = 0, len = dots.length; i < len; ++i) {
		dots[i].className = "";
		pics[i].style.display = "none";
	}
	dots[index].className = "case-active";
	pics[index].style.display = "block";
}

function slideImg() {
	var main = document.getElementsByClassName("banner");
	var banner = byId("case-top");
	main.onmouseover = function() {
		stopAutoPlay();
	}
	main.onmouseout = function() {
		startAutoPlay();
	}
	main.onmouseout();
	for (var i = 0, len = dots.length; i < len; ++i) {
		dots[i].id = i;
		dots[i].onclick = function() {
			index = this.id;
			changeImg();
		}
	}
}
slideImg();

//jq鼠标移入移出
$(".sign>div").hover(function() {
	$(this).css("box-shadow", " 5px 5px 15px #d6e5e6");
}, function() {
	$(this).css("box-shadow", " 5px 5px 10px #ecf7f7");
});

$(".z-partner>div").hover(function() {
	$(this).css("box-shadow", " 5px 5px 15px #d6e5e6");
}, function() {
	$(this).css("box-shadow", " 5px 5px 10px #ecf7f7");
});

//jq动画效果加鼠标移入移出
$(".team-one").hover(function() {
	this.setAttribute('class', 'teamshadow');
	$(this).animate({
		'top': '165px'
	}, 10);
}, function() {
	this.setAttribute('class', 'team-four');
	$(this).animate({
		'top': '180px'
	}, 10);
});
$(".team-two").hover(function() {
	this.setAttribute('class', 'teamshadow');
	$(this).animate({
		'top': '165px'
	}, 10);
}, function() {
	this.setAttribute('class', 'team-four');
	$(this).animate({
		'top': '180px'
	}, 10);
});
$(".team-three").hover(function() {
	this.setAttribute('class', 'teamshadow');
	$(this).animate({
		'top': '165px'
	}, 10);
}, function() {
	this.setAttribute('class', 'team-four');
	$(this).animate({
		'top': '180px'
	}, 10);
});
$(".team-four").hover(function() {
	this.setAttribute('class', 'teamshadow');
	$(this).animate({
		'top': '165px'
	}, 10);
}, function() {
	this.setAttribute('class', 'team-four');
	$(this).animate({
		'top': '180px'
	}, 10);
});
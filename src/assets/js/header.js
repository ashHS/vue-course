$(function(){
	/*换肤*/
	$('#blue').click(function(){
		$('body').css("background","url(../assets/img/bg4.jpg)");
		$('#bg').css("background","url(../assets/img/bg4.jpg)");
		$('#color li').siblings().removeClass('active');
		$('#blue').addClass("active");
	});
	$('#green').click(function(){
		alert(1)
		$('body').css("background","url(../assets/img/p5.jpg)");
		$('#bg').css("background","url(../assets/img/p5.jpg)");
		$('#color li').siblings().removeClass('active');
		$('#green').addClass("active");
	});
	$('#red').click(function(){
		$('body').css("background","url(../assets/img/bg2.jpg)");
		$('#bg').css("background","url(../assets/img/bg2.jpg)");
		$('#color li').siblings().removeClass('active');
		$('#red').addClass("active");
	});
	$('#yellow').click(function(){
		$('body').css("background","url(../assets/img/bg3.jpg)");
		$('#bg').css("background","url(../assets/img/bg3.jpg)");
		$('#color li').siblings().removeClass('active');
		$('#yellow').addClass("active");
	});
	$('#default').click(function(){
		$('body').css("background","white");
		$('#bg').css("background","");
		$('#color li').siblings().removeClass('active');
		$('#default').addClass("active");
	});
});
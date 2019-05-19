 $(function(){
	$('.click').click(function(){
		$('#two').css("display","block");
		$('#one').css("display","none");
	});
	$('.click-back').click(function(){
		$('#one').css("display","block");
		$('#two').css("display","none");
	});
 })
 
var bgmMusic = document.getElementById("bgmMusic");
	$("#on").click(function(){
		bgmMusic.pause();
		$("#on").hide(200);
		$("#off").css({"display":"inline-block"},300);
	});
	$("#off").click(function(){
		bgmMusic.play();
		$("#off").hide(200);
		$("#on").css({"display":"inline-block"},300);
	});
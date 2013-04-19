window.onload=function(){
	var audio=document.getElementById("audio");

	document.getElementById("play").onclick=function(){
		audio.play();
		console.log("play\n");
	};

	document.getElementById("pause").onclick=function(){
		audio.pause();
		console.log("pause\n");
	};

	document.getElementById("volume_down").onclick=function(){
		audio.volume-=0.2;
		console.log("volume-0.2\n");
	};

	document.getElementById("volume_up").onclick=function(){
		audio.volume+=0.2;
		console.log("volume+0.2\n");
	};

	document.getElementById("get_src").onclick=function(){
		console.log("audio.src: "+audio.src+"\n");
	};

	document.getElementById("get_current_time").onclick=function(){
		console.log("audio.currentTime: "+audio.currentTime+"\n");
	};

	document.getElementById("get_volume").onclick=function(){
		console.log("audio.volume: "+audio.volume+"\n");
	};
};
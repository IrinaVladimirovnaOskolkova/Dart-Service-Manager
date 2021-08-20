let accordion = document.getElementsByClassName("serv-ico");
let i;

for(i = 0; i < accordion.length; i++){
	accordion[i].onclick = function(){
		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("myShow");
	}
}

let btnVideo = document.getElementById("vid-btn");
let activeVideo = document.getElementById("video-active");
let video = document.getElementById("head-vid");
btnVideo.onclick = function(){
	activeVideo.style.display = "none";
	video.style.position = "relative"
}
$(document).ready(function() {
	$('#play-video').on('click', function(ev) {
		this.style.display = 'none';
		thevid = document.getElementById('video');
		thevid.style.display = 'block';
		$("#video")[0].src += "?autoplay=1";
		ev.preventDefault();

	});
});
var about = document.querySelector('.about-container');
var video = document.querySelector('.video-container');
var play_video = document.getElementById('play-video');
var yt = document.querySelector('iframe');
var aboutWidth = about.getBoundingClientRect().width;
var aboutHeight = about.getBoundingClientRect().height;
var play_videoHeight = play_video.getBoundingClientRect().height;
// var vW = video.style.width = aboutWidth + 'px';
// var vH = video.style.height = aboutHeight + 'px';
var pV = aboutHeight + 'px';
console.log(pV);
// yt.width = vW;
// yt.height = vH;
about.style.height = play_videoHeight + 'px';
// play_video.style.height = "79%";
// play_video.style.width = "100%";
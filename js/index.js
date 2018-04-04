//Logo
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 190;
var y = 100;
var radius = 75;
var currentEndAngle = 0.8;
var currentStartAngle = 0.8;
var start = setInterval(draw, 15);
var counter = 0; 
var counterClockwise = false;
 
function draw() {

	if (counter >= 120) {
        
    } else {
	
	var startAngle = currentStartAngle * Math.PI;
	var startAngle2 = (currentStartAngle * Math.PI)+0.7;
	var endAngle2 = ((currentEndAngle) * Math.PI)+0.7;

	currentEndAngle = currentEndAngle + 0.01;

	
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
		//Bottom
		drawLogo(startAngle, 0.8);
		// gray
		drawArc(startAngle2, endAngle2);
}

counter++;
}
function drawArc(startAngle2, endAngle2){
	ctx.beginPath();
    ctx.arc(x, y, radius, startAngle2, endAngle2);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "#19BD75";
    ctx.stroke();
}
function drawLogo(startAngle, endAngle){
    ctx.beginPath();
    ctx.arc(x+100, y+109, radius, startAngle, endAngle);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "#19BD75";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x-100, y+69, radius, startAngle, endAngle);
    ctx.lineWidth = 15;
    ctx.strokeStyle = "#19BD75";
    ctx.stroke();
}

//Dropdown Menu

function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//Text Increase
function textIncrease(){
    document.getElementById("home").style.fontSize = "1.3em";
    document.getElementById("newRange").style.fontSize = "1.3em";
    document.getElementById("mens").style.fontSize = "1.3em";
    document.getElementById("womens").style.fontSize = "1.3em";
    document.getElementById("aboutUs").style.fontSize = "1.3em";
}
//Text Decrease
function textDecrease(){
    document.getElementById("home").style.fontSize = "1.2em";
    document.getElementById("newRange").style.fontSize = "1.2em";
    document.getElementById("mens").style.fontSize = "1.2em";
    document.getElementById("womens").style.fontSize = "1.2em";
    document.getElementById("aboutUs").style.fontSize = "1.2em";
}
//Background Colour
var backgroundB = false;
function colourChange(){
    if (backgroundB == false){
    document.body.style.background = 'black';
        backgroundB = true;
    }
    else{
    document.body.style.background = '#fff';
        backgroundB = false;
    }
}

function pageOne(){
//Slideshow
var slide = 0;
loop();
function loop() {
    var i;
    var x = document.getElementsByClassName("slides");
    
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    slide++;
    
    if (slide > x.length) {slide = 1}    
    x[slide-1].style.display = "block";  
    setTimeout(loop, 3000); // Change img every 3 seconds
}

//Video
var video = document.getElementById("myvideo");
    //buttons
    var playbtn = document.getElementById("playbtn");
    var volCtrl = document.getElementById("volbtn");
    var fullScreenButton = document.getElementById("fullscreen");
    //sliders
    var seekbar = document.getElementById("seekbar");
    var volBar = document.getElementById("volumeBar");
    //time
    var curtime = document.getElementById("curtimetext");
    var durtime = document.getElementById("durtimetext");

//Video Buttons
    //Play Button
        function playVideo(){
            if (video.paused){
                video.play();
                playbtn.innerHTML = '<i class="material-icons">pause</i>';
            } else{
                video.pause();
                playbtn.innerHTML = '<i class="material-icons">play_arrow</i>';
            }
        } 
    //Mute Button
        function muteVolume(){
            if(video.muted) {
                video.muted = false;
                volCtrl.innerHTML = '<i class="material-icons">volume_up</i>';
            } else {
                video.muted = true;
                volCtrl.innerHTML = '<i class="material-icons">volume_off</i>';
            }
        }
    //Duration Bar    
        function seekVid(){
            var slideto = video.duration * (seekbar.value / 100);
            video.currentTime = slideto;
        } 
        function updateSeekbar(){
        //duration bar
            var newtime = video.currentTime * (100 / video.duration);
            seekbar.value = newtime;
        //duration numbers    
            var curmins = Math.floor(video.currentTime / 60);
            var cursecs = Math.floor(video.currentTime - curmins * 60);
            var durmins = Math.floor(video.duration / 60);
            var dursecs = Math.floor(video.duration - durmins * 60);

            if(cursecs < 10){ cursecs = "0" + cursecs;}
            if(dursecs < 10){ dursecs = "0" + dursecs;}
            if(curmins < 10){ curmins = "0" + curmins;}
            if(durmins < 10){ durmins = "0" + durmins;}
            curtimetext.innerHTML = curmins + ":" + cursecs;
            durtimetext.innerHTML = durmins + ":" + dursecs;
        }
    //Pause Function
        function vidPause(){
            video.pause();
            playbtn.innerHTML = '<i class="material-icons">play_arrow</i>';
        }
        function vidPlay(){
            video.play();
            playbtn.innerHTML = '<i class="material-icons">pause</i>';
        } 
    //Volume Bar
        function changeVolume(){
            video.volume = volBar.value;
        }
    //Fullscreen
        function fullScreen(){
            if(video.requestFullscreen){
                video.requestFullScreen();
            } else if (video.mozRequestFullScreen){
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen){
                video.webkitRequestFullscreen();
                }
        }

//Video Event Listeners
    playbtn.addEventListener("click", playVideo);
    volCtrl.addEventListener("click", muteVolume);
    seekbar.addEventListener("change", seekVid);
    video.addEventListener("timeupdate", updateSeekbar);
    seekbar.addEventListener("mousedown", vidPause);
    seekbar.addEventListener("mouseup", vidPlay);
    volBar.addEventListener("change", changeVolume);
    fullScreenButton.addEventListener("click", fullScreen);
}

function pageTwo(){
//Animated Image
var productContainer = document.getElementById("productContainer");
var images = productContainer.getElementsByClassName("Image");
var dimmer = document.getElementById("dimmer");
var enlargeImg = document.getElementById("enlargeImg");
var captiontxt = document.getElementById("caption");
    
function enlarge(){
    dimmer.style.visibility = " visible";
    enlargeImg.src = this.src;
    captiontxt.innerHTML = this.alt;
}
    var close = document.getElementById("close");
    close.onclick = function(){
        dimmer.style.visibility = "hidden";
    }
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", enlarge)};    
    
}
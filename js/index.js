//video
var video = document.getElementById("myvideo");

//buttons
var playbttn = document.getElementById("playbttn");
var volCtrl = document.getElementById("volbtn");
var fullScreenButton = document.getElementById("fullscreen");

//sliders
var seekbar = document.getElementById("seekbar");
var volBar = document.getElementById("volumeBar");

//time
var curtime = document.getElementById("curtimetext");
var durtime = document.getElementById("durtimetext");

//Play Button
    function playVideo(){
        if (video.paused){
            video.play();
            playbttn.innerHTML = "Pause";
        } else{
            video.pause();
            playbttn.innerHTML = "Resume";
        }
    }
    playbttn.addEventListener("click", playVideo);
   
//Mute Button
    function muteVolume(){
        if(video.muted) {
            video.muted = false;
            volCtrl.innerHTML = "Mute";
        } else {
            video.muted = true;
            volCtrl.innerHTML = "Unmute";
        }
    }
    volCtrl.addEventListener("click", muteVolume);
    
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

    function vidPause(){
        video.pause();
    }

    function vidPlay(){
        video.play();
    }
    
    seekbar.addEventListener("change", seekVid);
    video.addEventListener("timeupdate", updateSeekbar);
    seekbar.addEventListener("mousedown", vidPause);
    seekbar.addEventListener("mouseup", vidPlay);

//Volume Bar
    function changeVolume(){
        video.volume = volBar.value;
    }

    volBar.addEventListener("change", changeVolume);

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
    fullScreenButton.addEventListener("click", fullScreen);
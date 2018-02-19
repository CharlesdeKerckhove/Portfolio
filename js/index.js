//video
var video = document.getElementById("myvideo");

//buttons
var playbttn = document.getElementById("playbttn");
var volCtrl = document.getElementById("volbtn");

//sliders
var seekbar = document.getElementById("seekbar");
var volBar = document.getElementById("volumeBar");

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
        var newtime = video.currentTime * (100 / video.duration);
        seekbar.value = newtime;
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
        console.log("hi");
    }

    volBar.addEventListener("change", changeVolume);
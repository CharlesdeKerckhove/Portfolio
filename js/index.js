
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
var close = document.getElementById("close");

for (var i = 0; i < images.length; i++) {
images[i].addEventListener("click", enlarge)};  
    
function enlarge(){
    dimmer.style.visibility = " visible";
    enlargeImg.src = this.src;
    captiontxt.innerHTML = this.alt;
}
    close.onclick = function(){
    dimmer.style.visibility = "hidden";
    }
    
//Currencies 
var amount = document.getElementsByClassName("exactPrice");
    for (i =0; i < amount.length; i++){
        amount[i].id = "price" + i;
    }
var amountValue0 = price0.innerHTML;
var amountValue1 = price1.innerHTML;
var amountValue2 = price2.innerHTML;
var amountValue3 = price3.innerHTML;
var amountValue4 = price4.innerHTML;
var amountValue5 = price5.innerHTML;
var amountValue6 = price6.innerHTML;
var amountValue7 = price7.innerHTML;
    
currencies.addEventListener("change", change);
    
function change() {
var selectedValue = currencies.options[currencies.selectedIndex].value;
    if(selectedValue == 0){
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = responseMethodUSD;
        xhr.open('GET', 'http://apilayer.net/api/live?access_key=a0e95c300b0241196076ba6964645330&format=1&currencies=USD', true);
        xhr.send(null);
    }
    else if(selectedValue == 1){
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = responseMethodGBP;
        xhr.open('GET', 'http://apilayer.net/api/live?access_key=a0e95c300b0241196076ba6964645330&format=1&currencies=GBP', true);
        xhr.send(null);
    }
    else if(selectedValue == 2){
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = responseMethodEUR;
        xhr.open('GET', 'http://apilayer.net/api/live?access_key=a0e95c300b0241196076ba6964645330&format=1&currencies=EUR', true);
        xhr.send(null);
    }
    else if(selectedValue == 3){
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = responseMethodJPY;
        xhr.open('GET', 'http://apilayer.net/api/live?access_key=a0e95c300b0241196076ba6964645330&format=1&currencies=JPY', true);
        xhr.send(null);
    }
    else if(selectedValue == 4){
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = responseMethodCAD;
        xhr.open('GET', 'http://apilayer.net/api/live?access_key=a0e95c300b0241196076ba6964645330&format=1&currencies=CAD', true);
        xhr.send(null);
    }
    else if(selectedValue == 5){
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = responseMethodCHF;
        xhr.open('GET', 'http://apilayer.net/api/live?access_key=a0e95c300b0241196076ba6964645330&format=1&currencies=CHF', true);
        xhr.send(null);
    }
} 
    
function responseMethodUSD(){
    
    if (xhr.readyState == 4) { // Ready
        if (xhr.status == 200) { // HTTP OK
            response = JSON.parse(xhr.responseText);
            USDUSD = response.quotes.USDUSD;
                result0 = USDUSD * amountValue0;
                result1 = USDUSD * amountValue1;
                result2 = USDUSD * amountValue2;
                result3 = USDUSD * amountValue3;
                result4 = USDUSD * amountValue4;
                result5 = USDUSD * amountValue5;
                result6 = USDUSD * amountValue6;
                result7 = USDUSD * amountValue7;
            price0.innerHTML = "&#36 " +(result0).toFixed(2);
            price1.innerHTML = "&#36 " +(result1).toFixed(2);
            price2.innerHTML = "&#36 " +(result2).toFixed(2);
            price3.innerHTML = "&#36 " +(result3).toFixed(2);
            price4.innerHTML = "&#36 " +(result4).toFixed(2);
            price5.innerHTML = "&#36 " +(result5).toFixed(2);
            price6.innerHTML = "&#36 " +(result6).toFixed(2);
            price7.innerHTML = "&#36 " +(result7).toFixed(2);
            //Assuming Text else responseXML
        }
        else {
            alert('There was a problem with the request.');
        }
    }
}
function responseMethodGBP(){
    
    if (xhr.readyState == 4) { // Ready
        if (xhr.status == 200) { // HTTP OK
            response = JSON.parse(xhr.responseText);
            USDGBP = response.quotes.USDGBP;
                result0 = USDGBP * amountValue0;
                result1 = USDGBP * amountValue1;
                result2 = USDGBP * amountValue2;
                result3 = USDGBP * amountValue3;
                result4 = USDGBP * amountValue4;
                result5 = USDGBP * amountValue5;
                result6 = USDGBP * amountValue6;
                result7 = USDGBP * amountValue7;
            price0.innerHTML = "&#163 " +(result0).toFixed(2);
            price1.innerHTML = "&#163 " +(result1).toFixed(2);
            price2.innerHTML = "&#163 " +(result2).toFixed(2);
            price3.innerHTML = "&#163 " +(result3).toFixed(2);
            price4.innerHTML = "&#163 " +(result4).toFixed(2);
            price5.innerHTML = "&#163 " +(result5).toFixed(2);
            price6.innerHTML = "&#163 " +(result6).toFixed(2);
            price7.innerHTML = "&#163 " +(result7).toFixed(2);
            
            //Assuming Text else responseXML
        }
        else {
            alert('There was a problem with the request.');
        }
    }
}
function responseMethodEUR(){
    
    if (xhr.readyState == 4) { // Ready
        if (xhr.status == 200) { // HTTP OK
            response = JSON.parse(xhr.responseText);
            USDEUR = response.quotes.USDEUR;
                result0 = USDEUR * amountValue0;
                result1 = USDEUR * amountValue1;
                result2 = USDEUR * amountValue2;
                result3 = USDEUR * amountValue3;
                result4 = USDEUR * amountValue4;
                result5 = USDEUR * amountValue5;
                result6 = USDEUR * amountValue6;
                result7 = USDEUR * amountValue7;
            price0.innerHTML = "&#128 " +(result0).toFixed(2);
            price1.innerHTML = "&#128 " +(result1).toFixed(2);
            price2.innerHTML = "&#128 " +(result2).toFixed(2);
            price3.innerHTML = "&#128 " +(result3).toFixed(2);
            price4.innerHTML = "&#128 " +(result4).toFixed(2);
            price5.innerHTML = "&#128 " +(result5).toFixed(2);
            price6.innerHTML = "&#128 " +(result6).toFixed(2);
            price7.innerHTML = "&#128 " +(result7).toFixed(2);
            //Assuming Text else responseXML
        }
        else {
            alert('There was a problem with the request.');
        }
    }
}   
function responseMethodJPY(){
    
    if (xhr.readyState == 4) { // Ready
        if (xhr.status == 200) { // HTTP OK
            response = JSON.parse(xhr.responseText);
            USDJPY = response.quotes.USDJPY;
                result0 = USDJPY * amountValue0;
                result1 = USDJPY * amountValue1;
                result2 = USDJPY * amountValue2;
                result3 = USDJPY * amountValue3;
                result4 = USDJPY * amountValue4;
                result5 = USDJPY * amountValue5;
                result6 = USDJPY * amountValue6;
                result7 = USDJPY * amountValue7;
            price0.innerHTML = "&#165 " +(result0).toFixed(2);
            price1.innerHTML = "&#165 " +(result1).toFixed(2);
            price2.innerHTML = "&#165 " +(result2).toFixed(2);
            price3.innerHTML = "&#165 " +(result3).toFixed(2);
            price4.innerHTML = "&#165 " +(result4).toFixed(2);
            price5.innerHTML = "&#165 " +(result5).toFixed(2);
            price6.innerHTML = "&#165 " +(result6).toFixed(2);
            price7.innerHTML = "&#165 " +(result7).toFixed(2);
            //Assuming Text else responseXML
        }
        else {
            alert('There was a problem with the request.');
        }
    }
}
function responseMethodCAD(){
    
    if (xhr.readyState == 4) { // Ready
        if (xhr.status == 200) { // HTTP OK
            response = JSON.parse(xhr.responseText);
            USDCAD = response.quotes.USDCAD;
                result0 = USDCAD * amountValue0;
                result1 = USDCAD * amountValue1;
                result2 = USDCAD * amountValue2;
                result3 = USDCAD * amountValue3;
                result4 = USDCAD * amountValue4;
                result5 = USDCAD * amountValue5;
                result6 = USDCAD * amountValue6;
                result7 = USDCAD * amountValue7;
            price0.innerHTML = "&#36 " +(result0).toFixed(2);
            price1.innerHTML = "&#36 " +(result1).toFixed(2);
            price2.innerHTML = "&#36 " +(result2).toFixed(2);
            price3.innerHTML = "&#36 " +(result3).toFixed(2);
            price4.innerHTML = "&#36 " +(result4).toFixed(2);
            price5.innerHTML = "&#36 " +(result5).toFixed(2);
            price6.innerHTML = "&#36 " +(result6).toFixed(2);
            price7.innerHTML = "&#36 " +(result7).toFixed(2);
            //Assuming Text else responseXML
        }
        else {
            alert('There was a problem with the request.');
        }
    }
}
function responseMethodCHF(){
    
    if (xhr.readyState == 4) { // Ready
        if (xhr.status == 200) { // HTTP OK
            response = JSON.parse(xhr.responseText);
            USDCHF = response.quotes.USDCHF;
                result0 = USDCHF * amountValue0;
                result1 = USDCHF * amountValue1;
                result2 = USDCHF * amountValue2;
                result3 = USDCHF * amountValue3;
                result4 = USDCHF * amountValue4;
                result5 = USDCHF * amountValue5;
                result6 = USDCHF * amountValue6;
                result7 = USDCHF * amountValue7;
            price0.innerHTML = "Fr. " +(result0).toFixed(2);
            price1.innerHTML = "Fr. " +(result1).toFixed(2);
            price2.innerHTML = "Fr. " +(result2).toFixed(2);
            price3.innerHTML = "Fr. " +(result3).toFixed(2);
            price4.innerHTML = "Fr. " +(result4).toFixed(2);
            price5.innerHTML = "Fr. " +(result5).toFixed(2);
            price6.innerHTML = "Fr. " +(result6).toFixed(2);
            price7.innerHTML = "Fr. " +(result7).toFixed(2);
            //Assuming Text else responseXML
        }
        else {
            alert('There was a problem with the request.');
        }
    }
}
    
}
function pageThree(){

}
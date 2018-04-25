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
var QuitBtn = document.getElementById("QuitParanoiaBtn");
QuitBtn.addEventListener('click', function(){
                          window.location.href='index.html'
                          });
var allQuestions = [
'Who is the most likely to kill someone',
'Who would you kill',
'Who is going to die alone',
'Who has the worst fashion sense',
'Who do you think is the best in bed',
'Who do you like the least',
'Who is going to be the richest in five years',
'Who do you think has had anal',
'Who is the most likely to cheat',
'Who is the most likely to get naked',
'Who is the most likely to get hooked on drugs',
'Who do you think would be the best stripper',
'Who looks the most like a toaster',
'Who looks the most like a croissant',
'Who smells the most like your mother',
'Who looks the oldest',
'Who has the worst haircut',
'Who needs to lose weight',
'If stranded on a desert island, who would you eat first and which body part',
'Who is the most likely to pay for sex',
'Who cries when watching films',
'Who disappoints their parents the most',
'Who reminds you of a brussel sprout the most',
'Who should not of been invited tonight',
'Who has the best legs',
'Who has the nicest eyes',
'Who do you think does the smelliest poo',
'Who wastes the most money',
'Who is your best friend out of people playing',
'Who is the most forgetful person',
'Who would get in a fight over a girl',
'Who will spend the most time in prison',
'Who will punch a wall',
'Who would be the most likely to kill an animal',
'Who would die first in a zombie apocalypse',
'Who would be the best stand-up comedian',
'Who would look good in uniform',
'Who is the most likely to join the military',
'Who could be a supermodel',
'Who will get pregnant first',
'Who has the longest limbs',
'Who will get the next tattoo and on which body part'
];

function getmyQuestions(count){
    var tmpArrayE = allQuestions.slice(allQuestions);
    var goE = [];

    if (allQuestions.length > 0) {
    var optionsE = Math.floor(Math.random() * allQuestions.length);
    var removedE = allQuestions.splice(optionsE,1);

	document.getElementById("NextParanoiaBtn").innerHTML = "Next";
    document.getElementById("ParanoiaQuestion").innerHTML = removedE;
    } else {
window.location.href = "EndParanoia.html"
    }
}


function Play(){
getmyQuestions(1);
}
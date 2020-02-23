var QuitBtn = document.getElementById("QuitBtn");
QuitBtn.addEventListener('click', function(){
                          window.location.href='index.html'
                          });
var StartBtn = document.getElementById("StartBtn");
StartBtn.addEventListener('click', function(){
                          window.location.href='PlayChug.html'
                          });
/*var ChugRulesRef = docRef.ref("/Game Type/Chug Challenge/Rules");
var allRules = [];

ChugRulesRef.once('value', function(data){
    data.forEach(function(item){
        allRules.push(item.val());
        getRules(2);
     });
});*/



var allRules = [
'Left hand drinking',
'No names',
'No pointing',
'No swearing',
'Partners - select a partner and match their drinks',
'Pinky up as you drink',
'Little green man - remove before drinking and replace after drinking',
'No eye contact with challenger',
'Word Ban: Yes & no',
'Word Ban: Drink',
'Word Ban: Mine',
'No teeth can be shown whilst laughing',
'Replace "Now" with "Meow"',
'Must address others as Sir and Maam',
'Empty glasses - Once a drink has been finished tap the glass on your shoulder',
'No phones',
'Say I love you after every sentence'
]; 

function getRules(count){

    var tmpArray = allRules.slice(allRules);
    var go = [];

    for (var i = 0; i < count; i++) {
    var options = Math.floor(Math.random() * tmpArray.length);
    var removed = tmpArray.splice(options,1);

    go.push(removed[0]);
    }
document.getElementById("Rule1").innerHTML = "1) " + " " + go[0];
document.getElementById("Rule2").innerHTML = "2) " + " " + go[1];
}

getRules(2);
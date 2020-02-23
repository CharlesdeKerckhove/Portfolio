var QuitBtn = document.getElementById("QuitEroticBtn");
QuitBtn.addEventListener('click', function(){
                          window.location.href='index.html'
                          });

var allQuestions= [
'Everyone: Drink twice if you are on the pill?',
'Girls: Drink twice if you wish your boobs were bigger?',
'Boys: Drink twice if you wish your penis was bigger?',
'Everyone: Drink three times if you like the taste of cum?',
'Everyone: Drink five times if you ever had sex whilst on your period?',
'Girls: Say your cup size or take two sips?',
'Everyone: If you own sexy lingerie hand out four sips?',
'Girls: Drink twice if you like being fingered?',
'Girls: Drink three times if you do not like being fingered?',
'Everyone: Take a sip if you wear thongs?',
'Everyone: Drink twice if you have shaved your pubes this month?',
'Everyone: Drink five times if you cum inside?',
'Everyone: Hand out five sips if you use condoms?',
'Everyone: Hand out five sips if you are a virgin?',
'Everyone: Spitters are Quitters. If you would rather spit than swallow, down your drink',
'Everyone: Drink twice if you think sex is overrated',
'Everyone: Drink once for every person you have slept with',
'Everyone: Drink once if you are comfortable with your body, if you are not drink five times',
'Everyone: Take a shot if you have tried anal?',
'Everyone: Drink twice if you prefer boobs. Drink four times if you prefer ass',
'Who do you think would give the best head out of the female players?',
'Which one of your exs had the biggest dick / biggest boobs?',
'Do you shave or wax your pubic area?',
'How long is the ideal length for sex in your opinion?',
'How long is the ideal size of a dick in your opinion?',
'Do you spit or swallow?',
'Boxers or briefs on a guy?',
'Do you like going down on a partner?',
'Have you ever cried during sex?',
'Have you ever cried after sex?',
'What was the longest dry spell you have ever had?',
'When was the last time you had sex?',
'How long does it usually take you to orgasm?',
'How many times per week do you masturbate?',
'Have you ever faked an orgasm?',
'Do you ever watch girl-on-girl porn?',
'Are you quiet or a moaner?',
'Do you have any fetishes?',
'Where do you buy your underwear?',
'Have you ever had an actual orgasm during sex?',
'Have you ever dated someone with a sexually transmitted disease?',
'Have you ever said the wrong name during sex?',
'Which sex position do you want to try?',
'What kind of porn are you into?',
'Who was the best sexual partner you have ever had?',
'What do you talk about when you sext?',
'Where is the craziest place you have ever done it?',
'Have you ever done a walk of shame?',
'Have you used sex toys before?',
'How old were you when you lost your virginity?',
'Have you ever had a one-night stand?',
'What is the best song to listen to during sex?',
'Are you usually the one on top or the one on the bottom?',
'Have you ever cheated?',
'Have you ever tried 69?',
'Have you ever been caught?',
'Have you ever caught a friend?',
'Have you ever walked in on a family member?',
'Have you ever had a preganancy scare?',
'Have you ever regretted sleeping with someone?',
'Have you ever been cheated on?',
'Have you ever had a threesome?',
'Have you ever sent any nude pictures?',
'Kiss the person to your right',
'Kiss the person to your left',
'Do you keep the lights on or off during sex?',
'Are you into bondage?',
'Would you try whips?',
'Would you try handcuffs?',
'Do you like being spanked?',
'What is your best sex tip?',
'Would you have sex with the person to your right?',
'Would you have sex with the person to your left?',
'What is the most attractive feature of the person to your right?',
'What is the most attractive feature of the person to your left?',
'Who is the best looking person (of the opposite gender) playing this game?',
'Who is the best looking person (of the same gender) playing this game?',
'What was the best sex position you have ever tried?',
'Have you ever had sex with someone of the same sex?'
];


function getmyQuestions(count){
    var tmpArrayE = allQuestions.slice(allQuestions);
    var goE = [];

    if (allQuestions.length > 0) {
    var optionsE = Math.floor(Math.random() * allQuestions.length);
    var removedE = allQuestions.splice(optionsE,1);

	document.getElementById("NextEroticBtn").innerHTML = "Next";
    document.getElementById("EroticQuestion").innerHTML = removedE;
    } else {
window.location.href = "EndEnd.html"
    }
}


function Play(){
getmyQuestions(1);
}
var QuitBtn = document.getElementById("QuitChugBtn");
QuitBtn.addEventListener('click', function(){
                          window.location.href='index.html'
                          });


var allQuestions = [
'Down your drink',
'Down your drink',
'Down your drink',
'Down your drink',
'Down your drink',
'Give the person to your left your drink',
'Slut drop on the person to your right',
'Pick someone to drink five times',
'Pick someone to drink two times',
'Pick someone to drink three times',
'Take a shot',
'Take a shot',
'Take a shot',
'Take a shot',
'Take a shot',
'Kiss the person to your right',
'Kiss the person to your left',
'Mix the person to your lefts drink',
'Pour half your drink into the drink to your left',
'Drink five sips',
'Drink two sips',
'Drink three sips',
'Drink four sips',
'Drink ten sips',
'Hand out five sips',
'Hand out two sips',
'Hand out three sips',
'Hand out four sips',
'Hand out ten sips',
'If you had to sleep with one person in this room, who would it be?',
'What is the biggest lie you have ever told a significant other',
'How many people in this room would you willingly bang?',
'What’s the #1 thing you would never want your parents to find out about you?',
'Which of your exes would you still be willing to sleep with?',
'Let someone else send a message from your phone',
'What’s the most embarrassing thing that’s ever happened to you during sex?',
'Take off an item of clothing',
'What was the last thing you cried over?',
'Which sexual act are you best at?',
'Slap someone',
'Swap places with the person opposite you',
'Swap shirts with the person opposite you',
'Insult the person to your right',
'Insult the person to your left',
'Compliment the person to your left',
'Compliment the person to your right',
'Motorboat the person to your right',
'Tell the group a sex position you want to try',
'Odds on with the third person to your right',
'Pick a number between 1-10, everyone else must guess and whoever guesses right gives out five sips',
'Give the person to your right a nickname which you must use for the rest of the game',
'Text your mum saying you got a girl pregnant',
'Take someones sock off with your teeth',
'Unhook a bra with one hand in 5 seconds or down your drink',
'Send a seductive text to your most recent opposite sex on snapchat',
'Add a sauce to someones drink and they must down it',
'Put food into someones drink and they must down it',
'Do a shot mixed with cereal',
'Lie down and take a shot',
'Sing a lyric from a song, if nobody can name the song name drink twice',
'Text your ex saying you still have feelings',
'Who is your same sex celebrity crush?',
'Create a dirty pint, next person to skip or pass a question must drink the pint',
'What is your favourite porn category?',
'How often do you watch porn?',
'What is the ideal amount of sex in a week?',
'What is your weirdest fetish?',
'Guess what the person to your left is self conscious about, if you are right give out two sips otherwise take five sips',
'Who do you think is the worst dressed?',
'If you were trapped on a desert island with one person from this game who would it be?',
'Who do you think is the ugliest?',
'Who do you think has the biggest penis?',
'Drink if you have slept with someone playing this game',
'Drink if you have kissed someone playing this game',
'Drink if you have fantasised about someone playing this game',
'If you would have sex with the person to your right drink four times',

'EVERYONE: Fill cups, partner up and have a drink off - Loser takes a shot',
'EVERYONE: What is your favourite sex position',
'EVERYONE: Take one sip for each person you have slept with',
'EVERYONE: Give out two sips if you are wearing black otherwise take two sips',
'EVERYONE: Vote on who has the best looking sibling?',
'EVERYONE: Create a dirty pint for the person to your right',
'EVERYONE: Do you prefer the person to your left or the person to your right, loser drinks',
'EVERYONE: Who ever has the biggest biceps take a drink',
'EVERYONE: Who ever shaved their pubes last take a drink',
'EVERYONE: Take a sip for each sexual partner you have had',
'EVERYONE: Drink if you have masturbated before',
'EVERYONE: Drink if you have cheated on your partner before',
'EVERYONE: Drink if you have fallen in love before',
'EVERYONE: Drink if you have been in a fight',
'EVERYONE: Whoever has the biggest boobs drink two sips',
'EVERYONE: Drink if you have sent nudes before',
'EVERYONE: Drink if you have a tattoo',
'EVERYONE: Drink if you have a piercing',
'EVERYONE: Drink if you have had an STD before',
'EVERYONE: Drink if you have had a pregnancy scare before',
'EVERYONE: Drink if you have caught a family member having sex',
'EVERYONE: Drink if you have been caught masturbating',
'EVERYONE: Drink if you have been caught having sex',
'EVERYONE: Drink if you have been caught performing oral',
'EVERYONE: Drink if you have ever kissed someone of the same gender',
'EVERYONE: Drink twice if you have slept naked',
'EVERYONE: What is the weirdest place challengers have had sex',
'EVERYONE: Everyone younger than the challenger drink',
'EVERYONE: Drink if you have ever thrown up from drinking',
'EVERYONE: Decide who the best looking person in the group is and they must drink five sips',
'EVERYONE: Whoever turned up late drink five times',
'EVERYONE: Decide who has the best fashion sense, they can give out five sips',
'EVERYONE: Decide who is the ladies man of the group, they can give out five sips',
'EVERYONE: Drink twice if you have sent someone else to the hospital',
'EVERYONE: Drink twice if you have been to A&E before',
'EVERYONE: Shortest player give out two sips',
'EVERYONE: Tallest player give out four sips',
'EVERYONE: Drink five sips',
'EVERYONE: Drink three sips',
'EVERYONE: Drink two sips',
'EVERYONE: Hand out two sips',
'EVERYONE: Next person to use their phone drinks eight sips (excluding the use of this app)',
'EVERYONE: If you have the letter J or H in your name take off an item of clothing',
'EVERYONE: Anyone who has more than half their drink left take 15 sips'
];


function getmyQuestions(count){
    
    var tmpArrayE = allQuestions.slice(allQuestions);
    var goE = [];

    if (allQuestions.length > 0) {
    var optionsE = Math.floor(Math.random() * allQuestions.length);
    var removedE = allQuestions.splice(optionsE,1);

	document.getElementById("NextChugBtn").innerHTML = "Next";
    document.getElementById("ChugQuestion").innerHTML = removedE;
    } else {
window.location.href = "EndChug.html"
    }
}


function Select(){
getmyQuestions(1);
}
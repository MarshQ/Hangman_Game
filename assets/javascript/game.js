

var words = ["luigi", "megaman", "emblem", "donkeykong", "mushroom", "fireflower", "ganondorf", "mastersword", "protoman", "waluigi", "knuckless", "metroid", 
            "junglejaps", "finalfantasy", "dreamland", "pokemon", "castlevania", "iceclimber", "pacman", "punchout", "olimar", "pikmin", "excitebike", "bokoblin", 
            "wizrobe", "squirtle", "starfox", "supernintendo", "yoshisisland", "bomberman", "fzero", "ridley"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
               'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                'w', 'x', 'y', 'z'];

var activeWord = "";
var activeLetters = [];
var activeLength = 0;
var blanks = [];
var correctLetters = [];
var usedLetters = [];

var guessesRemaining = 14;
var wins = 0;
var loses = 0;
var correct = 0;
//var targetDiv = document.getElementById("empty-div");
//newDiv.setAttribute ( "src", "image.png:");



function reset() {
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'];
    correct = 0;
    activeWord = words[Math.floor(Math.random() * words.length)];
    activeLetters = activeWord.split('');
    activeLength = activeLetters.length;
    guessesRemaining = 14;
    blanks = [];
    correctLetters = [];
    usedLetters = []; 

    for(var i = 0; i< activeLength; i++) {
        blanks.push('_');
    }
    document.getElementById('word').innerHTML = blanks;
// .join(' ')
    document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
    document.getElementById('usedLetter').innerHTML = usedLetters;
    document.getElementById('wCounter').innerHTML = wins;
    document.getElementById('lCounter').innerHTML = loses;

    // console.log(activeWord);
    // console.log(activeLetters);
    //console.log(activeLength)
    // console.log(blanks);

}

function letterCheck(guess) {
    usedLetters.push(guess);
    if (activeWord.indexOf(guess)> -1) {
        for (var i = 0; i < activeLength; i++) {
            if (guess == activeWord[i]) {
                correct = correct + 1;
                blanks[i] = guess;
                document.getElementById('word').innerHTML = blanks;

            }
        }
    }
    else {
        guessesRemaining = guessesRemaining - 1;
        document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
    }
    document.getElementById('usedLetter').innerHTML = usedLetters;

}

function endGame () {
    //console.log(correct);
    //console.log(activeLength + "lalala");
    if (correct == activeLength) {
        wins = wins + 1;
        document.getElementById('wCounter').innerHTML = wins;
        alert("Congratulations! you got the word " + activeWord + " correct, the game will now reset with a new word.");
        reset();
    }
    else if (guessesRemaining == 0) {
        loses = loses + 1;
        document.getElementById('lCounter').innerHTML = loses;
        alert("RIP. Please try again, the word was " + activeWord + ". The game will now reset with a new word.");
        reset();
    }
}


reset();

document.onkeyup = function(event) {
    var guess = event.key;
    for (i=0; i < alphabet.length; i++) {
        if (guess == alphabet[i]) {
            alphabet[i] = 1;
            letterCheck(guess);
            endGame();
        }
    }
}

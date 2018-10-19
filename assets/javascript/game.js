var words = ["ball", "cleats", "jersey"];
var wins = 0;
var guessesLeft = 5;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var answerTrack = [];


var computerChoice = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < computerChoice.length; i++) {
    answerTrack[i] = "_";
};

console.log(answerTrack);
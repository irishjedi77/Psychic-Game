// creating a variable for all possible letter guesses
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and guesses starting at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;

//Creating variables that hold references to places in the HTML where we want to display things

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");

//Randomly makes a choice from the choices array. This is the computer's choice
var computerGuess = computerChoices[Math.floor(Math.random() *
    computerChoices.length)];


function countGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + (guessesLeft + 1);

}

function farUserGuesses() {
    document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join( "," );
}


//Restarts the game when user guesses correctly or exhausts guesses
var restart = function () {
    guessesLeft = 9;
    letterUser = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//This function is run when the user presses a key
document.onkeyup = function (event) {
    if (guessesLeft > -1) {
        guessesLeft--;

        var letterUser = event.key.toLowerCase();

        if (letterUser === computerGuess) {
            document.querySelector("#wins").innerHTML = "Wins: " + (wins + 1);
            restart();
        }
        else if (guessesLeft === 0) {
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + (losses);
            restart();
        }
        countGuessesLeft();
    }
}
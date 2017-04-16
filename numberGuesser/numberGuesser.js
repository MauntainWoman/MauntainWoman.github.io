// Number Guesser Application

//Set variables
var previousGuess = 0;
var number = Math.floor(Math.random() * 100 + 1);

function numberGuesser(){
  var currentGuess = document.getElementById("userInput").value;
  if (currentGuess == ""){ // if the user doesn't enter a number
    document.getElementById("highOrLow").innerHTML = "You actually have to  guess a number, dummy";
    currentGuess = previousGuess;
  } else if (currentGuess < 0 || currentGuess > 100){ // if the user enters a number outside of the range
    document.getElementById("highOrLow").innerHTML = "Enter a number between 0 and 100";
    currentGuess = previousGuess;
  } else if (currentGuess == number) { // If the numbers match
    document.getElementById("guess").innerHTML = "You guessed " + currentGuess;
    document.getElementById("highOrLow").innerHTML = "Correct! The number I was thinking was " + currentGuess;
    previousGuess = currentGuess;
  } else if (currentGuess < number && previousGuess < number) { // If you guessed too low both times
    document.getElementById("guess").innerHTML = "You guessed " + currentGuess;
    document.getElementById("highOrLow").innerHTML = "The number I am thinking of is higher than " + currentGuess + " and higher than " + previousGuess;
    previousGuess = currentGuess;
  } else if (currentGuess < number && previousGuess > number) { // If you guessed too high then too low
    document.getElementById("guess").innerHTML = "You guessed " + currentGuess;
    document.getElementById("highOrLow").innerHTML = "The number I am thinking of is in between " + currentGuess + " and " + previousGuess;
    previousGuess = currentGuess;
  } else if (currentGuess > number && previousGuess > number) { //If you guessed too high both times
    document.getElementById("guess").innerHTML = "You guessed " + currentGuess;
    document.getElementById("highOrLow").innerHTML = "The number I am thinking of is lower than " + currentGuess + " and lower than " + previousGuess;
    previousGuess = currentGuess;
  } else if (currentGuess > number && previousGuess < number) { //If you guessed too low then too high
    document.getElementById("guess").innerHTML = "You guessed " + currentGuess;
    document.getElementById("highOrLow").innerHTML = "The number I am thinking of is in between " + previousGuess + " and " + currentGuess;
    previousGuess = currentGuess;
  }
}

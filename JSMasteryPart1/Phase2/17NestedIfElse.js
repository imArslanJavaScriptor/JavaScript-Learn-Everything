// Nested if-else statements

// Guess a number game

let winningNumber = 10;
let userGuess = Number(prompt("Guess a number between 1 and 20:"));
if ( userGuess === winningNumber ) {
    console.log("Congratulations! You guessed the correct number.");
} else {
    if ( userGuess < winningNumber ) {
        console.log("Your Guess is less than the winning number! Try again.");
    } else {
        console.log("Your Guess is greater than the winning number! Try again.");
    }
}
"use strict";

// Assigning elements to variables
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const guessInput = document.getElementById("guess-input");
const guessMessage = document.getElementById("guess-message");
const currentGuess = document.getElementById("current-guess");
const computerGuess = document.getElementById("computer-guess");
const guessHistory = document.getElementById("guess-history");

// Variables to store game state
let computerNumber;
let guesses = [];
let attempts = 0;
const maxAttempts = 3;

// Function to start a new game
const startGame = () => {
    computerNumber = Math.floor(Math.random() * 50) + 1; 
    guesses = [];
    attempts = 0;
    guessMessage.textContent = "";
    currentGuess.textContent = "";
    computerGuess.textContent = "?";
    guessHistory.textContent = "";
    guessInput.value = "";
    submitBtn.disabled = false;
    restartBtn.disabled = true;
};

// Function to handle guess submission(s)
const handleGuess = () => {
    const userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
        guessMessage.textContent = "Please enter a valid number between 1 and 50.";
        return;
    }
    attempts++;
    guesses.push(userGuess);
    currentGuess.textContent = userGuess;
    guessHistory.textContent = guesses.join(", ");

    if (userGuess === computerNumber) {
        guessMessage.textContent = "Congratulations! You guessed the number!";
        computerGuess.textContent = computerNumber;
        submitBtn.disabled = true;
        restartBtn.disabled = false;
    } else if (attempts >= maxAttempts) {
        guessMessage.textContent = `Out of attempts! The number was ${computerNumber}.`;
        computerGuess.textContent = computerNumber;
        submitBtn.disabled = true;
        restartBtn.disabled = false;
    } else {
        guessMessage.textContent = userGuess < computerNumber ? "Too low! Try again." : "Too high! Try again.";
    }
};

// Event listeners
submitBtn.addEventListener("click", handleGuess);
restartBtn.addEventListener("click", startGame);

// Start the game on page load
startGame();

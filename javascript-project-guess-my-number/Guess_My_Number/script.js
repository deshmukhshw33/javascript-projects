"use strict";
/*
// Quick way to select the elememts from HTML page
console.log(document.querySelector('.message').textContent);

// NOTE DOM : Document Object Model - Structured representation of HTML document. 
//Allows Javascript to access html elements and styles to manipulate them.

document.querySelector('.message').textContent = 'Correct Number!!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/

// Event listener -

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = secretNumber;

// Project: "Game : Guess the correct secret number"

// CASE: logic for "check" button on the webpage
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //CASE: user does not enter any number for guessing
  if (!guess) {
    document.querySelector(".message").textContent = "No Number :(";
  } else if (guess === secretNumber) {
    //CASE: user guesses correct secret number
    document.querySelector(".message").textContent = "Correct Number!!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    console.log(`the score is ${score}`);

    // Setting the highscore on the webpage
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
      highScore = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High :(" : "Too Low :(";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game :(";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Case: logic for "Again" button on the webpage - it resets the whole game parameters to begin the new game.

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});

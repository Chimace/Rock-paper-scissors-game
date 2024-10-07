"use strict";

// Declaration of DOM elements
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let paragraph = document.querySelector(".p");
let clearBtn = document.querySelector(".clear");
let scoreDisplay = document.querySelector(".js-score");
let comMove = "";

// Object to assist in the display of the scores on the DOM
let scores = {
  win: 0,
  loss: 0,
  tie: 0,
};
let result = "";

//
rock.addEventListener("click", thisIsForTheGameplay);
paper.addEventListener("click", thisIsForTheGameplay);
scissors.addEventListener("click", thisIsForTheGameplay);

// for the restart game button
clearBtn.addEventListener("click", function () {
  scoreDisplay.innerHTML = `Wins: ${(scores.win = 0)}, Losses: ${(scores.loss = 0)}, Ties: ${(scores.tie = 0)}`;
});

function thisIsForTheGameplay() {
  let random = Math.random();
  if (0 <= random && random < 1 / 3) {
    comMove = "Rock";
  } else if (1 / 3 <= random && random < 2 / 3) {
    comMove = "Paper";
  } else if (2 / 3 <= random && random <= 1) {
    comMove = "Scissors";
  }
  if (comMove === "Rock") {
    result = "You tie!";
  } else if (comMove === "Paper") {
    result = "You lose!";
  } else if (comMove === "Scissors") {
    result = "You win!";
  }
  paragraph.innerHTML = `You choose Scissors and COM chose ${comMove}. ${result}`;
  //To check for scores
  if (result == "You win!") {
    scores.win++;
  } else if (result == "You lose!") {
    scores.loss++;
  } else {
    scores.tie++;
  }
  scoreDisplay.innerHTML = `Wins: ${scores.win}, Losses: ${scores.loss}, Ties: ${scores.tie}`;
}

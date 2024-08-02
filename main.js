"use strict";

import "./style.css";

const scoreP = document.querySelector(".p-scores");
const rounds = document.querySelector(".round");
const scoreC = document.querySelector(".c-score");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const start = document.querySelector(".start");
const whoWin = document.querySelector(".win-title");
const restartBtn = document.querySelector(".restart");
const overlay = document.querySelector(".overlay");
const choiceC = document.querySelector(".computer-choice");
function rockPapersScissorsCreator() {
  let playerScore = 0;
  let roundNumber = 0;
  let computerScore = 0;
  let playerChoice = "";
  let computerChoice = "";
  const getPlayerScore = () => playerScore;
  const setPlayerScore = () => (playerScore = playerScore + 1);
  const getComputerScore = () => computerScore;
  const setComputerScore = () => (computerScore = computerScore + 1);
  const restart = () => {
    (computerScore = 0), (playerScore = 0), (roundNumber = 0);
  };
  const getRoundNumber = () => roundNumber;
  const setRoundNumber = () => (roundNumber = roundNumber + 1);
  const getPlayerChoice = () => playerChoice;
  const setPlayerChoice = (choice) => (playerChoice = choice);
  const getComputerChoice = () => computerChoice;
  const setComputerChoice = (choice) => (computerChoice = choice);
  return {
    getPlayerScore,
    setPlayerScore,
    getComputerScore,
    setComputerScore,
    getRoundNumber,
    setRoundNumber,
    setPlayerChoice,
    getPlayerChoice,
    getComputerChoice,
    setComputerChoice,
    restart,
  };
}
const game = rockPapersScissorsCreator();
scoreP.textContent = `Player one score: ${game.getPlayerScore()}`;
rounds.textContent = `Rounds: ${game.getRoundNumber()}`;
scoreC.textContent = `Computer score: ${game.getComputerScore()}`;
const choices = ["", "rock", "paper", "scissors"];

rock.addEventListener("click", function () {
  game.setPlayerChoice("rock");
  game.setComputerChoice(choices[numberGenerator(1, 4)])
  switch (game.getComputerChoice()) {
    case "rock":
      game.setRoundNumber();
      rounds.textContent = `Rounds: ${game.getRoundNumber()}`;
      choiceC.textContent = "✊🏼";
      break;
    case "paper":
      // computerScore = computerScore + 1;
      game.setComputerScore();
      scoreC.textContent = `Computer score: ${game.getComputerScore()}`;
      // roundNumber = roundNumber + 1;
      game.setRoundNumber();
      rounds.textContent = `Rounds: ${game.getRoundNumber()}`;
      choiceC.textContent = "🖐🏼";
      break;
    case "scissors":
      // roundNumber = roundNumber + 1;
      game.setRoundNumber();
      rounds.textContent = `Rounds: ${game.getRoundNumber()}`;
      // playerScore = playerScore + 1;
      game.setPlayerScore();
      scoreP.textContent = `Player one score: ${game.getPlayerScore()}`;
      choiceC.textContent = "✌🏼";
      break;
  }
  winner();
});

paper.addEventListener("click", function () {
  game.setPlayerChoice("rock");
  game.setComputerChoice(choices[numberGenerator(1, 4)])
  switch (game.getComputerChoice()) {
    case "rock":
      // roundNumber = roundNumber + 1;
      game.setRoundNumber();
      rounds.textContent = `Rounds: ${game.getRoundNumber()}`;
      // playerScore = playerScore + 1;
      game.setPlayerScore();
      scoreP.textContent = `Player one score: ${game.getPlayerScore()}`;
      choiceC.textContent = "✌🏼";
      break;
    case "paper":
      game.setRoundNumber();
      rounds.textContent = `Rounds: ${game.getRoundNumber()}`;
      choiceC.textContent = "✊🏼";
      break;
    case "scissors":
      // computerScore = computerScore + 1;
      game.setComputerScore();
      scoreC.textContent = `Computer score: ${game.getComputerScore()}`;
      // roundNumber = roundNumber + 1;
      game.setRoundNumber();
      rounds.textContent = `Rounds: ${game.getRoundNumber()}`;
      choiceC.textContent = "🖐🏼";
      break;
  }
  winner();
});

scissors.addEventListener("click", function () {
  game.setPlayerChoice("rock");
  game.setComputerChoice(choices[numberGenerator(1, 4)])
  switch (game.getComputerChoice()) {
    case "rock":
      // computerScore = computerScore + 1;
      game.setComputerScore();
      scoreC.textContent = `Computer score: ${game.getComputerScore()}`;
      // roundNumber = roundNumber + 1;
      game.setRoundNumber();
      rounds.textContent = `Rounds: ${game.getRoundNumber()}`;
      choiceC.textContent = "🖐🏼";
      break;
    case "paper":
      game.setRoundNumber();
      rounds.textContent = `Rounds: ${game.getRoundNumber()}`;
      // playerScore = playerScore + 1;
      game.setPlayerScore();
      scoreP.textContent = `Player one score: ${game.getPlayerScore()}`;
      choiceC.textContent = "✌🏼";
      break;
    case "scissors":
      game.setRoundNumber();
      rounds.textContent = `Rounds: ${game.getRoundNumber()}`;
      choiceC.textContent = "✊🏼";
      break;
  }
  winner();
});

restartBtn.addEventListener("click", function () {
  restartBtn.style.display = "none";
  whoWin.textContent = "First who wins 3 rounds, wins the game!";
  enableButtons();
  game.restart();
  scoreP.textContent = `Player one score: ${game.getPlayerScore()}`;
  rounds.textContent = `Rounds: ${game.getRoundNumber()}`;
  scoreC.textContent = `Computer score: ${game.getComputerScore()}`;
  choiceC.textContent = "?";
});

start.addEventListener("click", function () {
  overlay.style.display = "none";
});

const numberGenerator = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function disableButtons() {
  rock.disabled = true;
  paper.disabled = true;
  scissors.disabled = true;
}
function enableButtons() {
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}

function playGame() {
  game.getRandomNumber() = numberGenerator(0, 3);
  computerChoice = choices[randomNumber];
}

function winner() {
  if (game.getRoundNumber() === 3 && game.getComputerScore() > game.getPlayerScore()) {
    whoWin.textContent = "YOU LOSE!";
    restartBtn.style.display = "flex";
    disableButtons();
  } else if (game.getRoundNumber() === 3 && game.getPlayerScore() > game.getComputerScore()) {
    whoWin.textContent = "YOU WON!";
    restartBtn.style.display = "flex";
    disableButtons();
  } else if (game.getRoundNumber() > 3 && game.getComputerScore() > game.getPlayerScore()) {
    whoWin.textContent = "YOU LOSE!";
    restartBtn.style.display = "flex";
    disableButtons();
  } else if (game.getRoundNumber() > 3 && game.getPlayerScore() > game.getComputerScore()) {
    whoWin.textContent = "YOU WON!";
    restartBtn.style.display = "flex";
    disableButtons();
  }
}

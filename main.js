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

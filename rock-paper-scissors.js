let playerScore = 0;
let computerScore = 0;

let roundsToPlay = 5;

// Select elements
const playBtn = document.querySelector("#play");
const playDiv = document.querySelector("#play-container");

// Create elements
const chooseText = document.createElement("h3");
const playerBtnsDiv = document.createElement("div");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

const scoresDiv = document.createElement("div");
const yourScore = document.createElement("p");

const topScoresDiv = document.createElement("div");
const compScore = document.createElement("p");
const gameScore = document.createElement("p");

rockBtn.classList.add("play-buttons");
paperBtn.classList.add("play-buttons");
scissorsBtn.classList.add("play-buttons");

rockBtn.innerHTML = '<img src="images/rock.png" alt=""> Rock';
paperBtn.innerHTML = '<img src="images/paper.png" alt=""> Paper';
scissorsBtn.innerHTML = '<img src="images/scissors.png" alt=""> Scissors';
rockBtn.dataset.choice = "rock";
paperBtn.dataset.choice = "paper";
scissorsBtn.dataset.choice = "scissors";

yourScore.textContent = "Your score: 0";
compScore.textContent = "Computer score: 0";
gameScore.textContent = "Game score: 0 : 0";

playerBtnsDiv.classList.add("player-buttons");
scoresDiv.classList.add("scores");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function addScore(player, computer) {
  if (player === computer) {
    chooseText.textContent = `${player} : ${computer}`;
  } else if (player === "rock" && computer === "scissors") {
    playerScore++;
    chooseText.textContent = `${player} : ${computer}`;
  } else if (player === "paper" && computer === "rock") {
    playerScore++;
    chooseText.textContent = `${player} : ${computer}`;
  } else if (player === "scissors" && computer === "paper") {
    playerScore++;
    chooseText.textContent = `${player} : ${computer}`;
  } else {
    computerScore++;
    chooseText.textContent = `${player} : ${computer}`;
  }
}

function buildGame() {
  playerScore = 0;
  computerScore = 0;
  roundsToPlay = 5;
  updateUIScore();

  chooseText.textContent = "Choose!";
  playDiv.innerHTML = "";

  playerBtnsDiv.append(rockBtn, paperBtn, scissorsBtn);
  topScoresDiv.append(yourScore, compScore);
  scoresDiv.append(topScoresDiv, gameScore);
  playDiv.append(chooseText, playerBtnsDiv, scoresDiv);
}

function finishGame() {
  playDiv.innerHTML = "";
  const par = document.createElement("p");
  const restartBtn = document.createElement("button");
  const gameScoreMsg = `Game score ${playerScore} : ${computerScore}`;

  restartBtn.textContent = "Restart";
  restartBtn.addEventListener("click", () => {
    buildGame();
  });

  if (playerScore === computerScore) {
    par.innerHTML = `Draw! <br> ${gameScoreMsg}`;
  } else if (playerScore > computerScore) {
    par.innerHTML = `Player wins! <br> ${gameScoreMsg}`;
  } else if (playerScore < computerScore) {
    par.innerHTML = `Computer wins! <br> ${gameScoreMsg}`;
  }

  playDiv.classList.add("game-over");
  playDiv.append(par, restartBtn);
}

function updateUIScore() {
  yourScore.textContent = `Your score: ${playerScore}`;
  compScore.textContent = `Computer score: ${computerScore}`;
  gameScore.textContent = `Game score: ${playerScore} : ${computerScore}`;
}

function handlePlayerChoice(button) {
  const computerChoice = getComputerChoice();
  const playerChoice = button.dataset.choice;

  addScore(playerChoice, computerChoice);
  updateUIScore();
  --roundsToPlay;

  if (roundsToPlay <= 0) {
    finishGame();
  }
}

playBtn.addEventListener('click', () => {
  playDiv.classList.remove('game-over');
  buildGame();
}, { once: true });

rockBtn.addEventListener("click", () => handlePlayerChoice(rockBtn));
paperBtn.addEventListener("click", () => handlePlayerChoice(paperBtn));
scissorsBtn.addEventListener("click", () => handlePlayerChoice(scissorsBtn));

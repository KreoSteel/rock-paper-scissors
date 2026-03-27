// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Randomize and return "computer" choise
function getComputerChoice() {
   const rockPaperScissors = Math.floor(Math.random() * 3);
   switch (rockPaperScissors) {
      case 0:
         return "rock";
      case 1:
         return "paper";
      case 2:
         return "scissors";
   }
}

// Returns player's choise
function getPlayerChoice() {
   const choise = prompt("Your turn! (Rock, Paper or Scissors)");
   return choise.toLowerCase();
}

// Decide who wins or draw
function playRound(player, computer) {
   if (player === computer) {
      console.log("Draw!");
   } else if (player === "rock" && computer === "scissors") {
      playerScore++;
   } else if (player === "paper" && computer === "rock") {
      playerScore++;
   } else if (player === "scissors" && computer === "paper") {
      playerScore++;
   } else computerScore++;
   console.log(`P: ${playerScore}, C: ${computerScore}`);
}

// Repeat playRound 5 times and show final results
function playGame() {
   for (let i = 0; i < 5; i++) {
      const playerChoise = getPlayerChoice();
      const computerChoise = getComputerChoice();
      console.log(`Player ${playerChoise}, Computer ${computerChoise}`);
      
      playRound(playerChoise, computerChoise);
   }

   if (playerScore === computerScore) {
      console.log(
         `Its a draw! Final score: P: ${playerScore}, C: ${computerScore}`,
      );
   } else if (playerScore > computerScore) {
      console.log(
         `Player wins! Final score: P: ${playerScore}, C: ${computerScore}`,
      );
   } else {
      console.log(
         `Computer wins! Final score: P: ${playerScore}, C: ${computerScore}`,
      );
   }
}

// Calling the playGame();
playGame();

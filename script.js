function getComputerChoice() {
  let randomValue = Math.random();
  let computerChoice;
  if (randomValue <= 0.333) {
    computerChoice = "rock";
  } else if (randomValue > 0.333 && randomValue <= 0.666) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors"
  }
  computerChoice = computerChoice.toUpperCase();
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper or scissors?");
  humanChoice = humanChoice.toUpperCase();
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;
let draws = 0;
let gameNumber = 0

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  let result;
  gameNumber++;
  if ((computerChoice === "ROCK" && humanChoice === "ROCK")
     || (computerChoice === "PAPER" && humanChoice === "PAPER")
     || (computerChoice === "SCISSORS" && humanChoice === "SCISSORS")) {
    result = "DRAW!";
    draws++;
  } else if ((computerChoice === "ROCK" && humanChoice === "PAPER")
     || (computerChoice === "PAPER" && humanChoice === "SCISSORS")
      || (computerChoice === "SCISSORS" && humanChoice === "ROCK")) { 
    result = "HUMAN WINS!";
    humanScore++;
  } else {
    result = "COMPUTER WINS!";
    computerScore++;
  }
  console.log(`###`);
  console.log(`Game number ${gameNumber}`);
  console.log(`computerChoice = ${computerChoice}`);
  console.log(`humanChoice = ${humanChoice}`);
  console.log(result);
  console.log(`The score is humanScore = ${humanScore}; \
| computerScore = ${computerScore} | draws = ${draws}.`);
  return result;
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}

playGame();

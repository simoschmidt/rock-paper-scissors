let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
  let randomNumber = Math.floor(Math.random () * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerChoice = 'rock';
      break;
    case 2:
      computerChoice = 'paper';
      break;
    case 3:
      computerChoice = 'scissors';
      break;
  }
  console.log ('computer chose ' + computerChoice);
  console.log ('random number is ' + randomNumber);
  return computerChoice;
}

function getHumanChoice () {
  let humanChoice = prompt ('Rock, paper or scissors?');
  humanChoice = humanChoice.toLocaleLowerCase ();
  while (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors') {
    humanChoice = prompt ('That\'s not one of the options :) Please select Rock, paper or scissors')
    humanChoice = humanChoice.toLocaleLowerCase ();
  }
  console.log('user chose ' + humanChoice);
  return humanChoice;
}

function playRound (humanChoice, computerChoice) {
  if ((humanChoice == 'rock' && computerChoice == 'paper') || 
  (humanChoice == 'paper' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'rock')) {
      console.log ('You lose! ' + computerChoice + ' beats ' + humanChoice + '.')
    } else {
      console.log ('huh');
    }
    console.log(humanChoice)
    console.log(computerChoice)
}

const computerSelection = getComputerChoice ();
const humanSelection = getHumanChoice ();

playRound (humanSelection, computerSelection);
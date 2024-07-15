let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

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
  console.log ('Computer chose ' + computerChoice + '.');
//  console.log ('random number is ' + randomNumber);
  return computerChoice;
}

/*
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
*/

function getHumanChoice () {
  document.addEventListener("click", function(event) {
    // check which link was clicked using the event.target.id property
    switch (event.target.id) {
      case "rockBtn":
        // do something when link1 is clicked
        console.log("You clicked rockBtn");
        break;
      case "paperBtn":
        // do something when link2 is clicked
        console.log("You clicked paperBtn");
        break;
      case "scissorsBtn":
        // do something when link3 is clicked
        console.log("You clicked scissorsBtn");
        break;
      default:
        // do nothing if none of the links were clicked
        break;
    }
  });
  /*
  let humanChoice = prompt ('Rock, paper or scissors?');
  humanChoice = humanChoice.toLocaleLowerCase ();
  while (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors') {
    humanChoice = prompt ('That\'s not one of the options :) Please select Rock, paper or scissors')
    humanChoice = humanChoice.toLocaleLowerCase ();
  }
  console.log ('Human chose ' + humanChoice + '.');
  return humanChoice;
  */
}

function playGame () {
  function playRound (humanChoice, computerChoice) {
    if ((humanChoice == 'rock' && computerChoice == 'paper') || 
    (humanChoice == 'paper' && computerChoice == 'scissors') || 
    (humanChoice == 'scissors' && computerChoice == 'rock')) {
        computerScore ++;
        console.log ('You lose! ' + computerChoice[0].toUpperCase() + computerChoice.slice(1) + ' beats ' + humanChoice + '.');
      } else if (humanChoice === computerChoice) {
        drawScore ++;
        console.log ('Draw!');
      } else {
        humanScore ++;
        console.log ('You win! ' + humanChoice[0].toUpperCase() + humanChoice.slice(1) + ' beats ' + computerChoice + '.');
      }
    console.log('---')
  }

//  for (let i = 0; i < 5; i++) {
  for (let i = 0; i < 1; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
  }

   if (humanScore > computerScore) {
    console.log('You win! Your score was ' + humanScore + ' and the computers score was ' + computerScore + ', the amount of rounds that were draws was ' + drawScore + '.');
   } else if (humanScore < computerScore) {
    console.log('You lose! Your score was ' + humanScore + ' and the computers score was ' + computerScore + ', the amount of rounds that were draws was ' + drawScore + '.');
   } else {
    console.log ('It\'s a draw! Your score was ' + humanScore + ' and the computers score was ' + computerScore + ', the amount of rounds that were draws was ' + drawScore + '.');
   }
}

playGame ();

/*
rockBtn.addEventListener("click", () => {
  console.log("Rock has been pressed!")
  playRound(humanSelection, computerSelection);
});
*/
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice () {
  let randomNumber = Math.floor(Math.random () * 3) + 1;
  let computerChoice;
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


function playGame () {
  function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if ((humanChoice == 'rock' && computerChoice == 'paper') || 
    (humanChoice == 'paper' && computerChoice == 'scissors') || 
    (humanChoice == 'scissors' && computerChoice == 'rock')) {
        computerScore ++;
        console.log ('You lose! ' + computerChoice[0].toUpperCase() + computerChoice.slice(1) + ' beats ' + humanChoice + '.');
        console.log (humanScore + computerScore + drawScore);
      } else if (humanChoice === computerChoice) {
        drawScore ++;
        console.log ('Draw!');
        console.log (humanScore + computerScore + drawScore);
      } else {
        humanScore ++;
        console.log ('You win! ' + humanChoice[0].toUpperCase() + humanChoice.slice(1) + ' beats ' + computerChoice + '.');
        console.log (humanScore + computerScore + drawScore);
      }
    console.log('---')
    if (humanScore + computerScore + drawScore == 5) {
      document.getElementById("rockBtn").disabled = true;
      document.getElementById("paperBtn").disabled = true;
      document.getElementById("scissorsBtn").disabled = true;
      if (humanScore > computerScore) {
       console.log('You win! Your score was ' + humanScore + ' and the computers score was ' + computerScore + ', the amount of rounds that were draws was ' + drawScore + '.');
      } else if (humanScore < computerScore) {
       console.log('You lose! Your score was ' + humanScore + ' and the computers score was ' + computerScore + ', the amount of rounds that were draws was ' + drawScore + '.');
      } else {
       console.log ('It\'s a draw! Your score was ' + humanScore + ' and the computers score was ' + computerScore + ', the amount of rounds that were draws was ' + drawScore + '.');
      }
    }
  }
  
  document.addEventListener("click", function(event) {
    switch (event.target.id) {
      case "rockBtn":
        console.log ('Human chose rock.');
        playRound('rock');
        break;
      case "paperBtn":
        console.log ('Human chose paper.');
        playRound('paper');
        break;
      case "scissorsBtn":
        console.log ('Human chose scissors.');
        playRound('scissors');
        break;
    }
  }); 

  /*
  //for (let i = 0; i < 5; i++) {
  for (let i = 0; i < 1; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
  }
  */

}

/*
function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
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

document.addEventListener("click", function(event) {
  switch (event.target.id) {
    case "rockBtn":
      console.log ('Human chose rock.');
      playRound('rock');
      break;
    case "paperBtn":
      console.log ('Human chose paper.');
      playRound('paper');
      break;
    case "scissorsBtn":
      console.log ('Human chose scissors.');
      playRound('scissors');
      break;
  }
});

*/

playGame();
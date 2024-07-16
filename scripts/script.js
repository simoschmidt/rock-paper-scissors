let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
const resultsDiv = document.querySelector("#results");

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
 //console.log ('Computer chose ' + computerChoice + '.');
  return computerChoice;
}


function playGame () {
  function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if ((humanChoice == 'rock' && computerChoice == 'paper') || 
    (humanChoice == 'paper' && computerChoice == 'scissors') || 
    (humanChoice == 'scissors' && computerChoice == 'rock')) {
        computerScore ++;
        resultsDiv.textContent = 'You chose ' + humanChoice +
          ' and the computer chose ' + computerChoice +'. You lose! ' +
          computerChoice[0].toUpperCase() + computerChoice.slice(1) +
          ' beats ' + humanChoice + '. The current score is You: ' +
          humanScore + ' / Computer: ' + computerScore + ' / Draws: ' +
          drawScore;
      } else if (humanChoice === computerChoice) {
        drawScore ++;
        resultsDiv.textContent = 'You chose ' + humanChoice +
        ' and the computer chose ' + computerChoice +
        '. Draw! The current score is You: ' + humanScore + ' / Computer: ' +
        computerScore + ' / Draws: ' + drawScore;
      } else {
        humanScore ++;
        resultsDiv.textContent = 'You chose ' + humanChoice +
        ' and the computer chose ' + computerChoice +'. You win! ' +
        humanChoice[0].toUpperCase() + humanChoice.slice(1) + ' beats ' +
        computerChoice + '. The current score is You: ' + humanScore +
        ' / Computer: ' + computerScore + ' / Draws: ' + drawScore;
      }
    //console.log('---')
    checkScore();
  }
  
  document.addEventListener("click", function(event) {
    switch (event.target.id) {
      case "rockBtn":
        //console.log ('Human chose rock.');
        playRound('rock');
        break;
      case "paperBtn":
        //console.log ('Human chose paper.');
        playRound('paper');
        break;
      case "scissorsBtn":
        //console.log ('Human chose scissors.');
        playRound('scissors');
        break;
    }
  }); 
}

function checkScore() {
  if (humanScore + computerScore + drawScore == 5) {
    document.getElementById("rockBtn").disabled = true;
    document.getElementById("paperBtn").disabled = true;
    document.getElementById("scissorsBtn").disabled = true;
    if (humanScore > computerScore) {
     resultsDiv.textContent = 'You win! Your score was ' + humanScore +
      ' and the computers score was ' + computerScore +
      ', the amount of rounds that were draws was ' + drawScore + '.';
    } else if (humanScore < computerScore) {
     resultsDiv.textContent = 'You lose! Your score was ' + humanScore +
      ' and the computers score was ' + computerScore +
      ', the amount of rounds that were draws was ' + drawScore + '.';
    } else {
     resultsDiv.textContent = 'It\'s a draw! Your score was ' + humanScore +
      ' and the computers score was ' + computerScore +
      ', the amount of rounds that were draws was ' + drawScore + '.';
    }
  }
}

playGame();

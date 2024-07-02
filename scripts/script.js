// console.log("Hello World")

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
  console.log('computer chose ' + computerChoice);
  console.log(randomNumber);
//  return randomNumber;
}

function getHumanChoice () {
  let userInput = prompt('Rock, paper or scissors?');
  userInput = userInput.toLocaleLowerCase();
  if (userInput != "rock" || userInput != "paper" || userInput != "scissors") {
    prompt('That\'s not one of the options :) Please select Rock, paper or scissors');
  }
  /*
  switch (userInput.toLocaleLowerCase()) {
    case "rock":
      humanChoice = 'rock';
      break;
    case "paper":
      humanChoice = 'paper';
      break;
    case "scissors":
      humanChoice = 'scissors';
      break;
  }
  console.log('user chose ' + humanChoice);
  return userInput;
  */
  console.log('user chose ' + userInput);
}

getComputerChoice ();
getHumanChoice ();
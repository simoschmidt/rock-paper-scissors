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
  console.log('random number is ' + randomNumber);
//  return randomNumber;
}

function getHumanChoice () {
  let userInput = prompt('Rock, paper or scissors?');
  userInput = userInput.toLocaleLowerCase();
  while (userInput != 'rock' && userInput != 'paper' && userInput != 'scissors') {
    userInput = prompt('That\'s not one of the options :) Please select Rock, paper or scissors')
  }
  console.log('user chose ' + userInput);
}

getComputerChoice ();
getHumanChoice ();
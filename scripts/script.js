// console.log("Hello World")

function getComputerChoice () {
  let randomNumber = Math.floor(Math.random () * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      console.log(computerChoice);
      break;
    case 2:
      computerChoice = "paper";
      console.log(computerChoice);
      break;
    case 3:
      computerChoice = "scissors";
      console.log(computerChoice);
      break
  }
  return randomNumber;
}

getComputerChoice();
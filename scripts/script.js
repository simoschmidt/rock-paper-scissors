// console.log("Hello World")

function getComputerChoice () {
  let randomNumber = Math.floor(Math.random () * 3) + 1;
  switch (randomNumber) {
    case: 1:
      computerChoice = "rock";
  }
  return randomNumber;
}

console.log(getComputerChoice());

switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
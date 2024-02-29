function getComputerChoice() {
    let compChoice = Math.random();
        if (compChoice <= 0.3333) {
        return "rock";
    } else if (compChoice>0.3333 && compChoice<=0.6666) {
        return "paper";
    } else {
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock!";
        } else return "It's a tie!";
} else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
        return "You Win! Paper beats Rock!";
    } else if (computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper!";
    } else return "It's a tie!";
} else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
        return "You Win! Scissors beats Paper!";
    } else if (computerSelection === "rock") {
        return "You Lose! Rock beats Scissors!";
    } else return "It's a tie!";
}
}
  const playerSelection = prompt("Choose Rock, Paper, or Scissors!", "").toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
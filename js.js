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
    if (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "scissors" && computerSelection === "paper"
    || playerSelection === "paper" && computerSelection === "rock") {
        return "You win!";
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {
        return "You lose!";
    }
}

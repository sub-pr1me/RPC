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
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper, or Scissors!", "").toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(' * ROUND ' + (i+1) + ' * ');
        if (result.includes("win")) {
            playerScore++;
            console.log(`Your ${playerSelection} beats computer's ${computerSelection}!`);
         } else if (result.includes("lose")) {
            computerScore++;
            console.log(`Your ${playerSelection} loses to computer's ${computerSelection}!`);            
         } else {
            console.log(`It's a tie between your and computer's ${playerSelection}!`);
         }
         console.log(`Score: You - ${playerScore}   Computer - ${computerScore}`);
    }
    console.log((playerScore > computerScore) ? "You have won the game!" :
    (playerScore === computerScore) ? "The game ended in a tie!" : "You have lost the game!");
}   
playGame();
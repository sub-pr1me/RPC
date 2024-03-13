function getCompChoice() {
    const result = Math.random();
    if (result <=0.3333) {
        return "rock";
    } else if (result >0.3333 && result <=0.6666) {
        return "paper";
    } else {
        return "scissors";
    }
    }
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === "rock" && computerChoice === "scissors"
        || playerChoice === "paper" && computerChoice === "rock"
        || playerChoice === "scissors" && computerChoice === "paper") {
            return "win";
        } else if (playerChoice === computerChoice) {
            return "tie";
        } else {
            return "loss";
        }
    }
    function playGame() {
        let playerScore = 0;
        let computerScore = 0;
        for (let i = 0; i < 5; i++) {
            const computerChoice = getCompChoice();
            const playerChoice = prompt("Please pick Rock, Paper, or Scissors!", "").toLowerCase();
            let result = playRound(playerChoice, computerChoice);
            console.log(" * ROUND " + (i+1) + " * ");
            if (result === "win") {
                playerScore++;
                console.log(`You win! Your ${playerChoice} beats computer's ${computerChoice}!`);            
            } else if (result === "loss") {
                computerScore++;
                console.log(`You lose! Your ${playerChoice} loses to computer's ${computerChoice}!`);            
            } else {
                console.log(`It's a tie! You and the computer have both picked ${playerChoice}!`);            
            }
            console.log(`Score:    You - ${playerScore}   Computer - ${computerScore}`);
        }
        (playerScore > computerScore) ? console.log("YOU HAVE WON THE GAME!") 
        : (computerScore > playerScore) ? console.log("YOU HAVE LOST THE GAME!") 
        : console.log("THE GAME ENDED IN A TIE!");   
    }
    playGame()
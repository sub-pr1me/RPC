function getComputerChoice() {
    let compChoice = Math.random();
        if (compChoice <= 0.3333) {
        return "Rock";
    } else if (compChoice>0.3333 && compChoice<=0.6666) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
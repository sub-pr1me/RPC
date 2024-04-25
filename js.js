//FUNCTIONS

function getCompChoice() {
    let result = Math.random();
    if (result <=0.3333) {
        return "rock";
    } else if (result >0.3333 && result <=0.6666) {
        return "paper";
    } else {
        return "scissors";
    }};

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors"
    || playerChoice === "paper" && computerChoice === "rock"
    || playerChoice === "scissors" && computerChoice === "paper") {
        return "win";
    } else if (playerChoice === computerChoice) {
        return "tie";
    } else {
        return "loss";
    }};

function playGame(choice) {
    let playerChoice = choice.textContent.toLowerCase();;
    let computerChoice = getCompChoice();
    let result = playRound(playerChoice, computerChoice);
    if (result === "win") {
        pScore++;
        score.textContent = `Score:    You - ${pScore}   Computer - ${cScore}
        You win! Your ${playerChoice} beats computer's ${computerChoice}!`;
    } else if (result === "loss") {
        cScore++;
        score.textContent = `Score:    You - ${pScore}   Computer - ${cScore}
        You lose! Your ${playerChoice} loses to computer's ${computerChoice}!`;
    } else {
    score.textContent = `Score:    You - ${pScore}   Computer - ${cScore}
        It's a tie! You and the computer have both picked ${playerChoice}!`;
    };
    roundNumber++;
    display.textContent = " * ROUND " + (roundNumber+1) + " * ";
    (pScore >= 5 && pScore > cScore) ? final.textContent = "YOU HAVE WON THE GAME!" 
    : (cScore >=5 && cScore > pScore) ? final.textContent = "YOU HAVE LOST THE GAME!" 
    : final.textContent = ""; 
    };

//DEFAULT PARAMETERS

let pScore = 0;
let cScore = 0;
let roundNumber = 0;

//ELEMENTS CREATED & APPENDED

const page = document.querySelector("#body");
const display = document.createElement("div");
display.textContent = " * ROUND " + (roundNumber+1) + " * ";
page.appendChild(display);
display.style.color = "yellow";

const rock = document.createElement("button");
rock.textContent = 'ROCK';
rock.setAttribute("id", "rock");
page.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = 'PAPER';
paper.setAttribute("id", "paper");
page.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = 'SCISSORS';
scissors.setAttribute("id", "scissors");
page.appendChild(scissors);

const score = document.createElement("div");
score.textContent = `Score:    You - ${pScore}   Computer - ${cScore}`;
page.appendChild(score);
score.style.color = "white";

const final = document.createElement("div");
page.appendChild(final);
final.style.color = "yellow";

//EVENT HANDLERS

rock.addEventListener('click', () => {
    playGame(rock);
});
paper.addEventListener('click', () => {
    playGame(paper);
});
scissors.addEventListener('click', () => {
    playGame(scissors);
});
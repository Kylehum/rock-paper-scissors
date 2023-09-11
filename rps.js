
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

const rock = document.querySelector(".rockBtn");
const paper = document.querySelector(".paperBtn");
const scissors = document.querySelector(".scissorsBtn");
const outcomeDiv = document.querySelector(".outcome");
const p = document.createElement("p");
const pScore = document.querySelector(".runningPscore")
const compScore = document.querySelector(".runningCscore")




// Random Computer Choice//
function getComputerChoice() {
    console.log()
    let array = ["Rock", "Paper", "Scissors"];
    let randomItem = array[(Math.floor(Math.random() * array.length))];
    return randomItem;
}
// A round of game played //
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();

     if (playerSelection === computerSelection) {
        p.innerText = `It is a tie! You both picked ${playerSelection}`;
        outcomeDiv.appendChild(p);
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        p.innerText = "You won! " + playerSelection + " beats " + computerSelection + "!";
        outcomeDiv.appendChild(p);

    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {

        computerScore++;
        p.innerText = "Computer won! " + computerSelection + " beats " + playerSelection + "!";
        outcomeDiv.appendChild(p);   
    }
}


function checkForWinner(playerScore, computerScore){
    if(playerScore === 5){
        const p = document.createElement("p");
        p.classList.add("playerWon");
        p.innerText = `Good Job! You beat the Computer ${playerScore} to ${computerScore}`;
        outcomeDiv.appendChild(p)

        rock.setAttribute("disabled", 1)
        paper.setAttribute("disabled", 1)
        scissors.setAttribute("disabled", 1)
        endgame()
        }
        
    if(computerScore === 5){
        const p = document.createElement("p");
        p.classList.add("computerWon");
        p.innerText = `You lost! Better luck next time! The computer won ${playerScore} to ${computerScore}`;
        outcomeDiv.appendChild(p)

        rock.setAttribute("disabled", 1)
        paper.setAttribute("disabled", 1)
        scissors.setAttribute("disabled", 1)
        endgame()
    }
}
function updatedScores(playerScore, computerScore){
    pScore.innerText = `Player score: ${playerScore}`;
    compScore.innerText = `Computer score: ${computerScore}`;
}


rock.addEventListener("click", function(){
    const computerSelection = getComputerChoice()
    const playerSelection = "rock"
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    updatedScores(playerScore, computerScore);
});
paper.addEventListener("click", function(){
    const computerSelection = getComputerChoice()
    const playerSelection = "paper"
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    updatedScores(playerScore, computerScore);
});
scissors.addEventListener("click", function(){
    const computerSelection = getComputerChoice()
    const playerSelection = "scissors"
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, computerScore);
    updatedScores(playerScore, computerScore);
});

function endgame(){
    playerScore = 0;
    computerScore = 0;
    rock.removeAttribute("disabled"); paper.removeAttribute("disabled"); scissors.removeAttribute("disabled");
}






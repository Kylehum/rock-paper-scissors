
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

function getComputerChoice() {
    console.log()
    let array = ["Rock", "Paper", "Scissors"];
    let randomItem = array[(Math.floor(Math.random() * array.length))];
    return randomItem;

}
function playRound(playerSelection, computerSelection) {
    console.log("1", playerSelection, "2", computerSelection);
    
    
    if (playerSelection === computerSelection) {
        return `It is a tie! You both picked ${playerSelection}` + " Score is: Player Score: " + playerScore + " Computer Score: " + computerScore;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        return "You won! " + playerSelection + " beats " + computerSelection + "! Player score: " + playerScore + "Computer score: " + computerScore;

    } else if (
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {

        computerScore++;
        return "Computer won! " + computerSelection + " beats " + playerSelection + "! Player score: " + playerScore + " Computer score: " + computerScore;
        
    }

}


function game(){
    for (i = 0; i < 5; i++){
      playerSelection = prompt("Choose Rock, Paper, or Scissors: ").toLowerCase();
      computerSelection = getComputerChoice().toLowerCase();
      console.log(playRound(playerSelection, computerSelection))
        

    }
    if (playerScore > computerScore){
        return "You beat the computer good job!";
    } else {
        return "Computer beat you! Try again"
    }
    

}
console.log(game());




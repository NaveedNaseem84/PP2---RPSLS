/*Event Listener for when DOM loads to listen for clicks on all the buttons
Adapted from the Love Maths project from CI. Will be credited in readme.md*/

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") === "reset") {
                resetGame();
            } else if (this.getAttribute("id") === "Rock" || this.getAttribute("id") === "Paper" || this.getAttribute("id") === "Scissors" || this.getAttribute("id") === "Lizard" || this.getAttribute("id") === "Spock") {
                let inputType = this.getAttribute("id");
                document.getElementById("playerChoice").innerHTML = inputType;
                computerRandomChoice();
                playGame();
            }
            if (this.getAttribute("id") === "instructions") {
                getInstructions();
            }
        });
    }
});

/* game functions*/

/* check to see if the player choice beats the computer choice. If so, call the playerWon() function
if the computer choice beats the player choice, call the computerWon() function
If it is a draw ( both choose the same), call the gameDraw() function */

function playGame() {
    let playerChoice = document.getElementById("playerChoice").innerHTML;
    let computerChoice = document.getElementById("computerChoice").innerHTML;

    if (playerChoice === "Rock" && computerChoice === "Scissors" || (playerChoice === "Scissors" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Rock" && computerChoice === "Lizard") || (playerChoice === "Lizard" && computerChoice === "Spock") ||
        (playerChoice === "Spock" && computerChoice === "Scissors") || (playerChoice === "Scissors" && computerChoice === "Lizard") || (playerChoice === "Lizard" && computerChoice === "Paper") ||
        (playerChoice === "Paper" && computerChoice === "Spock") || (playerChoice === "Spock" && computerChoice === "Rock")) {
        playerWon();
    } 

    else if (computerChoice === "Rock" && playerChoice === "Scissors" || (computerChoice === "Scissors" && playerChoice === "Paper") || (computerChoice === "Paper" && playerChoice === "Rock") 
     || (computerChoice === "Rock" && playerChoice === "Lizard") || (computerChoice === "Lizard" && playerChoice === "Spock") ||
    (computerChoice === "Spock" && playerChoice === "Scissors") || (computerChoice === "Scissors" && playerChoice === "Lizard") || (computerChoice === "Lizard" && playerChoice === "Paper") ||
    (computerChoice === "Paper" && playerChoice === "Spock") || (computerChoice === "Spock" && playerChoice === "Rock")) {
    computerWon();
}     
    
}

/*Randomly select a choice from Rock, Paper, Scissors, Lizard or Spock
Once selected, assign to a variable for the game.
Update the computerChoice element on HTML form - only when the game has started! */

function computerRandomChoice() {

    let gameSelection = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    let computerChoice = gameSelection[(Math.floor(Math.random() * gameSelection.length))];
    document.getElementById("computerChoice").innerHTML = computerChoice;
}

/*Increment the player score by 1 and update the playerScore element.
Update the game-status-message with the outcome of the round */

function playerWon() {
    document.getElementById("game-status-message").innerHTML = "";
    let playerScore = document.getElementById("playerScore").innerHTML;
    let computerChoice = document.getElementById("computerChoice").innerHTML;
    let playerChoice = document.getElementById("playerChoice").innerHTML;

    playerScore++;

    document.getElementById("game-status-message").innerHTML = `You Win: ${playerChoice} beats ${computerChoice}!`;   
    document.getElementById("playerScore").innerHTML = playerScore;

}

/*Increment the computer score by 1 and update the computerScore element.
Update the game-status-message with the outcome of the round */

function computerWon() {
  
    document.getElementById("game-status-message").innerHTML = "";
    let computerScore = document.getElementById("computerScore").innerHTML;
    let computerChoice = document.getElementById("computerChoice").innerHTML;
    let playerChoice = document.getElementById("playerChoice").innerHTML;

    computerScore++;
    
    document.getElementById("game-status-message").innerHTML = `You loose: ${computerChoice} beats ${playerChoice}!`;    
    document.getElementById("computerScore").innerHTML = computerScore;

}
/*If player and Computer choose the same option, 
Update the game-status-message with the outcome of the round */

function gameDraw() {

}

/*set all player and computer score to 0
update the respected elements to display this.
Update the game-status to notify player game has been reset.
set the player and computer choice HTML elements to "" */

function resetGame() {
    alert("Reset function called");

}
/* Provide user instructions for the user*/
function getInstructions() {
    alert("getInstructions function called");

}
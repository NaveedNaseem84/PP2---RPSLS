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

}

/*Randomly select a choice from Rock, Paper, Scissors, Lizard or Spock
Once selected, assign to a variable for the game.
Update the computerChoice element on HTML form - only when the game has started! */

function computerRandomChoice() {

}

/*Increment the player score by 1 and update the playerScore element.
Update the game-status-message with the outcome of the round */

function playerWon() {

}

/*Increment the computer score by 1 and update the computerScore element.
Update the game-status-message with the outcome of the round */

function computerWon() {

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
    alert("Reset function called")
}
/* Provide user instructions for the user*/
function getInstructions() {
    alert("getInstructions function called")

}
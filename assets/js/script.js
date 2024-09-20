const rockValue = "Rock";
const paperValue = "Paper";
const scissorsValue = "Scissors";
const lizardValue = "Lizard";
const spockValue = "Spock";


let computerScore = 0;
let playerScore = 0;
let triesLeft = 10;

const gameSelection = [rockValue, paperValue, scissorsValue, lizardValue, spockValue];
const styleGameStatusText = ["style-draw-text", "style-loosing-text", "style-winning-text"];

const gameStatusMessageID = document.getElementById("game-status-message");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const computerScoreID = document.getElementById("computerScore");
const playerScoreID = document.getElementById("playerScore");

/*Event Listener for when DOM loads to listen for clicks on all the buttons
Adapted from the Love Maths project from CI. Will be credited in readme.md*/

/*
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") === "reset") {
                resetGame();
            } else if (this.getAttribute("id") === "Rock" || this.getAttribute("id") === "Paper" || this.getAttribute("id") === "Scissors" || this.getAttribute("id") === "Lizard" || this.getAttribute("id") === "Spock") {
                let inputType = this.getAttribute("id");
                playerChoice.innerHTML = inputType;
                computerRandomChoice();
                playGame();
            }
            if (this.getAttribute("id") === "instructions") {
                getInstructions();
            }
        });
    }
});

*/

let applyEventListeneronDom = document.addEventListener("DOMContentLoaded", applybuttonEventListener);

/* Event listener for buttons on DOM load */

function applybuttonEventListener(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") === "reset") {
                resetGame();
            } else if (gameSelection.includes(this.getAttribute("id"))) {
                let inputType = this.getAttribute("id");
                playerChoice.innerHTML = inputType;
                computerRandomChoice();
                playGame();
            }
            if (this.getAttribute("id") === "instructions") {
                getInstructions();
            }
        });
    }
}

/* game functions*/

/* check to see if the player choice beats the computer choice. If so, call the playerWon() function
if the computer choice beats the player choice, call the computerWon() function
If it is a draw ( both choose the same), call the gameDraw() function */

function playGame(playerChoiceValue, computerChoiceValue) {
    playerChoiceValue = playerChoice.innerHTML;
    computerChoiceValue = computerChoice.innerHTML;

    if (computerChoiceValue === playerChoiceValue) {
        gameDraw();

    } else if (playerChoiceValue === rockValue && computerChoiceValue === scissorsValue ||
        (playerChoiceValue === scissorsValue && computerChoiceValue === paperValue) ||
        (playerChoiceValue === paperValue && computerChoiceValue === rockValue) ||
        (playerChoiceValue === rockValue && computerChoiceValue === lizardValue) ||
        (playerChoiceValue === lizardValue && computerChoiceValue === spockValue) ||
        (playerChoiceValue === spockValue && computerChoiceValue === scissorsValue) ||
        (playerChoiceValue === scissorsValue && computerChoiceValue === lizardValue) ||
        (playerChoiceValue === lizardValue && computerChoiceValue === paperValue) ||
        (playerChoiceValue === paperValue && computerChoiceValue === spockValue) ||
        (playerChoiceValue === spockValue && computerChoiceValue === rockValue)) {
        playerWon();

    } else {
        computerWon();
    }
    
    checkWinner();
    countTriesLeft();   
}

/*Randomly select a choice from Rock, Paper, Scissors, Lizard or Spock
Once selected, assign to a variable for the game.
Update the computerChoice element on HTML form - only when the game has started! */

function computerRandomChoice() {
    computerChoice.innerHTML = gameSelection[(Math.floor(Math.random() * gameSelection.length))];
}

/*Increment the player score by 1 and update the playerScore element.
Update the game-status-message with the outcome of the round */

function playerWon() {
    gameStatusMessageID.innerHTML = "";
    gameStatusMessageID.classList.remove(...styleGameStatusText);
    gameStatusMessageID.classList.add("style-winning-text");
    gameStatusMessageID.innerHTML = "You Win: " + playerChoice.innerHTML + " beats " + computerChoice.innerHTML;
    playerScoreID.innerHTML = ++playerScore;

}

/*Increment the computer score by 1 and update the computerScore element.
Update the game-status-message with the outcome of the round */

function computerWon() {

    gameStatusMessageID.innerHTML = "";
    gameStatusMessageID.classList.remove(...styleGameStatusText);
    gameStatusMessageID.classList.add("style-loosing-text");
    gameStatusMessageID.innerHTML = "You Lose: " + computerChoice.innerHTML + " beats " + playerChoice.innerHTML;
    computerScoreID.innerHTML = ++computerScore;

}
/*If player and Computer choose the same option, 
Update the game-status-message with the outcome of the round */

function gameDraw() {
    gameStatusMessageID.innerHTML = "";
    gameStatusMessageID.classList.remove(...styleGameStatusText);
    gameStatusMessageID.classList.add("style-draw-text");
    gameStatusMessageID.innerHTML = "Draw! Try again.";
}

/*set all player and computer score to 0
update the respected elements to display this.
Update the game-status to notify player game has been reset.
set the player and computer choice HTML elements to ""
Remove all win/loose styling classes. 
Pose butons re-enabled, tries left set back to 10
*/

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    triesLeft = 10;
    gameStatusMessageID.classList.remove(...styleGameStatusText);
    playerScoreID.classList.remove(...styleGameStatusText);
    computerScoreID.classList.remove(...styleGameStatusText);
    gameStatusMessageID.innerHTML = "Game reset. Choose your pose.";
    playerScoreID.innerHTML = playerScore;
    computerScoreID.innerHTML = computerScore;
    computerChoice.innerHTML = "";
    playerChoice.innerHTML = "";
    document.getElementById("tries-left-count").innerHTML = triesLeft;
    document.getElementById("btn-gameplay-btn-group").style.display = "block";
}

/* check both scores. Winner's score styled to green, draw to orange loosers to red? (check color against background!) */
function checkWinner() {
    if (playerScore > computerScore) {
        computerScoreID.classList.remove(...styleGameStatusText);
        playerScoreID.classList.remove(...styleGameStatusText);
        playerScoreID.classList.add("style-winning-text");
        computerScoreID.classList.add("style-loosing-text");
    } else if (computerScore > playerScore) {
        computerScoreID.classList.remove(...styleGameStatusText);
        playerScoreID.classList.remove(...styleGameStatusText);
        computerScoreID.classList.add("style-winning-text");
        playerScoreID.classList.add("style-loosing-text");
    } else {
        computerScoreID.classList.remove(...styleGameStatusText);
        playerScoreID.classList.remove(...styleGameStatusText);
        computerScoreID.classList.add("style-draw-text");
        playerScoreID.classList.add("style-draw-text");
    }
}

/* function to minus the tries left. If they reach 0, disable the pose buttons till reset is called */
/* revisit - can this be refined somehow? */

function countTriesLeft() {
    triesLeft--;
    document.getElementById("tries-left-count").innerHTML = triesLeft;
    if (triesLeft === 0) {
        document.getElementById("btn-gameplay-btn-group").style.display = "none";
        if (playerScore > computerScore) {
            gameStatusMessageID.classList.remove(...styleGameStatusText);
            gameStatusMessageID.classList.add("style-winning-text");
            gameStatusMessageID.innerHTML = "Game Over. You Won!";
        } else if (computerScore > playerScore) {
            gameStatusMessageID.classList.remove(...styleGameStatusText);
            gameStatusMessageID.classList.add("style-loosing-text");
            gameStatusMessageID.innerHTML = "Game Over. You Lost!";

        } else {
            gameStatusMessageID.classList.remove(...styleGameStatusText);
            gameStatusMessageID.classList.add("style-draw-text");
            gameStatusMessageID.innerHTML = "It's a Draw!";
        }

    }
}
/* Provide user instructions for the user*/
function getInstructions() {
    let instructionsDiv = document.getElementById('Instructions');
    instructionsDiv.style.textAlign = "center";
    instructionsDiv.innerHTML =
        `<p>Scissors beats Paper </p>
        <p>Paper beats Rock</p>
        <p>Rock beats Lizard</p>
        <p>Lizard beats Spock </p>
        <p>Spock beats Scissors</p>
        <p>Scissors beats Lizard</p>
        <p>Lizard beats Paper </p>
        <p>Paper beats Spock</p>
        <p>Spock beats Rock</p>
        <p>Rock beats Scissors</p>     
          `;

    if (instructionsDiv.style.display === "block") {
        instructionsDiv.style.display = "none";
    } else {
        instructionsDiv.style.display = "block";
    }
}
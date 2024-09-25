//global variables

const rockValue = "rock";
const paperValue = "paper";
const scissorsValue = "scissors";
const lizardValue = "lizard";
const spockValue = "spock";


let computerScore = 0;
let playerScore = 0;
let triesLeft = 10;

const gameSelection = [rockValue, paperValue, scissorsValue, lizardValue, spockValue];
const styleClasses = ["style-winning-text", "style-loosing-text", "style-draw-text"];


const winningCombinations = {
    [rockValue]: [scissorsValue, lizardValue],
    [paperValue]: [rockValue, spockValue],
    [scissorsValue]: [paperValue, lizardValue],
    [lizardValue]: [spockValue, paperValue],
    [spockValue]: [scissorsValue, rockValue]
};

const gameStatusMessageID = document.getElementById("game-status-message");
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const computerScoreID = document.getElementById("computerScore");
const playerScoreID = document.getElementById("playerScore");
const poseBtns = document.getElementById("btn-gameplay-btn-group");

document.addEventListener("DOMContentLoaded", applybuttonEventListener);

//start of functions
//*******************

/*Event Listener for when DOM loads to listen for clicks on all the buttons
Adapted from the Love Maths project from CI. Will be credited in readme.md*/

/**
 * Apply event listener to all buttons on DOM load.
 */
function applybuttonEventListener() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", buttonClickListener);
    } 
}

/** 
 * Execute relevant function on click.
 * 
 * Differentiated and evaluated using Button Id's.
 * 
 * reset - resetGame called
 * 
 * Instructions - GetInstructions called
 */

function buttonClickListener() {

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
}

/** 
 * Check to see if the player choice beats, loses or draws the computer and vice versa.
 * 
 * If player/computer choice match: Call gameDraw
 * 
 * If player choice beats computer, call PlayerWon
 * 
 * Otherwise call ComputerWon
 * 
 * checkWinner and countTriesLeft method called. 
 */
function playGame(playerChoiceValue, computerChoiceValue) {

    playerChoiceValue = playerChoice.innerHTML;
    computerChoiceValue = computerChoice.innerHTML;

    if (computerChoiceValue === playerChoiceValue) {
        gameDraw();
    } else if (winningCombinations[playerChoiceValue].includes(computerChoiceValue)) {
        playerWon();
    } else {
        computerWon();
    }
    checkWinner();
    countTriesLeft();

}

/**
 * 
 * Random selection from gameSelection array created and passed to computer choice element.
 * 
 *gameSelection: rock, paper, scissors, lizard or spoke.
 */
function computerRandomChoice() {

    let randomSelection = gameSelection[(Math.floor(Math.random() * gameSelection.length))];
    computerChoice.innerHTML = randomSelection;

}

/** 
 * 
 * If player wins:
 * 1. increment the playerScore variable by 1. 
 * 2  UI updated to show winning text and new score styled to reflect the player win.
 */

function playerWon() {
    
    gameStatusMessageID.classList.remove(...styleClasses);
    gameStatusMessageID.classList.add("style-winning-text");
    gameStatusMessageID.innerHTML = "You Win: " + playerChoice.innerHTML + " beats " + computerChoice.innerHTML;
    playerScoreID.innerHTML = ++playerScore;

}

/**
 * If computer wins:
 * 1. increment the computerScore variable by 1
 * 
 * 2 . UI updated to show losing text and new score styled to reflect the player loss.
 */

function computerWon() {
   
    gameStatusMessageID.classList.remove(...styleClasses);
    gameStatusMessageID.classList.add("style-loosing-text");
    gameStatusMessageID.innerHTML = "You Lose: " + computerChoice.innerHTML + " beats " + playerChoice.innerHTML;
    computerScoreID.innerHTML = ++computerScore;

}

/**
 * If drawn:
 * 
 * UI updated to show draw text and score styled to reflect the draw.
 */

function gameDraw() {
      
    gameStatusMessageID.classList.remove(...styleClasses);
    gameStatusMessageID.classList.add("style-draw-text");
    gameStatusMessageID.innerHTML = "Draw! Try again.";

}

/** 
 * playerScore, computer Score and triesLeft variables returned to defaults
 * 
 * playerScore = 0, computerScore =0, triesLeft = 10.
 * 
 *  UI updated with text displayed and styled reflecting the reset.
 * 
 * Pose buttons displayed and in use again.
 */

function resetGame() {

    playerScore = 0;
    computerScore = 0;
    triesLeft = 10;
   
    gameStatusMessageID.classList.remove(...styleClasses);    
    playerScoreID.classList.remove(...styleClasses);
    computerScoreID.classList.remove(...styleClasses);

    gameStatusMessageID.innerHTML = "Game reset. Choose your pose.";
    playerScoreID.innerHTML = playerScore;
    computerScoreID.innerHTML = computerScore;
    computerChoice.innerHTML = "";
    playerChoice.innerHTML = "";
    document.getElementById("tries-left-count").innerHTML = triesLeft;
    poseBtns.classList.remove("btn-hide-pose-btns");
    poseBtns.classList.add("btn-show-pose-btns");

}

/** 
 * Styling to computerScore and PlayerScore removed
 * 
 * UI updated to reflect:
 * 
 * 1. Winner:  score = green 
 * 2. Loser: score = lightcoral
 * 3. Draw: score = orange
 */

function checkWinner() {

    computerScoreID.classList.remove(...styleClasses);
    playerScoreID.classList.remove(...styleClasses);

    if (playerScore > computerScore) {
        playerScoreID.classList.add("style-winning-text");
        computerScoreID.classList.add("style-loosing-text");
    } else if (computerScore > playerScore) {
        computerScoreID.classList.add("style-winning-text");
        playerScoreID.classList.add("style-loosing-text");

    } else {
        computerScoreID.classList.add("style-draw-text");
        playerScoreID.classList.add("style-draw-text");
    }

}

/** 
 *  * 
 * 1. triesLeft variable subtracted by 1.
 * 2. UI updated to show the new value.
 * 
 * If tries left reaches 0:
 * 1. UI updated to remove all styling from game status.
 * 2. UI updated to show if the player or computer score winning/loosing/drawn.
 * 3. UI updated to show text on the outcome of #2.
 * 4. UI updated to hide the pose buttons till reset called.
 * 
 */

function countTriesLeft() {

    triesLeft--;
    document.getElementById("tries-left-count").innerHTML = triesLeft;

    if (triesLeft === 0) {       

        gameStatusMessageID.classList.remove(...styleClasses);
        computerChoice.innerHTML = "";
        playerChoice.innerHTML = "";

        poseBtns.classList.remove("btn-show-pose-btns");
        poseBtns.classList.add("btn-hide-pose-btns");

        if (playerScore > computerScore) {
            gameStatusMessageID.classList.add("style-winning-text");
            gameStatusMessageID.innerHTML = "Game Over. You Won!";
        } else if (computerScore > playerScore) {
            gameStatusMessageID.classList.add("style-loosing-text");
            gameStatusMessageID.innerHTML = "Game Over. You Lost!";

        } else {
            gameStatusMessageID.classList.add("style-draw-text");
            gameStatusMessageID.innerHTML = "It's a Draw!";
        }
    }

}

/** 
 * UX updated to show the rules of the game on toggle mode.
 * 
 */
function getInstructions() {

    let instructionsDiv = document.getElementById('Instructions');
    if (instructionsDiv.style.display === "block") {
        instructionsDiv.style.display = "none";
    } else {
        instructionsDiv.style.display = "block";
    }
}
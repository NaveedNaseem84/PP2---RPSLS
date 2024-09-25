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

const applyEventListeneronDom = document.addEventListener("DOMContentLoaded", applybuttonEventListener);

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
    return applyEventListeneronDom;
}

/** 
 * Execute relevant function on click.
 * 
 * Differentiated and evaluated using Button Id's.
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
 * check to see if the player choice beats, loses or draws the computer and vice versa.
 * 
 * Once executed, will call the relevant function for further processing.
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
 *Choice: rock, paper, scissors, lizard or spoke.
 */
function computerRandomChoice() {

    let randomSelection = gameSelection[(Math.floor(Math.random() * gameSelection.length))];
    computerChoice.innerHTML = randomSelection;

}

/** 
 * Player score incremented by 1.
 * 
 * Player notfied of win.
 * 
 * Game status updated and styled reflecting.
 */

function playerWon() {
    
    gameStatusMessageID.classList.remove(...styleClasses);
    gameStatusMessageID.classList.add("style-winning-text");
    gameStatusMessageID.innerHTML = "You Win: " + playerChoice.innerHTML + " beats " + computerChoice.innerHTML;
    playerScoreID.innerHTML = ++playerScore;

}

/**
 * computer score incremented by 1.
 * 
 * Player notfied of loss.
 * 
 * Game status updated and styled reflecting.
 */

function computerWon() {
   
    gameStatusMessageID.classList.remove(...styleClasses);
    gameStatusMessageID.classList.add("style-loosing-text");
    gameStatusMessageID.innerHTML = "You Lose: " + computerChoice.innerHTML + " beats " + playerChoice.innerHTML;
    computerScoreID.innerHTML = ++computerScore;

}

/**
 * Game drawn.
 * 
 * Player notfied of draw.
 * 
 * Game status updated and styled accordingly.
 */

function gameDraw() {
      
    gameStatusMessageID.classList.remove(...styleClasses);
    gameStatusMessageID.classList.add("style-draw-text");
    gameStatusMessageID.innerHTML = "Draw! Try again.";

}

/** 
 * All game parameters return to original states.
 * 
 * All styling/text removed from all elements.
 * 
 * Player notified of reset
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
 * Both scores checked and styled according reflecting winner/loser/drawn
 * 
 * Game status updated and styled reflecting.
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
 * Number of tries subtracted.
 * 
 * Winning,losing or drawn scores styled.
 * 
 * Game status updated to reflect.
 * 
 * Pose buttons hidden till reset if tries up.
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
 * Winning combinations made available to player on toggle.
 * 
 */
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
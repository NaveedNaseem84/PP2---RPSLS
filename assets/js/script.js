
const rockValue = "Rock";
const paperValue = "Paper";
const scissorsValue = "Scissors";
const lizardValue = "Lizard";
const spockValue = "Spock";

let gameSelection = [rockValue, paperValue, scissorsValue, lizardValue, spockValue];

let gameStatusMessageID =  document.getElementById("game-status-message");
let playerChoice = document.getElementById("playerChoice");
let computerChoice = document.getElementById("computerChoice");

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

/* game functions*/

/* check to see if the player choice beats the computer choice. If so, call the playerWon() function
if the computer choice beats the player choice, call the computerWon() function
If it is a draw ( both choose the same), call the gameDraw() function */

function playGame(playerChoiceValue, computerChoiceValue) {
   //playerChoice = document.getElementById("playerChoice").innerHTML;
   playerChoiceValue = playerChoice.innerHTML;
      // playerChoice = playerChoice.innerHTML;
    //let computerChoice = document.getElementById("computerChoice").innerHTML;
    computerChoiceValue = computerChoice.innerHTML;
    if (computerChoiceValue === playerChoiceValue) {
        gameDraw();
       //alert("Its a draw")
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
        //alert("player Won")
    } else {
    computerWon();
       // alert("Computer Won")
    }
    
checkWinner();
triesLeft();
}

/*Randomly select a choice from Rock, Paper, Scissors, Lizard or Spock
Once selected, assign to a variable for the game.
Update the computerChoice element on HTML form - only when the game has started! */

function computerRandomChoice() {
   
    //let computerChoice = gameSelection[(Math.floor(Math.random() * gameSelection.length))];
    //document.getElementById("computerChoice").innerHTML = computerChoice;
    computerChoice.innerHTML =  gameSelection[(Math.floor(Math.random() * gameSelection.length))];
}

/*Increment the player score by 1 and update the playerScore element.
Update the game-status-message with the outcome of the round */

function playerWon() {
    gameStatusMessageID.innerHTML = "";
    gameStatusMessageID.classList.remove("style-loosing-text");
    gameStatusMessageID.classList.add("style-winning-text");
    //alert(playerChoiceValue.innerHTML);


    let playerScore = document.getElementById("playerScore").innerHTML;
   // let computerChoice = document.getElementById("computerChoice").innerHTML;
    //let playerChoice = document.getElementById("playerChoice").innerHTML;

   // playerChoiceValue = playerChoice.innerHTML;
      // playerChoice = playerChoice.innerHTML;
    //let computerChoice = document.getElementById("computerChoice").innerHTML;
    //computerChoiceValue = computerChoice.innerHTML;

    //playerScore++;

   // gameStatusMessageID.innerHTML = `You Win: ${playerChoiceValue.innerHTML} beats ${computerChoiceValue}!`;
    gameStatusMessageID.innerHTML = "You Win: "+ playerChoice.innerHTML + " beats "+computerChoice.innerHTML;
    document.getElementById("playerScore").innerHTML = ++playerScore;

}

/*Increment the computer score by 1 and update the computerScore element.
Update the game-status-message with the outcome of the round */

function computerWon() {

    gameStatusMessageID.innerHTML = "";
    gameStatusMessageID.classList.remove("style-winning-text");
    gameStatusMessageID.classList.add("style-loosing-text");
    let computerScore = document.getElementById("computerScore").innerHTML;

    gameStatusMessageID.innerHTML = "You Lose: "+ computerChoice.innerHTML + " beats "+playerChoice.innerHTML;
    document.getElementById("computerScore").innerHTML = ++computerScore;
    //let computerChoice = document.getElementById("computerChoice").innerHTML;
    //let playerChoice = document.getElementById("playerChoice").innerHTML;

    //computerScore++;
    //gameStatusMessageID.innerHTML = `You lose: ${computerChoice} beats ${playerChoice}!`;  
    //document.getElementById("computerScore").innerHTML = computerScore;

}
/*If player and Computer choose the same option, 
Update the game-status-message with the outcome of the round */

function gameDraw() {
    gameStatusMessageID.innerHTML = "";
    gameStatusMessageID.classList.remove("style-loosing-text","style-winning-text" );
    //gameStatusMessageID.classList.remove();
    gameStatusMessageID.innerHTML = `Draw! Try again.`;

}

/*set all player and computer score to 0
update the respected elements to display this.
Update the game-status to notify player game has been reset.
set the player and computer choice HTML elements to ""
Remove all win/loose styling classes. 
Pose butons re-enabled, tries left set back to 10
*/

function resetGame() {
    let playerScore = document.getElementById("playerScore").innerHTML;
    let computerScore = document.getElementById("computerScore").innerHTML;
    gameStatusMessageID.classList.remove("style-loosing-text");
    gameStatusMessageID.classList.remove("style-winning-text");
    gameStatusMessageID.classList.remove("style-draw-text");

    document.getElementById("playerScore").classList.remove("style-draw-text");
    document.getElementById("computerScore").classList.remove("style-draw-text");

    document.getElementById("playerScore").classList.remove("style-loosing-text");
    document.getElementById("computerScore").classList.remove("style-loosing-text");

    document.getElementById("playerScore").classList.remove("style-winning-text");
    document.getElementById("computerScore").classList.remove("style-winning-text");

    playerScore = 0;
    computerScore = 0;

    document.getElementById("game-status-message").innerHTML = `Game reset. Choose your pose.`;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("computerChoice").innerHTML = "";
    document.getElementById("playerChoice").innerHTML = "";

    let triesLeft = document.getElementById("tries-left-count").innerHTML;
    triesLeft = 10;
    document.getElementById("tries-left-count").innerHTML = triesLeft;
   document.getElementById("btn-gameplay-btn-group").style.display = "block";
    
}

/* check both scores. Winner's score styled to green, draw to orange loosers to red? (check color against background!) */
function checkWinner(){

    let playerScore = document.getElementById("playerScore").innerHTML;
    let computerScore = document.getElementById("computerScore").innerHTML;

    /* ternary guidance taken from freecodecamp example - reference in readme.md 
    This will (hopefully!) replace the if statements below. 
    */
    
    playerScore > computerScore
    ? playerScoreWinner()
    : computerScore > playerScore
    ? computerScoreWinner()
    :scoreDraw();
   
    function playerScoreWinner(){
      //  alert("Player score Higher")
        document.getElementById("computerScore").classList.remove("style-draw-text");
        document.getElementById("playerScore").classList.remove("style-draw-text");

        document.getElementById("playerScore").classList.remove("style-loosing-text");  
        document.getElementById("playerScore").classList.add("style-winning-text"); 
        
        document.getElementById("computerScore").classList.remove("style-winning-text"); 
        document.getElementById("computerScore").classList.add("style-loosing-text"); 
    }

    function computerScoreWinner(){
        //alert("Computer score higher")
        
        document.getElementById("computerScore").classList.remove("style-draw-text");
        document.getElementById("playerScore").classList.remove("style-draw-text");
        document.getElementById("computerScore").classList.remove("style-loosing-text");
        document.getElementById("computerScore").classList.add("style-winning-text");  
        document.getElementById("playerScore").classList.remove("style-winning-text"); 
        document.getElementById("playerScore").classList.add("style-loosing-text"); 
    }

    function scoreDraw(){
        //alert("Draw")
        document.getElementById("computerScore").classList.remove("style-loosing-text");
        document.getElementById("playerScore").classList.remove("style-loosing-text");

        document.getElementById("computerScore").classList.remove("style-winning-text");
        document.getElementById("playerScore").classList.remove("style-winning-text");

        document.getElementById("computerScore").classList.add("style-draw-text");
        document.getElementById("playerScore").classList.add("style-draw-text");  
    }
    /*
    if(playerScore > computerScore){
        document.getElementById("computerScore").classList.remove("style-draw-text");
        document.getElementById("playerScore").classList.remove("style-draw-text");

        document.getElementById("playerScore").classList.remove("style-loosing-text");  
        document.getElementById("playerScore").classList.add("style-winning-text"); 
        
        document.getElementById("computerScore").classList.remove("style-winning-text"); 
        document.getElementById("computerScore").classList.add("style-loosing-text"); 
    }

    else if(computerScore > playerScore){
        document.getElementById("computerScore").classList.remove("style-draw-text");
        document.getElementById("playerScore").classList.remove("style-draw-text");
        document.getElementById("computerScore").classList.remove("style-loosing-text");
        document.getElementById("computerScore").classList.add("style-winning-text");  
        document.getElementById("playerScore").classList.remove("style-winning-text"); 
        document.getElementById("playerScore").classList.add("style-loosing-text"); 
        
    }

    else if(playerScore === computerScore){
        document.getElementById("computerScore").classList.remove("style-loosing-text");
        document.getElementById("playerScore").classList.remove("style-loosing-text");

        document.getElementById("computerScore").classList.remove("style-winning-text");
        document.getElementById("playerScore").classList.remove("style-winning-text");

        document.getElementById("computerScore").classList.add("style-draw-text");
        document.getElementById("playerScore").classList.add("style-draw-text");        
    }

*/
}

/* function to minus the tries left. If they reach 0, disable the pose buttons till reset is called */
/* revisit - can this be refined somehow? */

function triesLeft(){
    let triesLeft = document.getElementById("tries-left-count").innerHTML;
    let playerScore = document.getElementById("playerScore").innerHTML;
    let computerScore = document.getElementById("computerScore").innerHTML;    
    triesLeft--;
    document.getElementById("tries-left-count").innerHTML=triesLeft;    
      if(triesLeft===0){
       document.getElementById("btn-gameplay-btn-group").style.display = "none";
      

        if(playerScore >computerScore){
            gameStatusMessageID.classList.remove("style-loosing-text");
            gameStatusMessageID.classList.remove("style-draw-text");
            gameStatusMessageID.classList.add("style-winning-text");            
            gameStatusMessageID.innerHTML=`Game Over. You Won!`;
        }
        else if( computerScore > playerScore){
            gameStatusMessageID.classList.remove("style-winning-text");
            gameStatusMessageID.classList.remove("style-draw-text");
            gameStatusMessageID.classList.add("style-loosing-text");
            gameStatusMessageID.innerHTML=`Game Over. You Lost!`;
            
        }
        else if(computerScore === playerScore) {
            gameStatusMessageID.classList.remove("style-loosing-text");
            gameStatusMessageID.classList.remove("style-winning-text");
            gameStatusMessageID.classList.add("style-draw-text");
            gameStatusMessageID.innerHTML=`It's a Draw!`;
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
          `

          if(instructionsDiv.style.display==="block"){
            instructionsDiv.style.display ="none";
          }
          else {
            instructionsDiv.style.display = "block";
          }
}
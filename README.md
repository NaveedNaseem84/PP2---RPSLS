# Rock, paper, scissors, lizard, spock game. (RPSLS)
RPSLS is an interactive one paged website aimed to provide users with a seamless experience whilst playing version of rock, paper, scissors - extended to included lizard and spock poses. 

The intended purpose is to provide a clean take on the all time classic game, providing a layout that is easy to use and navigate with an option to view the rules on demand. Potential uses for the site can be a quick 5 minute break away from the normal day or played on a device and time suited to the user giving a seamless experience regardless.

## User Experience (UX)
### User Stories
The following user stories have been created highlighting the needs and requirements for the site. These user stories have formed the foundations for the project which I have kept in mind during all aspects of the design, development and deployment of the site.

 * As a user, I want to be able to any pose and have my choice fed back to me.
 * As a user, I want to clearly the pose choices made.
 * As a user, I want to be able to reset the game and start again at any point. 
 * As a user, I want to easily be able to see if I am winning, loosing or drawn.
 * As a new user, I want to be able to see the rules when I need them to understand logic of the game.
 * As a avid user of the game, I want to be able to easily be able to see the outcome of the round.

### Mind Map: Ideas
Following on from user stories and intended purpose, and intial mind map was created to capture the logic of the game. The purpose of this was provide a high level understanding of how the user stories would be implemented. This mindmap can be seen below:

![Mindmap](readme-images/initial-mindmap.png)

### Wireframe Designs

Following on from the mind map, a wireframe design (shown below) focus given on the user stories. This wireframe illustrates potential elements, stlying and content type that could be used. 

![Wireframe](readme-images/wireframe.png)



### Chosen Colour Scheme
to do

### UX View of Site
to do

### Features

### Pseudo - functions needed (Brain storm)

Once the UX element had been completed, the next step taken was to map out the potential JavaScript functions needed in order for the game to perform as needed. The brainstorm for this can be seen below:

![Pesudo - JS functions](readme-images/psuedo%20-%20JS%20functions.png)

## Landing page

The landing page presents the users with a clean, easy to follow layout of the RPSLS game. The user is welcomed and invited to have fun with clear instructions on what they need to do next (Choose a pose). The site and game is accessible on multiple devices with a seamless user experience as illustrated below:

![RPSLS show on different devices ](readme-images/responsive-on-all-devices.png)

_**Image above generated using https://ui.dev/amiresponsive illustrating the responsiveness of the site.**_

### Features

The user is presented with 5 options - Rock, Paper, Scissors, Lizard or Spock (RPSLS). Any of can be used for each round of the game In desktop mode, this is reflected by a green outline on the choice and will move with users selection process:

![Choice selection hover state](readme-images/highlighted-choice-pose.png)

One a choice has been made, the game will randomly generate a choice for the computer and play the game. It will then evaluate who is the winner based on the choices drawn. Illustrated below is the outcome when the player wins:

![Player wins: ](readme-images/player-wins.png)

On winning, the player's score is incremented by 1, the game status above the pose buttons congratulates the player and these elements are styled in green reflecting the win. As the computer score is less than the players score, this is highlighted to reflect this as shown above. 

On losing, the computer's score is incremented by 1, the game status above the pose buttons commissurates the player and again these elements are styling accordingly. If the computer score is higher than than the player score this again is highlighted to reflect as shown below:

![Computer wins:](readme-images/computer-won.png)

Similar to the winning/loosing states, if the round is a draw the respective elements are styled according and the player notified of the round outcome:

![Game drawn:](readme-images/game-drawn.png)

If both player and computer scores are the same, this will be styled to reflect a draw:

![score-draw](readme-images/score-draw.png)

Regardless of the outcome of the round, the player will always shown their choice along with the randomly selected choice for the computer: 

![Choices made](readme-images/choices.png)

The current version of the game allows for the user to play 10 rounds. Each time a selection is made, the "tries left" element will be updated reflecting how many rounds are left. 

Once this reaches 0, the game is over, the pose buttons are hidden from view and a summary of the round given:

![Gameover](readme-images/game-over.png)

The game can be restarted using the "restart" button which will take the game back to the original state:

![Reset](readme-images/game-reset.png)

In addition to this, the player has the option to view the rules of the game in a convinient toggle option with minimum distruption to the game:

![Rules](readme-images/rules-toggle.png)






## Testing

### Bugs 

### Validation Testing

### Accessibility/Performance

## Future Developments

## Site Production, Deployment and Contribution

### Site production

### Deployment

### Contribution

## Technologies and tools Used
### Languages used


### Frameworks, Libraries and Programs Used


## Credits
### Content

## Overall Credit

## Personal Summary


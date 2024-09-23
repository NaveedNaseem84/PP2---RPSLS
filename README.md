# Rock, paper, scissors, lizard, spock (RPSLS) game.
RPSLS is an interactive website aimed to provide users of all ages with a seamless experience whilst playing rock, paper, scissors - extended to included lizard and spock poses. 

The intended purpose is to provide a clean take on the all time classic game, providing a layout that is easy to use and navigate with an option to view the rules on demand. Potential uses for the site can be a quick 5 minute break away from the normal day, or played on a device and time suited to the user.

## User Experience (UX)
### User Stories
The following user stories have been created highlighting the needs and requirements for the site. These user stories have formed the foundations for the project which I have kept in mind during all aspects of the design, development and deployment of the site.

 * As a user, I want to be able to select either rock, paper, scissors, lizard or spock.
 * As a user, I want to see the choices made in a clear way.
 * As a user, I want to be able to reset the game and start again at any point. 
 * As a user, I want to easily be able to see if I am winning, loosing or drawn.
 * As a new user, I want to be able to see the rules when I need them to understand logic of the game.
 * As a avid user of the game, I want to be able to easily be able to see the outcome of the round/game.
 * As a regular user of the site, I want to have the flexibility to play on desktop or mobile.

### Mind Map: Ideas
Following on from user stories and intended purpose, and intial mind map was created to capture the logic of the game. The purpose of this was provide a high level understanding of how the user stories would be implemented. This mindmap can be seen below:

![Mindmap](readme-images/initial-mindmap.png)

### Wireframe Designs

Following on from the mind map, a wireframe design (shown below) wwith focus given on the user stories. This wireframe illustrates potential elements, stlying and content type that could be used. 

![Wireframe](readme-images/wireframe.png)

### Chosen Colour Scheme

The aim of the chosen colour scheme was to present a modern theme that worked well across all devices in light or dark mode. 
In addition to this, the styling of the results within the game to flow naturally and the changing elements such as score easily identifiable. The colours selected have been done so to reflect this and can be seen in the UX View of Site below.

### UX View of Site
to do

### Pseudo - functions needed (Brain storm)

Once the UX element had been completed, the next step taken was to map out the potential JavaScript functions needed in order for the game to perform as needed. The brainstorm for this can be seen below:

![Pesudo - JS functions](readme-images/psuedo%20-%20JS%20functions.png)

## Landing page

The landing page presents the users with a clean, easy to follow layout of the RPSLS game. The user is welcomed and invited to have fun with clear instructions on what they need to do next (Choose a pose). The site and game is accessible on multiple devices with a seamless user experience as illustrated below:

![RPSLS show on different devices ](readme-images/responsive-on-all-devices.png)

_**Image above generated using https://ui.dev/amiresponsive illustrating the responsiveness of the site.**_

### Features

The user is presented with five options - Rock, Paper, Scissors, Lizard or Spock (RPSLS). Any can be selected and this is reflected by a green outline on the choice hovered, and will move with users selection process:

![Choice selection hover state](readme-images/highlighted-choice-pose.png)

One a choice has been made, the game will randomly generate a choice for the computer and play the game. It will then evaluate who is the winner based on the choices drawn. 

Illustrated below is the outcome when the player wins:

![Player wins: ](readme-images/player-wins.png)

On winning, the player's score is incremented by 1, the game status above the pose buttons congratulates the player and these elements are styled in green reflecting the win. As the computer score is less than the players score, this is styled to reflect  as shown above. 

On losing, the computer's score is incremented by 1, the game status commissurates the player, and these elements are styled to reflect. If the computer score is higher than than the player score, again this is styled to reflect: 

![Computer wins:](readme-images/computer-won.png)

Similar to the winning/losing states, if the round is a draw the respective elements are styled and the player notified of the round outcome:

![Game drawn:](readme-images/game-drawn.png)

If both player and computer scores are drawn, the elements are styled to illustrate this:

![score-draw](readme-images/score-draw.png)

Regardless of the outcome from the round, the player and randomly chosen computer choice will be shown: 

![Choices made](readme-images/choices.png)

The current version of the game allows for the user to play 10 rounds. Each time a selection is made, the "tries left" element will be subtracted by 1. 

Once this reaches 0, the game is over, the pose buttons are hidden from view and a summary of the round given:

![Gameover](readme-images/game-over.png)

The "restart" button allows for the game to be restarted. This can be done at anytime including when the game is over.

![Reset](readme-images/game-reset.png)

In addition to this, the player has the option to view the rules of the game in a convinient toggle option with minimum distruption:

![Rules](readme-images/rules-toggle.png)


## Testing

### Bugs 

to do

### Validation Testing

The site has been tested with the following:

* HTML
   * No errors returned when running the official W3C validator on all three pages [W3C HTML Validator ](https://validator.w3.org/nu/?doc=https%3A%2F%2Fnaveednaseem84.github.io%2FPP2---RPSLS%2F)
* CSS
   * No errors were found when running the official jigsaw Validator tool on all three pages [(Jigsaw) Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fnaveednaseem84.github.io%2FPP2---RPSLS%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
* JavaScript
    * No significant errors were returned when checking the JavaScipt code using[(JS Hint](https://jshint.com/)
    * The following metrics were returned:

    ![JSHint metrics](readme-images/jshint-metrics.png)


### Accessibility/Performance
Lighthouse in devtools produced the following results:

![Lighthouse score](image.png)

## Future Developments

There are two potential future developments for this project.

1. Introduce a difficulty level - reflected in the number of tries available before the game is over.
2. A scores table which is automatically updated once a game is complete.

## Site Production, Deployment and Contribution

### Site production

The site was created using gitpod's VS Code workspace environment with all the relevant files and folder structures created within. To deploy to github, the following commands were carried out in the command line terminal to commit and push the changes to the github repository: 

1 `git add .`- (Staging the changes in the current working tree ready to be commited).

2 `git commit -m 'Meaningful commit message"` - (The working tree is prepared with an upload message).

3 `git push` - (changes are pushed out up to the github repository).


### Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:
1.	Go to the Settings tab of your GitHub repo.
2.	On the left-hand sidebar, in the Code and automation section, select Pages.
3.	Make sure:  
    * Source is set to 'Deploy from Branch'.
    * Main branch is selected.
    *	Folder is set to / (root).
4.	Under Branch, click Save.
5.	Go back to the Code tab. Wait a few minutes for the build to finish and refresh your repo which will show the deployment has completed with a green tick at the top:

![Sucessful deployment](readme-images/sucessful-deployment.png)

6.	On the right-hand side, in the Environments section, click on 'github-pages'.
7.	Click View deployment to see the live site.

The live link to the site can be found here: [Rock Paper Scissors Lizard Spock.](https://naveednaseem84.github.io/PP2---RPSLS/)

### Contribution

## Technologies and tools Used
### Languages used
* HTML

* CSS

* JavaScript


### Frameworks, Libraries and Programs Used
* #### Google Fonts: [Google Orbitron font](https://fonts.google.com/specimen/Orbitron) and [Google Inria Sans font](https://fonts.google.com/specimen/Inria+Sans)

  * The Orbitron and Inria Sans fonts was imported into the style sheet (style.css) and used throughout the project.

* #### Font Awesome: [Font awesome](https://fontawesome.com/)

  * The pose, reset and rules icons were placed used font awesome. The classes used are listed in the UX section.

* #### Git/Gitpod:

  * Gitpod’s workspace was used using the VSCode online editor using git to push to GitHub using version control. 

* #### GitHub:

  * GitHub has been used to store the version control repository for the project and provide a live working external link once deployed.

* #### Figma: [Figma: The Collaborative Interface Design Tool](https://figma.com/)

  * Figma has been used to create the RPSLS and the UX illustration of the site.

* #### Tiny PNG: [TinyPNG – Compress WebP, PNG and JPEG images intelligently](https://tinypng.com/)
* #### Pixelied: [Pixeled](https://pixelied.com/convert/jpg-converter/jpg-to-webp)
  * Tiny PNG and Pixelied were used to optimise the logo for web use. 

* #### favicon.io: [favicon.io](https://favicon.io/favicon-converter/)
  * Use to create the favicons from an image (Image credited below)
  
* The code has been formatted using the built in "format document" option within the gitpod VS Code environment using the recommended "beautify" extension.


## Credits
### Content

## Overall Credit
A huge thank you to Code Institute for the learning and lesson material which has been amazing. In addition to this, W3Schools Online was used as a general CSS and HTML properties guide.

## Personal Summary


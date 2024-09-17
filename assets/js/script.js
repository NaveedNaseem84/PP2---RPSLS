/*Event Listener for when DOM loads to listen for clicks on all the buttons
Adapted from the Love Maths project from CI. Will be credited in readme.md*/

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") === "reset") {
                alert("Reset Pressed")
            } 
            else if (this.getAttribute("id") === "Rock" || this.getAttribute("id") === "Paper" || this.getAttribute("id") === "Scissors" || this.getAttribute("id") === "Lizard" || this.getAttribute("id") === "Spock") {
                let inputType = this.getAttribute("id");
                alert(`${inputType} has been pressed`);
            }
            if (this.getAttribute("id") === "instructions") {
                alert("Instructions Pressed")
            } 
        });
    }
});
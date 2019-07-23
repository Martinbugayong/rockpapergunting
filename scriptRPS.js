// grab all of your HTML elements by ID
const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
const lizardButton = document.getElementById('lizardButton')
const spockButton = document.getElementById('spockButton')

// initialize default game state
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let playerChoice, computerChoice; // both undefined here
console.log(playerChoice) // output 'undefined'

// event listiners for all buttons on HTML
rockButton.addEventListener('click', getPlayerChoice)
paperButton.addEventListener('click', isClicked)
scissorsButton.addEventListener('click', isClicked)
lizardButton.addEventListener('click', isClicked)
spockButton.addEventListener('click', isClicked)

// click function
function isClicked (){

}

// create player game logic  
function getPlayerScore (){

}

// create function that gets player's choice
function getPlayerChoice(e){
    playerChoice = e.target.id; // player choice should be inner html of button clicked
    console.log(playerChoice) // output expected should be inner html of button clicked 
}

// create computer game logic

// create score 

// create round 

// create game over 

// create reset game logic (re-render original state after game over 



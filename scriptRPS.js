// grab all of your HTML elements by ID
const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
const lizardButton = document.getElementById('lizardButton')
const spockButton = document.getElementById('spockButton')

// grab inner HTML of elements in the document
const rock = rockButton.innerHTML;
const paper = paperButton.innerHTML;
const scissors = scissorsButton.innerHTML;
const lizard = lizardButton.innerHTML;
const spock = spockButton.innerHTML;

// initialize default game state
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let playerChoice, computerChoice; // both undefined here

// event listiners for all buttons on HTML
rockButton.addEventListener('click', isClicked)
paperButton.addEventListener('click', isClicked)
scissorsButton.addEventListener('click', isClicked)
lizardButton.addEventListener('click', isClicked)
spockButton.addEventListener('click', isClicked)

// click function
function isClicked(e) {
    getPlayerChoice(e);
    getComputerChoice(e);
    getResults();
}

// create playerChoice function that gets player's choice
function getPlayerChoice(e) {
    playerChoice = e.target.innerHTML;
}

// create computerChoice function
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5)
    switch (randomNumber) {
        case 0:
            computerChoice = rock;
            break;
        case 1:
            computerChoice = paper;
            break;
        case 2:
            computerChoice = scissors;
            break;
        case 3:
            computerChoice = lizard;
            break;
        case 4:
            computerChoice = spock;
    }
}

// create win condition.  
function getResults() {
    if (playerChoice === rock && computerChoice === scissors ||
        playerChoice === rock && computerChoice === lizard ||
        playerChoice === paper && computerChoice === rock ||
        playerChoice === paper && computerChoice === spock ||
        playerChoice === scissors && computerChoice === paper ||
        playerChoice === scissors && computerChoice === lizard ||
        playerChoice === lizard && computerChoice === spock ||
        playerChoice === lizard && computerChoice === paper ||
        playerChoice === spock && computerChoice === scissors ||
        playerChoice === spock && computerChoice === rock
    ) {
        console.log('player wins')
    }
    else if (
        playerChoice === computerChoice
    ) {
        console.log('its a draw')
    } else {
        console.log('computer wins')
    }
}

// create round logic
// function getRounds() {
//     if (pla)
// }

// create game over 

// create reset game logic (re-render original state after game over 



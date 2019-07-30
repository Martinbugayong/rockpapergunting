/* ----- BUTTON ELEMENTS BY ID ----- */
const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
const lizardButton = document.getElementById('lizardButton')
const spockButton = document.getElementById('spockButton')


/* ----- innerHTML OF TEXT SECTIONS ----- */
let pScore = document.getElementById('playerScore')
let cScore = document.getElementById('computerScore')
let rNumber = document.getElementById('roundNumber')
let pChoice = document.getElementById('playerChoice')
let cChoice = document.getElementById('computerChoice')

/* ----- innerHTML OF BUTTONS ----- */
const rock = rockButton.innerHTML;
const paper = paperButton.innerHTML;
const scissors = scissorsButton.innerHTML;
const lizard = lizardButton.innerHTML;
const spock = spockButton.innerHTML;

/* ----- APP STATE / GAME START VALUES ----- */
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let playerChoice, computerChoice;

/* ----- EVENT LISTINERS ----- */
rockButton.addEventListener('click', isClicked)
paperButton.addEventListener('click', isClicked)
scissorsButton.addEventListener('click', isClicked)
lizardButton.addEventListener('click', isClicked)
spockButton.addEventListener('click', isClicked)

/* ----- CLICK FUNCTION ----- */
function isClicked(e) {
    getPlayerChoice(e);
    getComputerChoice(e);
    getResults();
    getTotalScore();
    render();
}

/* ----- TARGET PLAYERS CHOICE ----- */
function getPlayerChoice(e) {
    playerChoice = e.target.innerHTML;
}

/* ----- GENERATE COMPUTER CHOICE ----- */
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

/* ----- INCREMENT PLAYER SCORE ----- */
function addPlayerScore() {
    playerScore++;
}

/* ----- INCREMENT COMPUTER SCORE ----- */
function addComputerScore() {
    computerScore++;
}

/* ----- INCREMENT ROUND NUMBER ----- */
function getRound() {
    roundNumber++;
}

/* ----- WINNING CONDITIONS/GAME LOGIC ----- */
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
        addPlayerScore();
        getRound();
        render();
        console.log('Player total score ' + playerScore);
        console.log('its round #' + roundNumber);
    }
    else if (
        playerChoice === computerChoice
    ) {
        render();
        console.log('its a draw')
        console.log('its round #' + roundNumber);
    } else {
        addComputerScore();
        getRound();
        render();
        console.log('Computer total score ' + computerScore);
        console.log('its round #' + roundNumber);
    }
}

/* ----- GAME OVER ----- */
function getTotalScore() {
    if (playerScore === 3) {
        playerChoice = 'Player wins'
        console.log("player wins")
    } else if (computerScore === 3) {
        computerChoice = 'Computer wins'
        console.log("computer wins")
    }
}

/* ----- RENDER ----- */
function render() {
    pScore.innerHTML = playerScore
    cScore.innerHTML = computerScore
    rNumber.innerHTML = roundNumber;
    pChoice.innerHTML = playerChoice;
    cChoice.innerHTML = computerChoice;
}

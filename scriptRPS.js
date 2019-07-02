let userChoice, cpuChoice;
let currentUserScore = 0;
let currentCpuScore = 0;

// grab your HTML elements below
const mainSection = document.getElementById('mainSection')
const results = document.getElementById('results')
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissors');
const lizardButton = document.getElementById('lizard');
const spockButton = document.getElementById('spock');
const userScore = document.getElementById('userScore')
const cpuScore = document.getElementById('cpuScore')
//event listiners below

rockButton.addEventListener('click', handleClick);
paperButton.addEventListener('click', handleClick);
scissorButton.addEventListener('click', handleClick);
lizardButton.addEventListener('click', handleClick);
spockButton.addEventListener('click', handleClick);

// function section
function handleClick(e) {
    getUserChoice(e);
    getCpuChoice();
    render();
}

function getUserChoice(e) { // This gets the Users choice (which button is pressed)
    userChoice = e.target.id;
}

function getCpuChoice() { // This gets the logic of what the computer does
    const randomSelection = Math.floor(Math.random() * 3); // 0, 1, 2
    const selections = ['rock', 'paper', 'scissors'] // array of your possibilities 
    cpuChoice = selections[randomSelection]; // seletions[0 or 1 or 2
}

function getResults() { // Game logic here 
    if (userChoice === cpuChoice) {
        return ('Draw, Play Again')
    } else if (
        userChoice === 'rock' && cpuChoice === 'scissors'||
        userChoice === 'rock' && cpuChoice === 'lizard'||
        userChoice === 'paper' && cpuChoice === 'rock'||
        userChoice === 'paper' && cpuChoice === 'spock'||
        userChoice === 'scissors' && cpuChoice === 'paper'||
        userChoice === 'scissors' && cpuChoice === 'lizard'||
        userChoice === 'lizard' && cpuChoice === 'paper'||
        userChoice === 'lizard' && cpuChoice === 'spock'||
        userChoice === 'spock' && cpuChoice === 'scissors'||
        userChoice === 'spock' && cpuChoice === 'rock'
        ) {
        return ('You win')
    } else {
        return ('You lose')
    }
}

function score () { // score here
    const win = currentUserScore.innerHTML + 1;
    const lose = currentCpuScore.innerHTML + 1;
    if (getResults() === 'You win'){
        return (win)
    } else if (
        getResults() === 'You lose'
    ){
        return (lose)
    } else if (getResults() === 'Draw, Play Again'){
        return currentUserScore, currentCpuScore
    }
}

function render() { // print your new screen here
    mainSection.innerHTML = userChoice + " vs " + cpuChoice;
    results.innerHTML = getResults();
    userScore.innerHTML = score();
    cpuScore.innerHTML = score();
}
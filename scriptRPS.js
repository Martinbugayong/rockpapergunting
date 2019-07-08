// initialize user's choice and cpu's choice to undefined because nothing has been picked yet. 
let userChoice, cpuChoice;

// grab all of your HTML elements by ID. This bridges the connection to your jacascript. 
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
        userChoice === 'rock' && cpuChoice === 'scissors' ||
        userChoice === 'rock' && cpuChoice === 'lizard' ||
        userChoice === 'paper' && cpuChoice === 'rock' ||
        userChoice === 'paper' && cpuChoice === 'spock' ||
        userChoice === 'scissors' && cpuChoice === 'paper' ||
        userChoice === 'scissors' && cpuChoice === 'lizard' ||
        userChoice === 'lizard' && cpuChoice === 'paper' ||
        userChoice === 'lizard' && cpuChoice === 'spock' ||
        userChoice === 'spock' && cpuChoice === 'scissors' ||
        userChoice === 'spock' && cpuChoice === 'rock'
    ) {
        userScore.innerHTML++;
        return ('You win')
    } else {
        cpuScore.innerHTML++;
        return ('You lose')
    }
}

function render() { // print your new screen here
    mainSection.innerHTML = userChoice + " vs " + cpuChoice;
    results.innerHTML = getResults();
}
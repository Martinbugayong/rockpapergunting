let userChoice, cpuChoice;

// grab your HTML elements below
const mainSection = document.getElementById('mainSection')
const results = document.getElementById('results')
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissors');
//event listiners below

rockButton.addEventListener('click', handleClick);
paperButton.addEventListener('click', handleClick);
scissorButton.addEventListener('click', handleClick);

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
    } else if (userChoice === 'rock' && cpuChoice === 'scissors' ||
        userChoice === 'paper' && cpuChoice === 'rock' ||
        userChoice === 'scissors' && cpuChoice === 'paper') {
        return ('You win')
    } else {
        return ('You lose')
    }
}

function render() { // print your new screen here
    mainSection.innerHTML = userChoice + " vs " + cpuChoice;
    results.innerHTML = getResults();
}
// initialize user's choice and cpu's choice to undefined because nothing has been picked yet. 
let userChoice, cpuChoice;
let userScore = 0;
let cpuScore = 0;

// grab all of your HTML elements by ID. This bridges the connection to your jacascript. 
const mainSection = document.getElementById('mainSection');
const results = document.getElementById('results')
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissors');
const lizardButton = document.getElementById('lizard');
const spockButton = document.getElementById('spock');
const userScoreEl = document.getElementById('userScore');
const cpuScoreEl = document.getElementById('cpuScore');
const round = document.getElementById('round');
const player1 = document.getElementById('player1');
const cpu = document.getElementById('cpu')

//event listiners for all buttons on HTML 
rockButton.addEventListener('click', handleClick);
paperButton.addEventListener('click', handleClick);
scissorButton.addEventListener('click', handleClick);
lizardButton.addEventListener('click', handleClick);
spockButton.addEventListener('click', handleClick);

// function section
function handleClick(e) { // function that determines what functions get called after you click
    getUserChoice(e);
    getCpuChoice();
    render();
}

function getUserChoice(e) { // function tht determines the Users choice (which selection you choose)
    userChoice = e.target.id;
}

function getCpuChoice() { // this is the logic of the computers move
    const randomSelection = Math.floor(Math.random() * 5); // 0, 1, 2
    const selections = ['rock', 'paper', 'scissors', 'lizard', 'spock'] // array of your possibilities 
    cpuChoice = selections[randomSelection]; // seletions[0 or 1 or 2
}

function getResults() { // game logic here 
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
        userScore++;
        round.innerHTML++;
        return ('Player scores')
    } else {
        cpuScore++;
        round.innerHTML++;
        return ('MBA scores')
    }
}

function getRound() {
    if (parseInt(round.innerHTML) >= 5) {
        if (userScore > cpuScore) { 
            results.innerHTML = "Player 1 wins!"  
            document.body.appendChild(replay) 
        } else if (cpuScore > userScore) { 
            results.innerHTML = "MacBook Wins!"
            document.body.innerHTML = 'replay'; 
        }
    }
}


function render() { // render function displays the new HTML document after the changes. 
    mainSection.innerHTML = userChoice + " vs " + cpuChoice;
    results.innerHTML = getResults();
    cpuScoreEl.innerHTML = cpuScore;
    userScoreEl.innerHTML = userScore;
    getRound();
}
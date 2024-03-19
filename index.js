



const playerScore = document.querySelector('#selfscore')
const computerScore = document.querySelector('#compscore')
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const pcOptions = ["Rock", "Paper", "Scissors"]


const playerChoice = [rockButton, paperButton, scissorsButton]


const result = document.querySelector('#resulttext')

function gamePlay() {
    let computerChoice = pcOptions[(Math.floor(Math.random() * pcOptions.length))];
    
    if (playerChoice[0] && computerChoice[0]) {
       r = "It's a tie. Computer chose rock."
    }
    else if (playerChoice[1] && computerChoice[0]) {
        result.innerHTML = "You win! Computer chose rock."
    }
    else if (playerChoice[2] && computerChoice[0]) {
        result.innerHTML = "You lose. Computer chose rock."
    }
    else if (playerChoice[0] && computerChoice[1]) {
        result.innerHTML = "You lose. Computer chose paper"
    }
    else if (playerChoice[1] && computerChoice[1]) {
        result.innerHTML = "It's a tie. Computer chose paper"
    }
    else if (playerChoice[2] && computerChoice[1]) {
        result.innerHTML = "You win! Computer chose paper"
    }
    else if (playerChoice[0] && computerChoice[2]) {
        result.innerHTML = "You win! Computer chose scissors"
    }
    else if (playerChoice[1] && computerChoice[2]) {
        result.innerHTML = "You lose. Computer chose scissors"
    }
    else if (playerChoice[2] && computerChoice[2]) {
        result.innerHTML = "It's a tie. Computer chose scissors"
    }
};
    






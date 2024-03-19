
const playerScore = document.querySelector('#selfscore')
const computerScore = document.querySelector('#compscore')
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const result = document.querySelector('#resulttext')


let playerScoreCount = 0
let computerScoreCount = 0

function computerPlay() {
    const pcOptions = ["Rock", "Paper", "Scissors"];
    return pcOptions[Math.floor(Math.random() * pcOptions.length)];
}

function gamePlay(playerChoice) {
    const computerChoice = computerPlay();

    if (playerChoice === computerChoice) {
       return result.innerHTML = `It's a tie. Computer chose ${computerChoice}.`
    }
  
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")) 
    {
        result.innerHTML = `You win! Computer chose ${computerChoice}.`;
         playerScoreCount++;
    }
    else if ( (playerChoice === "Rock" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Scissors") || (playerChoice === "Scissors" && computerChoice === "Rock"))
     {
        result.innerHTML = `You lose. Computer chose ${computerChoice}.`;
        computerScoreCount++;
    }
    
    updateScores();
   

}
    


function updateScores() {
    playerScore.textContent = playerScoreCount;
    computerScore.textContent = computerScoreCount;
}




rockButton.addEventListener('click', () => gamePlay("Rock"));
paperButton.addEventListener('click', () => gamePlay("Paper"));
scissorsButton.addEventListener('click', () => gamePlay("Scissors"));


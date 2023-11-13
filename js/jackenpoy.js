let playerScore = 0;
let computerScore = 0;
let roundResult;

let rock = document.querySelector('#rock');
rock.addEventListener('click', function() {
    playRound('Rock');
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', function() {
    playRound('Paper');
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function() {
    playRound('Scissors');
});

function getComputerChoice(computerChoice) {
    computerChoice = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * computerChoice.length);

    return computerChoice[random];
}

function playRound(playerSelection, computerSelection) {

    playerSelection;
    computerSelection = getComputerChoice();

    let displayRoundResult = document.querySelector('#roundResult');

    if((playerSelection === "Rock" && computerSelection === "Paper") || 
        (playerSelection === "Paper" && computerSelection === "Scissors") || 
        (playerSelection === "Scissors" && computerSelection === "Rock" ))   {

        computerScore = computerScore + 1;

        roundResult = computerSelection + " beats " + playerSelection + ". You lost!";

        console.log(roundResult);

    } else if ((playerSelection === "Scissors" && computerSelection === "Paper") || 
        (playerSelection === "Rock" && computerSelection === "Scissors") || 
        (playerSelection === "Paper" && computerSelection === "Rock" )) {

        playerScore = playerScore + 1;
        
        roundResult = playerSelection + " beats " + computerSelection + ". You win!";

    } else if ((playerSelection === "Paper" && computerSelection === "Paper") || 
        (playerSelection === "Scissors" && computerSelection === "Scissors") || 
        (playerSelection === "Rock" && computerSelection === "Rock" )) {

        roundResult = "Tie!";

    } else {
        roundResult = "Invalid!";
    }

    // display score every round
    // let rResult = document.querySelector('#roundResult');
    // let resultText = "Player: " + playerScore + " | " + "Computer: " + computerScore;
    // rResult.textContent = resultText;

    
    displayRoundResult.textContent = roundResult;

    // display player selection on ui
    let playerPick = document.querySelector('#playerPick');
    playerPick.textContent = playerSelection;

    // dispaly computer selection on ui
    let computerPick = document.querySelector('#computerPick');
    computerPick.textContent = computerSelection;

    // display player score on ui
    let pScore = document.querySelector('#playerScore');
    pScore.textContent = playerScore;

    // display computer score on ui
    let cScore = document.querySelector('#computerScore');
    cScore.textContent = computerScore;
}

// function game() {

//     for(let i = 1; i++;) {
//         console.log("Round " + i);
//         const playerSelection = prompt("Type Rock, Paper, or Scissors to play: ");
//         console.log("You chose: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
//         const computerSelection = getComputerChoice();
//         console.log("Computer chose: " + computerSelection);

//         console.log(playRound(playerSelection, computerSelection));

//         if(roundResult == "Invalid!") {
//             i--;
//         }
//     }

//     // display game result
//     if(playerScore > computerScore) {
//         console.log("You won the game!");
//     } else if(playerScore < computerScore) {
//         console.log("You lost the game!");
//     } else if(playerScore == computerScore) {
//         console.log("The game is a tie!");
//     }
// }

// console.log(game());
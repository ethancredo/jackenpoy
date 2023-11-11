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
    // playerSelection = 'scissors';
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
    console.log('Player: ' + playerSelection);
    console.log('Computer: ' + computerSelection);

    if((playerSelection === "Rock" && computerSelection === "Paper") || 
        (playerSelection === "Paper" && computerSelection === "Scissors") || 
        (playerSelection === "Scissors" && computerSelection === "Rock" ))   {

        computerScore = computerScore + 1;

        playerSelection = playerSelection;
        roundResult = computerSelection + " beats " + playerSelection + ". You lost!";

        console.log(roundResult);

    } else if ((playerSelection === "Scissors" && computerSelection === "Paper") || 
        (playerSelection === "Rock" && computerSelection === "Scissors") || 
        (playerSelection === "Paper" && computerSelection === "Rock" )) {

        playerScore = playerScore + 1;
        
        playerSelection = playerSelection;
        roundResult = playerSelection + " beats " + computerSelection + ". You win!";

        console.log(roundResult);

    } else if ((playerSelection === "Paper" && computerSelection === "Paper") || 
        (playerSelection === "Scissors" && computerSelection === "Scissors") || 
        (playerSelection === "Rock" && computerSelection === "Rock" )) {

        roundResult = "Tie!";
        console.log(roundResult);

    } else {
        roundResult = "Invalid!";
        console.log(roundResult);
    }
    // display score every round
    console.log("Player: " + playerScore + " | " + "Computer: " + computerScore);

    // display player score on ui
    let pScore = document.querySelector('#playerScore');
    pScore.append(playerScore);
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
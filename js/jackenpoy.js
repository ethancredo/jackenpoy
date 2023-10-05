let playerScore = 0;
let computerScore = 0;

function getComputerChoice(computerChoice) {
    computerChoice = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * computerChoice.length);

    return computerChoice[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if((playerSelection === "rock" && computerSelection === "Paper") || (playerSelection === "paper" && computerSelection === "Scissors") || 
    (playerSelection === "scissors" && computerSelection === "Rock" ))   {
        computerScore = computerScore + 1;
        roundResult = computerSelection + " beats " + playerSelection + ". You lost!";
        console.log(roundResult);
    } else if ((playerSelection === "scissors" && computerSelection === "Paper") || (playerSelection === "rock" && computerSelection === "Scissors") || 
    (playerSelection === "paper" && computerSelection === "Rock" )) {
        playerScore = playerScore + 1;
        roundResult = playerSelection + " beats " + computerSelection + ". You win!";
        console.log(roundResult);
    } else if ((playerSelection === "paper" && computerSelection === "Paper") || (playerSelection === "scissors" && computerSelection === "Scissors") || 
    (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock" )) {
        roundResult = "Tie!";
        console.log(roundResult);
    } else {
        console.log("Invalid");
    }
    console.log("Player: " + playerScore + " | " + "Computer: " + computerScore);
}

function game() {

    let i = 1;
    while(i <= 5) {
        console.log("Round " + i);
        const playerSelection = prompt("Select to play: ");
        console.log("You chose: " + playerSelection);
        const computerSelection = getComputerChoice();
        console.log("Computer chose: " + computerSelection);

        console.log(playRound(playerSelection, computerSelection));
        i++;
    }

    if(playerScore > computerScore) {
        console.log("You won the game!");
    } else if(playerScore < computerScore) {
        console.log("You lost the game!");
    } else if(playerScore == computerScore) {
        console.log("The game is a tie!");
    }
}


// console.log(playRound(playerSelection, computerSelection));

console.log(game());
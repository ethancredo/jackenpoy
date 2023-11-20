let playerScore = 0;
let computerScore = 0;
let roundResult;
let roundMessage;

// get player selection from buttons
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

// get random computer choice
function getComputerChoice() {
    computerChoice = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * computerChoice.length);

    return computerChoice[random];
}

function playRound(playerSelection) {

    computerSelection = getComputerChoice();

    if((playerSelection === "Rock" && computerSelection === "Paper") || 
    (playerSelection === "Paper" && computerSelection === "Scissors") || 
    (playerSelection === "Scissors" && computerSelection === "Rock" )) {
        
        // add computer score
        computerScore = computerScore + 1;
        // set round result and message text
        roundResult = "You lost!";
        roundMessage = displaySelection(computerSelection) + " beats " + displaySelection(playerSelection);

    } else if ((playerSelection === "Scissors" && computerSelection === "Paper") || 
    (playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Paper" && computerSelection === "Rock" )) {

        // add player score
        playerScore = playerScore + 1;
        // set round result and message text
        roundResult = "You won!";
        roundMessage = displaySelection(playerSelection) + " beats " + displaySelection(computerSelection);

    } else if ((playerSelection === "Paper" && computerSelection === "Paper") || 
    (playerSelection === "Scissors" && computerSelection === "Scissors") || 
    (playerSelection === "Rock" && computerSelection === "Rock" )) {

        // set round result and message text
        roundResult = "Tie!";
        roundMessage = displaySelection(computerSelection) + ' is tie with ' + displaySelection(playerSelection);

    } else {
        // set round result and message text
        roundResult = "Invalid!";
    }
    
    // create button
    let playAgain = document.createElement("button");
    // set button text
    playAgain.textContent = 'Play Again';
    // set button class attribute
    playAgain.setAttribute('class', 'playAgain');

    // display selection for player and computer
    function displaySelection(selection) {
        if(selection === 'Rock') { return '👊'; }
        if(selection === 'Paper') { return '✋'; }
        if(selection === 'Scissors') { return '🤞'; }
    }
    
    let displayRoundResult = document.querySelector('#roundResult');

    // disable button selection when the score get to 5
    if(playerScore >= 5) {
        // disable buttons
        rock.setAttribute('disabled', 'true');
        paper.setAttribute('disabled', 'true');
        scissors.setAttribute('disabled', 'true');
        // set round result message and color
        roundResult = 'You won the game!';
        displayRoundResult.style.color = 'green';
        // add play again button
        document.querySelector('main').appendChild(playAgain);
    }
    if(computerScore >= 5) {
        // disable buttons
        rock.setAttribute('disabled', 'true');
        paper.setAttribute('disabled', 'true');
        scissors.setAttribute('disabled', 'true');
        // set round result message and color
        roundResult = 'You lost the game!';
        displayRoundResult.style.color = 'crimson';
        // add play again button
        document.querySelector('main').appendChild(playAgain);
    }
    
    // display result on ui    
    displayRoundResult.textContent = roundResult;

    let displayRoundMessage = document.querySelector('#roundMessage');
    displayRoundMessage.textContent = roundMessage;

    // display player selection on ui
    let playerPick = document.querySelector('#playerPick');
    playerPick.textContent = displaySelection(playerSelection);

    // dispaly computer selection on ui
    let computerPick = document.querySelector('#computerPick');
    computerPick.textContent = displaySelection(computerSelection);

    // display player score on ui
    let pScore = document.querySelector('#playerScore');
    pScore.textContent = "Player: " + playerScore;

    // display computer score on ui 
    let cScore = document.querySelector('#computerScore');
    cScore.textContent = "Computer: " + computerScore;

    playAgain.addEventListener('click', function() {
        // enable buttons
        rock.removeAttribute('disabled');
        paper.removeAttribute('disabled');
        scissors.removeAttribute('disabled');
        // reset computer score
        computerScore = 0;
        cScore.textContent = "Computer: " + computerScore;
        // reset player score
        playerScore = 0;
        pScore.textContent = "Player: " + playerScore;
        // reset round result and message texts and color
        displayRoundResult.textContent = "Choose a Weapon!";
        displayRoundResult.style.color = 'white';
        displayRoundMessage.textContent = "Best of five!";
        // remove play again button
        playAgain.remove();
        // reset computer and player pick
        computerPick.textContent = '🙌';
        playerPick.textContent = '🙌';
    });

}


////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

// function getInput() {
//     console.log("Please choose either 'rock', 'paper', or 'scissors'.")
//     return prompt();
// }
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove() {
    // Write an expression that operates on a variable called `move`
    var playerSelection = prompt("Please choose either 'rock', 'paper', or 'scissors'.")
    console.log("player selected " + playerSelection);
    return playerSelection;
}

function getComputerMove() {
    // Write an expression that operates on a variable called `move`
    var computerSelection = randomPlay();
    alert("Computer selected " + computerSelection);
    console.log("computer selected " + computerSelection);
    return computerSelection;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = "tie";
        alert("This game is a tie");
        return "tie";
        // alert("This game is a tie")
    } else if ((playerMove === "paper" && computerMove === "rock") || (playerMove === "rock" && computerMove === "scissors") ||(playerMove === "scissors" && computerMove === "paper")) {
        winner = "player";
        alert("Player wins");
    } else {
        winner = "computer";
        alert("Computer wins");
    }
    return winner;
}

function playToFive() {
    alert("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");

    while (playerWins != 5 && computerWins != 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            playerWins = playerWins + 1;
            alert("The current score is: player " + playerWins + " computer " + computerWins);
        } else if (winner === "computer") {
            computerWins = computerWins + 1;
            alert("The current score is: player " + playerWins + " computer " + computerWins);
        } 
    }
}

playToFive();




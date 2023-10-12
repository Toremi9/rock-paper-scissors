const choice = ["rock", "paper", "scissors"];
let myPoints = 0;
let pcPoints = 0;

game();


function getComputerChoice() {
    return choice[(Math.floor(Math.random() * choice.length))]
}

function playRound(playerSelection, computerSelection) {
    let choice = playerSelection.toLowerCase();
    if (choice === "rock" && computerSelection === "paper" || 
        choice === "paper" && computerSelection === "scissors" || 
        choice === "scissors" && computerSelection === "rock") {
        pcPoints += 1;
    } else if (choice === "scissors" && computerSelection === "paper" || 
        choice === "rock" && computerSelection === "scissors" || 
        choice === "paper" && computerSelection === "rock") {
        myPoints += 1;
    } 
}

function game() {
    for (i = 0; i < 5; i++) { 
        let computerSelection = getComputerChoice(); 
        let playerSelection = prompt("Choose rock, paper or scissors");
        playRound(playerSelection, computerSelection);
        if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            showChoice(playerSelection, computerSelection);
            showPoints();
        } else {
            console.log("Wrong value");
        }
    }
    showResult();
}

function showChoice(playerSelection, computerSelection) {
    console.log("My choice = " + playerSelection);
    console.log("Opponent's choice = " + computerSelection);
}

function showPoints() {
    console.log("My points = " + myPoints);
    console.log("PC points = " + pcPoints);
}

function showResult() {
    let result;
    if (myPoints > pcPoints) {
        result = "You won the ROCK PAPER SCISSORS!";}
    else if (myPoints < pcPoints) {
        result = "You lost ROCK PAPER SCISSORS!";}
    else if (myPoints == pcPoints){
        result = "It's a draw!";}

    console.log(result);
    return result;
}


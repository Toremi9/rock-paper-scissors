const choice = ["rock", "paper", "scissors"];
let myPoints = 0;
let pcPoints = 0;
let result = "";

function getComputerChoice() {
    let pcChoice = choice[(Math.floor(Math.random() * choice.length))]
    return pcChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper" || playerSelection.toLowerCase() === "paper" && computerSelection === "scissors" || playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
        pcPoints += 1;
        console.log("My points = " + myPoints);
        console.log("PC points = " + pcPoints);
        return "You lost this one, but don't give up!";}
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper" || playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors" || playerSelection.toLowerCase() === "rock" && computerSelection === "rock"){
        console.log("My points = " + myPoints);
        console.log("PC points = " + pcPoints);
        return "It's a draw, you can get him next time!";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper" || playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" || playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
        myPoints += 1;
        console.log("My points = " + myPoints);
        console.log("PC points = " + pcPoints);
        return "You won! now do it again!";}
  }


function game() {
    for (i = 0; i < 5; i++) { 
        const computerSelection = getComputerChoice(); 
        let playerSelection = prompt("Choose rock, paper or scissors");
        console.log(playRound(playerSelection, computerSelection));
    }
    if (myPoints > pcPoints) {
        result = "You won the ROCK PAPER SCISSORS!";
    }
    else if (myPoints < pcPoints) {
        result = "You lost ROCK PAPER SCISSORS!";
    }
    else if (myPoints == pcPoints){
        result = "It's a draw!";
    }
    console.log(result);
}


  game();


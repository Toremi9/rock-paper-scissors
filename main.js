const choice = ["rock", "paper", "scissors"];
let myPoints = 0;
let pcPoints = 0;
let playerSelection = '';
let computerSelection = '';

const main = document.querySelector('#Main');

main.setAttribute('style', 'allign-items: center; justify-content: space-around;');

const threebuttons = document.createElement('div');
threebuttons.setAttribute('style', 'display: flex; allign-items: center; justify-content: space-around; padding-top: 300px;');
main.appendChild(threebuttons);

const score = document.createElement('div');
score.setAttribute('style', 'display: flex; allign-items: center; justify-content: center; padding-top: 50px;')
main.appendChild(score);

var myScore = document.createElement('div');
myScore.textContent = `${myPoints}  :  ${pcPoints}`;
myScore.setAttribute('style', 'font-size: 50px;')
score.appendChild(myScore);

let goodresult = document.createElement('div');
goodresult.textContent = "CONGRATS! YOU WON!";
goodresult.setAttribute('style', 'font-size: 50px; margin-top: 20px; color: green; text-align: center;');

let badresult = document.createElement('div');
badresult.textContent = "YOU LOST! BETTER LUCK NEXT TIME...";
badresult.setAttribute('style', 'font-size: 50px; margin-top: 20px; color: red; text-align: center;');

const rockBtn = document.createElement('button');
rockBtn.textContent = "Rock";
rockBtn.setAttribute('style','width: 100px;');
rockBtn.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());

    if (myPoints === 5) {
        console.log('you won');
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        main.appendChild(goodresult);

    } else if (pcPoints === 5) {
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        main.appendChild(badresult);
    };

    updateScore();
});
threebuttons.appendChild(rockBtn);

const paperBtn = document.createElement('button');
paperBtn.textContent = "Paper";
paperBtn.setAttribute('style','width: 100px;');
paperBtn.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());

    if (myPoints === 5) {
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        main.appendChild(goodresult);

    } else if (pcPoints === 5) {
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        main.appendChild(badresult);

    };

    updateScore();
});
threebuttons.appendChild(paperBtn);

const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = "Scissors";
scissorsBtn.setAttribute('style','width: 100px;');
scissorsBtn.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());

    if (myPoints === 5) {
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        main.appendChild(goodresult);

    } else if (pcPoints === 5) {
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        main.appendChild(badresult);

    };

    updateScore();

});
threebuttons.appendChild(scissorsBtn);


// game();


function getComputerChoice() {
    return choice[(Math.floor(Math.random() * choice.length))]
}

function playRound(playerSelection, computerSelection) {
        console.log("My choice = " + playerSelection);
        console.log("Opponent's choice = " + computerSelection);
    if (playerSelection === "Rock" && computerSelection === "paper" || 
        playerSelection === "Paper" && computerSelection === "scissors" || 
        playerSelection === "Scissors" && computerSelection === "rock") {
        pcPoints += 1;
    } else if (playerSelection === "Scissors" && computerSelection === "paper" || 
        playerSelection === "Rock" && computerSelection === "scissors" || 
        playerSelection === "Paper" && computerSelection === "rock") {
        myPoints += 1;
    } 
}


function updateScore() {
    var myScore = document.createElement('div');
    myScore.textContent = ` ${playerSelection} ${myPoints}  :  ${pcPoints} ${computerSelection}`;
    myScore.setAttribute('style', 'font-size: 50px;')
    score.replaceChild(myScore, score.firstElementChild);
};
// function game() {
//     for (i = 0; i < 5; i++) { 
//         let computerSelection = getComputerChoice(); 
//         let playerSelection = prompt("Choose rock, paper or scissors");
//         playRound(playerSelection, computerSelection);
//         if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
//             showChoice(playerSelection, computerSelection);
//             showPoints();
//         } else {
//             console.log("Wrong value");
//         }
//     }
//     showResult();
// }

// function showChoice(playerSelection, computerSelection) {
//     console.log("My choice = " + playerSelection);
//     console.log("Opponent's choice = " + computerSelection);
// }

// function showResult() {
//     let result;
//     if (myPoints > pcPoints) {
//         result = "You won the ROCK PAPER SCISSORS!";}
//     else if (myPoints < pcPoints) {
//         result = "You lost ROCK PAPER SCISSORS!";}
//     else if (myPoints == pcPoints){
//         result = "It's a draw!";}

//     console.log(result);
//     return result;
// }


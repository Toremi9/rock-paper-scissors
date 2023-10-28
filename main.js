const choice = ["Rock", "Paper", "Scissors"];
let myPoints = 0;
let pcPoints = 0;
// let playerSelection = '';
// let computerSelection = '';

const main = document.querySelector('#Main');

main.setAttribute('style', 'allign-items: center; justify-content: space-around;');

const threebuttons = document.createElement('div');
threebuttons.setAttribute('style', 'display: flex; allign-items: center; justify-content: space-around; padding-top: 300px;');
main.appendChild(threebuttons);

const score = document.createElement('div');
score.setAttribute('style', 'display: flex; allign-items: center; justify-content: center; padding-top: 50px;')
main.appendChild(score);

var myScore = document.createElement('div');
myScore.textContent = `${myPoints} : ${pcPoints}`;
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

    playerSelection = "Rock";
    computerSelection = getComputerChoice();

    game();
});
threebuttons.appendChild(rockBtn);

const paperBtn = document.createElement('button');
paperBtn.textContent = "Paper";
paperBtn.setAttribute('style','width: 100px;');
paperBtn.addEventListener('click', () => {

    playerSelection = "Paper";
    computerSelection = getComputerChoice();

    game();
});
threebuttons.appendChild(paperBtn);

const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = "Scissors";
scissorsBtn.setAttribute('style','width: 100px;');
scissorsBtn.addEventListener('click', () => {

    playerSelection = "Scissors";
    computerSelection = getComputerChoice();

    game();
});
threebuttons.appendChild(scissorsBtn);

function game(playerSelection, computerSelection) {
    playRound();

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
    }

    updateScore();
};

function getComputerChoice() {
    return choice[(Math.floor(Math.random() * choice.length))];
};

function playRound() {
    if (playerSelection === "Rock" && computerSelection === "Paper" || 
        playerSelection === "Paper" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Rock") {
        pcPoints += 1;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper" || 
        playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Paper" && computerSelection === "Rock") {
        myPoints += 1;
    } 
};

function updateScore() {
    myScore.textContent = `${playerSelection} ${myPoints} : ${pcPoints} ${computerSelection}`;
};
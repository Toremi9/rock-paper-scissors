const choice = ["Rock", "Paper", "Scissors"];
let myPoints = 0;
let pcPoints = 0;
let playerSelection = '';
let computerSelection = '';

const main = document.querySelector('#Main');

main.setAttribute('style', 'allign-items: center; justify-content: space-around; padding-top: 300px;');

const threebuttons = document.createElement('div');
threebuttons.setAttribute('style', 'display: flex; allign-items: center; justify-content: center; gap: 30px;');
main.appendChild(threebuttons);

const score = document.createElement('div');
score.setAttribute('style', 'display: flex; allign-items: center; justify-content: center; padding-top: 50px;');
main.appendChild(score);

var myScore = document.createElement('div');
myScore.textContent = `${myPoints} : ${pcPoints}`;
myScore.setAttribute('style', 'font-size: 50px;');
score.appendChild(myScore);

let goodResult = document.createElement('div');
goodResult.textContent = "CONGRATS! YOU WON!";
goodResult.setAttribute('style', 'font-size: 50px; margin-top: 20px; color: green; text-align: center;');

let badResult = document.createElement('div');
badResult.textContent = "YOU LOST! BETTER LUCK NEXT TIME...";
badResult.setAttribute('style', 'font-size: 50px; margin-top: 20px; color: red; text-align: center;');

function createButton(buttonValue, imgSource){
    const resultButton = document.createElement('button');
    resultButton.textContent = buttonValue;
    resultButton.innerHTML = `<img src="${imgSource}"; width = 90px; height = 90px;/>`;
    resultButton.setAttribute('style','width: 100px; height: 100px; background-color: white;');
    resultButton.addEventListener('click', () => {
        playerSelection = buttonValue;
        computerSelection = getComputerChoice();
        game();
    });

    return resultButton;
};

const rockBtn = createButton("Rock", "resources/rock.png");
const paperBtn = createButton("Paper", "resources/paper.png");
const scissorsBtn = createButton("Scissors", "resources/scissors.png");
threebuttons.appendChild(rockBtn);
threebuttons.appendChild(paperBtn);
threebuttons.appendChild(scissorsBtn);

function game() {
    playRound();
    if (myPoints === 5 || pcPoints === 5) {
        rockBtn.style.display = "none";
        paperBtn.style.display = "none";
        scissorsBtn.style.display = "none";

        main.appendChild(myPoints > pcPoints ? goodResult : badResult);
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
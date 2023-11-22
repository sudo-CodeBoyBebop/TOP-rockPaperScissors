// ui implementation identifiers 
const main = document.getElementById('main');

const gameBox = document.getElementById('gameBox');

let playerScore = 1;
let computerScore = 1;
let totalScore = 0;



// implement greeting screen ui 

let greetText = [
    "Welcome to my Rock, Paper, Scissors game", 
    "You will play 5 rounds against the computer", 
    "Let's begin"
];

function greetScreen() {
     implementGreet();
    
    for(i = 0; i < greetText.length; ++i) {
        delay(i);
    }
   
}


function delay(i) {
    setTimeout(() => {
       let greeting = document.querySelector('.greeting');
       greeting.textContent = greetText[i];
    }, 5000 * i);
};


function implementGreet() {
    
    let greeting = document.createElement('h1');
    greeting.classList.add('greeting');
    greeting.classList.add('fade-in-out');
    gameBox.append(greeting);
}

greetScreen();
implementGame();



// implement gameplay screen
function implementGame() {
    setTimeout(() => {
    let h1 = document.querySelector('.greeting');
    h1.remove(h1);

    let i;
    let playList = ["rock", "paper", "scissors"];
    let rockPaperScissors = ["✊", "✋", "✌️"]
    for(i = 0; i < playList.length; ++i) {
        let gameChoice = document.createElement('div');
        gameChoice.classList.add(playList[i]);
        gameChoice.classList.add('gameCircle');
        gameChoice.textContent = rockPaperScissors[i];
        gameChoice.setAttribute('data-choice', playList[i])
        gameChoice.addEventListener("click", playRound);
        gameBox.appendChild(gameChoice);
    } 
    // game();
   }, 15000);


};



// function game() {
//     let playerChoice = getPlayerSelection();
//     console.log('yeet');
   
// }

  

function playRound(e) {
   let player = document.getElementById('playerScore');
   let computer = document.getElementById('computerScore');
   let finalScore = document.getElementById('finalScore');
   let gameChoice = document.getElementsByClassName('gameChoice');

   let result;
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
   
    let playerChoice = e.target.getAttribute('data-choice');
    console.log(playerChoice);
    

         if (computerChoice == "rock" && playerChoice == "paper"
         || computerChoice == "paper" && playerChoice == "scissors" 
         || computerChoice == "scissors" && playerChoice == "rock") {
            totalScore++;
            console.log(totalScore);
            player.textContent = "Player Score:" + playerScore++;

        }  else if (computerChoice == "rock" && playerChoice == "scissors"
        || computerChoice == "paper" && playerChoice == "rock" 
        || computerChoice == "scissors" && playerChoice == "paper") {
           totalScore++;
           console.log(totalScore);
           computer.textContent = "Computer Score:" + computerScore++;
        }; 
     
    if (totalScore == 5) {
       for(let i = 0; i < 3; i++) {
        gameBox.remove();
       }
        
        if(playerScore > computerScore) {
            result = "Player Wins!";
    } else if (playerScore < computerScore) {
            result = "Computer Wins!";
    } else if (playerScore == computerScore) {
            result = "It's a tie!";
    }
       finalScore.textContent = result;
    }

};










// gameplay functions
function getRandomNum() {
   let randNum = Math.floor(Math.random() * 3);
   return randNum;
}


function getComputerChoice() {
    let randNum = getRandomNum();
    let answer;
    if(randNum == 0) {
        answer = "rock";
    } else if (randNum == 1) {
        answer = "paper";
    } else if (randNum == 2) {
        answer = "scissors";
    }
        return answer;
    };

// function getPlayerSelection() {
//      let playerChoice; 
//      playerChoice = getData();
//     return playerChoice
// }





// ui implementation functions 



  

//    document.addEventListener("DOMContentLoaded", implementGame());
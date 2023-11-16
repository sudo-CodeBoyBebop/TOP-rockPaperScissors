

// let computerChoice = getComputerChoice();
// let playerChoice = getPlayerSelection();








// game();
// game();








// function declarations


// gameplay functions
// function getRandomNum() {
//    let randNum = Math.floor(Math.random() * 3);
//    return randNum;
// }

// gameplay functions
// function getRandomNum() {
//    let randNum = Math.floor(Math.random() * 3);
//    return randNum;
// }

// function getComputerChoice() {
//     let randNum = getRandomNum();
//     let answer;
//     if(randNum == 0) {
//         answer = "rock";
//     } else if (randNum == 1) {
//         answer = "paper";
//     } else if (randNum == 2) {
//         answer = "scissors";
//     }
//         return answer;
//     };
// function getComputerChoice() {
//     let randNum = getRandomNum();
//     let answer;
//     if(randNum == 0) {
//         answer = "rock";
//     } else if (randNum == 1) {
//         answer = "paper";
//     } else if (randNum == 2) {
//         answer = "scissors";
//     }
//         return answer;
//     };
    
// function getPlayerSelection() {
//    let choice = prompt().toLowerCase();
//    return choice;
// }
// function getPlayerSelection() {
//    let choice = prompt().toLowerCase();
//    return choice;
// }

// function playRound() {
//    let result;
//     let computerChoice = getComputerChoice();
//     let playerChoice = getPlayerSelection();
// function playRound() {
//    let result;
//     let computerChoice = getComputerChoice();
//     let playerChoice = getPlayerSelection();

//         if(computerChoice == playerChoice) {
//             result = "Tie";
//         } else if (computerChoice == "rock" && playerChoice == "paper"
//          || computerChoice == "paper" && playerChoice == "scissors" 
//          || computerChoice == "scissors" && playerChoice == "rock") {
//             result = "Players Wins!";
//         }  else if (computerChoice == "rock" && playerChoice == "scissors"
//         || computerChoice == "paper" && playerChoice == "rock" 
//         || computerChoice == "scissors" && playerChoice == "paper") {
//            result = "Computer Wins!";
//         }; 
//         if(computerChoice == playerChoice) {
//             result = "Tie";
//         } else if (computerChoice == "rock" && playerChoice == "paper"
//          || computerChoice == "paper" && playerChoice == "scissors" 
//          || computerChoice == "scissors" && playerChoice == "rock") {
//             result = "Players Wins!";
//         }  else if (computerChoice == "rock" && playerChoice == "scissors"
//         || computerChoice == "paper" && playerChoice == "rock" 
//         || computerChoice == "scissors" && playerChoice == "paper") {
//            result = "Computer Wins!";
//         }; 
   
//     return result;
// };
//     return result;
// };

// function game() {
//     let i;

//     for(i = 0; i < 5; i++) {
//         let result = playRound();
//         console.log(result);
//     }
    
// }

// ui implementation identifiers 
    const main = document.getElementById('main');

    const gameBox = document.getElementById('gameBox');

// ui implementation functions 

// implement greeting screen ui 

let greetText = [
    "Welcome to my Rock, Paper, Scissors game", 
    "You will play 5 rounds against the computer", 
    "Press Space to begin"
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
    gameBox.append(greeting);
}

greetScreen();






//    function implementGame() {
//     let i;
//     let playList = ["rock", "Paper", "Scissors"];
//     for(i = 0; i < playList.length; ++i) {
//         let gameChoice = document.createElement('div');
//         gameChoice.classList.add(playList[i]);
//         gameChoice.classList.add('gameCircle')
//         gameBox.appendChild(gameChoice);
//     }
//    };


  

//    document.addEventListener("DOMContentLoaded", implementGame());
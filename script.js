// ui implementation identifiers 
const main = document.getElementById('main');

const gameBox = document.getElementById('gameBox');




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



function playRound() {
    implementGame();
   let result;
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerSelection();

        if(computerChoice == playerChoice) {
            result = "Tie";
        } else if (computerChoice == "rock" && playerChoice == "paper"
         || computerChoice == "paper" && playerChoice == "scissors" 
         || computerChoice == "scissors" && playerChoice == "rock") {
            result = "Players Wins!";
        }  else 
        if (computerChoice == "rock" && playerChoice == "scissors"
        || computerChoice == "paper" && playerChoice == "rock" 
        || computerChoice == "scissors" && playerChoice == "paper") {
           result = "Computer Wins!";
        }; 
     
    console.log(result);
};




playRound();


// implement gameplay screen
function implementGame() {
    setTimeout(() => {
    let h1 = document.querySelector('.greeting');
    h1.remove(h1);

    let i;
    let playList = ["rock", "paper", "scissors"];
    for(i = 0; i < playList.length; ++i) {
        let gameChoice = document.createElement('div');
        gameChoice.classList.add(playList[i]);
        gameChoice.classList.add('gameCircle');
        gameChoice.setAttribute('data-choice', playList[i])
        gameChoice.addEventListener("click", getData);
        gameBox.appendChild(gameChoice);
    }
   }, 15000);
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

function getPlayerSelection() {
     let playerChoice; 
     playerChoice = getData();
    return playerChoice
}

function getData(e) {
  let data;
  if(e) {
   data = e.target.getAttribute('data-choice');
  console.log(data);
  }
  return data;
}




function game() {
    let i;

    for(i = 0; i < 5; i++) {
        let result = playRound();
        console.log(result);
    }
    
}



// ui implementation functions 



  

//    document.addEventListener("DOMContentLoaded", implementGame());
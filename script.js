

// let computerChoice = getComputerChoice();
// let playerChoice = getPlayerSelection();








game();








// function declarations

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
   let choice = prompt().toLowerCase();
   return choice;
}

function playRound() {
   let result;
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerSelection();

        if(computerChoice == playerChoice) {
            result = "Tie";
        } else if (computerChoice == "rock" && playerChoice == "paper"
         || computerChoice == "paper" && playerChoice == "scissors" 
         || computerChoice == "scissors" && playerChoice == "rock") {
            result = "Players Wins!";
        }  else if (computerChoice == "rock" && playerChoice == "scissors"
        || computerChoice == "paper" && playerChoice == "rock" 
        || computerChoice == "scissors" && playerChoice == "paper") {
           result = "Computer Wins!";
        }; 
   
    return result;
};

function game() {
    let i;

    for(i = 0; i < 5; i++) {
        let result = playRound();
        console.log(result);
    }
    
}
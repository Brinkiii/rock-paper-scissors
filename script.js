function getComputerChoice() {
    let rps = ["Rock", "Paper", "Scissors"]
    let random = Math.floor((Math.random() * rps.length));
    let randomChoice = rps[random]
    return randomChoice;
}
let playButtons = document.querySelectorAll(".buttons button");
let computerScore = 0;
let playerScore = 0;
let result = ""
let gameCount = 0;
let resultText = document.getElementById("result");


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";

    if (computerSelection === playerSelection) {
        result = "It's a tie!";
    } else if (computerSelection === "Rock" && playerSelection === "Paper" || computerSelection === "Paper" && playerSelection === "Rock" || computerSelection === "Scissors" && playerSelection === "Paper") {
        result = `You Lose! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
        gameCount++;
    } else {
        result = `You Win! ${playerSelection} beats ${computerSelection}!`;
        playerScore++;
        gameCount++;
    }
    console.log(result);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    resultText.innerText = `You played ${playerSelection}, Computer played ${computerSelection} \n Player Score: ${playerScore} - Computer Score: ${computerScore} \n`


    if (gameCount === 5) {
        if (playerScore < computerScore) {
            alert("You lose the game!")
        } else if (playerScore > computerScore) {
            alert("You win the game!")
        } else {
            alert("It's a tie!")
        }
        playButtons.forEach(button => {
            button.removeEventListener("click", handleButtonClick);
            button.disabled = true;
        });
    }
}

function handleButtonClick() {
    const selection = this.id.toLowerCase();
    playRound(selection);
}

function game() {
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");

    rock.addEventListener("click", () => playRound("Rock"));
    paper.addEventListener("click", () => playRound("Paper"));
    scissors.addEventListener("click", () => playRound("Scissors"));
}

game()
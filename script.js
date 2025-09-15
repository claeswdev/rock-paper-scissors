let humanSelection = "";
let computerSelection = "";
let humanScore = 0;
let computerScore = 0;

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const container = document.querySelector(".container");
container.append(rockButton, paperButton, scissorsButton);

const resultDiv = document.createElement("div");
container.appendChild(resultDiv)

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

rockButton.addEventListener("click", () => {
    humanSelection = getHandSignal(1);
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

paperButton.addEventListener("click", () => {
    humanSelection = getHandSignal(2);
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

scissorsButton.addEventListener("click", () => {
    humanSelection = getHandSignal(3);
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

function getComputerChoice() {
    /* Pseudo code
    GENERATE a random number between 1-3
    MAP the generated number to either "rock", "paper" or "scissors"
    RETURN that value
    */
    let randomNumber = getRandomValue(1, 3);
    let handSignal = getHandSignal(randomNumber);

    return handSignal;
}

function getRandomValue(lowest, highest) {
    if (typeof lowest !== "number" || typeof highest !== "number")
        throw TypeError("Arguments must be numbers");

    return Math.floor(Math.random() * highest) + lowest;
}

function getHandSignal(token) {
    if (token === 1 || token === "r") return "rock";
    else if (token === 2 || token === "p") return "paper";
    else if (token === 3 || token === "s") return "scissors";
}

function getHumanChoice() {
    let userChoice = prompt("Choose a hand signal. Type 'r' for rock, 'p' for paper or 's' for scissors");
    return getHandSignal(userChoice);
}

function playRound(humanChoice, computerChoice) {
    let winner = "";
    
    if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        winner = "human";
    } else if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        winner = "computer";
    } else {
        winner = "draw";
    }

    if (winner === "human") {
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        resultDiv.textContent += ` Current standing is You: ${++humanScore}, Computer: ${computerScore}`;
    } else if (winner === "computer") {
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        resultDiv.textContent += ` Current standing is You: ${humanScore}, Computer: ${++computerScore}`;
    } else {
        resultDiv.textContent = `It's a draw! Both combatants chose ${humanChoice}.`;
        resultDiv.textContent += ` Current standing is You: ${humanScore}, Computer: ${computerScore}`;
    }        

    if (humanScore >= 5 || computerScore >= 5) {
        resultDiv.textContent += ` Game over! Winner is ${humanScore >= 5 ? "human" : "computer"}!`;
    }
}

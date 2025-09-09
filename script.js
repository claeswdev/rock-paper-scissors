let humanScore = 0;
let computerScore = 0;

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
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (winner === "computer") {
        console.log(`You lose! ${humanChoice} loses to ${computerChoice}`);
        computerScore++;
    } else {
        console.log(`It's a draw! Both combatants chose ${humanChoice}.`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
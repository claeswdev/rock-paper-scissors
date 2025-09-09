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

function getHandSignal(num) {
    if (typeof num !== "number") throw TypeError("Arg <num> must be a number");

    if (num === 1) return "rock";
    else if (num === 2) return "paper";
    else if (num === 3) return "scissors";
}

console.log(getComputerChoice());

let computerChoice = "";
let userChoice = "";

start();

function start() {
    console.log("Start");

    computerChoice = "";
    userChoice = "";

    // Add event listeners to buttons and call getUserSelection
    document.querySelector(".rock").addEventListener("click", getUserSelection);
    document.querySelector(".paper").addEventListener("click", getUserSelection);
    document.querySelector(".scissors").addEventListener("click", getUserSelection);
}

function getUserSelection(choice) {

    // Remove all animations
    document.querySelector("#player1").classList.remove("shake", "rock", "paper", "scissors");
    document.querySelector("#player2").classList.remove("shake", "rock", "paper", "scissors");
    // Hid text
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");

    userChoice = choice.target.className;
    console.log(userChoice);
    makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
    // Generate random number from 1 to 3
    let randomNumber = Math.round(Math.random() * 2 + 1);
    // Assign choice
    if (randomNumber == 1) {
        computerChoice = "rock";
    } else if (randomNumber == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log(computerChoice);

    showAnimations();
    // Animation end
    document.querySelector("#player1").addEventListener("animationend", determineWinner);
}

function showAnimations() {
    // Add shake animations to each "player"
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");
    document.querySelector("#buttons").classList.add("disabled");
    // End result
}

function determineWinner() {

    console.log(userChoice, computerChoice);

    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player1").classList.add(userChoice);
    document.querySelector("#player2").classList.add(computerChoice);
    document.querySelector("#buttons").classList.remove("disabled");

    if (userChoice === "rock") {
        if (computerChoice === "rock") {
            showDraw();
        } else if (computerChoice === "paper") {
            showLose();
        } else {
            showWin();
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            showWin();
        } else if (computerChoice === "paper") {
            showDraw();
        } else {
            showLose();
        }
    } else {
        if (computerChoice === "rock") {
            showLose();
        } else if (computerChoice === "paper") {
            showWin();
        } else {
            showDraw();
        }
    }
}

function showWin() {
    console.log("You won");
    // show winner
    document.querySelector("#win").classList.remove("hidden");
    start();
}

function showLose() {
    console.log("You lost");
    document.querySelector("#lose").classList.remove("hidden");
    start();
}

function showDraw() {
    console.log("Draw");
    document.querySelector("#draw").classList.remove("hidden");
    start();
}
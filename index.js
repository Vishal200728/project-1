// Scores
let userScore = 0;
let compScore = 0;

// Select elements
const choices = document.querySelectorAll(".choice img");
const userDisplay = document.getElementById("user");
const compDisplay = document.getElementById("comp");
const resultText = document.getElementById("result-text");
const resetBtn = document.getElementById("reset");

// Add click event to all choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {

    // Get user choice (file name without .png)
    const userChoice = choice.getAttribute("src").replace(".png", "");
    console.log("User:", userChoice);

    // Computer random choice
    const options = ["rock", "paper", "scissors"];
    const compChoice = options[Math.floor(Math.random() * 3)];
    console.log("Comp:", compChoice);

    // Decide winner
    let result = "";

    if (userChoice === compChoice) {
      result = "It's a Draw!";
    }
    else if (
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      result = "You Win!";
      userScore++;
    }
    else {
      result = "You Lose!";
      compScore++;
    }

    // Update scores and result on screen
    userDisplay.textContent = userScore;
    compDisplay.textContent = compScore;
    resultText.textContent = `You: ${userChoice.toUpperCase()} | Comp: ${compChoice.toUpperCase()} → ${result}`;
  });
});

// Reset button
resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userDisplay.textContent = 0;
  compDisplay.textContent = 0;
  resultText.textContent = "PLAY YOUR MOVE!";
});

const choices = ["Rock", "Paper", "Scissors"];
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const userChoiceDisplay = document.getElementById("userChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const winnerDisplay = document.getElementById("winner");

rockBtn.addEventListener("click", () => playGame("Rock"));
paperBtn.addEventListener("click", () => playGame("Paper"));
scissorsBtn.addEventListener("click", () => playGame("Scissors"));

function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  userChoiceDisplay.innerText = `Your Choice : ${userChoice}`;
  computerChoiceDisplay.innerText = `Computer Choice : ${computerChoice}`;

  if (userChoice === computerChoice) {
    winnerDisplay.innerText = "Its'a draw!";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissor") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    winnerDisplay.innerText = "You win!";
  } else {
    winnerDisplay.innerText = "Computer wins!";
  }
}

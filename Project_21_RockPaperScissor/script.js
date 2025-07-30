const choices = document.querySelectorAll('.choice-btn');
const playerDisplay = document.getElementById('player-choice');
const computerDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const playAgainBtn = document.getElementById('play-again');

const options = ['rock', 'paper', 'scissors'];

choices.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    playerDisplay.textContent = `Your Choice: ${capitalize(playerChoice)}`;
    computerDisplay.textContent = `Computer's Choice: ${capitalize(computerChoice)}`;
    resultDisplay.textContent = `Result: ${result}`;

    playAgainBtn.style.display = 'inline-block';
    choices.forEach(btn => btn.disabled = true);
  });
});

playAgainBtn.addEventListener('click', () => {
  playerDisplay.textContent = "Your Choice: -";
  computerDisplay.textContent = "Computer's Choice: -";
  resultDisplay.textContent = "Result: -";
  playAgainBtn.style.display = 'none';
  choices.forEach(btn => btn.disabled = false);
});

function getComputerChoice() {
  const index = Math.floor(Math.random() * 3);
  return options[index];
}

function getResult(player, computer) {
  if (player === computer) return "It's a Tie!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return "You Win!";
  }
  return "Computer Wins!";
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

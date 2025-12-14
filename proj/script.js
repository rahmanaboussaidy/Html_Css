let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;


const guessInput = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');
const attemptsText = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');


checkBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);


function checkGuess() {
const userGuess = Number(guessInput.value);


if (!userGuess || userGuess < 1 || userGuess > 100) {
message.textContent = '⛔ Enter a number between 1 and 100';
message.style.color = 'red';
return;
}


attempts++;
attemptsText.textContent = `Attempts: ${attempts}`;


if (userGuess === randomNumber) {
message.textContent = '🎉 Correct! You guessed the number!';
message.style.color = 'green';
checkBtn.disabled = true;
} else if (userGuess < randomNumber) {
message.textContent = '📉 Too low! Try again.';
message.style.color = '#1d4ed8';
} else {
message.textContent = '📈 Too high! Try again.';
message.style.color = '#7c2d12';
}


guessInput.value = '';
}


function resetGame() {
randomNumber = Math.floor(Math.random() * 100) + 1;
attempts = 0;
attemptsText.textContent = 'Attempts: 0';
message.textContent = '';
guessInput.value = '';
checkBtn.disabled = false;
}
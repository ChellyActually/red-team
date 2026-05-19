// 1. Select all the HTML elements we need to interact with
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const attemptCountDisplay = document.getElementById('attemptCount');
const resetBtn = document.getElementById('resetBtn');

// 2. Set up the game state variables
let targetNumber;
let attempts;

// 3. Initialize/Reset the game
function initGame() {
    // Generate a random number between 1 and 100
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    
    // Reset UI elements
    attemptCountDisplay.textContent = attempts;
    message.textContent = "Good Luck!";
    message.style.color = ""; // Resets color to default CSS text color
    guessInput.value = "";
    guessInput.disabled = false;
    submitBtn.disabled = false;
    
    // Hide the reset button
    resetBtn.classList.add('hidden');
}

// 4. Handle the user's guess logic
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    // Validation: Check if input is a valid number between 1 and 100
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        message.style.color = "#ff4d4d"; // Crimson/Red warning accent
        return;
    }

    // Increment and update the attempt counter
    attempts++;
    attemptCountDisplay.textContent = attempts;

    // Check the guess against the target number
    if (userGuess === targetNumber) {
        message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts!`;
        message.style.color = "#2ecc71"; // Emerald Green for success
        endGame();
    } else if (userGuess < targetNumber) {
        message.textContent = "Too low! Try a higher number.";
        message.style.color = "#3498db"; // Blue for cold/low
    } else {
        message.textContent = "Too high! Try a lower number.";
        message.style.color = "#e67e22"; // Orange for hot/high
    }

    // Clear the input field for the next guess and refocus
    guessInput.value = "";
    guessInput.focus();
}

// 5. Wrap up the game when won
function endGame() {
    guessInput.disabled = true;
    submitBtn.disabled = true;
    resetBtn.classList.remove('hidden'); // Show "Play Again" button
}

// 6. Event Listeners
submitBtn.addEventListener('click', checkGuess);

// Allow pressing the "Enter" key inside the input box to submit the guess
guessInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

resetBtn.addEventListener('click', initGame);

// Start the game for the first time when the script loads
initGame();
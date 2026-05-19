
let secretNumber = Math.floor(Math.random() * 100) + 1;


let bestScore = Infinity;


let attempts = 0;


let previousGuess = null;


const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attemptCount = document.getElementById("attemptCount");
const resetBtn = document.getElementById("resetBtn");


submitBtn.addEventListener("click", checkGuess);


resetBtn.addEventListener("click", resetGame);

function checkGuess() {

    let userGuess = Number(guessInput.value);

   
    if (guessInput.value.trim() === "") {
        message.textContent = "⚠️ Please enter a number!";
        return;
    }

   
    if (isNaN(userGuess)) {
        message.textContent = "⚠️ Invalid input!";
        return;
    }

    
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "⚠️ Enter number between 1 and 100!";
        return;
    }

    attempts++;
    attemptCount.textContent = attempts;

   
    if (userGuess > secretNumber) {
        message.textContent = "📉 Too High!";
    }

    
    else if (userGuess < secretNumber) {
        message.textContent = "📈 Too Low!";
    }

  
    else {

        message.textContent =
            `🎉 Correct! You guessed in ${attempts} attempts!`;

       
        if (attempts < bestScore) {

            bestScore = attempts;

            message.textContent +=
                ` 🏆 New High Score: ${bestScore}`;
        }

        endGame();
        return;
    }

   
    if (previousGuess !== null) {

        let currentDistance =
            Math.abs(userGuess - secretNumber);

        let previousDistance =
            Math.abs(previousGuess - secretNumber);

        if (currentDistance < previousDistance) {
            message.textContent += " 🔥 Getting Warmer!";
        }

        else if (currentDistance > previousDistance) {
            message.textContent += " ❄️ Getting Colder!";
        }

        else {
            message.textContent += " 😐 Same distance.";
        }
    }

    previousGuess = userGuess;

  
    if (attempts >= 10) {

        message.textContent =
            `💥 Game Over! Number was ${secretNumber}`;

        endGame();
    }

    
    guessInput.value = "";
}



function endGame() {

    guessInput.disabled = true;
    submitBtn.disabled = true;

    resetBtn.classList.remove("hidden");
}

// Hello, Aishu

function resetGame() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;
    previousGuess = null;

    attemptCount.textContent = "0";

    message.textContent = "Good Luck!";

    guessInput.disabled = false;
    submitBtn.disabled = false;

    guessInput.value = "";

    resetBtn.classList.add("hidden");
}

let bestScore = Infinity;

function startGame() {

    let sec_num = Math.floor(Math.random() * 100) + 1;

    let userGuess = 0;
    let attempts = 0;
    let previousGuess = null;

    alert("🎮 New Game Started! Guess the number between 1 and 100");

   
    while (userGuess !== sec_num && attempts < 5) {

        userGuess = Number(prompt("Enter your guess (1-100):"));

        
        if (isNaN(userGuess)) {
            alert("⚠️ Please enter a valid number!");
            continue;
        }

        attempts++;

      
        if (userGuess > sec_num) {
            alert("📉 Too High!");
        }
        else if (userGuess < sec_num) {
            alert("📈 Too Low!");
        }

       
        if (previousGuess !== null && userGuess !== sec_num) {

            let currentDistance = Math.abs(userGuess - sec_num);
            let previousDistance = Math.abs(previousGuess - sec_num);

            if (currentDistance < previousDistance) {
                alert("🔥 Getting Warmer!");
            }
            else if (currentDistance > previousDistance) {
                alert("❄️ Getting Colder!");
            }
            else {
                alert("😐 Same distance as previous guess.");
            }
        }

       
        previousGuess = userGuess;
    }

    
    if (userGuess === sec_num) {

        alert("🎉 Congratulations! You guessed correctly in " + attempts + " attempts.");

       
        if (attempts < bestScore) {

            bestScore = attempts;

            alert("🏆 New High Score: " + bestScore + " attempts!");
        }
        else {

            alert("🏆 Current High Score: " + bestScore + " attempts.");
        }

    }
    else {

        alert("💥 Game Over! You used all 5 attempts.");
        alert("✅ The correct number was: " + sec_num);

       
        let playAgain = confirm("Do you want to play again?");

        if (playAgain) {
            startGame();
        }
        else {
            alert("👋 Thanks for playing!");
        }
    }
}


startGame();
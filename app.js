/*
GAME FUNCTION:
- Player must guess a number between min and max
- Player gets a certain amount of guesses
- Notufy player of guesses remaining
- Notify player of the correct answer if lose
- Let player choose to play again
*/

// Game value
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.getElementById("game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listenter
game.addEventListener("mousedown", function(e) {
    if (e.target.className === "play-again"){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener("click", function() {
    let guess = parseInt(guessInput.value);

    //Validate
    if (isNaN(guess) || guess < min || guess > 10) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNum) {
        // Game over - won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
        
    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0) {
            // Game over - lost
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
        } else {
            // Game continues - answer wrong
            // Change border color
            guessInput.style.borderColor = "red";
            // Clear input
            guessInput.value = "";
            //Set message
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);
        }
    }
})

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
// Game over
function gameOver(won, message) {
    let color;
    won === true ? color = "green" : color = "red";

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    //Set message
    setMessage(message, color);

    // Play again?
    guessBtn.value = "Play again";
    guessBtn.className += "play-again";
}

// Get winning number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhone(arr) {
    arr.splice(0, 0, "(");
    arr.splice(4, 0, ") ");
    arr.splice(8, 0, "-");
    arr = arr.join("");
    return arr;
}

console.log(createPhone(numbers));
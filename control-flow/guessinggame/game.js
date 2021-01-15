// create secret number
var num = 7;

// ask user for a guess
var guess = Number(prompt("Guess a number"));

// check guess
if(guess < num) {
    alert("Too low! Guess again");
}

else if(guess > num) {
    alert("Too high! Guess again");
}

else {
    alert("You guessed it!");
}
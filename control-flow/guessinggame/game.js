// create secret number
var num = 7;

// ask user for a guess
var guess = prompt("Guess a number");

// check guess
if(guess < num) {
    console.log("Too low!");
}

else if(guess > num) {
    console.log("Too high!");
}

else {
    console.log("You guessed it!");
}
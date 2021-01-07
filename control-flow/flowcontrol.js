var age = prompt("How old are you?");

if(age < 0) {
    console.log("Error: Age cannot be negative!");
}

else {
    if(age % 2 === 1) {
        console.log("Your age is odd!");
    }
    
    if(Number.isInteger(Math.sqrt(age))) {
        console.log("Perfect square!");
    }
    
    if(age<18) {
        console.log("Sorry, you are not old enough to enter the venue");
    }
    
    else if(age<21) {
        console.log("You can enter, but cannot drink");
    }
    
    else {
        if(age == 21) {
            console.log("Happy 21st birthday!");
        }
        console.log("You can enter and drink")
    }
}

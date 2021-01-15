console.log("1. Print all numbers between -10 and 19");

for(var i = -10; i <= 19; i++) {
    console.log(i);
}


console.log("\n2. Print all even numbers between 10 and 40");

for(var i = 10; i <= 40; i+=2) {
    console.log(i);
}


console.log("\n3. Print all odd numbers between 300 and 333");

for(var i = 301; i <= 333; i+=2) {
    console.log(i);
}


console.log("\n4. Print all numbers divisible by 3 and 5 between 5 and 50");

for(var i = 5; i <= 50; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
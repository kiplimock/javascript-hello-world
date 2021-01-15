// 1. Print all even numbers between 10 and 40
console.log("All even numbers between 10 and 40");

var num = 10;

while(num <= 40) {
    console.log(num);
    num += 2;
}


// 2. Print all odd numbers between 300 and 333
console.log("All odd numbers between 300 and 333");

var num = 301;

while(num <= 333) {
    console.log(num);
    num += 2;
}


// 3. Print all numbers between 5 and 50 that divisible by 3 AND 5
console.log("All numbers divisible by 3 AND 5 between 5 and 50");

var num = 5;

while(num <= 50) {
    if(num % 3 === 0 && num % 5 === 0) {
        console.log(num);
    }
    num++;
}
// 1. Write a JavaScript function to check whether an `input` is a string or not
console.log("1. Write a JavaScript function to check whether an `input` is a string or not");
function isString(input) {
    return Object.prototype.toString.call(input) === '[object String]';
    //return typeof(input) === 'string';
}
console.log(`isString("w3resource"): ${isString("w3resource")}`);  
console.log(`isString([1,2,3,4]): ${isString([1,2,3,4])}`);   

// 2. Write a JavaScript function to check whether a string is blank or not
console.log("\n2. Write a JavaScript function to check whether a string is blank or not");
function isBlank(input) {
    return input === "";
}
console.log(`isBlank(''): ${isBlank('')}`);
console.log(`isBlank('abc'): ${isBlank('abc')}`);

// 3. Write a JavaScript function to split a string and convert it into an array of words.
console.log("\n3. Write a JavaScript function to split a string and convert it into an array of words.");
function stringToArray(string) {
    return string.split(' ');
}
console.log(`stringToArray('The quick brown fox'): ${stringToArray('The quick brown fox')}`);

// 4. Write a JavaScript function to extract a specified number of characters from a string
console.log("\n4. Write a JavaScript function to extract a specified number of characters from a string")
function charExtract(string, number) {
    return string.slice(0, number+1);
}
console.log(`First 5 characters: ${charExtract('The quick brown fox', 5)}`);

// 5. Write a JavaScript function to convert a string in abbreviated form.
console.log("\n5. Write a JavaScript function to convert a string in abbreviated form.")
function abbrevName(input) {
    var nameArray = input.trim().split(' ');
    return nameArray[0] + ' ' + nameArray[1][0] + '.';
}
console.log(abbrevName('Cedric Kiplimo '));

// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
console.log("\n6. Write a JavaScript function to hide email addresses to protect from unauthorized user.")
function hideEmail(email) {
    emailArray = email.split("@");
    part1_len = emailArray[0].length/2;
    return emailArray[0].slice(0,part1_len) + '...@' + emailArray[1];
}
console.log(hideEmail('kiplimock@gmail.com'));

// 7. Write a JavaScript function to parameterize a string. 
console.log("\n7. Write a JavaScript function to parameterize a string. ")
function parametrize(string) {
    stringArray = string.toLowerCase().split(" ");
    return stringArray.join("-");
}
console.log(parametrize("Robin Singh from the USA"));

// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
console.log("\n9. Write a JavaScript function to capitalize the first letter of each word in a string.");
function capitalize(string) {
    stringArray = string.split(" ").map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    });
    return stringArray.join(" ");
}
console.log(capitalize("the quick brown fox"));

// 10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
console.log("\n10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.");
function caseSwap(string) {
    stringArray = [];
    for(var char of string) {
        // character is lowercase
        if(char === char.toLowerCase()) {
            //change case and add
            stringArray.push(char.toUpperCase());
        }
        // character is uppercase
        else if(char === char.toUpperCase()) {
            //change case and add
            stringArray.push(char.toLowerCase());
        }
    }
    return stringArray.join('');
}
console.log(caseSwap("The Quick Brown Fox"));

//11. Write a JavaScript function to convert a string into camel case.

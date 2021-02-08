var str = "The quick brown fox jumps over the lazy dog"

//the string
console.log("String: " + str)

//length
console.log("Length: " + str.length)

//iterator
var strIter = str[Symbol.iterator]()
char = strIter.next()
while(!char.done && char.value !== " ") {
    console.log(char.value);
    char = strIter.next();
}

//obtain a character at an index
console.log("charAt(0): " + str.charAt(0));
//also
console.log("str[0]: " + str[0]);

//UTF-16 code of a character
console.log("UTF-16 code of 'T': " + str.charCodeAt(0));

//ends with a character
console.log("Ends with 'g': " + str.endsWith("g"));
//starts with
console.log("Starts with 't': " + str.endsWith("t"));

//form strings from unicode
console.log("froCharCode: " + String.fromCharCode(189, 43, 190, 61));
console.log("froCodePoint: " + String.fromCodePoint(9731, 9733, 9842, 0x2F804));

//includes
var word = "Dog"
console.log(`The word '${word}' ${str.includes(word) ? 'is' : 'is not'} in the sentence`);

//find index of a substring's first appearance
word = "The"
console.log(`The index of the first "dog" from the beginning is ${str.indexOf(word.toUpperCase())}`);

//find index of a substring's last appearance
word = "The"
console.log(`The index of the first "the" from the beginning is ${str.lastIndexOf(word.toUpperCase())}`);

// returns the result of matching a string against a regex
var regex = /[A-Z]/g;
console.log(str.match(regex));

// returns all results of matching a string against a regex
regex = /t(e)(st(\d?))/g;
const testSentence = "test1test2";

console.log([...testSentence.matchAll(regex)][0]);

// pad a string at end to attain a given length
console.log("Padded at end: " + str.padEnd(50, '.'));

// pad a string at end to attain a given length
console.log("Padded at start: " + str.padStart(50, '.'));

// raw strings
const filepath = String.raw`C:\Development\profile\aboutme.html`;
console.log("Raw strings: " + `The file was uploaded from ${filepath}`)

// repeat a string x times
console.log("Repeated: " + str.repeat(2));

// replace a substring
console.log("Replaced: " + str.replace('dog', 'monkey'));

//replace all matches
regex = /The/ig;
console.log("Replaced all 'the': " + str.replaceAll(regex, 'a'));

//search for regex matches
// not a letter or whitespace
str = "Did the quick brown fox jump over the lazy dog?"
console.log("\nNew string: " + str)
regex = /[^\w\s]/g;
console.log("Index of character searched: " + str.search(regex));
console.log("The character: " + str[str.search(regex)]);

// slicing a string
console.log("\nSlice");
console.log("str.slice(20): " + str.slice(20));
console.log("str.slice(2, 11): " + str.slice(2,11));
console.log("str.slice(-20): " + str.slice(-20));
console.log("str.slice(10, -2): " + str.slice(10,-2));
console.log("str.slice(-15, 40): " + str.slice(-15,40));
console.log("str.slice(-10, -11): " + str.slice(-10,-11));
console.log("str.slice(-10, -2): " + str.slice(-10,-2));

// split a string to component words
console.log("\nSplit: " + str.split(' '));

// return a substring between indexes
console.log("\nSubstring[5-20]: " + str.substring(5, 20));
console.log("\nSubstring[10]: " + str.substring(10));

// locale lower case
console.log("\nNairobi".toLocaleLowerCase());

//locale upper case
console.log("\nNairobi".toLocaleUpperCase() + '\n');

// to string
var stringObj = new String('Frankie');
console.log(stringObj);
console.log("ValueOf: " + stringObj.valueOf());
console.log("toString: " + stringObj.toString());

//trim
console.log('\nTrim: ' + " Hello World! ".trim());
console.log('\nTrimEnd: ' + " Hello World! ".trimEnd());
console.log('\nTrimStart: ' + " Hello World! ".trimStart());



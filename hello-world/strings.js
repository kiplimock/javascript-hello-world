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
console.log(str.endsWith("g"));

//form strings from unicode
console.log(String.fromCharCode(189, 43, 190, 61));
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));

//includes
var word = "fox"
console.log(`The word ${word} ${str.includes(word) ? 'is' : 'is not'} in the sentence`);

//find index of a substring's first appearance
word = "The"
console.log(`The index of the first "dog" from the beginning is ${str.indexOf(word.toUpperCase())}`);

//find index of a substring's last appearance
word = "The"
console.log(`The index of the first "the" from the beginning is ${str.lastIndexOf(word.toUpperCase())}`);


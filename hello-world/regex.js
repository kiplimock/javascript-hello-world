var str = "Do you know your abc's?";
regex = /abc/;
console.log(str.match(regex));

// match
str = "Patcherian#12";
regex = /[\W*\w*\W*\w*]/g;
console.log(str.match(regex));

// match all
regex = /[\W*\w*\W*\w*]/g;
console.log([...str.matchAll(regex)]);

// search
regex = /[\W*\w*\W*\w*]/g;
console.log(str.search(regex));

//test
console.log(regex.test(str));
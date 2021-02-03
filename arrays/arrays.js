// create an array
let fruits = ["Apple", "Banana"];
console.log("Length: " + fruits.length);

// access an item using index position
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

// loop over an array
console.log("\nLooping over an array");
fruits.forEach(function(item, index) {
    console.log(item, index);
});

// add an item to the end
console.log("\nAdd an item to the end of an array");
fruits.push("Orange");
console.log(fruits);

// remove an item from the end
console.log("\nRemove an item from the end of an array")
let last = fruits.pop();
console.log(`Removed: ${last}`);

// remove an item from the beginning
console.log("\nRemove an item from the beginning of an array");
let first = fruits.shift();
console.log(`Removed: ${first}`);

// add an item to the beginning
console.log("\nAdd an item to the beginning");
fruits.unshift("Strawberry");
console.log(fruits);

// find index of an item
console.log("\nFind index of an item");
fruits.push("Mango");
console.log(fruits.indexOf("Mango"));

// remove item by index position
console.log("\nRemove item by index");
console.log(`Before: ${fruits}`)
let removedItem = fruits.splice(1,1);
console.log(`Removed: ${removedItem}`);
console.log(`After: ${fruits}`);

// remove multiple items from index position
console.log("\nRemove multiple items from index position");
let vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
let pos = 1; //start
let n = 2; //count
console.log(`Before: ${vegetables}`);
let removedItems = vegetables.splice(pos,n);
console.log(`After: ${vegetables}`);

//copy array
console.log("\nCopy an array");
let shallowCopy = fruits.slice();
console.log(shallowCopy);

// add an element to an index position outside the current bounds
console.log("\nAdd an element to a position outside array bounds");
console.log(`Current length: ${fruits.length}`);
fruits[5] = "Peach";
console.log(`New array: ${fruits}`);
console.log(`Updated length: ${fruits.length}`);

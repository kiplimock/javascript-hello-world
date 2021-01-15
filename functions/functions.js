// check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// perform factorial operation
function factorial(num) {
    product = 1;
    for(var i=num; i>0; i--) {
        product *= i;
    }
    return product;
}

// change case from kebabCase to snakeCase
function kebabToSnake(str) {
    if(str.indexOf("-") !== -1) {
        return str.replaceAll("-","_");
    }
    else {
        return str
    }
}
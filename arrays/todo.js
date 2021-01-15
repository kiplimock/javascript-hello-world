var action = prompt("What would you like to do?");
var todo = [];

while(action !== "quit") {
    // handle input
    if(action === "new") {
        // ask for a new todo
        var item = prompt("Enter a new todo");
        // add the new todo
        todo.push(item);
    }
    else if(action === "list") {
        console.log(todo);
    }

    // ask for new input
    action = prompt("What would you like to do?");
}
console.log("BYE.");


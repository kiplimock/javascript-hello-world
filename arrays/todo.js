var todo = [];
var action = prompt("What would you like to do?");

while(action !== "quit") {
    // handle input
    if(action === "new") {
        // ask for a new todo
        var item = prompt("Enter a new todo");
        // add the new todo
        todo.push(item);
    }
    else if(action === "list") {
        console.log("**********");
        todo.forEach(function(item, i) {
            console.log(i + ": " +item);   
        });
        console.log("**********");
    }
    else if(action === "delete") {
        // ask for index to delete
        var index = prompt("Which index do you want to delete?");
        // delete the todo
        todo.splice(index, 1);
        console.log("Todo " + index + " has been removed");
    }

    // ask for new input
    action = prompt("What would you like to do?");
}
console.log("BYE.");


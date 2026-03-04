// let keyword
// declaring variables with let

// let solve this problem of redeclaring variables
var user1 = "New User"
var user1 = "Another User"

// We cannot redeclare variables in let case
let myAge = 25;
// let myAge = 30; // This will cause an error: Identifier 'myAge' has already been declared
myAge = 30; // We can reassign the value

// console.log(myAge); // 25

// block scope vs function scope (covered in great detail later)


// Revision Practice
let newUser = "New User"
// let newUser = "New User" // Redeclaration is not allowed in let keyword
newUser = "Reassigned User" // Reassigning is allowed here
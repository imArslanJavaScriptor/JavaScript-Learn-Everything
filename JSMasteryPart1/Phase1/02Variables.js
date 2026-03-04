"use strict";
// Intro to variables in JavaScript

// variables can store some information 
// we can use that information later in the program
// we can change that information whenever we want

// declaring a variable
var myName = "Arslan";
// This var here is a keyword to declare a variable. And These Keywords are already defined in Programming Languages
// Variables names are case sensitive


// use the variable
console.log(myName);

// changing the variable
myName = "imArslan";

// Altought it is is not recommnded and not even allowed in other keyewords like let, const but in var we can redeclare the variable
var myName = "Mir Hadi";
console.log(myName);

// agr hum variables ko withouth var bhi declare krne ki koshsih kre to wo ho ji ga but is ki waja se bohot issues create ho skte ha so is ko avoid krna chahiye or if we want to restrict ke without var vairable declare na ho to hum strict mode use kr skte ha.

// These variables are couse error in strict mode
// firstName = "Bilal"
// firstname = "Hadi"
// console.log(firstName);
// console.log(firstname);


// Revision Practice

// Declaring a variable
var userName = "Arslan"

// Changing Variable
userName = "King"
console.log(userName) // Output: King


var newName =  "Bilal"
// Redeclaration Not Allowed and not possible in let & const keywords
var newName = "Ali"
console.log(newName) // Output: Ali

// anyName = "myName"
// console.log(anyName) //  ReferenceError: anyName is not defined BCZ we are using strict mode
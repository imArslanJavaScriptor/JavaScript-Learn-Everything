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

// agr hum variables ko withouth var bhi declare krne ki koshsih kre to wo ho ji ga but is ki waja se bohot issues create ho skte ha so is ko avoid krna chaoye or if we wan to restrucit ke without var vairable declare na hot hum struct mode kte use kr skte ha.
// These variables are couse error in strict mode
// firstName = "Bilal"
// firstname = "Hadi"
// console.log(firstName);
// console.log(firstname);

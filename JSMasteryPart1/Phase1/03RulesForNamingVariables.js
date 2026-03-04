// Rules for naming variables

// You cannot start variable names with numbers
// Examples:
// var 1stName = "John"; // Invalid
// var name1 = "Alice"; // Valid

// you can use only underscore(_) or dollar sign($) special characters in variable names
var _firstName = "John"; // Valid
var $lastName = "Doe"; // Valid
// var first-Name = "Jane"; // Invalid
// var first Name = "Jane"; // Invalid You cannot use spaces in variable names

var my_city = "Lahore" // snake_case is generally not used in JavaScript but it is valid
var myCity = "Karachi" // camelCase is the preferred convention in JavaScript

// Conventions 
// Start with a lowercase letter and use camelCase for multiple words
var myVariableName = "example"; // Valid
// var MyVariableName = "example"; // Not a convention for variables, usually used for classes 

// Revision Practice
// let 1num = "Number 1" // Not Allowed Variables name should not be start with a number
let _numOne = "Num 1" // underscore is allowed
let $num_Two = "Num 2" // $ sign is also allowed

// styles for convention
let new_user = "This is a New User" // using snake case allowed but not popular in JS
let newUser = "This is another new user" // using camelCase allowed and very Popular in JS
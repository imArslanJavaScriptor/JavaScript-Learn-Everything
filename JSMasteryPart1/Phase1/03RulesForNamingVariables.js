// Rules for naming variables

// Variable name should not allowed to start with a number
// Examples:
// var 1stPositionHolder = "Arslan" // Invalid
// var firstPositionHolder = "Hafiz Muhammad Arslan" // Valid

// you can use only underscore(_) or dollar sign($) special characters in variable names
// var first-name = "Asim" // Invalid
// var first name = "Asim" // Invalid cannot use spaces in variable names
var first_name = "Asim" // Valid
var $firstName = "Atif" // Valid

// Some widely used Conventions for declaring variables
var my_city = "Karachi" // snake_case
var myCity = "Lahore" // camelCase 
// Info:
// snake_case is generally not used in JavaScript but it is valid
// camelCase is the preferred convention in JavaScript
var MyName = "Khan" // Prefer this style in classes but avoid it for variable declarations

// Revision Practice
// let 1num = "Number 1" // Not Allowed Variables name should not be start with a number
let _numOne = "Num 1" // underscore is allowed
let $num_Two = "Num 2" // $ sign is also allowed

// styles for convention
let new_user = "This is a New User" // using snake case allowed but not popular in JS
let newUser = "This is another new user" // using camelCase allowed and very Popular in JS
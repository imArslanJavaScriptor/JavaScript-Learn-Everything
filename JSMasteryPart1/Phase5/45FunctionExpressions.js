// Function Declaration
function sayHappeyBirthday() {
  console.log("Happy Birthday....")
}
sayHappeyBirthday()

function doNothing() {
  console.log("Do Nothing")
}
doNothing()

// Now Function Expression: is ma hum 1 function ko 1 variable ma assing kr deta ha like this.
const findSummOfTwoNumbers = function (num1, num2) {
  return `The Sum of ${num1} + ${num2} is ${num1 + num2}`;
};

console.log(findSummOfTwoNumbers(20, 34));

// That's why i prefer to create functions using Funtion expressions becuase in the function declaration
// i face the problem like this where i have already created the function with the name and im not
// getting any errors.
function sayHello() {console.log("Hello")}
function sayHello() {console.log("Hello From Another sayHello Function")} sayHello()
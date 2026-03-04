// Template Strings in JavaScript
// Template strings (also known as template literals) allow for easier string interpolation and multi-line strings in JavaScript.

let age = 20
let name = "Arslan"

// Traditional String Concatenation
let aboutMeWithTraditionalMethod = "My name is " + name + " and I am " + age + " years old.";
console.log(aboutMeWithTraditionalMethod); // Output: My name is Arslan and I am 20 years old.

// Using Template Strings
let aboutMeWithTemplateStrings = `My name is ${name} and I am ${age} years old.`;
console.log(aboutMeWithTemplateStrings); // Output: My name is Arslan and I am 20 years old.

// Revision Practice
let userName = "Arslan King"
let userAge = 22
let oldSchool = "Hello My Name is " + userName + " and i'm " + userAge + " years old"
let modernWay = `Hello My Name is ${userName} and i'm ${userAge} years old`
console.log("Old:" , oldSchool)
console.log("Modern:", modernWay)
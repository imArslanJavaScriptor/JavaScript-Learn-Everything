// functions in JavaScript

function sayHappyBirthday() {
  console.log("Happy Birthday to you...");
}

sayHappyBirthday();
sayHappyBirthday();
sayHappyBirthday();
sayHappyBirthday();
sayHappyBirthday();

// Ye jo person mane add kia ha (person) parenthesis ma isko kehte paramter
// Tevhn ical Term: birthdayWishFunction function 1 paramter ha person
function birthdayWishFunction(person) {
  return `Happy Birthday to you Dear ${person}`;
}

// ab function kmo call krte waqt jo paramter ki value pass krte ha usko kehte ha argument yaha argument ha "Arslan"
// Asan alfaz ma: jb function create krte wwaqt jo value pass krte ha use kehte he Parameter
// or jub function call krte waqt koi value pass krte ha use kete ha Argument
let wishBirthdayToArslan = birthdayWishFunction("Arslan");
console.log(wishBirthdayToArslan);

// Exampel of Re-Usable Function
function addTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return console.log(sum);
}

addTwoNumbers(20, 50);
addTwoNumbers(); // NaN kyunke apne argument pass hi nhi kye to is time dono arguments kija pass hua undefined
// and undefined + undefined = NaN
addTwoNumbers(120, 60);

function isEven(num) {
  let res = "";
  return num % 2 === 0
    ? (res = `${num} is a Even Number`)
    : `${num} is an Odd Number`;
}

console.log(isEven(11))
console.log(isEven(12))

// Duration: 5 Hours 8 Minutes
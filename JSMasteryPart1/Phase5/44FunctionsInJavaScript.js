// functions in JavaScript

function sayHappyBirthday() {
  console.log("Happy Birthday to you...");
}

sayHappyBirthday();
sayHappyBirthday();
sayHappyBirthday();
sayHappyBirthday();

// Ye jo person mane add kia ha (person) parenthesis ma isko kehte ha paramter
// Technical Term: birthdayWishFunction function ma 1 paramter le rha ha person
function birthdayWishFunction(person) {
  return `Happy Birthday to you Dear ${person}`;
}

// ab function ko call krte waqt jo paramter ki value pass krte ha usko kehte ha argument
// yaha argument ha "Arslan"
// Asan alfaz ma: jb function create krte waqt jo value pass krte ha use kehte he Parameter
// or jab function call krte waqt koi value pass krte ha use kete ha Argument
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

console.log(isEven(11));
console.log(isEven(12));

let target = 4;
let arr = [2, 4, 6, 8, 10];

// Self Made Function By Arslan im Proud of my Self
function findTarget(array, target) {
  let capturedTarget
  for (let elem in array) {
    if (arr[elem] === target) {
      capturedTarget = elem
    }
  }
  if(capturedTarget !== undefined) {
    return console.log(`Target is found and available at ${capturedTarget} index`);
  } 
  console.log("Target Not found")
}


findTarget(arr, target)



// Very Importent Technical Term: niche abhi jis trha function bna ha function keyword ka use kr ke
// is type ka functions ko kehte ha function declaration
function findIndexTarget(array, target) {
  for(let i=0; i < array.length; i++) {
    if(array[i] === target) {
      return `Target found at index ${i}`
    }
  }
  return "Target Not Found"
}

console.log(findIndexTarget(arr, 6))
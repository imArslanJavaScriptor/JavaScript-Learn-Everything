// undefined
let userName
console.log(typeof userName); // Output: undefined
userName = "Arslan"
console.log(typeof userName); // Output: string

// console.log( typeof undefined ); // undefined

// null
// This is a bug in JavaScript that typeof null returns 'object' but null is not an object it represents 'no value' 
console.log( typeof null ); // object

let myVariable = null
console.log( myVariable ); // Output: null

myVariable = "Hello"
console.log( myVariable ); // Output: Hello

// BigInt
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991
let myNumber = BigInt("1234567890123456789012345678901234567890");
let myNumber2 = BigInt("450");
myNumber = myNumber + myNumber2
console.log( myNumber ); // Output: 1234567890123456789012345678901234568340n
// There is no need to use BigInt constructor, you can also use n suffix to create BigInt
let myNumber3 = 1234567890123456789012345678901234567890n;
console.log( myNumber3 ); // Output: 1234567890123456789012345678901234567890n

// You can also declre BigInt wiht lesser values like this
let smallBigInt = 450n;
console.log( smallBigInt ); // Output: 450n

// Also you cannot mix BigInt with regular number types
// let invalidBigIntOperation = myNumber + 5; // This will throw an error
// console.log( invalidBigIntOperation );
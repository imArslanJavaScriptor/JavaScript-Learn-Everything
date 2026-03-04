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


// Revision
console.log("=========== Revision ===========")
let myName
console.log(typeof myName) // Output: undefined

myName = "imArslan"; 
console.log(typeof userName); // Output: string
console.log( typeof undefined ); // undefined

console.log( typeof null ); // object Language Glitch it simply means "No Value"

let availableStocks = null
console.log(availableStocks); // Output: null

// BigInt
let bigNumber = BigInt("1234567890123456789012345678901234567890");
let bigInteger = BigInt("450");
console.log("Adding 2 BigInts: ", bigNumber + bigInteger)

let bigIntegerWithoutBigIntConstructor = 1234567890123456789012345678901234567890n;
// Output: bigint, 1234567890123456789012345678901234567890n;
console.log(typeof bigIntegerWithoutBigIntConstructor) 

// Also you cannot mix BigInt with regular number types
let mixBigIntWithRegularNumber = 240n + 20
// console.log(mixBigIntWithRegularNumber) // Cannot mix BigInt and other types, use explicit conversions

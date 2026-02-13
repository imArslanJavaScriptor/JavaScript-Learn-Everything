// type operator

// data types (Primitive data types):
// number
// string
// boolean
// undefined
// null
// symbol
// BigInt


let age = 20
console.log( typeof age ); // number

// convert number to string

// Tricky way
let ageInStr = age + "";
console.log( typeof ageInStr ); // string

// Proper way
let ageInString = String(age);
console.log( typeof ageInString ); // string

// convert string to number=
// Tricky way
let  strToNumTricky = +"123";
console.log( typeof strToNumTricky ); // number

// Proper way
let str = "123";
let strToNum = Number(str);
console.log( typeof strToNum ); // number

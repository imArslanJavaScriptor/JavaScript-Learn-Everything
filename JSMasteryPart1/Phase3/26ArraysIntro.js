// Intro to arrays
// Arrays are referance type
// How to create arrays
// Arrays are Ordered Collections of items
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
fruits[0] = "Strawberry" // ARRAYS ARE Mutable arrays can be changed
console.log(fruits)
let checkIsArray = Array.isArray(fruits)
console.log(checkIsArray)

let obj = {}
checkIsArray = Array.isArray(obj)
console.log(checkIsArray)


let str = "Arslan"
str[0] = "imA" // Strings are immutable strings cannot be change
console.log(str) // But is still returns Arslan which is orignial string value. 

let numbers = [1,2,3,4,5]
console.log(numbers)

// We can store any sort of data type value in the array
let mix = [1,2, null, undefined, "String"]

// All the data types who's blongs to type refrence are considered object 
console.log(typeof fruits); // object
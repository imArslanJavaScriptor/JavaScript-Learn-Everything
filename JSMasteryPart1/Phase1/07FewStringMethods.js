// trim()
// toUpperCase()
// toLowerCase()
// slice()

// Concept of Mutable and Immutable Strings
// Mutable: Can be changed
// Immutable: Cannot be changed
// Becuase strings are immutable in JavaScript, string methods do not change the original string. Instead, they return a new string with the desired modifications.

// 1- trim()
let firstName = "   Arslan   ";
// console.log(firstName.length); // Output: 13
let trimmedName = firstName.trim();
// console.log(trimmedName); // Output: "Arslan"
// console.log(trimmedName.length); // Output: 6


// 2- toUpperCase() and toLowerCase()
let city = "Islamabad";
let upperCity = city.toUpperCase();
let lowerCity = city.toLowerCase();
// console.log(upperCity); // Output: "ISLAMABAD"
// console.log(lowerCity); // Output: "islamabad"


// 3- slice()
// How Slice Works
// slice(startIndex, endIndex) 
// startIndex: The index to start the extraction (inclusive).
// endIndex (optional): The index to end the extraction (exclusive). If omitted, slice extracts to the end of the string.
let country = "United States";
let slicedCountry1 = country.slice(0, 4);
let slicedCountry2 = country.slice(7);
// console.log(slicedCountry1); // Output: "Unit"
// console.log(slicedCountry2); // Output: "States"


// Revision Practice
let str = "     StringContent      "
console.log(str.trim().length)
console.log(str.length)
let trimedStr = str.trim()
let str2 = trimedStr.slice(2)
console.log(str === str2)
console.log(str2)
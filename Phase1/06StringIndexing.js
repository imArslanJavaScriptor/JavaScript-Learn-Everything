// String indexing in JavaScript
let firstName = "Arslan";

// A  r  s  l  a  n
// 0  1  2  3  4  5   --> Positive Indexing
//-6 -5 -4 -3 -2 -1   --> Negative Indexing

console.log(firstName[0]);  // Output: A
console.log(firstName[3]);  // Output: l
console.log(firstName[-1]); // Output: undefined (JavaScript does not support negative indexing)
console.log(firstName.length); // Output: 6
// Last index: length - 1
console.log(firstName[firstName.length - 1]); // Output: n
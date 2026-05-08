// map method
const numbersArray = [1, 2, 3, 4, 5];
const square = function (number) {
  return number * number;
};

// Yaha pr numbersArray.map(square) map ke andr mane square function pass
// kia ha ye ab 1 new arrray return krega jis ma sare eleemnts ka square hoga.
// map hamesha kuch na kuch return krega and hamsha new array bnayega.
const squareNumber = numbersArray.map(square);
console.log(squareNumber); // Output: [ 1, 4, 9, 16, 25 ]

function mapWalaFunction(val, index, arr) {
  let returnVal = `Value: ${val} on Index: ${index}, from Array: ${arr}`;
  return returnVal;
}
let newArr = numbersArray.map(mapWalaFunction);
console.log(newArr);

// Ye Important ha ka .map() jb use kr rha ha to return krain
const multiply = (number) => {
  console.log(number * number);
};
let res = numbersArray.map(multiply);
console.log("Pointer", res); // Output: array filled with Undefined because jb kuch return nhi hota to by default undefined return hota ha.

// const squareNumber = numbersArray.map((number, index) => {
//     return `index: ${index}, ${number * number}`
// });
// console.log(squareNumber)

const users = [
    {userName: "Alice", age: 30},
    {userName: "Jhonson", age: 35},
    {userName: "Jason", age: 40},
    {userName: "Roger", age: 25},
]

let userNames = users.map((user) => {
    return user.userName
})

console.log(userNames)

// Most Fav Interview Question: Waht is the diffrence between forEach,map, filter & reduce methods
// 1- forEach: Useful for iterating over the array to perform side effects 
// (like console.log or saving to a database). It always returns undefined.

// 2- map: Iterates over an array and returns a new array of the same length, where every element has been transformed by your function.

// 3- filter: (This is where your note was swapped!) Iterates over an array and returns a new array containing only the elements that pass a test (condition).

// 4- reduce: Iterates over the array to "boil down" all elements into a single value (like a sum, a string, or an object) using an accumulator.

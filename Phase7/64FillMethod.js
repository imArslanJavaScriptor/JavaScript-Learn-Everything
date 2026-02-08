// fill Method
// value, start, end
const myArray = new Array(10).fill(5);
console.log(myArray); // Output: Array Filled with 10 Times 5 [5,5,5,5,5,5,5,5,5,5]

// Another Use Case
const evenNumbersArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];


//IMP: fill Method Change Actual Array

// evenNumbersArray.fill(2, 4, 6); // Value is 2, Start filling with value 2 from 4 index
// to 6th index meaing at index 4 & 5 we repalced the original values with 2,2 this maethod 
// changes Actual Array so if you dont want to change your orrignal array make sure to copy first
// console.log(evenNumbersArray) // Output: [2, 4, 6, 8, 2, 2, 14, 16, 18, 20]

let filltedArray = evenNumbersArray.slice(0).fill("Even", 0, 2)
console.log("Original Array:", evenNumbersArray)
console.log("Filled Array:", filltedArray)
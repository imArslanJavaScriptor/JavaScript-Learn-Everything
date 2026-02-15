// Closure Example

// function powerFunction(power) {
//   return function(number) {
//     return number ** power
//   }
// }

// const square = powerFunction(2)
// const squareAns = square(3)
// console.log(squareAns)

// const cube = powerFunction(3)
// const cubeAns = cube(3)
// console.log(cubeAns)

// Using Arrow Function
const powerFunction = (power) => (number) =>  number ** power;

const square = powerFunction(2);
const squareAns = square(3);
console.log(squareAns);

const cube = powerFunction(3);
const cubeAns = cube(3);
console.log(cubeAns);

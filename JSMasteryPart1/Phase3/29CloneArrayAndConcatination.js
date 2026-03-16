// How to clone Arrays
// How to concatenate Arrays

let arr1 = ["Item1", "Item2"];
let arr2 = arr1;

if (arr1 === arr2) {
  console.log("arr1 and arr2 are Same");
} else {
  console.log("arr1 and arr2 are Diffrent");
}
// Both are same arrays becuase the pointer is targeting to the same id in the heap memory

// Now what if we want to clone to the same array but it will be stored seprately in the memory

// Now we have diffrent arrays in the memory but this is not a practicaly good way
// let array1 = [1,2,3,4]
// let array2 = [1,2,3,4]

// clone array using slice method so in this way we get seprate arrays in heep
// let array1 = [1,2,3,4]
// let array2 = array1.slice(0) (slice method fast ha comparietively baqi methods se)

// Ab ma concat method use kr rha hu
// let array1 = [1,2,3,4]
// let array2 = [].concat(array1)

// Ab ma use kr rha hu Spread Operaotr ka (Recommended)
// let array1 = [1,2,3,4]
// let array2 = [...array1]

// Adding More Items into array
let array1 = [1, 2, 3, 4];
// Using Spread Operator
let array2 = [...array1, 5, 6, 7, 8];
// Using Concat Method
let array3 = [].concat(array1, [5, 6, 7, 8], [9, 10, 11, 12]);
console.log("Array 3:", array3);

// Now im changing in array1 but this time ye array2 me reflect nhi hoga.
array1.push(5);
console.log("5 is Added in Array 1:", array1)
console.log("But not in Array 2:", array2)

if (array1 === array2) {
  console.log("array1 and array2 are Same");
} else {
  console.log("array1 and array2 are Diffrent");
}
console.log(array1);
console.log(array2);

// This way we get a brand new array containing the values of arr1 & arr2
let newArray = [...arr1, ...arr2];
console.log("Brand New Array:", newArray);


let animals = ["Cat", "Lion", "Zebra"]
// let animals2 = [...animals]
// let animals2 = [].concat(animals)
let animals2 = animals.slice(0)
console.log(animals2 != animals ? "Animals2 is Diffrent Array" : "Animals2 is Same Array" )
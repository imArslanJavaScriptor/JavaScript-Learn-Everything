// Primitive vs Refrance Data Types

// Primitive Type
let num1 = 6
let num2 = num1
console.log("Before Increment")
console.log("Num1 val: ", num1)
console.log("Num2 val: ", num2)

num1++

console.log("After Increment")
console.log("Num1 val: ", num1)
console.log("Num2 val: ", num2)

// Referance Type:
let arr1 = [1,2,3]
let arr2 = arr1

console.log("Before Pushing 4 to arr1")
console.log(arr1)
console.log(arr2)

arr1.push(4)

console.log("After Pushing 4 to arr1")
console.log(arr1)
console.log(arr2)
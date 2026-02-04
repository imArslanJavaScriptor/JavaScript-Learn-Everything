// Array Destructuring
let myArray = ["This is Value 1", "This is Value 2", "This is Value 3", "This is Value 4"]
// let myArray = ["This is Value 1"] // Agr array me 1 hi element ho or destrucuting ma zyada destrucutre krlia to undefined milega.


let val1 = myArray[0]
let val2 = myArray[1]

console.log("Without using Array Destructing Method")
console.log(val1)
console.log(val2)


console.log("After using Array Destructing Method")
// const [variable1, variable2, ...restValues] = myArray 
// sgr humare array me bohot sari values ha or un values ko hum as an array get krna chate ha 
// to hum ... spread oprator ka usekrke 1 valribal bna lega jaise ...restValues ka name se mane bnaya ha and 
// is ma sari remaaing values as an array store ho jai gi.

// Now agr mujhe Varible2 ma Value 3 stroe krni ha to ma
// ek extra coma add krduga jiska mtlab 1 value/index ko skip krna ha
// Expected Output 
// This is Value 1
// This is Value 3
// [ 'This is Value 4' ]
const [variable1, , variable2, ...restValues] = myArray  


// These variable1 & variable2 are treeted like a normal 
// varialbe we created with let or const etc
// variable1 = "New Value" // This will throw Assignment to constant variable error
console.log(variable1)
console.log(variable2)
console.log(restValues)
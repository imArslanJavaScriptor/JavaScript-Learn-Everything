// for loop in array
let fruits = ["Apple", "Mango", "Grapes", "Banana"];

let FRUITS = []
for (let i = 0; i < fruits.length; i++) {
    FRUITS.push(fruits[i].toUpperCase())
}
// Now This FRUITS array filled with Upper Case Fruit Items
console.log(FRUITS)
// Get Last Property of an Array
console.log("Last Value in fruit array:", fruits[fruits.length - 1])
console.log("2nd Last Value in fruit array:", fruits[fruits.length - 2])

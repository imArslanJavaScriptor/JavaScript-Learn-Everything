// for in loop in arrays
// For in loop apko directly array ki index provide kr deta ha.

const fruits = ["Apple", "Mango", "Grapes", "Banana"];

for (let index in fruits) {
    console.log(index) // 0,1,2,3
    console.log(fruits[index]) // "Apple", "Mango", "Grapes", "Banana"
}

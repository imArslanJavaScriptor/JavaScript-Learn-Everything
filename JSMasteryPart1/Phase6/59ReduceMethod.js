// Reduce Method
const numsArr = [2,4,6,8,3]
const numbersArray = [3, 6, 7, 1, 2, 8, 9, 10, 4, 6];
let sum = numbersArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})
console.log(sum) // Output: 56
// How it works
// accumulator, currentValue,   return
// 3               6               9
// 9               7               16
// 16              1               17
// 17              2               19
// 19              8               27
// 27              9               36
// 36              10              46
// 46              4               50
// 50              6               56



// reduce() method total values ko reduce krke 1 value return kr rha ha current above example 
// ma 56 return kr rha ha which is the sum of all the numbersArray 

const UserCart = [
    {productID: 1, productName: "Laptop", price: 50000},
    {productID: 2, productName: "Mobile", price: 20000},
    {productID: 3, productName: "Headphones", price: 5000},
    {productID: 4, productName: "Keyboard", price: 2000},
    {productID: 5, productName: "Mouse", price: 1000},   
]

let CartTotal  = 0
for (const item of UserCart) {
    CartTotal += item.price
}
console.log(CartTotal)

// Now Calculating ToalCart Using reduc Method
let reducedTotal = UserCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
}, 0) // Here this 0 is the inital value of accumulator if pass then it takes the value from the array and start from there but if we pass 0 then it start from 0 and add the price of first item to it and so on.
console.log(reducedTotal)

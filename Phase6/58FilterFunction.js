// // filter method
const numbersArray = [3, 6, 7, 1, 2, 8, 9, 10, 4, 6];

const isEven = (number) => {
    return number % 2 === 0
}

// filter method me jo callback function hoga chahe uske andr bnay ya bahir bna kr refrence pass krain to wo hamesha boolena return krega.
// Then filter Method hamesha new array return krega jis ma sirf true values hogi.
let filteredEvenNumbers = numbersArray.filter(isEven)
console.log(filteredEvenNumbers)

let filterOddNumbers = numbersArray.filter((num) => {
    return num % 2 !== 0
})
console.log(filterOddNumbers)
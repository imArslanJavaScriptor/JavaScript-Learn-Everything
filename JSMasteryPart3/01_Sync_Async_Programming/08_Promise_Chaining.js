// Promise.resolve
// Promise Chaining

// const myPromise = Promise.resolve(10)

// myPromise.then((val) => console.log(val) )

// then(): Method hamesha promise return krta hai.

function myPromise2() {
    return new Promise((resolve, reject) => {
        resolve("Resolved Value From Promise")
    })
} 

// Example of Promise Chaning
myPromise2()
.then((val) => val + "Ten")
.then((val) => val + "Twenty")
.then((val) => val + "Thirty")
.then((val) => val + "Fourty")
.then((val) => console.log(val))


myPromise2()
.then((val) => {
    console.log(val)
    val += "Extra Value"
    // Ab ma dubara .then() lga skta hu
    // BCZ ye bhi further 1 promise hi return kr rha ha 
    // BTS kuch ye ho rha ha new Promise.resolve(val)
    // Or Agr Ap Promise se kuch return nhi kro ga to Undefined return hoga.
    return val 
})
.then((val) => console.log(val))


// .then(), .catch(), .finally() to hamesha Promise pr hi lgega

// Kisi String pr Thori na lgega.
// Error: "String".then is not a function
// "String".then((val) => console.log(val)) 
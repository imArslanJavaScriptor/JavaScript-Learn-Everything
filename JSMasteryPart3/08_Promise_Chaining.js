// Promise.resolve
// Promise Chaining

// const myPromise = Promise.resolve(10)

// myPromise.then((val) => console.log(val) )

// then(): Method hamesha promise return krta hai.

function myPromise2() {
    return new Promise((resolve, reject) => {
        resolve("Foo")
    })
}
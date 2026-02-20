// Promise
console.log("Script Start");
const bucket = ["Coffee", "Chips", "Vegetables", "Salt", "Rice"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("Vegetables") &&
    bucket.includes("Salt") &&
    bucket.includes("Rice")
  ) {
    resolve("Fried Rice");
  } else {
    reject(new Error("Something Missing From Bucket"));
  }
});

// Produce

// Consume
// friedRicePromise.then(
//     // Jab Promise Resilve Hoga
//     (myfriedrice) => {
//         console.log("Let's Eat", myfriedrice)
//     },
//     // Jab Promise Reject Hoga.
//     (error) => {
//         console.log(error)
//     }
// )

// The Above Example is Fine But Hume .then() ke andr err handle krne ki
// zarorat nhi ha for that thing we have .catch()
// IMP: Ye Bhi Async Task ha Meaning ke Browser ke pas jaiga non-blocking code ha.
// Browser Hamare Promise ko Consume Krega and hame Result la kr de dega.
friedRicePromise
  .then((myfriedrice) => {
    console.log("Let's Eat", myfriedrice);
  })
  .catch((error) => {
    console.log("Oh no", error);
  });

// IMP: Always Remeber if CallBack Que & Microtask Que dono ke pass tasks pre ready pre ha Call Stack me jane ko to Hamesha pehle Microtask Que ko priority de jati ha. Isi liye Microtask Que ko Priority Que bhi kehta ha.

setTimeout(() => {
  console.log("Inside Time Out");
}, 1000);

for (let i = 1; i <= 1000; i++) {
  console.log("Count");
}
console.log("Script End");

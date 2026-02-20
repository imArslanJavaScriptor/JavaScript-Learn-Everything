// Function Return Promise

const bucket = ["Coffee", "Chips", "Vegetables", "Salt", "Rice"];
function biryaniPromise() {
  return new Promise((resolve, reject) => {
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
}

biryaniPromise()
  .then((myfriedrice) => {
    console.log("Let's Eat", myfriedrice);
  })
  .catch((error) => {
    console.log("Oh no", error);
  });

// =========================================
// Call, Apply & Bind Methods in JavaScript
// =========================================

const userOne = {
  userName: "Alice Jhon",
  age: 30,

  about: function (hobby, favMusician) {
    console.log(
      `User Name: ${this.userName}, Age: ${this.age}, Hobby: ${hobby}, Favorite Musician: ${favMusician}`,
    );
  },
};

const userTwo = {
  userName: "Ali Zafar",
  age: 25,
};

// =====================================================
// Problem:
// userTwo ke paas about() method nahi hai.
// Hum userOne ka about() method userTwo ke liye use karna chahte hain
// bina method copy kiye.
// =====================================================

// =====================================================
// 1. call() Method
// =====================================================

// call() method function ko immediately execute karta hai.
// Pehla argument `this` ki value set karta hai.
// Baaki arguments normal comma-separated pass hote hain.

userOne.about.call(userTwo, "Gardening", "Atif Aslam");

// Output:
// User Name: Ali Zafar, Age: 25, Hobby: Gardening, Favorite Musician: Atif Aslam

// Yahan:
// - this => userTwo
// - "Gardening" => hobby
// - "Atif Aslam" => favMusician

// Agar call() me object pass na karein:
userOne.about.call();

// Output:
// User Name: undefined, Age: undefined ...

// Kyunki strict mode me `this` undefined hota hai.

// Important Rule:
// call() ka pehla argument hamesha object hota hai
// jise `this` refer karega.

// =====================================================
// Separate Function Example
// =====================================================

function about(hobby, favMusician) {
  console.log(
    `Name: ${this.userName}, Age: ${this.age}, Hobby: ${hobby}, Favorite Musician: ${favMusician}`,
  );
}

const user1 = {
  userName: "Bilal Ahmad",
  age: 30,
};

const user2 = {
  userName: "Saim Ali",
  age: 25,
};

// call() examples:
about.call(user1, "Coding", "Ali Zafar");
about.call(user2, "Sports", "Atif Aslam");

// =====================================================
// 2. apply() Method
// =====================================================

// apply() bhi call() ki tarah hota hai.
// Difference sirf itna hai:
// - call() => arguments comma-separated leta hai
// - apply() => arguments ek array me leta hai

about.apply(user1, ["Teaching", "Rahat Fateh Ali Khan"]);
about.apply(user2, ["Cricket", "Nusrat Fateh Ali Khan"]);

// =====================================================
// 3. bind() Method
// =====================================================

// bind() function ko immediately execute nahi karta.
// Ye ek naya function return karta hai
// jisme `this` permanently bind ho jata hai.

// Example:
const newFunc = about.bind(user1);

// Ab jab bhi newFunc chalega,
// `this` hamesha user1 ko refer karega.

newFunc("Coding", "Ali Zafar");

// Output:
// Name: Bilal Ahmad, Age: 30, Hobby: Coding, Favorite Musician: Ali Zafar

// =====================================================
// bind() with Predefined Arguments
// =====================================================

// bind() me arguments bhi pehle se set kar sakte hain.

const newFunc2 = about.bind(
  user2,
  "Book Reading",
  "Attaullah Khan Esa Khelvi"
);

// Ab arguments already bind ho chuke hain.
newFunc2();

// Output:
// Name: Saim Ali, Age: 25, Hobby: Book Reading,
// Favorite Musician: Attaullah Khan Esa Khelvi

// =====================================================
// Quick Summary
// =====================================================

// call()
// -> Function ko immediately execute karta hai
// -> Arguments comma-separated leta hai

// apply()
// -> Function ko immediately execute karta hai
// -> Arguments array me leta hai

// bind()
// -> Function ko immediately execute nahi karta
// -> Naya function return karta hai
// -> this permanently bind kar deta hai

// Practice
const userInfo = {
  userName: "Arslan",
  userAge: 20,
  info: function(hobby) {
    return `User Name: ${this.userName}. \nUser Age: ${this.userAge}. \nUser Hobby: ${hobby}`
  }
}

const userInfo2 = {
  userName: "Ali",
  userAge: 42
}

const userInfo3 = {
  userName: "Atfi",
  userAge: 40
}


let callMethodResult = userInfo.info.call(userInfo, "Content Creation")
let applyMethodResult = userInfo.info.apply(userInfo2, ["Gardening"])
let bindMethodResult = userInfo.info.bind(userInfo3, "Painting")

console.log(callMethodResult)
console.log(applyMethodResult)
console.log(bindMethodResult())
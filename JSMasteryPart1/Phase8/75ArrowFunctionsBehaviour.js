// Arrpw Function Behaviour

const user1 = {
  userName: "Bilal Ahmad",
  age: 30,
  aboutWithArrowFunc: (hobby, favMusician) => {
    console.log(this); // refers to window object in browser and global object in node environment
    console.log(
      `User Name: ${this.userName} and Age: ${this.age} ${hobby} ${favMusician}`,
    );
  },
  aboutWithClassicFunc: function (hobby, favMusician) {
    console.log(this); // refers to user1 object because this is a regular function and it is called as a method of user1 object
    console.log(
      `User Name: ${this.userName} and Age: ${this.age} ${hobby} ${favMusician}`,
    );
  },
};

user1.aboutWithArrowFunc.call(user1, "Coding", "Ali Zafar"); // Output: User Name: undefined and Age: undefined Coding Ali Zafar
user1.aboutWithClassicFunc.call(user1, "Coding", "Ali Zafar"); // Output: User Name: Bilal Ahmad and Age: 30 Coding Ali Zafar

// Arrow function ma this keyword apne parent scope ko refer karta ha yani ke arrow function ke andar this keyword apne parent scope ko refer karega. Isliye jab hum arrow function ke andar this keyword ka use karte ha to uska value apne parent scope ke this keyword ke value ke barabar hota ha. For example: user1.aboutWithArrowFunc() to aboutWithArrowFunc method user1 object ke andar call ho raha ha to this keyword user1 object ko refer karega lekin aboutWithArrowFunc method ek arrow function hai isliye this keyword apne parent scope ko refer karega jo ke global scope hai isliye output me undefined aayega. Isliye jab bhi hum arrow function ka use karte ha to hume ye dhyan me rakhna chahiye ke arrow function ke andar this keyword apne parent scope ko refer karta ha.

const parentObj = {
  userName: "Parent Object",
  childObj: {
    userName: "Bilal Ahmad",
    age: 30,
    aboutWithArrowFunc: (hobby, favMusician) => {
      console.log(this);
      console.log(
        `User Name: ${this.userName} and Age: ${this.age} ${hobby} ${favMusician}`,
      );
    },
  },
};

parentObj.childObj.aboutWithArrowFunc("Coding", "Ali Zafar"); // Output: User Name: undefined and Age: undefined Coding Ali Zafar

// Summary Notes on Arrow Function Behavior:
// 1. Arrow functions do not bind their own 'this'. Instead, they inherit 'this' from the lexical scope (the surrounding code where they are defined).
// 2. In the examples above, the arrow functions are defined in the global scope (not inside any function), so 'this' refers to the global object (window in browser, global in Node.js), which has no userName or age properties, resulting in undefined.
// 3. Regular functions (like aboutWithClassicFunc) have 'this' dynamically set to the object they are called on (e.g., user1 or childObj).
// 4. If you need 'this' to refer to the object containing the method, use regular functions, not arrow functions.
// 5. Arrow functions are useful for callbacks or when you want to preserve the 'this' from an enclosing function, but not for object methods where 'this' should be the object.
// 6. Objects themselves do not create a new lexical scope for 'this'; only functions do.

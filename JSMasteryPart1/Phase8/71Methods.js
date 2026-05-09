// methods: functions that are stored as object properties called methods
// Asan Alfaz ma: functions inside objects are called methods

const person = {
  userName: "Alice Jhon",
  age: 30,
  about: function () {
    console.log(
      `Person Name is ${this.userName} and Person Age is ${this.age}`,
    );
  },
  about2: function() {
    console.log(this)
    // Yaha pr this keyword current execution context ko refer karta ha,
    // yani ke about2 method ke andar this keyword person object ko refer karega.
  }
};

person.about();
person.about2();

// What is (this) keyword in JavaScript?
// this keyword JavaScript ma ek special keyword ha jo current execution context ko refer karta ha.
// jis ka matlab ha ke this keyword jis object ke method ke andar use ho raha ha us object ko refer karta ha.


function userInfo() {
  console.log(
    `Person Name is ${this.userName} and Person Age is ${this.age}`,
  );
}

const person2 = {
  userName: "Ali Zafar",
  age: 25,
  about: userInfo,
};

const person3 = {
  userName: "Humayun Saeed",
  age: 35,
  about: userInfo,
};

person.about(); // Yaha pr about method person object ke andar call ho raha ha to this keyword person object ko refer karega.
person2.about(); // Yaha Pr about method person2 object ke andar call ho raha ha to this keyword person2 object ko refer karega.
person3.about(); // Yaha Pr about method person3 object ke andar call ho raha ha to this keyword person3 object ko refer karega.
userInfo() // Yaha pr userInfo function global context ma call ho raha ha to this keyword global object ko refer karega. Browser ma global object window hota ha to this keyword window object ko refer karega.
// New Keyword
function createUser(firstName, age) {
    this.firstName = firstName
    this.age = age
}

// const user1 = new createUser("Arslan", 20)

// Ab smajhte ha New Keyword kr kia rha ha
// 1- Ek Empty Object Create kr rha ha like this = {}
// 2- or us empty Object ko return bhi kr rha ha.
// 3- By Default Proto ke value creatUser function ka prototype ke equal set kr dega.

function createUser(userName, userAge, userEmail) {
  const user = Object.create(createUser.prototype);
  // yaha pr Object.create() user object ke proto ko set kr rha createUser
  // function ka prototype object ke sath jis ma humne methods define kiye hua ha.
  // Again Proto and Prototype both are diffrent
  // Proto: Just a refrence kiska jo bhi ap chain create kro ga uska
  // Prototype: Just an Object
  ((user.userName = userName),
    (user.userAge = userAge),
    (user.userEmail = userEmail));
  return user;
}

// Adding Methods into the Prototype of createUser function
createUser.prototype.about = function () {
  return `${this.userName} is ${this.userAge} years`;
};

createUser.prototype.isEligibleForVote = function () {
  return this.userAge >= 18;
};

const user1 = createUser("HM Arslan", 20, "imArslan7061@gmail.com");
const user2 = createUser("Javed Akhtar", 30, "imJaved1080@gmail.com");
console.log(user1);
console.log("Calling about Method For User1:", user1.about());
console.log("Calling about Method For User2:", user2.about());
console.log(
  "Calling isEligibleForVote Method For User1:",
  user1.isEligibleForVote(),
);

// Step Towards OOP
const userObj = {
  firsName: "HM",
  lastName: "Arslan",
  email: "imArslan7061@gmail.com",
  address: "House Number, Street Number, State, Pincode",
  age: 20,
  about() {
    return `${this.firsName} is ${this.age} years`;
  },
  is18() {
    return this.age >= 18;
  },
};

const userInfo = userObj.about();
const isUserEligibleForVote = userObj.is18();
console.log("User Info:", userInfo);
console.log("Eligible:", isUserEligibleForVote);

// So yeuserObj object theek kam krrha ha but abhi ye sirf static data de rha ha 1 user ke liye theek ha but kia ho agr meri requirments ma 100s of 1000s of users ka data collect krna ho to then us scenario ma i will create a function that function will perfrom following jobs.
// 1- That function get the data and create object
// 2- add key value pairs in object
// 3- object ko return krega so that i can use.

function createUser(userName, userAge, userEmail) {
  const user = {};
  ((user.userName = userName),
    (user.userAge = userAge),
    (user.userEmail = userEmail),
    (user.about = function () {
      return `${this.userName} is ${this.userAge} years`;
    }),
    (user.isEligibleForVote = function () {
      return this.userAge >= 18;
    }));

  return user;
}


const user1 = createUser("HM Arslan", 20, "imArslan7061@gmail.com")
const user2 = createUser("Javed Akhtar", 30, "imJaved1080@gmail.com")
console.log(user1.about())
console.log(user2.about())
console.log(user1.isEligibleForVote())
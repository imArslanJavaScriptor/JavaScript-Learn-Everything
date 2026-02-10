const userMethods = {
  about() {
    return `${this.userName} is ${this.userAge} years`;
  },
  isEligibleForVote() {
    return this.userAge >= 18;
  },
};


function createUser(userName, userAge, userEmail) {
  const user = Object.create(userMethods)
  user.userName = userName,
  user.userAge = userAge,
  user.userEmail = userEmail
  // Now Instead of Passing Reffrence of Object with Method This way ma createUser ke Prototype ma userMethodObject ko set kr skte ha so that jb createUser sa koi method ko access kia jaiga jo ke is object ma available nhi ha to JS createUser ka proto ma check krega or waha se usko method mil jaiga.
  // user.about = userMethods.about;
  // user.isEligibleForVote = userMethods.isEligibleForVote

  return user;
}


const user1 = createUser("HM Arslan", 20, "imArslan7061@gmail.com")
const user2 = createUser("Javed Akhtar", 30, "imJaved1080@gmail.com")
console.log(user1)
console.log("Calling about Method For User1:", user1.about())
console.log("Calling about Method For User2:", user2.about())
console.log("Calling isEligibleForVote Method For User1:", user1.isEligibleForVote())
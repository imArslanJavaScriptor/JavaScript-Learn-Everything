function createUser(userName, userAge, userEmail) {
  const user = {};
  ((user.userName = userName),
    (user.userAge = userAge),
    (user.userEmail = userEmail),
    //❌ Problem: abhi issue ye ha ke ma jitni martaba new user create krrha hu memory ma utni hi martaba new object create horha or utni hi martba ye methods memory ma store hore ha but socho ke agr mere pas million of users ha to memory ma ye methods miliion times new bnega which is very costly operation agr dekho to ye function ki defination to same hi ha so i need solution for this.
    // (user.about = function () {
    //   return `${this.userName} is ${this.userAge} years`;
    // }),
    // (user.isEligibleForVote = function () {
    //   return this.userAge >= 18;
    // })

    //✅ Solution: Ab Memory ke andr mera pass userMethods ka name se 1 object alg se stored ha ab me is object me mojood methods ke sirf refrence pass kr rha hu jis se memory ma hr bar new methods nhi bnega blke jb bhi ma ye methods call kru ga to wo is ke address ko point krega or method ko call krdega better approach.
    (user.about = userMethods.about));
  user.isEligibleForVote = userMethods.isEligibleForVote

  return user;
}

const userMethods = {
  about() {
    return `${this.userName} is ${this.userAge} years`;
  },
  isEligibleForVote() {
    return this.userAge >= 18;
  },
};

const user1 = createUser("HM Arslan", 20, "imArslan7061@gmail.com")
const user2 = createUser("Javed Akhtar", 30, "imJaved1080@gmail.com")
console.log(user1.about())
console.log(user2.about())
console.log(user1.isEligibleForVote())
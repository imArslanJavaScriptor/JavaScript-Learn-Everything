// Nested Destructuring
const users = [
    {userId: 1, userName:"Jhon", gender: "male"},
    {userId: 2, userName:"Wrick", gender: "male"},
    {userId: 3, userName:"Jason", gender: "male"}
]

// Regular Way
const  [user1, , user3] = users
console.log(user1)
console.log(user3)

// Nested Destructuring Example
const  [{userName: user1FirstName, gender: user1Gender}, , {gender}] = users
console.log("User 1 Name:", user1FirstName)
console.log("User 1 Gender:", user1Gender)
console.log("User 1 Gender:", gender)
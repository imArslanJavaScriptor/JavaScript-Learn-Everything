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

// Neted Destructuring Examples First array then inside the array destructuring each object.
const [{gender: userGender} , {userId}, {userName}] = users
console.log(userGender)
console.log(userId)
console.log(userName)



const newUsers = [
    {id: 1, uName: "Alex"},
    {id: 2, uName: "Jason"},
    {id: 3, uName: "Luis"},
    {id: 4, uName: "harmozi"},
    {id: 5, uName: "norma"}
]

const [{...all}, {...second}, ...restUsers] = newUsers
console.log(all)
console.log(second)
console.log(restUsers)
restUsers.forEach((user) => {
    console.log(user.uName)
})
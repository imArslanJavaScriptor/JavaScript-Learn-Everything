// Objects inside array
// Very usefull in real world applications.
const users = [
    {userId: 1, userName:"Jhon", gender: "male"},
    {userId: 2, userName:"Wrick", gender: "male"},
    {userId: 3, userName:"Jason", gender: "male"}
]

for(let user of users) {
    console.log("Name:", user.userName)
}

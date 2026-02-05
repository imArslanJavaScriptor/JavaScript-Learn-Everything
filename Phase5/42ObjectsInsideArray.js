// Objects inside array
// Vert usedfull in real world application
const users = [
    {userId: 1, userName:"Jhon", gender: "male"},
    {userId: 2, userName:"Wrick", gender: "male"},
    {userId: 3, userName:"Jason", gender: "male"}
]

for(let user of users) {
    console.log("Name:", user.userName)
}

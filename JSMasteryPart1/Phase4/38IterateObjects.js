// How to Iterate Objects
const person = {
    myName: "Arslan",
    myAge: 20,
    "my hobbies": ["Read", "Eat", "Code", "Sleep"]
}

// using for in loop
for(let key in person) {
    console.log("Keys From Person Object: ", key)
}

// using Object.keys / Object.values
console.log("Iterating Over Object Keys:", Object.keys(person))
console.log("Iterating Over Object Values:", Object.values(person))

// Using for of loop
for(let key of Object.keys(person)) {
    console.log(person[key])
}
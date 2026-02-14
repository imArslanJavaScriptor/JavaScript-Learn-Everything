// Function Execution Context
let foo = "foo"
console.log(foo)
function getFullName(firstName, lastName) {
    console.log(arguments)
    let myVariable = "Variable Inside Function"
    console.log(myVariable)
    const fullName = firstName + " " + lastName
    return fullName

}

const personName = getFullName("Waeem", "Akram")
console.log(personName)

// Start Lecture Again From: 1 Hour 14 Minutes
// JavaScript Mastery Part 2
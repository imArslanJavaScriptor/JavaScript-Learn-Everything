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

const personName = getFullName("Waeem", "Badami")
console.log(personName)
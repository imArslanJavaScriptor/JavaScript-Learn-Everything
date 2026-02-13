// Parameter Destructuring
const person = {
    personName: "Arslan",
    designation: "Founder"
}

// Without Destructuring
function printDetail(obj) {
    console.log(obj.personName)
    console.log(obj.designation)
}

printDetail(person)

// With Destructuring
function printDetail({personName, designation}) {
    console.log(personName)
    console.log(designation)
}

printDetail(person)
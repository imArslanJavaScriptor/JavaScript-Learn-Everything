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


const userInfo = {
    userName: "Hafiz Muhammad Arslan",
    age: 20,
    email: "arslan@imarslansaas.com"
}

function printUserInfo({userName, age, email}) {
    console.log(`${userName} is ${age} year's old Software Engineer for Contact email:${email}`)
}

printUserInfo(userInfo)
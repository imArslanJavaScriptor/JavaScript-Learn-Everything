// Objects

// Objects are also refrence type: It will also save in the memory like arrays all the refrence
// type will save exavtly the same way in the memory

// Arrays are good but not sufficient for real world data
// objects store key value pairs
// objects don't have index

// how to create objects
const person = {
    myName: "Arslan",
    myAge: 20,
    "my hobbies": ["Read", "Eat", "Code", "Sleep"]
}
console.log(person)

// IMP: In the Objects the properties key are by default belongs to string type 
// Proof
for(let key in person){
    console.log(typeof key)
}

// how to access data from objects
// Using Dot Notation
console.log(person.myName)
console.log(person.myAge)

// Using Bracket Notation
console.log(person["my hobbies"])


// how to add key value pair to objects
person.gender = "male"
person["designation"] = "Senior Software Engineer"
console.log(person)
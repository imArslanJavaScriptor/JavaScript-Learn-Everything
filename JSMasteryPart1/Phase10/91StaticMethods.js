// Static Methods & Properties
class Person{
    constructor(firstName, lastName, age, designation) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.designation = designation
    }


    // Abhi Ye Sabhi Methods Constroctor Object sa Related ha
    get aboutPerson() {
        return `${this.name} is ${this.age} Year's old ${this.designation}`
    }

    set setName(fullName) {
        const [firstName, lastName] = fullName.split(" ")
        this.firstName = firstName
        this.lastName = lastName
    }

    haveHabbits() {
        return true
    }

    isYoung() {
        return this.age <= 50 ? true : false
    }

    // But hum aesa Methods bhi Bna skte ha jo ke directly Class sa related ho

    // Static Method
    static callMethod() {
        return "This Method is Directly Usable with Class"
    } 

    // Static Property
    static desc = "This Class Person is used to Store Person Info"

}

const person1 = new Person("HM", "Arslan", 20, "Software Engineer")
console.log(person1.isYoung())

// Ab ye callMethod() sirf Person Class ke liye ha ap
// isa Construcotr Object Ke liye use nhi kr skta.
console.log(Person.callMethod())
// console.log(person1.callMethod()) // err: person1.callMethod is not a function
console.log(Person.desc)
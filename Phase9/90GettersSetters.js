// Getters & Setters
class Person{
    constructor(firstName, lastName, age, designation) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.designation = designation
    }

    get aboutPerson() {
        return `${this.name} is ${this.age} Year's old ${this.designation}`
    }

    // setName(firstName) {
    //     this.firstName = firstName
    //     this.lastName = lastName
    // }

    set setName(fullName) {
        const [firstName, lastName] = fullName.split(" ") // space ki base pr split kr na ke liye
        this.firstName = firstName
        this.lastName = lastName
    }


}

const person1 = new Person("HM", "Arslan", 20, "Software Engineer")

// functions/method ko hum parenthesis () lga kr call krta ha.
// or normal properties ko hum aesa hi get krta ha.
// console.log(person1.aboutPerson())

// But get ka cuse kr ke ma method ko as a property treet kr skta hu
console.log(person1.aboutPerson) 

// Ma Ab name change krna chatahu to ma in ma sa koi method use kr 
// person1.setName("HMArslan")
// console.log(person1)

// Aesa Bhi Change ho jai ga
// person1.name =  "imKing"
// console.log(person1)

// Now Using Setter Method
person1.setName = "Tauqeer Haider"
console.log(person1)
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    info() {
        let PersonInfo =`Hi My Name is ${this.firstName} ${this.lastName} and i'm ${this.age} year's old.`
        return PersonInfo
    }
}

export {Person}
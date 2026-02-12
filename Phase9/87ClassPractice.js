// Class Practice
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        return `${this.name} is eating`
    }

    isCute() {
        return true
    }
}

const kitty = new Animal("Kitty", 2)
console.log(kitty.isCute())

// Ab Mujhe Same Prperties ko use kr ke 1 new Class banai ha to uske liyue mujhe is trha code repeat krne ki zarorat nhi.

// class Cat {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     eat() {
//         return `${this.name} is eating`
//     }

//     isCute() {
//         return true
//     }
// }

// const mano = new Cat("mano", 4)
// console.log(mano.isCute())


// To Ma Use Karo Inheritance ka or Animal Claass sa wo sab jo mujhe Dog class ma chaiye borrow kr lo ga.
// Using extands keyword ab mere pass Animal class ka sare methods and constroctor object avaialve ha
// Yaha Correct term uase hogi Hum na Animal class ki sub class Dog
// class bna li Parent class ko extend kr ke.
// Yah pr bhi same apply hota ha agr Javascript ko koi method ya property Dog callss ma nhi mile gi to wo Parent class Animal ma ja kr check krega.
class Dog extends Animal{}

let tommy = new Dog('tommy', 2)
console.log(tommy)
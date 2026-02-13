// Analyzing Constructor Methods Behind Data Types
let numbers = [1,2,3,4,5]
// numbers. 
// Jaise Hi Mane numbers. likha mujhe bohot sare methods milna shru ho gai to ab question ye ha ka itne sare mthods aye kaha sa so Answer is huma ye sare methods mil rha ha Prototype sa

// But hum na pehle prha tha ke Prototype to sirf functions ke liye kam krta ha but ye to arrays ha numbers ka to is ke proto mo protoype ke through methods kaise a gai?

// Answer
// let numbers = [1,2,3,4,5] Pehle Samjhte hain Behind The Scene Ye Array kaise bnta ha?
// BTS ye kuch aesa bnta ha let numbers = new Array([1,2,3,4,5])
// Deha Apne ye BHS Array Constructor Ka use kr rha ha Array ko bnane ke liye with new keyword
// console.log(Array.prototype) Ye Krne se Mujhe sare Method Mil Jai ga Jo Array ke Prototype ma set ha.
// console.log(Object.getPrototypeOf(numbers)) 
// Ye Bhi Mujhe sare Method send krde
// ga Jo Array ke Prototype ma set ha

function hello() {
    console.log("Hello")
}

// Wase Prototype Object hota ha but Array ka prototype actually ma Array hi ha
console.log(Array.isArray(Array.prototype))

// But hum Protoype Change Bhi Kr Skte Hain Like in the Below Example


// Prototype
console.log(hello.prototype)
// Changin Prototype Object To Array
hello.prototype = []
console.log(hello.prototype)
// Ab hello ka prototype Array set hogiua ha and
// isko ma ab Array ki trha Treat Kr Skta hu.
hello.prototype.push("Ars")
console.log(hello.prototype)
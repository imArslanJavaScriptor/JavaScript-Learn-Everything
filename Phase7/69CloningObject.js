// Clone using Object.assign

const obj = {
    key1: "Value 1",
    key2: "Value 2",
}

// const obj2 = obj
// console.log(obj === obj2) // Output: True BCZ both obj and o bj pointing the same object in the heap memory

// So we have the solution for this called spread Operator for cloning
// const obj2 = {...obj} 

obj.key3 = "Value 3"
// console.log(obj)
// console.log(obj2)
// console.log(obj === obj2) // False: BCZ Now we have tow diffrent objects in the Memory with Diffrent Pointers in the Stack
// const obj2 = {...obj} But this spreat method is comparetvely new so in the old codebases we may find the Object.assign method

// In the Legacy / old code bases we may find this Object.assing
const obj2 = Object.assign({}, obj)

obj.key4 = "Value 4"

console.log(obj)
console.log(obj2)
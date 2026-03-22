// Computed Properties
const key1 = "userName";
const key2 = "userAge";

const val1 = "Arslan";
const val2 = 20;

// Method 1:
const personObject = {
  [key1]: val1,
  [key2]: val2 
}

// Method: 2
const obj = {}
obj[key1] = val1
obj[key2] = val2

// Both Contains Computed Properties as key/value pairs
console.log(obj) 
console.log(personObject)


let userName = "Muhammad Arslan"
let userAge = 20
let userEmail = "imarslan7061@gmail.com"

let userObjKey1 = "userName"

const userObj = {
  userName,
  userAge,
  userEmail
}

const userObj2 = {
  [userObjKey1] : userName
}
console.log(userObj2)
// Intro To Proto

const obj1 = {
    key1: "Value 1",
    key2: "Value 2",
}

// What i want? me chata hu ke ma obj2 ma sa key1 ko access kro and JS automaticaly check kre agr use obj2 ma key1 na mile to wo khud jai obj1 ka pass or result la kr dai 

const obj2 = Object.create(obj1) // Ye empty Object and Prototype chain create kr dega. 
console.log(obj2.__proto__)
// Object.create krega ye ke wo 1 new Empty Object create krega or mane parentheses ke andr obj1 pass kia jis ka matblm obj2 ke proto ma set kr dega obj1 ko jiski help se mujhe desired output mil jai ga or obj2 ko agr koi property na mili to wo apne proto yani obj1 ma check krega or waha agr mil gi to use proivde kr dega.

// in Offical Ecmascrpt documentation 
// currently hum na bat ki __proto__ le bare ma jise documentation me kuch is tra [[prototype]] represented kia ha 
// to browser ma [[prototype]] aese bhi likha hoskta ha or aesa bhi __proto__
// JavaScript ma 1 or prototype property alg sa bhi hoti ha which will be discuss in latter files.
console.log(obj1 === obj2) // False BCZ both are diffrent.

obj2.key4 = "Value 4"
console.log(obj2.key1) // Output: Value 1 JS will check in the prototype of obj1 and grab Value 1 from there.
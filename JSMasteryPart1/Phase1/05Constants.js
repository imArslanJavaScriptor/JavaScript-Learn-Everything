// declaring constants
const PI = 3.14;
const GRAVITY = 9.8;
// Ok So Previously we learn about var & let keywords and we know that
// we can redeclare and reassing the values with var keyword
// then in let keyword redeclaration is now allowed however we can reassing the value.
// Now it comes to const keyword here we're not allowed to either redeclare or reassign the values 
// But we can definately perform operations with the existing values stored in const keyword
console.log("Value of PI:", PI*10+20);


// Revision Practice
const numberOfDayPerWeek = 7
// numberOfDayPerWeek = 10 // TypeError: Assignment to constant variable.
console.log(numberOfDayPerWeek)

const secondsInOneMinute = 60

// secondsInOneMinute  = 600  TypeError: Assignment to constant variable.
// Now it's pretty obvious that num of sec per min is 60 so why we try to change with 600.
console.log(secondsInOneMinute)
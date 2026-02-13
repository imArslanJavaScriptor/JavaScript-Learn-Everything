// intro to got loop
for (let i=0; i<=9; i++) {
    console.log("Value of i is: " + i);
}

let i = "outerI" // let is not accessible out side of it's block
console.log(i)


// For Interview Prespective 

let val=11 // We can also declare the variable outside of the for loop and it works
for( ; val <= 50; val ++) { // becuase here we proivde 3 things after for keywprd in parenthesis 
    // 1- inital val
    // 2- condition 
    // 3- processing with value
    console.log(val, "Printing")
}
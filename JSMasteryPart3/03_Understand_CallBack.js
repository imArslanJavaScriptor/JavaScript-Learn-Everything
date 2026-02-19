// Understand CallBack
function myFunc(callBack) {
    console.log("Function is Doing Task 1")
    callBack()
}


function myFunc2() {
    console.log("Function is Doing Task 2")
}

myFunc(myFunc2)


// function getTwoNumbersAndAdd(num1, num2, callBack) {
//     if(typeof num1 === "number"  && typeof num2 === "number" ){
//         console.log(num1, num2)
//         callBack(num1, num2)
//     } else {
//     }
// }

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

// getTwoNumbersAndAdd(10, 20, addTwoNumbers)

function getTwoNumbersAndAdd(num1, num2, onSuccess, onFailure) {
    if(typeof num1 === "number"  && typeof num2 === "number" ){
        onSuccess(num1, num2)
    } else {
        onFailure()
    }
}

function success(num1, num2) {
    console.log(num1 + num2)
}

function failure() {
    console.log("Please Provide Valid Arguments")
    
}

getTwoNumbersAndAdd(340, 160, function(num1, num2) {
    console.log(num1 + num2)
},
() => {
    console.log("Make Sure You're Provide Arguments as Numbers")
})


getTwoNumbersAndAdd(450, 160, success, failure)
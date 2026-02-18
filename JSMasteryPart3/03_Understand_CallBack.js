// Understand CallBack
function myFunc(callBack) {
    console.log("Function is Doing Task 1")
    callBack()
}


function myFunc2() {
    console.log("Function is Doing Task 2")
}

myFunc(myFunc2)
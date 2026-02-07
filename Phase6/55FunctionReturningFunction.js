// Function Returning Function

function myFunc() {
    return "A"
} // a function can be return anything

const result = myFunc() // myFunc ne jo return kia wo mane result valirable ma store kr lya
console.log(result) // Output: A

// Isi trha ab function se fujnction return kr ke dekhte ha
function myFunc2() {
    function greeting() {
        console.log("Good Morning Sir")
    }
    return greeting
}

const greetingMessage=  myFunc2()
greetingMessage()

// Start From Duration 6 Hours: 16 Minutes
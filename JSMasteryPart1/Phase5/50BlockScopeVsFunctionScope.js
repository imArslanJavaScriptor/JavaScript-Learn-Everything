// block scope vs function scope

// let and const are block scope
// var is function scope


// Ye {} Curly Brackets ka use kr ke hum block create krta ha or hum kisi block ma let ya const ka use krta ha kuch bhi create krne ka liye variable, function, object etc to usko ap outside the {} use nhi kr skte.  


// Example:

// {
// let firstName  = "HM"
// }
// console.log(firstName) // Output: ReferenceError: firstName is not defined
// Reason: In this example Block ke andr firstName ka variable available tha but hum usko 
// get krne ki try kr rhe ha outside the Block is liye BCZ let and const are Block scoped and wo apny 
// block sa bahir available nhi hot to is case ma hume ye err: ReferenceError: firstName is not defined mil rha ha.



// Block 2
// {
//     let name1 = "Gold"
//     let name2 = "Smith"
//     return name2
// }

// console.log(name2)


// Bilkul, short aur precise notes ye rahe. Is code mein basically *do bade masle (issues)* hain jiski wajah se ye behave nahi kar raha:

// ---

// ### 📝 Logic Breakdown (Hinglish Notes)

// #### 1. Illegal `return` Statement (Sabse bada error)

// Sabse pehle, JavaScript mein `return` sirf aur sirf ek *Function* ke andar kaam karta hai.

// * Aapne `{}` use kiya hai jo sirf ek *Simple Block* hai, function nahi.
// * Is wajah se browser ya Node.js isko dekhte hi crash ho jayega aur bolega: `SyntaxError: Illegal return statement`.
// * Jab syntax error aata hai, toh code aage chalta hi nahi, isliye `console.log` tak baat pahunchti hi nahi.

// #### 2. Block Scope Boundary

// Agar hum `return` ko hata bhi dein, tab bhi `console.log(name2)` kaam nahi karega.

// * `let` aur `const` *Block Scoped* hote hain.
// * Inka janam aur maut dono un `{}` brackets ke andar hi hoti hai.
// * Brackets ke bahar `name2` ka koi wajood (existence) nahi hai.

// ---

// ### 🚀 Summary Table

// | Code Element | Status | Reason |
// | --- | --- | --- |
// | *`return`* | ❌ *Error* | Sirf functions mein use ho sakta hai, plain blocks `{}` mein nahi. |
// | *`let name2`* | 🔒 *Private* | Ye sirf block ke andar accessible hai. |
// | *`console.log`* | 🚫 *Unreachable* | Syntax error ki wajah se code yahan tak pohonchega hi nahi. |

// ---

// ### ✅ Correct Way (Agar value bahar chahiye)

// Agar aapko block ke andar ki value bahar chahiye, toh variable ko bahar declare karna padega:

// let name2; // Bahar declare kiya

// {
//     let name1 = "Gold";
//     name2 = "Smith"; // Bahar wale variable ko update kiya
// }

// console.log(name2); // Output: Smith (Ab error nahi aayega!)


// This is Allowed BCZ Both Varialbes are in their completely diffrent Scopes
// {
//     let myName = "Arslan"
//     console.log(myName)
// }

// {
//     let myName = "HM-Arslan"
//     console.log(myName)
// }

// const myName = "Hafiz Muhammad Arslan"
// console.log(myName)


// Let see what happen when we use var
// Run and TRY to understand it.
// {
//     var city = "Lahore"
//     console.log(city)
// }


// {
//     var city = "Karachi"
//     console.log(city)
// }
// console.log(city)

// Var is Function scoped means it will be accessable from everywhere in the function
function myApp() {
    if(true) {
        var myName = "Arslan"
        console.log(myName)
    }
    console.log(myName)
}
// console.log(myName)

myApp()


for(var i = 0; i< 10; i++) {
    console.log(i)
}
console.log("Accessing i outside the loop:", i) // Output: 10 Becuase it i is created with var keyword

for(let i = 0; i< 10; i++) {
    console.log(i)
}
console.log("Accessing i outside the loop:", i) // Output: ReferenceError: i is not defined Becasue let is not available outside of it's block


// {
//     {
//         {
//             {
//                 var keyWord = "Nested Keyword"
//             }
//         }
//     }
//     console.log(keyWord)
// }

// console.log(keyWord) // Here im getting this even the variables using var is declared depply nested but 
// if we use var in function then we will not able to access it outside the function that's why var is function scoped
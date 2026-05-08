// callback functions

function checkNumbers(callBack) {
  callBack();
}

function Add2Num(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}

// checkNumbers(Add2Num(10, 20)) // It gives undefined because Add2Num is called immediately
checkNumbers( () => Add2Num(10, 20)); // It works BCZ we are using arrow function to pass the function reference

// Use this if you want to pass the callBack function with arguments direclty
function acceptAndCallFunction(callBack) {
  return (() => callBack)
}
acceptAndCallFunction(Add2Num(20, 90))


function myFunMain() {
    console.log("Inside my func main")
}

myFunMain()

// Notes
// 🚀 JavaScript Callbacks: Reference vs Execution
// JavaScript mein ye sabse common mistake hai. Iska simple logic neeche diya gaya hai:

// 1. Function Reference (Sirf Naam)
// Jab hum function ke naam ke aage `()` *nahi* lagate, toh hum function ko execute (run) nahi kar rahe hote. Hum sirf uska 
// "pata" (address) de rahe hote hain.

// * Syntax: `checkNumbers(Add2Num)`
// * In Hinglish: "Bhai, ye lo `Add2Num` function ki recipe, jab zaroorat pade tab chala lena."


// 2. Function Execution (Parentheses ke saath)

// Jab hum function ke aage `()` laga dete hain, toh JavaScript use *turant (immediately)* chala deta hai.

// * Syntax: `checkNumbers(Add2Num(10, 20))`
// * The Issue: Yahan `Add2Num` pehle hi chal gaya aur usne `30` print kar diya. Lekin `checkNumbers` ko callback ki jagah kya mila? Kuch nahi (`undefined`). Jab `checkNumbers` ne us `undefined` ko run karne ki koshish ki, toh error aa gaya.


// 💡 Kyun (Why) aur Kaise (How) kaam karta hai?

// | Concept | Example | Real-life Example |
// | Reference | `myFunc` | Aapne dost ko TV ka *Remote* diya (Ab wo kabhi bhi chala sakta hai). |
// | Execution | `myFunc()` | Aapne khud *Button daba diya* (TV turant chal gaya). |

// Solution (Agar arguments pass karne hon):
// Agar aapko callback mein parameters bhejne hain bina function ko turant chalaye, toh *Arrow Function* ka use karein:
// `checkNumbers(() => Add2Num(10, 20));`
// (Yahan humne ek wrapper bana diya jo `Add2Num` ko tabhi chalayega jab `checkNumbers` use call karega.)

// ✅ Summary Rule:

// * Callback as Reference: Pass the function name without `()`.
// * Callback with Args: Wrap it in an anonymous function `() => myFunction(arg)`.
// Closures

// Example 1
// function outerFunction() {
//   function innerFunction() {
//     console.log("Hello World From Inner Function")
//   }
//   return innerFunction
// }
// const ans = outerFunction()
// ans()

// IMP: Concepts
// According to Closures Concept 1 retured function apne sath apne parent function ka local varialbes ko sath lekr return hota ha becuase us returned function kop usa use krna pr skta ha.
// Closures: Jb function kisi aur function se return hota ha to apne sath apne local function ka varailbes ko sath lekr return hota ha.

// Example 2
function printFullName(firstName, lastName) {
  function printName() {
    console.log(firstName, lastName)
  }
  return printName

}

const ans = printFullName("im", "Arslan")
ans()

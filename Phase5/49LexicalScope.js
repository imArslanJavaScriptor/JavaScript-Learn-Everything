// // Lexical Scope

let requiredVal = "Presented in Global Scope";

function myApp() {
  let requiredVal = "Presented inside myApp function";

  function myFunc() {
    let requiredVal = "Presented inside myFunc function";

    let myFunc2 = () => {
      let requiredVal = "Presented inside myFunc2 function";

      console.log(requiredVal);
    };

    myFunc2();
  }

  myFunc();
  console.log(requiredVal);
}
myApp();

// My Witten Version
// Ab Yah pr samjho ho kia rha ha
// hamare pass main function ha called myApp
// then uske andr ha myFunc
// then uska andr ha myFunc2
// ab agr ma requiredVal jo ke bophot sari placves pr mojooj ha un ma sa
// jo myFunc2 ka pas ha usko comment krdo to myFunc2 apne Lexical scope ma check krega or uska Lexical Scope ha jaha myFunc2 available ha
// to myFunc2 available ha inside myFunc to ab myFunc2 requiredVal ki value uthaiga myFunc ma sa isi triqe sa agr ma isko bhi
// remove / comment kr do jo myFunc ma ha to ab  uske Lexical scope ma dekhega meaning 1 step futher whih is myApp
// to is process ko kethe lexical scoping / Lexical Channing

// Refined Version
// Aapka concept bilkul sahi tha, bas usko thoda professional
// terms ke saath refine kar lete hain taaki interview ya exams mein aapko aasani ho.

// IMP: Lexical Scope & Scope Chain (Refined Notes)

// 1. Lexical Scope (The Rule)
// Lexical scope ka matlab hai ki kisi bhi function ki "boundary" kahan tak hai, yeh tabhi decide ho jata hai jab aap code *likhte* (define karte) ho.
// Agar `myFunc2` ko `myFunc` ke andar likha gaya hai, toh uska lexical parent hamesha `myFunc` hi rahega.

// 2. Scope Chain (The Process)
// Jab JavaScript ko koi variable apne current scope mein nahi milta, toh wo apne *Outer Environment* (parent scope) mein check karta hai.
// Is "searching" ke process ko hum *Scope Chain* kehte hain.

//  Step-by-Step Logic OF The Above Code:
// Agar hum `myFunc2` ke andar se `requiredVal` ko comment kar dein:

// 1. *Check Local Scope:* JavaScript `myFunc2` ke andar dekhega. Variable nahi mila?
// 2. *Move Up (Scope Chain):* Ab wo `myFunc` (Lexical Parent) mein jayega. Wahan mil gaya toh use kar lega.
// 3. *Keep Moving:* Agar `myFunc` mein bhi na hota, toh wo `myApp` mein jata, aur phir *Global Scope* mein.
// 4. *The Dead End:* Agar Global mein bhi nahi milta, toh JavaScript `ReferenceError` de dega.

// Important Rule: Scope chain hamesha *Inside to Outside* chalti hai. `myApp` kabhi bhi `myFunc` ke andar ka variable nahi utha sakta.

// 3. Closure (Bonus Concept)

// Lexical scope ki wajah se hi *Closures* bante hain. Jab ek function apne outer scope ke variables ko "yaad" rakhta hai, bhale hi wo outer function execute hokar khatam ho chuka ho, use Closure kehte hain.

// Example:

function outer() {
  let count = 0;
  return function inner() {
    count++; // inner function 'count' ko yaad rakhta hai because of Lexical Scope
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2

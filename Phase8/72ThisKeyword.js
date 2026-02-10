// More About This keyword in JavaScript
function myFunc() {
    "use strict"
    console.log(this);
    // this keyowrd represet the current execution context to ye function abhi global context ma call ho raha ha to 
    // this keyword global object ko refer karega. Browser ma global object window hota ha to this keyword window object ko refer karega.
    // But this will create problem for us that's why developers use strict mode in JavaScript to avoid this problem. Strict mode ma this
    // keyword undefined ko refer karega agar function global context ma call ho raha ha.
}

window.myFunc(); //Yaha pr myFunc function window object ke andar call ho raha ha to this keyword window object ko refer karega.
// Waht is window object in JavaScript?
// window object JavaScript ma ek global object ha jo browser ma available hota ha. Ye object browser ke window ko represent karta ha. Iske andar bahut sare properties aur methods hote ha jo browser ke window se related hote ha. For example: alert(), prompt(), confirm() etc. Ye methods window object ke andar defined hote ha aur hum inhe directly call kar sakte ha ya phir window object ke through call kar sakte ha.

// Note: Strict mode JavaScript ma ek special mode ha jo developers ko kuch extra features provide karta ha aur kuch errors ko avoid karne me help karta ha. Strict mode ma this keyword undefined ko refer karega agar function global context ma call ho raha ha. Isse hum apne code me accidental global variable creation se bach sakte ha aur apne code ko thoda sa secure bana sakte ha. Strict mode ko enable karne ke liye hum function ke andar "use strict" likhte ha.

// Waht is the diffrence  we see in broswer or node enviroemnt when dealing with this keyword?
// Browser ma this keyword global object ko refer karega jo ke window hota ha. Node environment ma this keyword global object ko refer karega jo ke global hota ha. Iska matlab ha ke browser ma this keyword window object ko refer karega aur node environment ma this keyword global object ko refer karega. Isliye jab hum this keyword ka use karte ha to hume ye dhyan me rakhna chahiye ke hum kis environment me code likh rahe ha.

// Why i see error when i use window.myFunc() in node.js environment?
// Node.js environment ma window object available nahi hota ha isliye jab hum window.myFunc() likhte ha to error aata ha. Node.js environment ma global object available hota ha jise hum global ke through access kar sakte ha. Isliye agar hum node.js environment me myFunc function ko call karna chahte ha to hume global.myFunc() likhna hoga.
// Call Apply Bind Method in JavaScript

// const user1 = {
//     userName: "Alice Jhon",
//     age: 30,
//     about: function (hobby, favMusician) {
//         console.log(
//             `User Name: ${this.userName} and Age: ${this.age} ${hobby} ${favMusician}`,
//         );
//     }
// }

// const user2 = {
//     userName: "Ali Zafar",
//     age: 25,
// }

// Mane 2 Objects bnai ha ab ma chatua ha ke ma user2 object ke liye about method ko call kru but ma usko copy nhi kruga or dubara nhi likhuga to kaise kruga
// to is ke ke liye ma call method ka use krug kuch aise user1.about.call(user2) ab yaha pr ma user1 ka about method call kr rha ha hu but use ke age ma .call() use kr rha hu jisme mane user2 object pass krdia ha is call method kya krega call about method ko btai ga this keyworrd ko user2 objec ko refre krna ha.

// user1.about.call(user2) // Output: User Name: Ali Zafar and Age: 25
// user1.about.call() // Output: User Name: undefined and Age: undefined
// Yaha pr ma call method ke andar kuch bhi pass nhi kr rha hu to this keyword undefined ko refer karega isliye output me undefined aayega. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Hello", "World") to about method ke andar "Hello" aur "World" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Hello", "World") to about method ke andar "Hello" aur "World" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Hello", "World") to about method ke andar "Hello" aur "World" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Hello", "World") to about method ke andar "Hello" aur "World" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Hello", "World") to about method ke andar "Hello" aur "World" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Hello", "World") to about method ke andar "Hello" aur "World" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Hello", "World") to about method ke andar "Hello" aur "World" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Hello", "World") to about method ke andar "Hello" aur "World" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Hello", "World") to about method ke andar "Hello" aur "World" as a parameter pass ho jayenge.

// IMP Rule: jb bhi call() ko use kro make sure ke usko btao ke kisko call krna ha wrna this ke value undefined
// rhe gi till ke ap usko refrence provde na kro for example .call(user2)

// user1.about.call(user2, "Coding", "Ali Zafar") // Output: User Name: Ali Zafar and Age: 25 Coding Ali Zafar
// call method kr anr ap extra arguments bhi pass kr skte ha jo ke about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Coding", "Ali Zafar") to about method ke andar "Coding" aur "Ali Zafar" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Coding", "Ali Zafar") to about method ke andar "Coding" aur "Ali Zafar" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Coding", "Ali Zafar") to about method ke andar "Coding" aur "Ali Zafar" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Coding", "Ali Zafar") to about method ke andar "Coding" aur "Ali Zafar" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Coding", "Ali Zafar") to about method ke andar "Coding" aur "Ali Zafar" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Coding", "Ali Zafar") to about method ke andar "Coding" aur "Ali Zafar" as a parameter pass ho jayenge. Call method ke andar hum jitne bhi arguments pass kr sakte ha wo about method ke andar as a parameter pass ho jayenge. For example: user1.about.call(user2, "Coding", "Ali Zafar") to about method ke andar "Coding" aur "Ali Zafar" as a parameter pass ho jayenge.

function about(hobby, favMusician) {
  console.log(
    `Name:${this.userName} Age: ${this.age} Hobby: ${hobby} Favorite Musician: ${favMusician}`,
  );
}

const user1 = {
  userName: "Bilal Ahmad",
  age: 30,
};

const user2 = {
  userName: "Saim Ali",
  age: 25,
};

about.call(user1, "Coding", "Ali Zafar"); // Output: Name:Bilal Ahmad Age: 30 Hobby: Coding Favorite Musician: Ali Zafar
about.call(user2, "Coding", "Atif Aslam"); // Output: Name:Saim Ali Age: 25 Hobby: Coding Favorite Musician: Atif Aslam

// apply Method in JavaScript
// apply bhi call ki trha hi hota ha just diffrence ye ha ke call method ma arguments ko alg , alg comma seprated pass kr rha tha but apply le case ma just single array pass krduga with all the arguments
// Like:
about.apply(user1, ["Teaching", "Rahat"]); // Output: Name:Bilal Ahmad Age: 30 Hobby: Teaching Favorite Musician: Rahat
about.apply(user2, ["Sports", "Nusrat Sahb"]); // Output: Name:Saim Ali Age: 25 Hobby: Sports Favorite Musician: Nusrat Sahb

// bind Method in JavaScript
// bind is very simple just diffrence ye ha ke call aur apply method ma function ko call krte ha but bind method ma function ko call nhi krte ha bas usko reference provide krte ha aur ek naya function return krta ha jisme this keyword bind ho jata ha us object se jisko humne bind kiya hota ha.
// For example:
const newFunc = about.bind(user1);
// to about function ka ek naya version create hoga jisme this keyword user1 object ko refer karega.
// Ab jab bhi hum newFunc ko call karenge to this keyword user1 object ko refer karega.
// For example:
newFunc("Coding", "Ali Zafar"); // to output me Name:Bilal Ahmad Age: 30 Hobby: Coding Favorite Musician: Ali Zafar aayega.


let newFunc2 = about.bind(user2, "Book Reading", "Attaullah Khan Esa Khelvi Sahb"); 
// Output: Name:Saim Ali Age: 25 Hobby: Book Reading Favorite Musician: Attaullah Khan Esa Khelvi Sahb
newFunc2()
// Avoid These Mistakes

const user1 = {
    userName: "Bilal Ahmad",
    age: 30,
    about: function (hobby, favMusician) {
        console.log(
            `User Name: ${this.userName} and Age: ${this.age} ${hobby} ${favMusician}`,
        );
    }
}

// don't do this mistake

// const myFunc = user1.about;
// myFunc() // Output: User Name: undefined and Age: undefined
// Yaha pr ma about method ko ek variable ma store kr rha hu aur us variable ko call kr rha hu to this keyword undefined ko refer karega isliye output me undefined aayega. Isliye jab bhi hum kisi method ko kisi variable me store karte ha to us variable ko call karne se pehle usko bind karna chahiye us object se jiska method hai. For example: const myFunc = user1.about.bind(user1) to myFunc function ka ek naya version create hoga jisme this keyword user1 object ko refer karega. Ab jab bhi hum myFunc ko call karenge to this keyword user1 object ko refer karega. For example: myFunc() to output me User Name: Bilal Ahmad and Age: 30 aayega.

// Solution use bind method to bind the function with the object
const myFunc2 = user1.about.bind(user1, "Coding", "Ali Zafar");
myFunc2() // Output: User Name: Bilal Ahmad and Age: 30 Coding Ali Zafar
// Yaha pr ma about method ko bind kar rha hu user1 object se aur uske sath extra arguments bhi pass kr rha hu jo ke about method ke andar as a parameter pass ho jayenge. For example: const myFunc2 = user1.about.bind(user1, "Coding", "Ali Zafar") to about method ke andar "Coding" aur "Ali Zafar" as a parameter pass ho jayenge. Ab jab bhi hum myFunc2 ko call karenge to this keyword user1 object ko refer karega aur about method ke andar "Coding" aur "Ali Zafar" as a parameter pass ho jayenge. For example: myFunc2() to output me User Name: Bilal Ahmad and Age: 30 Coding Ali Zafar aayega.
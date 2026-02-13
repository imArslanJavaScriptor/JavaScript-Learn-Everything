// Short Syntax
const user1 = {
  userName: "Bilal Ahmad",
  age: 30,
  // Yu Key value pair and then function keyword likhne ki bjay hum exampleFunc2 jaise bhi method likh skte ha.
  userIntro: function (hobby, favMusician) {
    console.log(
      `User Name: ${this.userName} and Age: ${this.age} Hobby: ${hobby}  Favourite Musician: ${favMusician}`,
    );
  },
  // Ye ha Short Syntax method ko likhne ka aur ye perfectly kam krega.   
  exampleFunc2(){
    console.log(this) // Represent user1 Object
    console.log(this.userName, this.age)
  }  
};

user1.exampleFunc2() // Works Perfeclty fine like normal function works
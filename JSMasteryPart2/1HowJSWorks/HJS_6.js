// Lexical Enviroment & Scope Chain
const lastName = "Arslan";

const printName = function () {
  const firstName = "im";
  console.log(firstName);
  console.log(lastName);

  function myFunction() {
    console.log("My Function");
  }
  myFunction();
};
printName();

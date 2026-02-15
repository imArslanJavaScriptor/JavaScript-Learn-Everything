// Static list vs live list

// querySelectorAll hamain Static List degi
// getElementsBySometinhg can TageName, ClassList etc humain Live List Degi.
const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);

// JS Mastery Lecture 2 Start Lecture From 6 Hours.
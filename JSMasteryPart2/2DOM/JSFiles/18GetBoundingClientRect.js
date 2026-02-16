// how to get the dimension of element
// height width 
const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect().bottom;
// const info = sectionTodo.getBoundingClientRect().height;
// const info = sectionTodo.getBoundingClientRect().left;
const info = sectionTodo.getBoundingClientRect().right;
console.log(info);


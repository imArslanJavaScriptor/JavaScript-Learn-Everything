// Promisifying CallBacks

let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let heading3 = document.querySelector(".heading3");
let heading4 = document.querySelector(".heading4");
let heading5 = document.querySelector(".heading5");
let heading6 = document.querySelector(".heading6");
let heading7 = document.querySelector(".heading7");

function changeElement(elem, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (elem) {
        elem.textContent = text;
        elem.style.color = color;
        resolve("Success");
      } else {
        reject();
      }
    }, time);
  });
}

changeElement(heading1, "Heading 1", "blue", 1000)
  .then(() => changeElement(heading2, "Heading 2", "purple", 1000))
  .then(() => changeElement(heading3, "Heading 3", "teal", 1000))
  .then(() => changeElement(heading4, "Heading 4", "red", 1000))
  .then(() => changeElement(heading5, "Heading 5", "orange", 1000))
  .then(() => changeElement(heading6, "Heading 6", "green", 1000))
  .then(() => changeElement(heading7, "Heading 7", "violet", 1000))
  .catch((err) => alert(err))

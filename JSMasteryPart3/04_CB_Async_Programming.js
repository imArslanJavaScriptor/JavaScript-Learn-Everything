// callBacks, callback hell, pyramid of doom
// Asynchronous Programming

let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let heading3 = document.querySelector(".heading3");
let heading4 = document.querySelector(".heading4");
let heading5 = document.querySelector(".heading5");
let heading6 = document.querySelector(".heading6");
let heading7 = document.querySelector(".heading7");

// CallBack Hell
// setTimeout(() => {
//   heading1.textContent = "Heading 1";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "purple";
//     setTimeout(() => {
//       heading3.textContent = "Heading 3";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "Heading 4";
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "Heading 5";
//           heading5.style.color = "orange";
//           setTimeout(() => {
//             heading6.textContent = "Heading 6";
//             heading6.style.color = "royalblue";
//             setTimeout(() => {
//               heading7.textContent = "Heading 7";
//               heading7.style.color = "green";
//             }, 7000);
//           }, 6000);
//         }, 5000);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

function changeElement(elem, text, color, time, onSuccessCallBack) {
  setTimeout(() => {
    if (elem) {
      elem.textContent = text;
      elem.style.color = color;
      if (onSuccessCallBack) {
        onSuccessCallBack();
      }
    } else {
      console.log("Elem Not Found");
    }
  }, time);
}

// Pyramid of Doom
changeElement(heading1, "One", "green", 1000, () => {
    changeElement(heading2, "Two", "red", 1000, () => {
        changeElement(heading3, "Three", "blue", 1000, () => {
            changeElement(heading4, "Four", "violet", 1000, () => {
                changeElement(heading5, "Five", "darkblue", 1000, () => {
                    changeElement(heading6, "Six", "orange", 1000, () => {
                        changeElement(heading7, "Seven", "purple", 1000, () => {
                        }, () => {console.log("Err For Heading 7")})
                    }, () => {console.log("Err For Heading 6")})
                }, () => {console.log("Err For Heading 5")})
            }, () => {console.log("Err For Heading 4")})
        }, () => {console.log("Err For Heading 3")})
    }, () => {console.log("Err For Heading 2")})
}, () => {console.log("Err For Heading 1")})
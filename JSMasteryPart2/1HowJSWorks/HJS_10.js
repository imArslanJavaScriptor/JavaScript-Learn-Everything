// Closure Example

function myFunc() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("You Called Me");
      counter++;
    } else {
      console.log("Mai Phle hi 1 Bar Call Ho chuka hoon.");
    }
  };
}

let func = myFunc();
func();
func();
func();

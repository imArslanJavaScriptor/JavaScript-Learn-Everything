// Closure Example
function hello(x) {
  const a = "Variable A"
  const b = "Variable B"
  return function() {
    console.log(a, b, x)
  }
}

const ans = hello("Argument")
ans()
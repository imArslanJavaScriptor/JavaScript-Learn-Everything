// Set Interval
console.log("Script Start")
let count = 0
const intervalID = setInterval(() => {
    let red = Math.random() * 250
    let green = Math.random() * 250
    let blue = Math.random() * 250
    let rgb = `rgb(${red}, ${green}, ${blue})`
    let body = document.body
    body.style.backgroundColor = rgb
    // console.log(++count)
}, 5000);

let btn = document.createElement("button")
btn.innerText = "Stop"
document.body.appendChild(btn)
btn.addEventListener("click", () => {
    clearInterval(intervalID)
})

console.log("Script End")

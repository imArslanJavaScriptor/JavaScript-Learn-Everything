// break keyword
for (let i = 1; i < 11; i++) {
    if(i === 6) {
        break
    }
    console.log(i)
}
// Break keyword condition true hone pr execution context ko for loop se bahir jump krwa de ga. 


// continue keyword
for(let i = 20; i < 31; i++) {
    if(i === 26) {
        continue
    }
    console.log(i)
}
// Continue keyword condition true hone pr just wo specific
// iteration skip kr ke dubara loop continue krega.


// Revision
let string = "This is a String"
for(let i=0; i < string.length; i++) {
    if(string[i] == "S") {
        break
    }
    console.log(string[i])
}
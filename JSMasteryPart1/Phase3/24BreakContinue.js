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

let count = 0
let value = 20
for(count; count <= value; count++) {
    if(count === 18) {
        continue
    }
    console.log(count)
}

let detect = "l"
let name = "Arslan"

for(let i=0; i < name.length; i++) {
    if(name[i] === detect) {
        break
    }
    console.log(name[i])
}
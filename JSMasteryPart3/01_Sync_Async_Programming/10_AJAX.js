// Basic Theory

// AJAX: Asynchronous  JavaScript & XML
// is a set of "web development techniques"
// using many web technologies on the client-side
// to create asynchronous web applications.

// With AJAX, web applications can send and retrieve data from a
// server asynchronously (in the background)
// without interfering with the dispaly and
// behaviour of the existing page.

// We don't use data in XML format anymore.
// we use JSON now.

// we have 3 most common ways to create and send request to server
// 1- XMLHTTPRequest (old way of doing)
// 2- fetch API (Modern way of doing)
// 3- axios (a third party library)

// Our Main Purpose is to Learn HTTP Request kaise krni ha?
// HTTP: Hyper Text Transfer Protofcol is a Communicvation Medium Between Client & Server


const URL = 'https://jsonplaceholder.typicode.com/posts'
const xhr = new XMLHttpRequest()
// console.log(xhr)

// Step 1
// Before open
// console.log(xhr.readyState)
// xhr.open("GET", URL)
// After Open
// Response apko tb milega jb readyState ki value 4 ho gi.
// console.log(xhr.readyState)
// xhr.onreadystatechange = function() {
//     // console.log(xhr.readyState)
//     if(xhr.readyState === 4) {
//         // JSON.parse() method parses a JSON string and constructs the JavaScript value or object described by the string. 
//         // JSON.parse() method parses a JSON string or usa JS Object ma convert krdegi.
//         const repssone = JSON.parse(xhr.response)
//         console.log(repssone)
//     }
// }

xhr.open("GET", URL)
// Ye tbhi chalegi jb readyState ki value 4 ho gi.
xhr.onload = function() {
    const repssone = JSON.parse(xhr.response)
    console.log(repssone)
}
xhr.send()
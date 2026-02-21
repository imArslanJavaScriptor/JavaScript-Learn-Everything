// Error Handling in XHR

const URL = 'https://jsonplaceholder.typicode.com/posts'
const xhr = new XMLHttpRequest()

xhr.open("GET", URL)
xhr.onload = function() {
    if(xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.response)
        console.log(response)
        const id = response[4].id
        const xhr2 = new XMLHttpRequest()
        const URL2 = `${URL}/${id}`
        xhr2.open("GET", URL2)
        xhr2.onload = () => {
            let res = JSON.parse(xhr2.response)
            console.log(res)
        }
        xhr2.send()
    } else {
        console.log("Something Went Wrong")
    }
} 

xhr.onerror = () => {
    console.log("Network Error")
}
xhr.send()
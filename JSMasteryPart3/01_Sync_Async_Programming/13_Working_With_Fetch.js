// Fetch
const URL = "https://jsonplaceholder.typicode.com/posts";
const fetchData = fetch(URL);
fetchData
.then((response) => {
    if(response.ok){
        return response.json();
    } else {
        throw new Error("HTTP error " + response.status);
    }
})
.then((data) => console.log(data))
// in fetch here is a twist this catch block will only work if there is a network error or if the request is blocked by CORS policy, it will not catch HTTP errors like 404 or 500, for that we need to check the response status in the first then block
.catch((error) => {
    console.log("Inside catch block");
    console.log(error)
})
.finally(() => console.log("Fetch operation completed"));


// POST: Now let's see how to post data using fetch
const createDataOnServer = fetch(URL, {
    method: "POST",
    body: JSON.stringify({
        title: "New Post on Server",
        body: "This is New Post Body",
        userId: 120,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
.then((response) => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error("HTTP error " + response.status);
    }
})
.then((data) => console.log(data))
.catch((error) => console.log(error))
.finally(() => console.log("POST operation completed"));
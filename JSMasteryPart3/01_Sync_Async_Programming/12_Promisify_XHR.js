// Promisifying XHR

const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something Went Wrong"));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Something Went Wrong"));
    };
    xhr.send();
  }); 
}

const promiseResponse = sendRequest("GET", URL)
promiseResponse
.then((response) => JSON.parse(response))
.then((data) => {
    const id = data[5].id
    return id
})
.then((id) => sendRequest("GET", `${URL}/${id}`))
.then((response) => console.log(JSON.parse(response)))
.catch((error) => console.log(error));
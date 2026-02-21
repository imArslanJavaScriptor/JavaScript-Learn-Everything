// Async / Await
const URL = "https://jsonplaceholder.typicode.com/posts";

// Async / Await is a syntactic sugar over promises, it makes the code look cleaner and more readable, it allows us to write asynchronous code in a synchronous manner, it is built on top of promises and it is supported in all modern browsers, it is also supported in Node.js

console.log("Script Started");

// Function Declaration
async function getPostsData1() {
  // await will pause the execution of the function until the promise is resolved or rejected, it will not block the main thread, it will allow other code to run while waiting for the promise to resolve or reject
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  const data = await response.json();
  console.log(data);
}

// getPostsData1();

// Function Expression
const getPostsData2 = async function() {
  // await will pause the execution of the function until the promise is resolved or rejected, it will not block the main thread, it will allow other code to run while waiting for the promise to resolve or reject
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  const data = await response.json();
  console.log(data);
}

// getPostsData1();

// Arrow Function 
const getPostsData3 =  async  () =>  {
  // await will pause the execution of the function until the promise is resolved or rejected, it will not block the main thread, it will allow other code to run while waiting for the promise to resolve or reject
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  const data = await response.json();
  console.log(data);
}

getPostsData3();

console.log("Script Ended");

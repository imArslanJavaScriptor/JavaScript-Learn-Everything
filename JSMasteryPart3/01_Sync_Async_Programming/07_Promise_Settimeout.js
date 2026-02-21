// Promise & SetTimeout


// Resolve / Reject Promise with a delay.
function myPromise() {
    return new Promise((resolve, reject) => {
        const value = true
        setTimeout(() => {
            if(value) {
                resolve(10)
            } else {
                reject()
            }
        }, 2000)
    })
}

myPromise()
.then((res) => console.log("Resolved", res))
.catch(() => console.log("Rejected"))
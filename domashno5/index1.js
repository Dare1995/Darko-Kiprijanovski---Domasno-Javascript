// Function 1
function  promiseWithDelay(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise resolved after ${delay} milliseconds`)
        }, delay)
    })
}
promiseWithDelay(1000)
    .then(result => console.log(result))
    .catch(error => console.error(error))


// Function 2
function promiseWithError() {
    return new Promise((resolve, reject) => {
        reject("Promise rejected with an error")
    })
}
promiseWithError()
    .then(result => console.log(result))
    .catch(error => console.error(error))


// Function 3
function promiseWithValue(value) {
    return new Promise((resolve, reject) => {
        resolve(value)
    })
}
promiseWithValue("Hello, World!")
    .then(result => console.log(result))
    .catch(error => console.error(error))


// Function 4
function promiseRejectWithDelay(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(`Promise rejected after ${delay} milliseconds`)
        }, delay)
    })
}
promiseRejectWithDelay(3000)
    .then(result => console.log(result))
    .catch(error => console.error(error))

// Function 5
function promiseWithDelayAndValue(delay, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
}

promiseWithDelayAndValue(2000, "Async/Await with try/catch")
    .then(result => console.log(result))
    .catch(error => console.error(error))



// Asyinc Functions

async function callPromisesWithAsyncAwait() {
    try {
        const result1 = await promiseWithDelay(1000)
        console.log(result1)

        const result2 = await promiseWithError()
        console.log(result2)

        const result3 = await promiseWithValue("Hello, World!")
        console.log(result3)

        const result4 = await promiseRejectWithDelay(3000)
        console.log(result4)

        const result5 = await promiseWithDelayAndValue(2000, "Async/Await with try/catch")
        console.log(result5)
    } catch (error) {
        console.error(error)
    }
}

callPromisesWithAsyncAwait()
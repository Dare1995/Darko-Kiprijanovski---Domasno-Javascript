function checkNumber(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("The number is even")
        } else {
            reject(new Error("The number is odd"))
        }
    })
}

function handleSuccess(message) {
    console.log(message)
}

function handleError(error) {
    console.log(error.message)
}

checkNumber(8)
.then(handleSuccess)
.catch(handleError)

checkNumber(3)
  .then(handleSuccess)
  .catch(handleError)
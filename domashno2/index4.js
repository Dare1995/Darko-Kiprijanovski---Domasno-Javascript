function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz")
    } else if (number % 3 === 0) {
        console.log("Fizz")
    } else if (number % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(number)
    }
}

console.log(fizzBuzz(10))
console.log(fizzBuzz(15))
console.log(fizzBuzz(9))
console.log(fizzBuzz(7))
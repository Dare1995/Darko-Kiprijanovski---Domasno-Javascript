// (а)

for (let num = 0; num <= 10; num++) {
    console.log(num)
}

// (б)

let start = 3
let end = 10
let total = 0

for (let number = start; number < end; number++) {
    if (number % 2 === 0) {
        total += number;
    }
}

console.log(total)

// (в)

let person = {
    name: "Darko",
    age: 29,
    city: "Kumanovo",
}

for(let key in person) {
     console.log(key + ": " + person[key])
}

// (г)

let colors = ["green", "blue", "yellow", "red"]

for (let color of colors) {
    console.log(color.length, color)
}
// (а)

let count = 5

while (count >= 1) {
    console.log(count)
    count--
}

// (б)

let num = 10;

do {
    console.log(num)
    num--

    if (num === 4) {
        break
    }
}   while (num >= 1)
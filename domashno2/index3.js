// (а)

let age = 21
// let age = 17

if (age >= 21) {
    console.log("Можеш легално да купиш алкохол и да гласаш.")
} else if (age >= 18) {
    console.log("Можеш легално да гласаш, но неможеш да купиш алкохол.")
} else {
    console.log("Немажеш да купиш алкохол или да гласаш сеуште.")
}

// (б)

function getNumberofDays(month) {
    switch (month) {
        case "january":
        case "march":
        case "may":
        case "july":
        case "august":
        case "october":
        case "december":
            return 31;
        case "april":
        case "june":
        case "september":
        case "november":
            return 30;
        case "february":
            return 28;
        default:
            console.log("Invalid input")
            return "Not a month"
        }
}

    console.log(getNumberofDays("august"))
    console.log(getNumberofDays("february"))
    console.log(getNumberofDays("june"))
    console.log(getNumberofDays("monday"))

// (в)

    let temperature = 25
    
    if (temperature > 30) {
        console.log("Жешко е времето!")
    } else if (temperature > 20) {
        console.log("Топло е времето.")
    } else if (temperature > 15 ) {
        console.log("Умерено е времето.")
    } else {
        console.log("Ладно е времето!")
    }

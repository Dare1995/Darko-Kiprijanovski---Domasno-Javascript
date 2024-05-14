let cities = ["Kumanovo", "Skopje", "Bitola", "Veles", "Kratovo", "Kochani", "Strumica", "Struga", "Ohrid", "Dojran"]

for (let city of cities) {
    console.log(city)
}

for (let key in cities) {
    console.log(key + ": " + cities[key])
}

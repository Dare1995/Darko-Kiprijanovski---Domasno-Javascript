const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
    ]


// (а)
const countriesWithLand = countries.filter((country) => country.toUpperCase().includes("LAND"))

// (б)
const countriesFiltered = countries.filter((country) => country.endsWith("ia") && country.length > 7)


console.log(countriesFiltered)
countriesWithLand.forEach(country => console.log(country.toUpperCase()))
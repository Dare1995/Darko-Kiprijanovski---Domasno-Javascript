let students = [
    {
        name: "Stefan",
        surname: "Trajkovski",
        age: 25,
        address: {
            city: "Skopje",
            street: {
                name: "3-TA Mak. Udarna Brig.",
                number: 70,
            },
            zipCode: "1000",
        }
    },
    {
        name: "Marija",
        surname: "Stankovska",
        age: 23,
        address: {
            city: "Kumanovo",
            street: {
                name: "Oktomvriska Revolucija",
                number: 34,
            },
            zipCode: "1300",
        }
    }
]

console.log(students[0].address.city)
console.log(students[1]["address"]["street"]["name"])
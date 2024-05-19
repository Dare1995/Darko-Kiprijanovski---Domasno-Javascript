const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
  },
  hobbies: ["Reading", "Traveling", "Cooking"],
}

// (а)

const additionalInfo = {
  email: "johndoe@gmail.com",
  phone: "123-456-789",
  education: {
    degree: "Bachelors",
    major: "Computer Science",
  }
}

const mergedObject = { ...person, ...additionalInfo }
// console.log(mergedObject)


// (б)

const user = {
  id: 123,
  username: "jsmith",
  fullName: { firstName: "John", lastName: "Smith" },
  contact: { email: "john@example.com", phone: "555-555-5555" },
  addresses: [
    {
      type: "home",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    {
      type: "work",
      street: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
  ],
}

const { username,
  fullName: {firstName, lastName},
  contact: {email},
  addresses: [{street: homeStreet, city: homeCity, state: homeState, zip: homeZip},
    {street: workStreet, city: workCity, state: workState, zip: workZip}] } = user


console.log(username)
console.log(firstName, lastName)
console.log(email)
console.log(homeStreet, homeCity, homeState, homeZip)
console.log(workStreet, workCity, workState, workZip)
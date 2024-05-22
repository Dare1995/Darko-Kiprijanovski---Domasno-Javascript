function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "John Doe",
                age: 30,
                email: "john@example.com",
            })
        }, 2000)
    })
}

async function displayUserDetails() {
    try {
        const userData = await fetchData()
        console.log("User Details:")
        console.log("Name:", userData.name)
        console.log("Age:", userData.age)
        console.log("Email:", userData.email)
    } catch (error) {
        console.log("Error fetching user data:", error)
    }
}

displayUserDetails()

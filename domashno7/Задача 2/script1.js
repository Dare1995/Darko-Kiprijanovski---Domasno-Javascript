document.getElementById('registrationForm').addEventListener('submit', (event) => {
    event.preventDefault()
    
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.")
    } else {
        alert("Registration Successful! \n\nName: " + firstName + " " + lastName + "\nEmail: " + email)
    }
})


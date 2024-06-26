const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const usersContainer = document.getElementById("users-container");

        data.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');

            const name = document.createElement('p');
            name.textContent = `Name: ${user.name}`;

            const phone = document.createElement('p');
            phone.textContent = `Phone: ${user.phone}`;

            const company = document.createElement('p');
            company.textContent = `Company: ${user.company.name}`;


            usersContainer.appendChild(userDiv);
            userDiv.appendChild(name);
            userDiv.appendChild(phone);
            userDiv.appendChild(company);
        })
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchUsers()

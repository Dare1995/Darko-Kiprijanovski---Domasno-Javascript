function fetchCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            const characterGrid = document.getElementById('character-grid');

            characters.forEach(character => {
                const card = document.createElement('div');
                card.classList.add('character-card');
                characterGrid.appendChild(card);

                const statusColor = getStatusColor(character.status);

                card.innerHTML = `
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                        <p>Gender: ${character.gender}</p>
                        <p>Status: <span style="color: ${statusColor};">${character.status}</span></p>
                        <p>Number of episodes: ${character.episode.length}</p>
                    `
            })
        })
        .catch(error => console.error('Error fetching characters:', error));

        function getStatusColor(status) {
        switch (status) {
            case 'Alive':
                return 'green'
            case 'Dead':
                return 'red'
            default:
                return 'grey'
        }
    }
}
fetchCharacters()




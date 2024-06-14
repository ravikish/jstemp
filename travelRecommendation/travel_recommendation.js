

function displayLocalTime() {
    const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const newYorkTime = new Date().toLocaleTimeString('en-US', options);
    const timeContainer = document.getElementById('local-time');
    
    if (timeContainer) {
        timeContainer.textContent = `Current time in New York: ${newYorkTime}`;
    }
}

// Call the function to display the time immediately
displayLocalTime();

// Update the time every second
setInterval(displayLocalTime, 1000);

// Function to perform search when Search button is clicked
function search() {
    const query = document.getElementById('search-input').value.trim().toLowerCase(); // Ensure query is trimmed and lowercase
    const resultsContainer = document.getElementById('search-results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (query.length === 0) {
        return; // If query is empty, do nothing
    }

    fetch('travel_recommendation_api.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const filtered = [];

            // Filter cities in countries
            data.countries.forEach(country => {
                country.cities.forEach(city => {
                    if (city.name.toLowerCase().includes(query)) {
                        filtered.push(city);
                    }
                });
            });

            // Filter the temples
            data.temples.forEach(temple => {
                if (temple.name.toLowerCase().includes(query)) {
                    filtered.push(temple);
                }
            });


            // Filter the beaches
            data.beaches.forEach(beach => {
                if (beach.name.toLowerCase().includes(query)) {
                    filtered.push(beach);
                }
            });


            // Display filtered results as cards
            filtered.forEach(destination => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${destination.imageUrl}" alt="${destination.name}" class="card-img">
                    <div class="card-content">
                        <h3>${destination.name}</h3>
                        <p>${destination.description}</p>
                    </div>`;
                resultsContainer.appendChild(card);
            });

            if (filtered.length === 0) {
                resultsContainer.innerHTML = '<p>No results found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultsContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
}

// Function to clear search results when Clear button is clicked
function clearSearch() {
    document.getElementById('search-input').value = '';
    document.getElementById('search-results').innerHTML = '';
}

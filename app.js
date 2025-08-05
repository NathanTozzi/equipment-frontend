function searchEquipment() {
    const query = document.getElementById('searchInput').value;

    fetch(`http://127.0.0.1:5000/api/search?query=${query}`)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `
                <h2>Specs</h2>
                <p><strong>Model:</strong> ${data.specs.model}</p>
                <p><strong>Weight:</strong> ${data.specs.weight}</p>
                <p><strong>Engine:</strong> ${data.specs.engine}</p>
                <p><strong>Capacity:</strong> ${data.specs.operating_capacity}</p>
                <h2>Listings</h2>
            `;

            data.listings.forEach(listing => {
                resultsDiv.innerHTML += `
                    <p><a href="${listing.link}" target="_blank">${listing.title}</a> - ${listing.price}</p>
                `;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

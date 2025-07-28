document.getElementById("calculate-btn").addEventListener("click", function () {
    const earthAge = parseFloat(document.getElementById("earth-age").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(earthAge) || earthAge <= 0) {
        resultDiv.innerHTML = `<p>Please enter a valid age (more than 0).</p>`;
        return;
    }

    const earthDays = earthAge * 365; 

    const planetYears = {
        Mercury: 88,
        Venus: 225,
        Earth: 365,
        Mars: 687,
        Jupiter: 4333,
        Saturn: 10759,
        Uranus: 30687,
        Neptune: 60190,
    };

    let resultHTML = `<h2>Your Age on Other Planets:</h2><ul class="planet-list">`;

    for (let planet in planetYears) {
        const ageOnPlanet = earthDays / planetYears[planet];
        resultHTML += `<li><strong>${planet}</strong>: ${ageOnPlanet.toFixed(2)} years</li>`;
    };

    resultHTML += `</ul>`;
    resultDiv.innerHTML = resultHTML;
});
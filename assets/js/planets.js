const body = document.body;
const planets = document.getElementById("planets-container");



fetch("https://swapi.info/api/planets")
    .then((response) => response.json())
    .then((data) => {
        data.sort((a, b) => 0.5 - Math.random()); // RANDOM ORDER
        const sliceData = data.slice(0, 5)
        // data.sort((a, b) => a.name.localeCompare(b.name)); // SORTERET På ALFABET EFTER PLANET.
        console.log(sliceData);
    });


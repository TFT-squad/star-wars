const body = document.body;
const people = document.getElementById("people-container");

fetch("https://swapi.info/api/people")
    .then((response) => response.json())
    .then((data) => {
        const sliceData = data.slice(0, 20);
        sliceData.sort((a, b) => a.name.localeCompare(b.name)); // SORTERET På ALFABET EFTER NAME.
        console.log(sliceData);
    });
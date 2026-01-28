const body = document.body;

fetch("https://swapi.info/api/films")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // body.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  });

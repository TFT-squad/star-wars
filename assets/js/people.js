const body = document.body;
const people = document.getElementById("people-container");

const peopleImages = [
  { name: "Anakin Skywalker", image: "../images/people/Anakin Skywalker.jpeg" },
  {
    name: "Beru Whitesun lars",
    image: "../images/people/Beru Whitesun lars.jpeg",
  },
  {
    name: "Biggs Darklighter",
    image: "../images/people/Biggs Darklighter.jpeg",
  },
  { name: "C-3PO", image: "../images/people/C-3PO.jpeg" },
  { name: "Chewbacca", image: "../images/people/Chewbacca.jpeg" },
  { name: "Darth Vader", image: "../images/people/Darth Vader.jpeg" },
  { name: "Greedo", image: "../images/people/Greedo.jpeg" },
  { name: "Han Solo", image: "../images/people/Han solo.jpeg" },
  {
    name: "Jabba Desilijic Tiure",
    image: "../images/people/Jabba Desilijic Tiure.jpeg",
  },
  { name: "Jek Tono Porkins", image: "../images/people/Jek Tono Porkins.jpeg" },
  { name: "Leia Organa", image: "../images/people/Leia Organa.jpeg" },
  { name: "Luke Skywalker", image: "../images/people/Luke Skywalker.jpeg" },
  { name: "Obi-Wan Kenobi", image: "../images/people/Obi-Wan Kenobi.jpeg" },
  { name: "Owen Lars", image: "../images/people/Owen Lars.jpeg" },
  { name: "Palpatine", image: "../images/people/Palpatine.jpeg" },
  { name: "R2-D2", image: "../images/people/R2-D2.jpeg" },
  { name: "R5-D4", image: "../images/people/R5-D4.jpeg" },
  { name: "Wedge Antilles", image: "../images/people/Wedge Antilles.jpeg" },
  { name: "Wilhuff Tarkin", image: "../images/people/Wilhuff Tarkin.jpeg" },
  { name: "Yoda", image: "../images/Yoda.jpeg" },
];

fetch("https://swapi.info/api/people")
  .then((response) => response.json())
  .then((data) => {
    const sliceData = data.slice(0, 20);
    sliceData.sort((a, b) => a.name.localeCompare(b.name)); // SORTERET På ALFABET EFTER NAME.
    console.log(sliceData);

    for (item of sliceData) {
      const { name, gender, films } = item;

      const arrPeopleImages = peopleImages.filter((x) => x.name === name);
      console.log(peopleImages);

      // CONST FIGURE
      const figure = document.createElement("figure");

      // HEADLINE
      const h3 = document.createElement("h3");
      h3.innerText = `${name}`;

      // IMAGE
      const figImg = document.createElement("img");
      figImg.src = arrPeopleImages[0].image;

      // FIGCAPTION
      const figCap = document.createElement("figcaption");
      const figUl = document.createElement("ul");

      // LIST ITEMS
      const liName = document.createElement("li");
      liName.innerHTML = `<b>Name:</b> ${name}`;

      const liGender = document.createElement("li");
      liGender.innerHTML = `<b>Gender:</b> ${gender}`;

      const liFilms = document.createElement("li");
      liFilms.innerHTML = `<b>Films:</b> ${films.length}`;

      // APPEND ITEMS
      figUl.append(liName, liGender, liFilms);

      figCap.append(figUl);
      figure.append(h3, figImg, figCap);
      people.append(figure);
    }
  });

const container = document.getElementById("starship-container");

const starshipImages = [
  {
    name: "Sentinel-class landing craft",
    image: "../images/Starships/Sentinel-class.jpg",
  },
  { name: "Death Star", image: "../images/Starships/Death-star.jpg" },
  { name: "TIE Advanced x1", image: "../images/Starships/tie-advanced.jpg" },
  {
    name: "Calamari Cruiser",
    image: "../images/Starships/calamari-cruiser.jpeg",
  },
  { name: "A-wing", image: "../images/Starships/a-wing.jpg" },
  { name: "B-wing", image: "../images/Starships/b-wing.jpg" },
  {
    name: "Republic Cruiser",
    image: "../images/Starships/republic-cruiser.jpeg",
  },
  {
    name: "Naboo Royal Starship",
    image: "../images/Starships/naboo-royal.jpg",
  },
  { name: "Scimitar", image: "../images/Starships/scimitar.jpg" },
  {
    name: "J-type diplomatic barge",
    image: "../images/Starships/j-type-diplomatic.jpg",
  },
  { name: "AA-9 Coruscant freighter", image: "../images/Starships/AA-9.jpg" },
  {
    name: "H-type Nubian yacht",
    image: "../images/Starships/h-type-nubian.jpg",
  },
  {
    name: "Republic Assault ship",
    image: "../images/Starships/republic-assault.jpeg",
  },
  { name: "Solar Sailer", image: "../images/Starships/solar-sailer.jpg" },
  {
    name: "Trade Federation cruiser",
    image: "../images/Starships/tradefed-cruiser.jpg",
  },
  {
    name: "Theta-class T-2c shuttle",
    image: "../images/Starships/theta-class-shuttle.jpg",
  },
  {
    name: "Republic attack cruiser",
    image: "../images/Starships/republic-attack-cruiser.jpeg",
  },
  {
    name: "Naboo star skiff",
    image: "../images/Starships/naboo-star-skiff.jpg",
  },
  {
    name: "Jedi Interceptor",
    image: "../images/Starships/jedi-interceptor.jpeg",
  },
  { name: "arc-170", image: "../images/Starships/arc-170.jpg" },
  {
    name: "Banking clan frigte",
    image: "../images/Starships/banking-frigate.jpg",
  },
  {
    name: "Belbullab-22 starfighter",
    image: "../images/Starships/belbullab-22.jpg",
  },
  { name: "V-wing", image: "../images/Starships/v-wing.jpg" },
  { name: "Executor", image: "../images/Starships/executor-starship.jpg" },
  { name: "Rebel transport", image: "../images/Starships/rebel-transport.jpg" },
  { name: "Slave 1", image: "../images/Starships/slave-1.jpg" },
  {
    name: "Imperial shuttle",
    image: "../images/Starships/imperial-shuttle.jpg",
  },
  {
    name: "EF76 Nebulon-B escort frigate",
    image: "../images/Starships/ef76-nebulon.jpg",
  },
  { name: "Naboo fighter", image: "../images/Starships/naboo-fighter.jpg" },
  {
    name: "Jedi starfighter",
    image: "../images/Starships/jedi-starfighter.jpeg",
  },
  { name: "CR90 corvette", image: "../images/Starships/cr90-corvette.jpg" },
  { name: "Star Destroyer", image: "../images/Starships/star-destroyer.jpg" },
  {
    name: "Millennium Falcon",
    image: "../images/Starships/millenium-falcon.jpg",
  },
  { name: "Y-wing", image: "../images/Starships/y-wing.jpg" },
  { name: "X-wing", image: "../images/Starships/x-wing.jpg" },
  {
    name: "Droid control ship",
    image: "../images/Starships/droid-control.jpg",
  },
];

fetch("https://swapi.info/api/starships")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      console.log(data);
      data.sort((a, b) => a.films.length - b.films.length);

      for (item of data) {
        console.log(item);
        const arrStarshipImages = starshipImages.filter(
          (x) => x.name === item.name,
        );

        const figure = document.createElement("figure");
        // HEADLINE + IMAGE SECTION

        const headline = document.createElement("h3");
        headline.innerText = `${item.name}`;

        const figImg = document.createElement("img");
        figImg.src = arrStarshipImages[0]?.image || "";

        // FIG CAPTION SECTION

        const figCap = document.createElement("figcaption");
        const figUL = document.createElement("ul");

        const liModel = document.createElement("li");
        liModel.innerHTML = `<p><b>Model:</b> ${item.model}</p>`;

        const liManufacturer = document.createElement("li");
        liManufacturer.innerHTML = `<p><b>Manufacturer:</b> ${item.manufacturer}</p>`;

        const liSSClass = document.createElement("li");
        liSSClass.innerHTML = `<p><b>Starship Class:</b> ${item.starship_class}</p>`;

        const liCrewCap = document.createElement("li");
        liCrewCap.innerHTML = `<p><b>Crew Requirements:</b> ${item.crew}</p>`;

        const liTravelCap = document.createElement("li");
        liTravelCap.innerHTML = `<p><b>Passengers Capacity:</b> ${item.passengers}<p/>`;

        const ulFilms = document.createElement("ul");
        const liFilms = document.createElement("li");
        liFilms.innerHTML = `<p><b>Film:</b><ul><li>${item.films.join("</li><li></p>")}</li></ul>`;

        ulFilms.append(liFilms);

        // APPENDING
        figUL.append(
          liModel,
          liManufacturer,
          liSSClass,
          liCrewCap,
          liTravelCap,
          ulFilms,
        );
        figCap.append(figUL);
        figure.append(headline, figImg, figCap);
        container.append(figure);
      }
    }
  });

const container = document.getElementById("starship-container");

const starshipImages = [
  {
    name: "Sentinel-class landing craft",
    image: "../images/starships/Sentinel-class.jpg",
  },
  { name: "Death Star", image: "../images/starships/Death-star.jpg" },
  { name: "TIE Advanced x1", image: "../images/starships/tie-advanced.jpg" },
  {
    name: "Calamari Cruiser",
    image: "../images/starships/calamari-cruiser.jpeg",
  },
  { name: "A-wing", image: "../images/starships/a-wing.jpg" },
  { name: "B-wing", image: "../images/starships/b-wing.jpg" },
  {
    name: "Republic Cruiser",
    image: "../images/starships/republic-cruiser.jpeg",
  },
  {
    name: "Naboo Royal Starship",
    image: "../images/starships/naboo-royal.jpg",
  },
  { name: "Scimitar", image: "../images/starships/scimitar.jpg" },
  {
    name: "J-type diplomatic barge",
    image: "../images/starships/j-type-diplomatic.jpg",
  },
  { name: "AA-9 Coruscant freighter", image: "../images/starships/AA-9.jpg" },
  {
    name: "H-type Nubian yacht",
    image: "../images/starships/h-type-nubian.jpg",
  },
  {
    name: "Republic Assault ship",
    image: "../images/starships/republic-assault.jpeg",
  },
  { name: "Solar Sailer", image: "../images/starships/solar-sailer.jpg" },
  {
    name: "Trade Federation cruiser",
    image: "../images/starships/tradefed-cruiser.jpg",
  },
  {
    name: "Theta-class T-2c shuttle",
    image: "../images/starships/theta-class-shuttle.jpg",
  },
  {
    name: "Republic attack cruiser",
    image: "../images/starships/republic-attack-cruiser.jpeg",
  },
  {
    name: "Naboo star skiff",
    image: "../images/starships/naboo-star-skiff.jpg",
  },
  {
    name: "Jedi Interceptor",
    image: "../images/starships/jedi-interceptor.jpeg",
  },
  { name: "arc-170", image: "../images/starships/arc-170.jpg" },
  {
    name: "Banking clan frigte",
    image: "../images/starships/banking-frigate.jpg",
  },
  {
    name: "Belbullab-22 starfighter",
    image: "../images/starships/belbullab-22.jpg",
  },
  { name: "V-wing", image: "../images/starships/v-wing.jpg" },
  { name: "Executor", image: "../images/starships/executor-starship.jpg" },
  { name: "Rebel transport", image: "../images/starships/rebel-transport.jpg" },
  { name: "Slave 1", image: "../images/starships/slave-1.jpg" },
  {
    name: "Imperial shuttle",
    image: "../images/starships/imperial-shuttle.jpg",
  },
  {
    name: "EF76 Nebulon-B escort frigate",
    image: "../images/starships/ef76-nebulon.jpg",
  },
  { name: "Naboo fighter", image: "../images/starships/naboo-fighter.jpg" },
  {
    name: "Jedi starfighter",
    image: "../images/starships/jedi-starfighter.jpeg",
  },
  { name: "CR90 corvette", image: "../images/starships/cr90-corvette.jpg" },
  { name: "Star Destroyer", image: "../images/starships/star-destroyer.jpg" },
  {
    name: "Millennium Falcon",
    image: "../images/starships/millenium-falcon.jpg",
  },
  { name: "Y-wing", image: "../images/starships/y-wing.jpg" },
  { name: "X-wing", image: "../images/starships/x-wing.jpg" },
  {
    name: "Droid control ship",
    image: "../images/starships/droid-control.jpg",
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

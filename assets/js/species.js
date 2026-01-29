const body = document.body;
const species = document.getElementById("species-container");

const speciesImages = [
  { name: "Human", image: "../images/Human.jpeg" },
  { name: "Droid", image: "../images/Droid.jpeg" },
  { name: "Wookiee", image: "../images/Wookiee.jpeg" },
  { name: "Rodian", image: "../images/Rodian.jpeg" },
  { name: "Hutt", image: "../images/Hutt.jpeg" },
  { name: "Yoda's species", image: "../images/Yoda-.jpeg" },
  { name: "Trandoshan", image: "../images/Trandoshan.jpeg" },
  { name: "Mon Calamari", image: "../images/Mon calamari.jpeg" },
  { name: "Ewok", image: "../images/Ewok.jpeg" },
  { name: "Sullustan", image: "../images/Sullustan.jpeg" },
  { name: "Neimodian", image: "../images/Neimodian.jpeg" },
  { name: "Gungan", image: "../images/Gungan.jpeg" },
  { name: "Toydarian", image: "../images/Toydarian.jpeg" },
  { name: "Dug", image: "../images/Dug.jpeg" },
  { name: "Twi'lek", image: "../images/Twi'lek.jpeg" },
  { name: "Ithorian", image: "../images/Ithorian.jpeg" },
  { name: "Shistavanen", image: "../images/Shistavanen.jpeg" },
  { name: "Clawdite", image: "../images/Clawdite.jpeg" },
  { name: "Geonosian", image: "../images/Geonosian.jpeg" },
  { name: "Mirialan", image: "../images/Mirialan.jpeg" },
  { name: "Aleena", image: "../images/Aleena.jpeg" },
  { name: "Vulptereen", image: "../images/Vulptereen.jpeg" },
  { name: "Xexto", image: "../images/Xexto.jpeg" },
  { name: "Toong", image: "../images/Toong.jpeg" },
  { name: "Cerean", image: "../images/Cerean.jpeg" },
  { name: "Nautolan", image: "../images/Nautolan.jpeg" },
  { name: "Zabrak", image: "../images/Zabrak.jpeg" },
  { name: "Tholothian", image: "../images/Tholothian.jpeg" },
  { name: "Iktotchi", image: "../images/Iktotchi.jpeg" },
  { name: "Kel Dor", image: "../images/Kel Dor.jpeg" },
  { name: "Chagrian", image: "../images/Chagrian.jpeg" },
  { name: "Besalisk", image: "../images/Besalisk.jpeg" },
  { name: "Kaminoan", image: "../images/Kaminoan.jpeg" },
  { name: "Skakoan", image: "../images/Skakoan.jpeg" },
  { name: "Muun", image: "../images/Muun.jpeg" },
  { name: "Kaleesh", image: "../images/Kaleesh.jpeg" },
  { name: "Pau'an", image: "../images/Pau'an.jpeg" },
  { name: "Quermian", image: "../images/Quermian.jpeg" },
];

fetch("https://swapi.info/api/species")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.sort((a, b) => a.name.localeCompare(b.name)); // SORTERET På ALFABET EFTER DIRECTOR.

    for (item of data) {
      const {
        name,
        classification,
        average_lifespan,
        people,
        eye_colors,
        hair_colors,
        skin_colors,
        films,
      } = item;

      const arrSpeciesImages = speciesImages.filter((x) => x.name === name);
      console.log(speciesImages);

      // CONST FIGURE
      const figure = document.createElement("figure");

      // HEADLINE
      const h3 = document.createElement("h3");
      h3.innerHTML = `<h3>${name}</h3>`;

      // IMAGE
      const figImg = document.createElement("img");
      figImg.src = arrSpeciesImages[0].image;

      // FIGCAPTION
      const figCap = document.createElement("figcaption");
      const figUL = document.createElement("ul");

      const liClassification = document.createElement("li");
      liClassification.innerHTML = `<b>Classification:</b> ${classification}`;

      const liName = document.createElement("li");
      liName.innerHTML = `<b>Race:</b> ${name}`;

      const liLifespan = document.createElement("li");
      liLifespan.innerHTML = `<b>Average Lifespan:</b> ${average_lifespan}`;

      const liHairColors = document.createElement("li");
      liHairColors.innerHTML = `<b>Hair Colors:</b> ${hair_colors}`;

      const liSkinColors = document.createElement("li");
      liSkinColors.innerHTML = `<b>Skin Colors:</b> ${skin_colors}`;

      const liEyeColors = document.createElement("li");
      liEyeColors.innerHTML = `<b>Eye Colors:</b> ${eye_colors}`;

      const liPeople = document.createElement("li");
      liPeople.innerHTML = `<b>People:</b> ${people.length}`;

      const liFilms = document.createElement("li");
      liFilms.innerHTML = `<b>Films:</b> ${films.length}`;

      figUL.append(
        liName,
        liClassification,
        liLifespan,
        liHairColors,
        liSkinColors,
        liEyeColors,
        liPeople,
        liFilms,
      );

      figCap.append(figUL);
      figure.append(h3, figImg, figCap);
      species.append(figure);
    }
  });

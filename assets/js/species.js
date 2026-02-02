const body = document.body;
const species = document.getElementById("species-container");

const speciesImages = [
  { name: "Aleena", image: "../images/species/Aleena.jpeg" },
  { name: "Besalisk", image: "../images/species/Besalisk.jpeg" },
  { name: "Cerean", image: "../images/species/Cerean.jpeg" },
  { name: "Chagrian", image: "../images/species/Chagrian.jpeg" },
  { name: "Clawdite", image: "../images/species/Clawdite.jpeg" },
  { name: "Droid", image: "../images/species/Droid.jpeg" },
  { name: "Dug", image: "../images/species/Dug.jpeg" },
  { name: "Ewok", image: "../images/species/Ewok.jpeg" },
  { name: "Geonosian", image: "../images/species/Geonosian.jpeg" },
  { name: "Gungan", image: "../images/species/Gungan.jpeg" },
  { name: "Human", image: "../images/species/Human.jpeg" },
  { name: "Hutt", image: "../images/species/Hutt.jpeg" },
  { name: "Iktotchi", image: "../images/species/Iktotchi.jpeg" },
  { name: "Kaleesh", image: "../images/species/Kaleesh.jpeg" },
  { name: "Kaminoan", image: "../images/species/Kaminoan.jpeg" },
  { name: "Kel Dor", image: "../images/species/Kel Dor.jpeg" },
  { name: "Mirialan", image: "../images/species/Mirialan.jpeg" },
  { name: "Mon Calamari", image: "../images/species/Mon calamari.jpeg" },
  { name: "Muun", image: "../images/species/Muun.jpeg" },
  { name: "Nautolan", image: "../images/species/Nautolan.jpeg" },
  { name: "Neimodian", image: "../images/species/Neimodian.jpeg" },
  { name: "Pau'an", image: "../images/species/Pau'an.jpeg" },
  { name: "Quermian", image: "../images/species/Quermian.jpeg" },
  { name: "Rodian", image: "../images/species/Rodian.jpeg" },
  { name: "Skakoan", image: "../images/species/Skakoan.jpeg" },
  { name: "Sullustan", image: "../images/species/Sullustan.jpeg" },
  { name: "Tholothian", image: "../images/species/Tholothian.jpeg" },
  { name: "Togruta", image: "../images/species/Togruta.jpeg" },
  { name: "Toong", image: "../images/species/Toong.jpeg" },
  { name: "Toydarian", image: "../images/species/Toydarain.jpeg" },
  { name: "Trandoshan", image: "../images/species/Trandoshan.jpeg" },
  { name: "Twi'lek", image: "../images/species/Twi'lek.jpeg" },
  { name: "Vulptereen", image: "../images/species/Vulptereen.jpeg" },
  { name: "Wookie", image: "../images/species/Wookiee.jpeg" },
  { name: "Xexto", image: "../images/species/Xexto.jpeg" },
  { name: "Yoda's species", image: "../images/people/Yoda.jpeg" },
  { name: "Zabrak", image: "../images/species/Zabrak.jpeg" },
];

fetch("https://swapi.info/api/species")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    data.sort((a, b) => a.name.localeCompare(b.name)); // SORTERET På ALFABET EFTER SPECIES.

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

      // CONST FIGURE
      const figure = document.createElement("figure");

      // HEADLINE
      const h3 = document.createElement("h3");
      h3.innerHTML = `<h3>${name}</h3>`;

      const figImg = document.createElement("img");
      figImg.src = arrSpeciesImages[0]?.image || ""; // ← THIS IS THE ONLY CHANGE

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

const body = document.body;
const species = document.getElementById("species-container");

const speciesImages = [
    { name: "Human", image: "../images/Human.jpg" },
    { name: "Droid", image: "../images/Droid.jpg" },
    { name: "Wookiee", image: "../images/Wookiee.jpg" },
    { name: "Rodian", image: "../images/Rodian.jpg" },
    { name: "Hutt", image: "../images/Hutt.jpg" },
    { name: "Yoda's species", image: "../images/Yoda-.jpg" },
    { name: "Trandoshan", image: "../images/Trandoshan.jpg" },
    { name: "Mon Calamari", image: "../images/Mon calamari.jpg" },
    { name: "Ewok", image: "../images/Ewok.jpg" },
    { name: "Sullustan", image: "../images/Sullustan.jpg" },
    { name: "Neimodian", image: "../images/Neimodian.jpg" },
    { name: "Gungan", image: "../images/Gungan.jpg" },
    { name: "Toydarian", image: "../images/Toydarian.jpg" },
    { name: "Dug", image: "../images/Dug.jpg" },
    { name: "Twi'lek", image: "../images/Twi'lek.jpg" },
    { name: "Ithorian", image: "../images/Ithorian.jpg" },
    { name: "Shistavanen", image: "../images/Shistavanen.jpg" },
    { name: "Clawdite", image: "../images/Clawdite.jpg" },
    { name: "Geonosian", image: "../images/Geonosian.jpg" },
    { name: "Mirialan", image: "../images/Mirialan.jpg" },
    { name: "Aleena", image: "../images/Aleena.jpg" },
    { name: "Vulptereen", image: "../images/Vulptereen.jpg" },
    { name: "Xexto", image: "../images/Xexto.jpg" },
    { name: "Toong", image: "../images/Toong.jpg" },
    { name: "Cerean", image: "../images/Cerean.jpg" },
    { name: "Nautolan", image: "../images/Nautolan.jpg" },
    { name: "Zabrak", image: "../images/Zabrak.jpg" },
    { name: "Tholothian", image: "../images/Tholothian.jpg" },
    { name: "Iktotchi", image: "../images/Iktotchi.jpg" },
    { name: "Kel Dor", image: "../images/Kel Dor.jpg" },
    { name: "Chagrian", image: "../images/Chagrian.jpg" },
    { name: "Besalisk", image: "../images/Besalisk.jpg" },
    { name: "Kaminoan", image: "../images/Kaminoan.jpg" },
    { name: "Skakoan", image: "../images/Skakoan.jpg" },
    { name: "Muun", image: "../images/Muun.jpg" },
    { name: "Kaleesh", image: "../images/Kaleesh.jpg" },
    { name: "Pau'an", image: "../images/Pau'an.jpg" },
    { name: "Quermian", image: "../images/Quermian.jpg" },
    { name: "Togruta", image: "../images/Togruta.jpg" },
]

fetch("https://swapi.info/api/species")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    
    const ul = document.createElement("ul");
    data.sort((a, b) => a.name.localeCompare(b.name)); // SORTERET På ALFABET EFTER DIRECTOR.
    for(item of data){
        console.log(item);
        const {name, classification, average_lifespan, people, eye_colors, hair_colors, skin_colors, language, films} = item;
        // CONST FIGURE
        const figure = document.createElement("figure");
        
        // HEADLINE
        const h3 = document.createElement("h3");
        h3.innerHTML = `<h3>${item.name}</h3>`;
        // IMAGE
        const figImg = document.createElement("img");
        const arrSpeciesImages = speciesImages[0].image;

        // FIGCAPTION
        const figCap = document.createElement("figcaption");
        const figUl = document.createElement("ul");

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

        species.append(figure);
        figCap.append(figUl);
        figure.append(h3, figImg, figCap);
        ul.append(liName, liClassification, liLifespan,liHairColors,liSkinColors, liEyeColors, liPeople, liFilms);
    }
    species.append(ul);
  });

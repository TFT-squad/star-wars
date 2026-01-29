const body = document.body;

fetch("https://swapi.info/api/species")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    
    const ul = document.createElement("ul");
    data.sort((a, b) => a.name.localeCompare(b.name)); // SORTERET På ALFABET EFTER DIRECTOR.
    for(item of data){
        console.log(item);

        const {name, classification, average_lifespan, people, eye_colors, hair_colors, skin_colors, language, films} = item;

        

        const liName = document.createElement("li");
        liName.innerHTML = `<b>Race:</b> ${name}`;

        const liClassification = document.createElement("li");
        liClassification.innerHTML = `<b>Classification:</b> ${classification}`;

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

        ul.append(liName, liClassification, liLifespan,liHairColors,liSkinColors, liEyeColors, liPeople, liFilms);
    }
    body.append(ul);
  });

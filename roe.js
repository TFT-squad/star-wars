const container = document.getElementById("containerTest");

fetch("https://swapi.info/api/films")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.sort((a, b) => a.episode_id - b.episode_id);
    // data.sort((a, b) => a.director.localeCompare(b.director)); // SORTERET På ALFABET EFTER DIRECTOR.

    const ul = document.createElement("ul");

    for (item of data) {
      console.log(item);
      const liWrapper = document.createElement("li");
      const ulInner = document.createElement("ul");
      liWrapper.innerHTML = `<h3>${item.title}</h3>`;
      liWrapper.append(ulInner);
      ul.append(liWrapper);

      const liRelease = document.createElement("li");
      liRelease.innerHTML = `<p><b>Release Date:</b> ${item.release_date}</p>`;

      const liEpisode = document.createElement("li");
      liEpisode.innerHTML = `<p><b>Episode:</b> ${item.episode_id}</p>`;

      const liDirector = document.createElement("li");
      liDirector.innerHTML = `<p><b>Producer:</b> ${item.director}</p>`;

      ulInner.append(liRelease, liEpisode, liDirector);
    }
    container.append(ul);
  });

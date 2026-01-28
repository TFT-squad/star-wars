const container = document.getElementById("containerTest");

const movieImages = [
  { episode_id: 1, image: "./assets/images/episode1.jpg" },
  { episode_id: 2, image: "./assets/images/episode2.jpg" },
  { episode_id: 3, image: "./assets/images/episode3.jpg" },
  { episode_id: 4, image: "./assets/images/episode4.jpg" },
  { episode_id: 5, image: "./assets/images/episode5.jpg" },
  { episode_id: 6, image: "./assets/images/episode6.jpg" },
];

fetch("https://swapi.info/api/films")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      console.log(movieImages);
      data.sort((a, b) => a.episode_id - b.episode_id);
      // data.sort((a, b) => a.director.localeCompare(b.director)); // SORTERET På ALFABET EFTER DIRECTOR.

      const ul = document.createElement("ul");

      for (item of data) {
        console.log(item);
        const image = movieImages.filter(
          (x) => x.episode_id === item.episode_id,
        );
        console.log(image);
        const liWrapper = document.createElement("li");
        const ulInner = document.createElement("ul");
        liWrapper.innerHTML = `<h3>${item.title}</h3>`;
        liWrapper.append(ulInner);
        ul.append(liWrapper);

        const liImage = document.createElement("li");
        liImage.innerHTML = `<img src="${image[0].image}"></img>`;

        const liRelease = document.createElement("li");
        liRelease.innerHTML = `<p><b>Release Date:</b> ${item.release_date}</p>`;

        const liEpisode = document.createElement("li");
        liEpisode.innerHTML = `<p><b>Episode:</b> ${item.episode_id}</p>`;

        const liDirector = document.createElement("li");
        liDirector.innerHTML = `<p><b>Producer:</b> ${item.director}</p>`;

        ulInner.append(liImage, liRelease, liEpisode, liDirector);
      }
      container.append(ul);
    }
  })
  .catch((error) => {
    console.error(error);
  });

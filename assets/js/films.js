const container = document.getElementById("containerTest");

const movieImages = [
  { episode_id: 1, image: "../images/episode1.jpg" },
  { episode_id: 2, image: "../images/episode2.jpg" },
  { episode_id: 3, image: "../images/episode3.jpg" },
  { episode_id: 4, image: "../images/episode4.jpg" },
  { episode_id: 5, image: "../images/episode5.jpg" },
  { episode_id: 6, image: "../images/episode6.jpg" },
];

fetch("https://swapi.info/api/films")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      console.log(movieImages);
      data.sort((a, b) => a.episode_id - b.episode_id);
      const figure = document.createElement("figure");

      for (item of data) {
        console.log(item);
        const arrMovieImages = movieImages.filter(
          (x) => x.episode_id === item.episode_id,
        );

        // HEADLINE + IMAGE SECTION

        const headline = document.createElement("h3");
        headline.innerText = `${item.title}`;

        const figImg = document.createElement("img");
        figImg.src = arrMovieImages[0]?.image || "";
        // FIG CAPTION SECTION

        const figCap = document.createElement("figcaption");
        const figUL = document.createElement("ul");

        const liRelease = document.createElement("li");
        liRelease.innerHTML = `<p><b>Release Date:</b> ${item.release_date}</p>`;

        const liEpisode = document.createElement("li");
        liEpisode.innerHTML = `<p><b>Episode:</b> ${item.episode_id}</p>`;

        const liDirector = document.createElement("li");
        liDirector.innerHTML = `<p><b>Producer:</b> ${item.director}</p>`;

        // APPENDING
        figUL.append(liRelease, liEpisode, liDirector);
        figCap.append(figUL);
        figure.append(headline, figImg, figCap);
        container.append(figure);
      }
    }
  });

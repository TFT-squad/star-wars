document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const preContent = container.querySelector(".pre-content");
  const image = container.querySelector(".image");
  const logo = image.querySelector("img");
  const content = container.querySelector(".content");
  const credits = content.querySelector(".amazing-credits");

  // Use the introAudio defined in audio.js
  const introAudio = window.introAudio;

  content.style.display = "none";

  // Fade in text
  preContent.style.opacity = "0";
  preContent.style.display = "block";

  setTimeout(() => {
    preContent.style.transition = "opacity 2s";
    preContent.style.opacity = "1";

    setTimeout(() => {
      preContent.style.opacity = "0";

      setTimeout(() => {
        preContent.style.display = "none";
        introAudio.play();

        // Show logo (optional)
        image.style.display = "block";
        logo.classList.add("animate-logo");

        setTimeout(() => {
          content.style.display = "block";
          credits.classList.add("animate");

          setTimeout(() => {
            introAudio.pause();
            content.style.display = "none";

            // Remove background so the rest of the page shows through
            container.style.background = "none";
            container.style.backgroundColor = "transparent";
          }, 60000); // 60 seconds
        }, 6000);
      }, 2000);
    }, 2000);
  }, 2000);
});

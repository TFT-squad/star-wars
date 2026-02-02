document.addEventListener("DOMContentLoaded", () => {
  const bgAudio = document.getElementById("bg-audio");
  const slider = document.getElementById("volume-slider");

  // Intro theme (one‑shot)
  const introAudio = new Audio("./assets/audio/star-wars-credits.mp3");

  // Expose introAudio so hero-intro.js can use it
  window.introAudio = introAudio;

  // Set initial volume (0–50 → 0.0–1.0)
  const initialVolume = 5 / 50; // 5 out of 50
  bgAudio.volume = initialVolume;
  introAudio.volume = initialVolume;

  // Link slider to audio volume
  slider.addEventListener("input", function () {
    const value = Number(this.value) / 50;
    bgAudio.volume = value;
    introAudio.volume = value;

    // Update lightsaber blade width (0–100%)
    const percent = value * 100;
    this.style.setProperty("--volume-width", `${percent}%`);
  });

  // Unmute bgAudio on first interaction (optional)
  document.addEventListener(
    "click",
    () => {
      bgAudio.muted = false;
    },
    { once: true },
  );
});

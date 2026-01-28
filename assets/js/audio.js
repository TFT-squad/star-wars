document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-audio");
  const slider = document.getElementById("volume-slider");

  // Set initial volume (e.g. 30%)
  audio.volume = 0.1;

  // Link slider to audio volume
  slider.addEventListener("input", function () {
    audio.volume = this.value / 100;
  });
});

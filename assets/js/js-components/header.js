const logos = document.querySelectorAll(".header-logo");

logos.forEach((logo) => {
  logo.addEventListener("click", function () {
    logo.classList.toggle("spin");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerNav = document.querySelector(".header-nav");
  const burgerMenus = document.querySelectorAll(".burger-menu");

  burgerMenus.forEach((burgerMenu) => {
    burgerMenu.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("active");
      headerNav.classList.toggle("open");
      header.style.flexDirection = "column";
    });
  });
});

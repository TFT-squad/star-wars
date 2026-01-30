document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerNav = document.querySelector(".header-nav");
  const headerUl = document.querySelector(".header-nav ul");
  const burgerMenu = document.querySelectorAll(".burger-menu");

  // Helper: apply mobile flex styles
  function setMobileFlex() {
    header.style.flexDirection = "column";
    headerNav.style.flexDirection = "column";
    headerUl.style.flexDirection = "column";
  }

  // Helper: clear inline flex styles (let CSS media query take over)
  function clearFlexStyles() {
    header.style.flexDirection = "";
    headerNav.style.flexDirection = "";
    headerUl.style.flexDirection = "";
  }

  // Decide what to do based on current width
  function updateFlexForWidth() {
    if (window.innerWidth < 1200) {
      clearFlexStyles(); // just in case
      // Keep mobile flex only when burger is active
      if (headerUl.classList.contains("open")) {
        setMobileFlex();
      }
    } else {
      clearFlexStyles(); // let CSS handle it
    }
  }

  // Burger click: toggle menu and flex on small screens
  burgerMenu.forEach((burger) => {
    burger.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("active");
      headerUl.classList.toggle("open");

      updateFlexForWidth(); // apply or clear flex styles
    });
  });

  // On resize, re‑evaluate
  window.addEventListener("resize", updateFlexForWidth);

  // Run once on load
  updateFlexForWidth();
});

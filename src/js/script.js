
  const menu = document.getElementById("menu");
  const openMenuBtn = document.querySelector(".header__menu--btn");
  const closeMenuBtn = document.querySelector(".menu-toggle");

  openMenuBtn.addEventListener("click", () => {
    menu.classList.add("menu--active");
  });

  closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("menu--active");
  });
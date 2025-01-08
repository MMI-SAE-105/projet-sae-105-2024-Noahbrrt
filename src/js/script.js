
  const menu = document.getElementById("menu");
  const openMenuBtn = document.querySelector(".header__menu--btn");
  const closeMenuBtn = document.querySelector(".menu-toggle");

  openMenuBtn.addEventListener("click", () => {
    menu.classList.add("menu--active");
  });

  closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("menu--active");
  });

  const carousel = document.querySelector(".carousel__container");
  const prevButton = document.createElement("button");
  const nextButton = document.createElement("button");
  
  prevButton.classList.add("carousel__button", "carousel__button--prev");
  nextButton.classList.add("carousel__button", "carousel__button--next");
  prevButton.innerHTML = "◀";
  nextButton.innerHTML = "▶";
  
  
  carousel.parentElement.insertBefore(prevButton, carousel);
  carousel.parentElement.appendChild(nextButton);
  
  const carouselItems = document.querySelectorAll(".carousel__item");
  const scrollAmount = carouselItems[0].clientWidth + 20; 
  
  prevButton.addEventListener("click", () => {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
  
  nextButton.addEventListener("click", () => {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  

 
const headerBurger = document.querySelector(".header__burger");
const itemHeaderBurger = document.querySelectorAll(".header__burger-btn");
const menuBurger = document.querySelector(".header__list");

headerBurger.addEventListener("click", clickBurgerBtn);

function clickBurgerBtn(event) {
  event.preventDefault();

  itemHeaderBurger.forEach((item) => item.classList.toggle("active"));
  menuBurger.classList.toggle("show");
}

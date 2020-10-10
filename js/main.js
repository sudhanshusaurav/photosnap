let burger = document.querySelector(".burger");
let burgerLine = document.querySelector(".line");
let headerNav = document.querySelector(".header__nav");

burger.addEventListener("click", () => {
  burgerLine.classList.toggle("line--open");
  headerNav.classList.toggle("header__nav--open");
});

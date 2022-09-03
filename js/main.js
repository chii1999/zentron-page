const hamburger = document.querySelector("#hamBurger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});
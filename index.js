const toggleButton = document.getElementsByClassName("header__hamburger")[0];
const navLinks = document.getElementsByClassName("header__links")[0];

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

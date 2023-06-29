const navbarMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navbarMenu.addEventListener("click", showMobileMenu);
navbarEmail.addEventListener("click", showDesktopMenu);

function showDesktopMenu() {
    desktopMenu.classList.toggle("hide");
}

function showMobileMenu() {
    mobileMenu.classList.toggle("hide");
}

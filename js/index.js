const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const openHamburgerBtn = $("#open-hamburger");
const closeHamburgerBtn = $("#close-hamburger");

function openHamburgerMenu() {
  const hamburgerMenu = $("#hamburger-menu");
  hamburgerMenu.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeHamburgerMenu() {
  const hamburgerMenu = $("#hamburger-menu");
  hamburgerMenu.style.display = "none";
  document.body.style.overflow = "";
}

openHamburgerBtn.onclick = function () {
  openHamburgerMenu();
};

closeHamburgerBtn.onclick = function () {
  closeHamburgerMenu();
};

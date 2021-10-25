const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const openHamburgerBtn = $("#open-hamburger");
const closeHamburgerBtn = $("#close-hamburger");
const furnitureNextBtn = $("#furniture-next");
const furniturePreBtn = $("#furniture-pre");
const quoteNextBtn = $("#quote-next");
const quotePreBtn = $("#quote-pre");

function changeQuote() {
  const quote = $("#quote");
  quote.innerHTML = `We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.(Changed)`;
  quote.classList.add("appearance-ani");
  setTimeout(() => {
    quote.classList.remove("appearance-ani");
  }, 600);
}

function furniturePre() {
  const furnitures = $("#furnitures");
  const currentScroll = furnitures.scrollLeft;
  furnitures.scrollTo({
    top: 0,
    left: currentScroll - 380, // Move back 380px, 380px is width of a item (include gap)
    behavior: "smooth",
  });
}

function furnitureNext() {
  const furnitures = $("#furnitures");
  const currentScroll = furnitures.scrollLeft;
  furnitures.scrollTo({
    top: 0,
    left: currentScroll + 380, // Move back 380px, 380px is width of a item (include gap)
    behavior: "smooth",
  });
}

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

quoteNextBtn.onclick = function () {
  changeQuote();
};

quotePreBtn.onclick = function () {
  changeQuote();
};

furnitureNextBtn.onclick = function () {
  furnitureNext();
};

furniturePreBtn.onclick = function () {
  furniturePre();
};

openHamburgerBtn.onclick = function () {
  openHamburgerMenu();
};

closeHamburgerBtn.onclick = function () {
  closeHamburgerMenu();
};

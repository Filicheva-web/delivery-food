const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".close");

cartButton.addEventListener("click", togleModal);
modalClose.addEventListener("click", togleModal);

function togleModal() {
  modal.classList.toggle("is-open");
}

new WOW().init();

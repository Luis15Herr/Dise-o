// Agrega este script en tu archivo JavaScript

const hideFormButton = document.querySelector(".hide-form-button");
const newsletterForm = document.querySelector(".newsletter__form");
const successForm = document.querySelector(".form__success");

hideFormButton.addEventListener("click", () => {
  event.preventDefault();
  newsletterForm.classList.add("hide");
  newsletterForm.classList.add("newsletter__form--success");
  successForm.classList.remove("displayn");
});

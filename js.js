// Agrega este script en tu archivo JavaScript

const hideFormButton = document.querySelector(".hide-form-button");
const newsletterForm = document.querySelector(".newsletter__form");
const successForm = document.querySelector(".form__success");
const successBtn = document.querySelector(".form__btn--success");
const formPosition = newsletterForm.getBoundingClientRect().top;
const emailInput = document.querySelector(".form__email");
const form = document.querySelector("form");

hideFormButton.addEventListener("click", () => {
  event.preventDefault();

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    form.classList.remove("error");
    newsletterForm.classList.add("newsletter__form--success");
    successForm.classList.add("form__success--shown");
    return true;
  }
  emailInput.classList.add("form__email--shaking");
  form.classList.add("error");
  return false;
});

emailInput.addEventListener("animationend", function (e) {
  console.log(e);
  if (e.animationName === "horizontal-shaking") {
    emailInput.classList.remove("form__email--shaking");
  }
});

successBtn.addEventListener("click", () => {
  event.preventDefault();
  successForm.classList.remove("form__success--shown");
  newsletterForm.classList.remove("newsletter__form--success");
  emailInput.value = "";
});

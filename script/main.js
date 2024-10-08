const bookmarkButton = document.querySelector(".bookmark");
const dialog = document.querySelector("dialog");
const showModalButton = document.querySelectorAll(".show-modal");
const closeModalButton = document.querySelector(".close-modal");
const checkBoxes = document.querySelectorAll(".checkbox");
const modalcards = document.querySelectorAll(".modal-cards");
const pledgeSection = document.querySelectorAll(".pledge-div");
const Modal2Buttons = document.querySelectorAll(".continue");
const dialog2 = document.querySelector(".dialog2");
const body = document.querySelector("body");
const hamburgerIcon = document.querySelector(".hamburger");
const pledgeInputs = document.querySelectorAll("input");
let pledgeLeft = document.querySelectorAll(".nums");
const mobileMenu = document.querySelector(".nav-items");
const fakeButtons = document.querySelectorAll(".double");

console.dir(pledgeInputs);

hamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

pledgeInputs.forEach((pledgeInput) => {
  pledgeInput.addEventListener("input", () => {
    setTimeout(() => {
      if (pledgeInput.value < 25) {
        pledgeInput.style.border = "1px solid red";
      } else {
        pledgeInput.style.border = "none";
      }
    }, 1000);
  });
  fakeButtons.forEach((fakeButton) => {
    console.dir(fakeButton);
  });
});

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.firstElementChild.classList.toggle("bn-image");
  bookmarkButton.lastElementChild.classList.toggle("active");
});

showModalButton.forEach((button) => {
  button.addEventListener("click", () => {
    body.classList.add("overflow");
    dialog.showModal();
  });
});

closeModalButton.addEventListener("click", () => {
  body.classList.remove("overflow");
  dialog.close();
});

checkBoxes.forEach(function (checkBox, offset) {
  checkBox.addEventListener("click", () => {
    checkBox.firstElementChild.classList.toggle("display");
    checkBox.offsetParent.classList.toggle("active-card");
    checkBox.offsetParent
      .querySelector(".trial")
      .classList.toggle("show-pledge");
  });
});

Modal2Buttons.forEach((butto) => {
  butto.addEventListener("click", () => {
    dialog2.showModal();
  });
});

dialog2.lastElementChild.addEventListener("click", () => {
  body.classList.remove("overflow");
  dialog.close();
  dialog2.close();
});

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
const primaryButtons = document.querySelectorAll(".continue");
let numbersLeft = document.querySelectorAll(".nums");
let bambooCards = document.querySelectorAll(".bamboo-cards");

console.dir(primaryButtons);

// LAST POINT OF CORRECTION

// let textHolder = $("#hello-world
// console.log(textHolder);

// console.log($("#hello-world").text());
// $("#hello-world").text("This is another text");

// $("#hello-world").click(function () {
//   console.log("Clicked");
//   $("#another-text").fadeOut(1000);
// });

// numbersLeft.forEach((number, offset) => {
//   primaryButtons[offset].addEventListener("click", () => {
//     number.textContent = 1;
//   });
// });

modalcards.forEach((modalcard, offset) => {
  modalcard.addEventListener("click", (e) => {
    let clickedElement = e.target;

    if (e.target.classList.contains("continue")) {
      let newNode = +e.target.offsetParent.querySelector(".num").innerHTML;
      let newNode1 = +e.target.offsetParent.querySelector(".nums").innerHTML;

      modalcard.querySelector(".num").innerHTML = --newNode;
      modalcard.querySelector(".nums").innerHTML = --newNode1;
      modalcard.querySelector("#enter-pledge").value = "";

      bambooCards.forEach((bc) => {
        let outbc = bc.querySelector(".stats-number");
        if (outbc.innerHTML === 0) {
          outbc.innerHTML === outbc.innerHTML;
        } else if (
          outbc.innerHTML > 70 &&
          modalcard.querySelector(".num").innerHTML > 70
        ) {
          outbc.innerHTML -= 1;
        } else if (
          outbc.innerHTML < 70 &&
          modalcard.querySelector(".num").innerHTML < 70
        ) {
          outbc.innerHTML -= 1;
        }
      });

      // num = Number(newNode);
      // const element = modalcard.querySelector(".numbers").children[0];
      // element.replaceChild(newNode, element.childNodes[0]);
    }
  });
});

primaryButtons.forEach((primaryButton, offset) => {
  primaryButton.disabled = true;
});

hamburgerIcon.addEventListener("click", () => {
  if (hamburgerIcon.getAttribute("src") === "./assets/icon-hamburger.svg") {
    hamburgerIcon.setAttribute("src", "./assets/icon-close-menu.svg");
  } else {
    hamburgerIcon.setAttribute("src", "./assets/icon-hamburger.svg");
  }
  mobileMenu.classList.toggle("show");
});

pledgeInputs.forEach((pledgeInput, offset) => {
  pledgeInput.addEventListener("input", () => {
    fakeButtons[offset].textContent = pledgeInput.value;
    setTimeout(() => {
      if (pledgeInputs[0].value < 25 && pledgeInputs[1].value < 75) {
        pledgeInput.style.border = "1px solid red";
        primaryButtons[offset].disabled = true;
      } else if (pledgeInput.value === "") {
        pledgeInput.style.border = "none";
      } else {
        pledgeInput.style.border = "none";
        primaryButtons[offset].disabled = false;
      }
    }, 1000);
  });
});

fakeButtons.forEach((fakebutton) => {
  fakebutton.style.overflowX = "scroll";
  console.dir(fakebutton);
});

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.lastElementChild.classList.toggle("bn-image");
  bookmarkButton.firstElementChild.classList.toggle("active");
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
  // location.reload();
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
  // location.reload();
});

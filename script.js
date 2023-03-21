let notation = document.querySelector("#notation");
let notationBtn = document.querySelector("#notation button");
let thanks = document.querySelector("#thanks");
let loader = document.querySelector(".loader");
let spanRatings = document.querySelectorAll(".rating span");
let note = "";
let actualNote = document.querySelector("#actual__rate");
let msgError = document.querySelector("#error__message");

function setActive() {
  spanRatings.forEach((button) => {
    button.classList.remove("is__selected");
  });
  this.classList.add("is__selected");
  note = this.textContent;
  actualNote.innerText = note;
}

spanRatings.forEach((button) => {
  button.addEventListener("click", setActive);
});

notationBtn.addEventListener("click", () => {
  if (note == "") {
    msgError.style.top = "-25px";
    msgError.style.opacity = "1";

    setTimeout(() => {
      msgError.style.top = "-100px";
      msgError.style.opacity = "0";
    }, 1500);
  } else {
    notation.classList.add("disappear");

    setTimeout(() => {
      loader.style.display = "inline-block";
      notation.style.display = "none";
    }, 500);

    setTimeout(() => {
      loader.style.display = "none";
      thanks.classList.add("appear");
      thanks.style.display = "flex";
    }, 1700);
  }
});

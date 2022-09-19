
const myInput = document.querySelector("#name-input");
const mySpan = document.querySelector("#name-output");

myInput.addEventListener("input", (event) => {
  mySpan.textContent = event.currentTarget.value;
});






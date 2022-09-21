
const myInput = {
  inputEl: document.querySelector("#name-input"),
  mySpan: document.querySelector("#name-output"),
};
myInput.inputEl.addEventListener("input", (event) => {
  if (onEmptyString(event.currentTarget.value)) {
    return (myInput.mySpan.textContent = "Anonymous");
  }
  myInput.mySpan.textContent = event.currentTarget.value;
});

function onEmptyString(str) {
  return !str || 0 === str.length;
}



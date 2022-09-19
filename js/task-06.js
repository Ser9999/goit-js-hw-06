const input = document.querySelector("#validation-input");
input.addEventListener("blur", onBlur);
function onBlur(event) {
  const input = event.currentTarget;
  const inputLength = Number(input.dataset.length);
  if (input.value.length === inputLength) {
    input.classList.remove("invalid");
    return input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    return input.classList.add("invalid");
  }
}

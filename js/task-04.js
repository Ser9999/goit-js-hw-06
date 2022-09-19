const decrimentBtnEl = document.querySelector("[data-action='decrement']");
const inrementBtnEl = document.querySelector("[data-action='increment']");

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};

inrementBtnEl.addEventListener("click", increment);
decrimentBtnEl.addEventListener("click", decrement);





const listEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
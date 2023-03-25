const liItem = document.querySelectorAll(".item");

liItem.forEach((el) => {
  console.log(`Number of categories: ${el.firstElementChild.textContent}`);
  console.log(el.lastElementChild.children.length);
});

let counterValue = 0;

const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
const span = document.getElementById("value");

btnIncr.addEventListener("click", () => {
  counterValue += 1;
  span.textContent = counterValue;
});
btnDecr.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;
});

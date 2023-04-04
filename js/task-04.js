let counterValue = 0;

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');
const span = document.getElementById("value");

decrBtn.addEventListener("click", () => {
  counterValue -= 1;
  span.textContent = counterValue;
});
incrBtn.addEventListener("click", () => {
  counterValue += 1;
  span.textContent = counterValue;
});

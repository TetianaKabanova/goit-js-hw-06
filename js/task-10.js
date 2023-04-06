const divControls = document.getElementById("controls");
const divBoxes = document.getElementById("boxes");
const input = divControls.firstElementChild;
const btnCreate = input.nextElementSibling;
const btnDestroy = btnCreate.nextElementSibling;
const startSize = 30;

function getNumber() {
  return `${input.value}`;
}
input.addEventListener("input", getNumber);

btnCreate.addEventListener("click", createBoxes);
function createBoxes(amount) {
  amount = input.value;

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    let size = startSize + i * 10;
    divEl.style.width = size + "px";
    divEl.style.height = size + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(divEl);
  }
}

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes(amount) {
  divBoxes.remove(divBoxes.amount);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

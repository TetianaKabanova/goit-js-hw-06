const inputEl = document.getElementById("validation-input");
const dataLength = inputEl.dataset.length;
inputEl.addEventListener("blur", () => {
  const inputLength = inputEl.value.length;
  if (dataLength <= inputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});

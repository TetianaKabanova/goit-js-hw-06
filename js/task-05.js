const refs = {
  input: document.getElementById("name-input"),
  output: document.getElementById("name-output"),
  spanEl: document.querySelector("span"),
};
refs.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  if (event.currentTarget.value.trim() !== "") {
    refs.output.textContent = event.currentTarget.value;
  } else {
    refs.output.textContent === "";
    return (refs.output.textContent = "Anonymous");
  }
}

const fontEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

fontEl.addEventListener("input", changeFontSizeEl);

function changeFontSizeEl(event) {
  textEl.style.fontSize = event.currentTarget.value + "px";
}

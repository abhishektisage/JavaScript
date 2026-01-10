let input = document.getElementById("msgInput");
let display = document.getElementById("display");

let sizeBtn = document.getElementById("sizeBtn");
let textBtn = document.getElementById("textBtn");
let resetBtn = document.getElementById("resetBtn");

/* Show text */
input.addEventListener("input", () => {
  display.innerText = input.value;
});

/* Increase text size */
sizeBtn.addEventListener("click", () => {
  display.style.fontSize = "30px";
});

/* Change text */
textBtn.addEventListener("click", () => {
  display.innerText = "Text Changed!";
});

/* Reset */
resetBtn.addEventListener("click", () => {
  input.value = "";
  display.innerText = "Your text will appear here";
  display.style.fontSize = "16px";
});

let input = document.getElementById("name");
let show = document.getElementById("show");

let colorBtn = document.getElementById("colorBtn");
let countBtn = document.getElementById("countBtn");
let clearBtn = document.getElementById("clearBtn");

let countText = document.getElementById("count");
let count = 0;

/* Show name */
input.addEventListener("input", () => {
  show.innerText = input.value;
});

/* Change background color */
colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightblue";
});

/* Count clicks */
countBtn.addEventListener("click", () => {
  count++;
  countText.innerText = count;
});

/* Clear everything */
clearBtn.addEventListener("click", () => {
  input.value = "";
  show.innerText = "";
  count = 0;
  countText.innerText = 0;
  document.body.style.backgroundColor = "white";
});

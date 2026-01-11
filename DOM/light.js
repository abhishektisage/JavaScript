let bulb = document.getElementById("bulb");
let status = document.getElementById("status");

let onBtn = document.getElementById("onBtn");
let offBtn = document.getElementById("offBtn");

/* Turn ON */
onBtn.addEventListener("click", () => {
  bulb.style.backgroundColor = "yellow";
  status.innerText = "Light is ON";
});

/* Turn OFF */
offBtn.addEventListener("click", () => {
  bulb.style.backgroundColor = "gray";
  status.innerText = "Light is OFF";
});

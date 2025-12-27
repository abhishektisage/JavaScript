let box = document.getElementById("box");

box.addEventListener("focus", () => {
    box.style.backgroundColor = "yellow";
});

box.addEventListener("blur", () => {
    box.style.backgroundColor = "white";
});

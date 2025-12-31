let nameInput = document.querySelector("#name");

// input event → fires while typing
nameInput.addEventListener("input", function () {
    console.log("Input event:", nameInput.value);
});

// change event → fires after focus is lost
nameInput.addEventListener("change", function () {
    console.log("Change event:", nameInput.value);
});

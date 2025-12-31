let form = document.querySelector("#loginForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    console.log("Username:", username.value);
    console.log("Password:", password.value);

    alert("Form submitted");
});

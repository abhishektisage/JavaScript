let suUser = document.getElementById("suUser");
let suPass = document.getElementById("suPass");
let liUser = document.getElementById("liUser");
let liPass = document.getElementById("liPass");

let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let msg = document.getElementById("msg");

let savedUser = "";
let savedPass = "";

/* Signup */
signupBtn.addEventListener("click", () => {
  if (suUser.value === "" || suPass.value === "") {
    msg.innerText = "Fill all signup fields!";
    return;
  }

  savedUser = suUser.value;
  savedPass = suPass.value;

  msg.innerText = "Signup successful!";
  suUser.value = "";
  suPass.value = "";
});

/* Login */
loginBtn.addEventListener("click", () => {
  if (liUser.value === savedUser && liPass.value === savedPass) {
    msg.innerText = "Login successful!";
  } else {
    msg.innerText = "Wrong username or password!";
  }

  liUser.value = "";
  liPass.value = "";
});

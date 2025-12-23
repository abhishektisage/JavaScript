// Qs1: Create input and button
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me";

document.body.append(input);
document.body.append(button);

// Qs2: Set attributes
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

// Qs3: Add class to button (CSS handles styling)
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// Qs4: Create h1
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
h1.classList.add("heading");
document.body.append(h1);

// Qs5: Create paragraph
let p = document.createElement("p");
p.innerHTML = "Abhishek<b>Tisage</b> ";
document.body.append(p);

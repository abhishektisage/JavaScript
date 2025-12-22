let para1 = document.createElement("p");
para1.innerText = "Hey ! I'M red";
document.querySelector("body").append(para1);
para1.classList.add("red");

let h3 = document.createElement("h3");
h3.innerText = "Hey ! I'M blue";   // ❗ use h3
document.querySelector("body").append(h3);
h3.classList.add("blue");          // ❗ use h3


let div=document.createElement("div");
let h1=document.createElement("h1");
let para=document.createElement("p");

h1.innerText="I'M in a div";
para.innerText="ME TOO!!";

div.append(h1);
div.append(para);
div.classList.add("box");

document.querySelector("body").append(div);


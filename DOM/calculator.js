let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let result = document.getElementById("result");

document.getElementById("add").onclick = () => {
  result.innerText = Number(n1.value) + Number(n2.value);
};

document.getElementById("sub").onclick = () => {
  result.innerText = Number(n1.value) - Number(n2.value);
};

document.getElementById("mul").onclick = () => {
  result.innerText = Number(n1.value) * Number(n2.value);
};

document.getElementById("div").onclick = () => {
  result.innerText = Number(n1.value) / Number(n2.value);
};

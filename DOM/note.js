let input = document.getElementById("noteInput");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let list = document.getElementById("noteList");


addBtn.addEventListener("click", () => {
  if (input.value === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;

  list.appendChild(li);
  input.value = "";
});

clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
});

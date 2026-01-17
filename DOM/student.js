let nameInput = document.getElementById("name");
let marksInput = document.getElementById("marks");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let list = document.getElementById("studentList");

addBtn.addEventListener("click", () => {
  let name = nameInput.value;
  let marks = Number(marksInput.value);

  if (name === "" || marks === "") return;

  let li = document.createElement("li");

  let status = marks >= 40 ? "Pass" : "Fail";

  li.innerText = `${name} - ${marks} (${status})`;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);

  nameInput.value = "";
  marksInput.value = "";
});

clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
});

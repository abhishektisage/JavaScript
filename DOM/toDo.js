let btn = document.getElementById("add");

btn.addEventListener("click", () => {
  let task = document.getElementById("task").value;
  let li = document.createElement("li");
  li.innerText = task;
  document.getElementById("list").appendChild(li);
});

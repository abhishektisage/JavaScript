let titleInput = document.getElementById("title");
let amountInput = document.getElementById("amount");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("expenseList");
let totalText = document.getElementById("total");

let total = 0;

addBtn.addEventListener("click", () => {
  let title = titleInput.value;
  let amount = Number(amountInput.value);

  if (title === "" || amount === 0) return;

  let li = document.createElement("li");
  li.innerText = `${title} - ₹${amount}`;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  delBtn.addEventListener("click", () => {
    total -= amount;
    totalText.innerText = total;
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);

  total += amount;
  totalText.innerText = total;

  titleInput.value = "";
  amountInput.value = "";
});

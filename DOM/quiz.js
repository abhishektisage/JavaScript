let buttons = document.querySelectorAll(".opt");
let result = document.getElementById("result");
let scoreText = document.getElementById("score");

let score = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "4") {
      result.innerText = "Correct!";
      score++;
    } else {
      result.innerText = "Wrong!";
    }
    scoreText.innerText = score;
  });
});

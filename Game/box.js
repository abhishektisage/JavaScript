let score = 0;
let timeLeft = 30;

const box = document.getElementById("box");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");

function moveBox() {
    let x = Math.random() * 350;
    let y = Math.random() * 350;

    box.style.left = x + "px";
    box.style.top = y + "px";
}

box.addEventListener("click", () => {
    score++;
    scoreText.innerText = score;
    moveBox();
});

let timer = setInterval(() => {
    timeLeft--;
    timeText.innerText = timeLeft;

    if (timeLeft === 0) {
        clearInterval(timer);
        alert("Game Over! Your Score: " + score);
    }
}, 1000);

moveBox();

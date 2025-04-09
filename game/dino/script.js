const dino = document.getElementById("dino");
const kaktus = document.getElementById("kaktus");
const jumpBtn = document.getElementById("jumpBtn");
const pauseBtn = document.getElementById("pauseBtn");
const restartBtn = document.getElementById("restartBtn");
const popup = document.getElementById("gameOverPopup");

const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("highScore");

let score = 0;
let highScore = 0;
let isJumping = false;
let isPaused = false;
let kaktusPos = 600;
let gameLoop;

function startGame() {
  gameLoop = setInterval(() => {
    if (!isPaused) {
      kaktusPos -= 5; // Cepat

      if (kaktusPos < -30) {
        kaktusPos = 600;
        score++;
        if (score > highScore) highScore = score;
        scoreDisplay.textContent = score;
        highScoreDisplay.textContent = highScore;
      }

      kaktus.style.left = kaktusPos + "px";

      const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));

      // Area tabrakan lebih kecil agar lebih mudah
      if (kaktusPos < 70 && kaktusPos > 50 && dinoBottom < 50) {
        clearInterval(gameLoop);
        popup.style.display = "flex";
        score = 0;
        scoreDisplay.textContent = score;
      }
    }
  }, 20);
}

function jump() {
  if (isJumping || isPaused) return;
  isJumping = true;
  dino.classList.add("jump");
  setTimeout(() => {
    dino.classList.remove("jump");
    isJumping = false;
  }, 500);
}

function pauseGame() {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? "Resume" : "Pause";
}

function restartGame() {
  kaktusPos = 600;
  kaktus.style.left = "600px";
  isPaused = false;
  popup.style.display = "none";
  pauseBtn.textContent = "Pause";
  clearInterval(gameLoop);
  startGame();
}

jumpBtn.addEventListener("click", jump);
pauseBtn.addEventListener("click", pauseGame);
restartBtn.addEventListener("click", restartGame);

startGame();
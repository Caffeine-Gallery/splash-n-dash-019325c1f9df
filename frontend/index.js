import { backend } from 'declarations/backend';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const characterSize = 20;
let characterX = 20;
let characterY = 20;
const poolX = 200;
const poolY = 200;
const poolSize = 100;

let gameRunning = true;
let battleMode = false;
let bearHP = 100;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw field
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw pool
  ctx.fillStyle = 'blue';
  ctx.fillRect(poolX, poolY, poolSize, poolSize);

  // Draw character
  ctx.fillStyle = 'red';
  ctx.fillRect(characterX, characterY, characterSize, characterSize);

  if (battleMode) {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Bear HP: ${bearHP}`, 10, 30);
  }
}

function update() {
  if (!gameRunning) return;

  if (
    characterX < poolX + poolSize &&
    characterX + characterSize > poolX &&
    characterY < poolY + poolSize &&
    characterY + characterSize > poolY
  ) {
    gameRunning = false;
    alert('Game Over! You fell in the pool.');
    return;
  }

  if (!battleMode && Math.random() < 0.01) {
    battleMode = true;
    alert('You encountered a bear! Prepare for battle.');
  }

  if (battleMode) {
    // Implement battle logic here
  } else {
    // Random walk
    const dx = Math.floor(Math.random() * 3) - 1;
    const dy = Math.floor(Math.random() * 3) - 1;
    characterX += dx * 5;
    characterY += dy * 5;
  }
}

function gameLoop() {
  update();
  draw();
  if (gameRunning) requestAnimationFrame(gameLoop);
}


window.addEventListener('keydown', (event) => {
  if (battleMode) {
    if (event.key === 'a') {
      bearHP -= 10;
      if (bearHP <= 0) {
        battleMode = false;
        alert('You defeated the bear!');
      }
    }
  }
});


gameLoop();


console.log('hello');
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let btn = document.querySelector('.btn');
let btn1 = document.querySelector('.btn1');
let k = 'red';

class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
let Speed = 5;
let tileCount = 24;
let tileSize = 20;
let headX = 10;
let headY = 10;
const SnakeParts = [];
let tailLength = 2;
let appleX = 5;
let appleY = 5;
let xVelocity = 0;
let yVelocity = 0;
let v = function () {
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
};

function drawGame() {
  changeSnakePosition();
  let result = isGameOver();
  if (result) {
    return;
  }
  clearScreen();
  drawSnake();
  drawApple(k);
  checkAppleCollision();

  setTimeout(drawGame, 1000 / Speed);
}

function clearScreen() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}

function drawSnake() {
  ctx.fillStyle = 'green';
  for (let i = 0; i < SnakeParts.length; i++) {
    let part = SnakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }
  SnakeParts.push(new SnakePart(headX, headY));
  while (SnakeParts.length > tailLength) {
    SnakeParts.shift();
  }
  ctx.fillStyle = 'orange';
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function drawApple(k) {
  ctx.fillStyle = k;
  v();
}
function changeSnakePosition() {
  headX = headX + xVelocity;
  headY = headY + yVelocity;
}
function checkAppleCollision() {
  if (appleX == headX && appleY == headY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
  }
}
function isGameOver() {
  let gameOver = false;
  if (xVelocity === 0 && yVelocity === 0) {
    gameOver = false;
    return gameOver;
  }
  //walls
  if (headX < 0) {
    gameOver = true;
  } else if (headY < 0) {
    gameOver = true;
  } else if (headX >= tileCount + 1) {
    gameOver = true;
  } else if (headY >= tileCount + 1) {
    gameOver = true;
  }
  for (let i = 0; i < SnakeParts.length; i++) {
    let part = SnakeParts[i];
    if (part.x === headX && part.y === headY) {
      gameOver = true;
      break;
    }
  }
  if (gameOver) {
    ctx.fillStyle = 'white';
    ctx.font = '60px verdana';

    var gradient = ctx.createLinearGradient(0, 0, canvas.clientWidth, 0);
    gradient.addColorStop('0', 'magenta');
    gradient.addColorStop('0.5', 'blue');
    gradient.addColorStop('1.0', 'red');

    ctx.fillStyle = gradient;
    ctx.fillText('Game Over!', canvas.width / 6.5, canvas.height / 2);
  }
  return gameOver;
}
document.body.addEventListener('keydown', keyDown);

function keyDown(event) {
  //up
  if (event.keyCode == 38) {
    if (yVelocity == 1) return;
    yVelocity = -1;
    xVelocity = 0;
  }
  //up
  if (event.keyCode == 40) {
    if (yVelocity == -1) return;
    yVelocity = 1;
    xVelocity = 0;
  }
  //left
  if (event.keyCode == 37) {
    if (xVelocity == 1) return;
    yVelocity = 0;
    xVelocity = -1;
  }
  //right
  if (event.keyCode == 39) {
    if (xVelocity == -1) return;
    yVelocity = 0;
    xVelocity = 1;
  }
}

drawGame();
btn.addEventListener('click', function () {
  k = 'blue';
});
btn1.addEventListener('click', function () {
  k = 'pink';
});

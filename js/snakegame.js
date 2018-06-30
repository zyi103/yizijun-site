var snake;
const scl = 20;
var food;
var pressed;

function preload() {
  bg = loadSound("assets/sound/bg.wav");
}

function setup() {
  bg.loop();
  bg.setVolume(0.3);
  let canvas = createCanvas(600, 600);
  canvas.parent('canvas1');
  point = loadSound("assets/sound/point.wav");
  gameover = loadSound("assets/sound/game-over.wav");
  snake = new snake();
  frameRate(15);
  pickLocation();
  alert('Start?');
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);

}

function draw() {
  background(35);
  snake.death();
  snake.update();
  pressed = false;
  snake.show();
  if (snake.eat(food)) {
    pickLocation();
  }
  fill(255, 150, 0);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (!pressed) {
    if (snake.yspeed === 0) {
      switch (keyCode) {
        case UP_ARROW:
          snake.setDir(0, -1);
          pressed = true;
          break;
        case DOWN_ARROW:
          snake.setDir(0, 1);
          pressed = true;
          break;
      }
    }
    if (snake.xspeed === 0) {
      switch (keyCode) {
        case LEFT_ARROW:
          snake.setDir(-1, 0);
          pressed = true;
          break;
        case RIGHT_ARROW:
          snake.setDir(1, 0);
          pressed = true;
          break;
      }
    }
  }
}
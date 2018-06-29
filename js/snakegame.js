var snake;
const scl = 20;
var food;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent('canvas1');
    snake  = new snake();
    frameRate(10);

    pickLocation();
}

function pickLocation (){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);

}

function draw() {
    background(35);
    snake.update();
    snake.show();
    if (snake.eat(food)){
      pickLocation();
    }

    fill(255,150,0);
    rect(food.x, food.y,scl,scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    }
}
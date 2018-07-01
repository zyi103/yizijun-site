let player;
let boards = [];
let hit;
const boardSpeed = 8;

function setup() {
  let canvas = createCanvas(600, windowHeight);
  canvas.parent('canvas1');
  player = new Player();
}

function draw() {
  if (frameCount % 30 === 0) {
    if (boards.length > 8){
      boards.splice(0, 1);
    }
    createBoards();
  }
  background(255);
  fill(0);
  stroke(0);
  strokeWeight(2);
  displayBoards();
  player.move();
  if (checkColl()) {
    player.onBoard();
  } else {
    player.fall();
  }
  player.death();
  player.show();

}

function createBoards() {
  boards.push(new Board());
}

function displayBoards() {
  for (let i = 0; i < boards.length; i++) {
    boards[i].update();
    boards[i].show();
  }
}

function checkColl() {
  hit = false;
  for (let i = 0; i < boards.length; i++) {
    hit = collideRectRect(player.x, player.y, player.width, player.height
        , boards[i].x, boards[i].y, boards[i].width, boards[i].height);
    if (hit) {
      break;
    }
  }
  return hit;
}




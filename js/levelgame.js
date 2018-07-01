let player;
let score;
let boards = [];
let hit;
const boardSpeed = 5;

function setup() {
  let canvas = createCanvas(600, windowHeight);
  canvas.parent('canvas1');
  player = new Player();
  score = new Score();
}

function draw() {
  if (frameCount % 20 === 0) {
    if (boards.length > 12){
      boards.splice(0, 1);
    }
    createBoards();
  }
  background(255);
  score.show();
  fill(0);
  strokeWeight(2);
  displayBoards();
  player.move();
  checkYColl();
  player.fall();

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

function checkYColl() {
  hit = false;
  for (let i = 0; i < boards.length; i++) {
    hit = boards[i].Yhit(player);
    if (hit) {
      player.onBoard(boards[i]);
      break;
    }
  }
  return hit;
}



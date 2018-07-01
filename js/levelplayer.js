class Player {
  constructor() {
    this.x = width / 2;
    this.y = 300;
    this.width = 20;
    this.height = 40;
    this.speed = 0;
    this.fallspeed = -10;
    this.gravity = 0.4;
  }

  show() {
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) this.speed = -10;
    if (keyIsDown(RIGHT_ARROW)) this.speed = 10;

    if (keyIsPressed === false) this.speed = this.speed * 0.7;

    this.x = this.x + this.speed;
  }

  fall() {
    this.fallspeed = this.fallspeed + this.gravity;
    this.fallspeed = constrain ( this.fallspeed,-10,15);
    this.y = this.y + this.fallspeed;
  }

  onBoard(board) {
    if (player.y + player.height < board.y + board.height) {
      this.fallspeed = 0;
      this.y = constrain(this.y, -this.height, board.y - this.height);
    }
  }

  death(){
    if (this.y <0 || this.y > windowHeight){
      noLoop();
      alert('GAME OVER');
      alert('RESTART?');
      window.location.reload(false);
    }
  }
}
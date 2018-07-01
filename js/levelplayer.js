class Player {
  constructor() {
    this.x = width / 2;
    this.y = 300;
    this.width = 20;
    this.height = 30;
    this.speed = 0;
    this.fallspeed = -10;
    this.gravity = 0.4;
  }

  show() {
    rect(this.x - this.width / 2, this.y, this.width, this.height);
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) this.speed = -10;
    if (keyIsDown(RIGHT_ARROW)) this.speed = 10;

    if (keyIsPressed === false) this.speed = this.speed * 0.7;

    this.x = this.x + this.speed;
  }

  fall() {
    this.fallspeed = this.fallspeed + this.gravity;
    this.y = this.y + this.fallspeed;
  }

  onBoard() {
    this.fallspeed = 0;
    this.y = this.y - boardSpeed;
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
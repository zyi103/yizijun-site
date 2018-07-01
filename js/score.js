class Score {
  constructor(){
    this.x = width - 60;
    this.y = 40;
  }
  show(){
    textSize(32);
    fill(0, 102, 153);
    text((frameCount - (frameCount % 10)) /10, this.x, this.y);
  }
}
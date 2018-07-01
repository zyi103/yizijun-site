class Board {
  constructor(){
    this.width = floor(random(100, 200));
    this.height  = 20;
    this.x = random(600-this.width);
    this.y = height - this.height;
  }

  show(){
    rect(this.x,this.y,this.width,this.height);
  }

  update(){
    this.y -= boardSpeed;
  }

  Yhit(player) {
    return collideRectRect(player.x, player.y, player.width, player.height
        , this.x, this.y, this.width, this.height);
  }

}
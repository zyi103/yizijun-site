class Board {
  constructor(){
    this.width = random(200,350);
    this.height  = 10;
    this.x = random(600-this.width);
    this.y = height - this.height;
  }

  show(){
    rect(this.x,this.y,this.width,this.height);
  }

  update(){
    this.y -= boardSpeed;
  }
}
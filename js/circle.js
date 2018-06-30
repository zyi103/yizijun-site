class Circle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(2);
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
    this.growing = true;
  }

  grow() {
    if (this.growing) {
      this.r+=2;
    }
  }

  edge() {
    return (this.x + this.r/2 > width || this.x - this.r/2 < 0 ||
        this.y + this.r/2 > height || this.y - this.r/2 < 0);
  }


}

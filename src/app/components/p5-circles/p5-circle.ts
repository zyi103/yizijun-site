export class P5Circle {
  public x: number;
  public y: number;
  public r: number;
  public red: number;
  public green: number;
  public blue: number;
  public growing: boolean;

  constructor() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.r = Math.random() * 2;
    this.red = Math.random() * 255;
    this.green = Math.random() * 255;
    this.blue = Math.random() * 255;
    this.growing = true;
  }

  grow() {
    if (this.growing) {
      this.r += 2;
    }
  }

  edge() {
    return (this.x + this.r / 2 > window.innerWidth || this.x - this.r / 2 < 0 ||
      this.y + this.r / 2 > window.innerHeight || this.y - this.r / 2 < 0);
  }
}
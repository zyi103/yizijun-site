let circles = [];
let colorSca;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas1');
  fill(0);
  noStroke();
  frameRate(45);
  this.colorR = random(0,0.5);
  this.colorSca = shuffleArray([1,this.colorR*2,this.colorR]);
}

function draw() {
  background(0);
  let attemp = 0;
  const total = 15;
  let count = 0;
  while (count < total) {
    const newC = createCircle();
    if (newC !== null) {
      count++;
      circles.push(newC);
    } else {
      attemp++;
      if (attemp > 500) {
        noLoop();
        console.log('finish');
        break;
      }
    }
  }

  for (let i = 0; i < circles.length; i++) {
    if (circles[i].edge()) {
      circles[i].growing = false;
    }
    for (let z = 0; z < circles.length; z++) {
      if (i !== z) {
        const d = dist(circles[i].x, circles[i].y, circles[z].x, circles[z].y);
        if (d < circles[i].r / 2 + circles[z].r / 2 ) {
          circles[i].growing = false;
          break;
        }
      }
    }
    circles[i].grow();
    noStroke();
    fill(circles[i].red*this.colorSca[0], circles[i].green*this.colorSca[1], circles[i].blue*this.colorSca[2]);
    ellipse(circles[i].x, circles[i].y, circles[i].r);
  }
}

function createCircle() {
  let valid = true;
  let c = new Circle();
  for (let i = 0; i < circles.length; i++) {
    const d = dist(c.x, c.y, circles[i].x, circles[i].y);
    if (d < circles[i].r) {
      valid = false;
    }
  }
  if (valid) {
    return c;
  }
  else {
    return null;
  }
}

function shuffleArray(a) { // Fisher-Yates shuffle, no side effects
  var i = a.length, t, j;
  a = a.slice();
  while (--i) t = a[i], a[i] = a[j = ~~(Math.random() * (i+1))], a[j] = t;
  return a;
}

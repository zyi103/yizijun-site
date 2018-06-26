var titleFont;
var linkFont;

function preload() {
    titleFont = loadFont("assets/Monoton-Regular.ttf");
    linkFont =  loadFont("assets/PressStart2P-Regular.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < numBalls; i++) {
        balls[i] = new Ball(
            random(width),
            random(height),
            random(30, 70),
            i,
            balls
        );
    }
    noStroke();

}

function draw() {
    background(0);

    //drawTitle();
    //drawLink();

    fill(255, 34);
    //background
    balls.forEach(ball => {
        ball.collide();
        ball.move();
        ball.display();
    });

}


//link
function drawLink(){
    fill(255);
    textFont(linkFont);
    textSize(60);
    textAlign(CENTER,CENTER);
    text("DICE", this.width*.2, this.height*.3);

    this.clicked = function () {
        this.link("dice.html");
    }
}

function drawTitle(){
    fill(255, 204);
    textFont(titleFont);
    textSize(110);
    textAlign(CENTER,CENTER);
    text("Jim's JS Games Web", this.width*.5, this.height*.5);
}


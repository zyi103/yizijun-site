var cnv;
var newdice;
var num;



function setup() {
    // put setup code here
    cnv = createCanvas(windowWidth, windowHeight);
    windowResized();
    background(200);
    noLoop()
}

function draw(){
    for (i=0; i < 5; i++){

        newdice = new diceHave(i);
        newdice.display();
        switch (int(random(1,7))) {
            case 1: newdice.displayOne();break;
            case 2: newdice.displayTwo();break;
            case 3: newdice.displayThree();break;
            case 4: newdice.displayFour();break;
            case 5: newdice.displayFive();break;
            case 6: newdice.displaySix();break;
        }
    }
}

function mousePressed() {
    redraw();
}

function windowResized(){
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);

}


function diceHave(i) {

    this.width = 80;
    this.height = 120;
    var x = this.width / 2;
    var y = this.height / 2;
    this.x = (width / 6) * (i + 1) - x;
    this.y = height / 2 - y ;


    this.display = function () {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    };


    this.displayOne = function () {
        fill(0);
        ellipse(this.x + this.width*0.5, this.y + this.height*0.5, 20, 20);
    };

    this.displayTwo= function () {
        fill(0);
        ellipse(this.x + this.width*0.5, this.y + this.height*0.3, 20, 20);
        ellipse(this.x + this.width*0.5, this.y + this.height*0.7, 20, 20);
    };


    this.displayThree = function () {
        fill(0);
        ellipse(this.x + this.width*0.5, this.y + this.height*0.5, 20, 20);
        ellipse(this.x + this.width*0.5, this.y + this.height*0.25, 20, 20);
        ellipse(this.x + this.width*0.5, this.y + this.height*0.75, 20, 20);
    };

    this.displayFour = function () {
        fill(0);
        ellipse(this.x + this.width*0.7, this.y + this.height*0.3, 20, 20);
        ellipse(this.x + this.width*0.7, this.y + this.height*0.7, 20, 20);
        ellipse(this.x + this.width*0.3, this.y + this.height*0.3, 20, 20);
        ellipse(this.x + this.width*0.3, this.y + this.height*0.7, 20, 20);
    };

    this.displayFive = function () {
        fill(0);
        ellipse(this.x + this.width*0.5, this.y + this.height*0.5, 20, 20);
        ellipse(this.x + this.width*0.3, this.y + this.height*0.3, 20, 20);
        ellipse(this.x + this.width*0.7, this.y + this.height*0.3, 20, 20);
        ellipse(this.x + this.width*0.3, this.y + this.height*0.7, 20, 20);
        ellipse(this.x + this.width*0.7, this.y + this.height*0.7, 20, 20);
    };

    this.displaySix = function () {
        fill(0);
        ellipse(this.x + this.width*0.3, this.y + this.height*0.3, 20, 20);
        ellipse(this.x + this.width*0.3, this.y + this.height*0.5, 20, 20);
        ellipse(this.x + this.width*0.3, this.y + this.height*0.7, 20, 20);
        ellipse(this.x + this.width*0.7, this.y + this.height*0.3, 20, 20);
        ellipse(this.x + this.width*0.7, this.y + this.height*0.5, 20, 20);
        ellipse(this.x + this.width*0.7, this.y + this.height*0.7, 20, 20);
    }

}

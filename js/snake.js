function snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

  };

  this.death = function() {
    if (this.x < 0 || this.x > width - scl || this.y < 0 ||
        this.y > height - scl) {
      snake.die();
    }
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var dis = dist(this.x, this.y, pos.x, pos.y);
      if (dis < 1) {
        snake.die();
      }
    }
  };

  this.die = function() {
    noLoop();
    alert('GAME OVER');
    alert('Your Score Is: ' + this.total);
    location.reload();
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  };

  this.setDir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total = this.total + 1;
      return true;
    } else {
      return false;
    }
  };
}
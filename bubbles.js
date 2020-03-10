class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = (255, 50);
    this.colorx = 0;

    this.brushxdir = 1
    this.brushydir = 1
    this.timer = 0
  }
  
  move() {
    this.randy = random(1, 10);
    this.timer += 1
    if (this.x >= width || this.x <= 10) {
      this.brushxdir *= -1
    }
    if (this.brushy >= height || this.brushy <= 10) {
      this.brushydir *= -1
    }
    if (this.randy > 9) {
      this.brushxdir *= -1
    }
    if (this.randy < 2) {
      this.brushydir *= -1
    }
    if (this.randy > 9.95) {
      this.x = random(100, width - 100);
      this.y = random(50, height - 50);
    }

    this.x += this.brushxdir
    this.y += this.brushydir
  }

  show() {
    rectMode(RADIUS);
    stroke(255);
    strokeWeight(4);
    fill(this.color);
    rect(this.x, this.y, this.r, this.r);
  }


  interact() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.r) {
      this.color = 255;
    } else {
      this.color = 50;
    }
  }
}

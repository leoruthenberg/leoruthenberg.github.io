class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = (255, 50);
    this.colorx = 0;
  }

  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
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

class brush {
  constructor() {
    this.x = width / 2
    this.y = height / 2
    this.brushxdir = 5
    this.brushydir = 5
    this.timer = 0

    this.redval = 0
    this.greenval = 50
    this.blueval = 0
    this.redchange = random(4,8)
    this.bluechange = random(4,8)
    this.greenchange = random(4,8)

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
      this.brushx = random(100, width - 100);
      this.brushy = random(50, height - 50);
    }

    this.brushx += this.brushxdir
    this.brushy += this.brushydir
  }

  show() {

    this.redval += this.redchange
    this.blueval += this.bluechange
    this.greenval += this.greenchange

    if (this.redval >= 255 || this.redval <= 0)
      this.redchange *= -1
    if (this.blueval >= 255 || this.blueval <= 0)
      this.bluechange *= -1
    if (this.greenval >= 255 || this.greenval <= 0)
      this.greenchange *= -1

    noStroke();
    fill(this.redval, this.greenval, this.blueval, 45);
    ellipse(this.brushx, this.brushy, 50, 50);

  }
}

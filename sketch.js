let bub = [];
let bubble;
let score = 0
let mouseClicks=0
let misses = 0

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 20; i++) {
    bub[i] = new Bubble(random(width), random(height), 20);
  }

}

function draw() {
  strokeWeight(0.5)
  background(0);
  textAlign(LEFT);
  fill(255);
  text("Score:"+score, 0, 10);
  text("Misses:"+(mouseClicks-score), 0, 20);
  for (let i = 0; i < bub.length; i++) {
    bub[i].move();
    bub[i].show();
    bub[i].interact();
  }
}

function mousePressed() {
  mouseClicks+=1
  for (let i = 0; i < bub.length; i++) {
    if (dist(mouseX, mouseY, bub[i].x, bub[i].y) < bub[i].r) {
      bub.splice(i, 1);
      score += 1
    }
  }
}

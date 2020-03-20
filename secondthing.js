let bruh = []
let tick = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255)
  strokeWeight(3)

  for (let i = 0; i < 10; i++) {
    bruh[i] = new brush();
  }
}

function draw() {
  for (let i = 0; i < bruh.length; i++) {
    bruh[i].move();
    bruh[i].show();
  }
  tick += 1
  if (tick >= 3000) {
    print(tick)
    noLoop();
  }
}

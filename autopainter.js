function preload() {
  result = loadStrings('message.txt');
}

let bruh = []
let tick = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255)
  strokeWeight(3)

canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1')

  for (let i = 0; i < 40; i++) {
    bruh[i] = new brush();
  }
}

function draw() {
  // background(255)

  for (let i = 0; i < 40; i++) {
    bruh[i].move();
    bruh[i].show();
  }
  tick += 1
  if (tick >= 2000) {
    print(tick)
    noLoop();
  }

  function mousePressed() {
    fill(255)
    ellipse(mouseX, mouseY, 15, 15)
  }
}
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  
}

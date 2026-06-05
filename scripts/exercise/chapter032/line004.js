const space = 20;
let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(6);
  stroke(240);
  noFill();

  x = 0;
  y = 0;
}

function draw() {
  const w = random(10, 100);
  line(x, y, x + w, y);
  x += w + space;
  if (x >= width) {
    x = 0;
    y += 30;
  }
}

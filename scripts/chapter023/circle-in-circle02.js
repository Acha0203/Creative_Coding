const or = 200;
const ir = 30;
let cx, cy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cx = width / 2;
  cy = height / 2;
}

function draw() {
  const d = dist(mouseX, mouseY, cx, cy);
  const v = createVector(cx - mouseX, cy - mouseY);
  v.setMag(min(d, or - ir));

  cx = mouseX + v.x;
  cy = mouseY + v.y;

  clear();

  stroke(240);
  noFill();
  circle(mouseX, mouseY, or * 2);

  noStroke();
  fill(240);
  circle(cx, cy, ir * 2);
}

const or = 200;
const ir = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  const v = createVector(mouseX - width / 2, mouseY - height / 2);
  v.setMag(min(v.mag(), or - ir));

  clear();

  stroke(240);
  noFill();
  circle(width / 2, height / 2, or * 2);

  noStroke();
  fill(240);
  circle(width / 2 + v.x, height / 2 + v.y, ir * 2);
}

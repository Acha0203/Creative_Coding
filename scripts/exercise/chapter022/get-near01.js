const k = 0.1;
let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = random(width);
  y = random(height);
}

function draw() {
  const v = createVector(mouseX - x, mouseY - y);
  v.setMag(v.mag() * k);

  x += v.x;
  y += v.y;

  clear();
  circle(x, y, 60);
}

let x, y, vx, vy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(240);
  noFill();

  x = width / 2;
  y = height / 2;
  vx = 2;
}

function draw() {
  clear();

  x += vx;

  translate(x, y);
  line(10, 0, -10, -7);
  line(-10, -7, -10, 7);
  line(-10, 7, 10, 0);
  line(-10, 0, -10 - vx * 3, 0);
  resetMatrix();

  if (x >= width + 10) {
    x = 0;
  }
}

const r = 100;
let x, y, angle;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = r;
  y = 0;
  angle = 0.03;
}

function draw() {
  const tx = x * cos(angle) - y * sin(angle);
  const ty = x * sin(angle) + y * cos(angle);

  clear();
  translate(width / 2, height / 2);
  circle(tx, ty, 10);

  x = tx;
  y = ty;
}

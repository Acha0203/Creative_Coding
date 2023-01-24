const r = 150;
let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  stroke(240);
  noFill();

  angle = 0;
}

function draw() {
  clear();

  strokeWeight(1);
  stroke(100);
  circle(width / 2, height / 2, r * 2);

  const x = width / 2 + cos(angle) * r;
  const y = height / 2 + sin(angle) * r;

  strokeWeight(3);
  stroke(208, 70, 72);
  line(width / 2, height / 2, x, height / 2);
  stroke(89, 125, 206);
  line(x, height / 2, x, y);
  stroke(240);
  line(width / 2, height / 2, x, y);

  angle++;
  angle %= 360;
}
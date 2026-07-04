R = 250;
let x = 0;
let y = 0;
let bx = 0;
let by = 0;
let range = 0;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 20);
  angleMode(DEGREES);
}

function draw() {
  translate(width / 4, height / 4);
  stroke(frameCount % 255);

  range = R * sin(angle * 2.5);
  bx = x;
  by = y;
  x = range * cos(angle);
  y = range * sin(angle);
  push();
  line(bx, by, x, y);
  pop();
  angle += 28;

  translate(width / 2, 0);
  push();
  rotate(-angle / 2);
  line(bx, by, x, y);
  pop();

  translate(0, height / 2);
  push();
  rotate(angle);
  line(bx, by, x, y);
  pop();

  translate(-width / 2, 0);
  push();
  rotate(-angle);
  line(bx, by, x, y);
  pop();
}

const d = 300;
let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  strokeWeight(3);

  angle = 0;
}

function draw() {
  clear();

  translate(width / 2, height / 2);

  noStroke();
  fill(240);
  circle(0, 0, d);

  stroke(240);
  noFill();
  arc(0, 0, d + 30, d + 30, angle - 10, angle + 340);

  angle++;
}

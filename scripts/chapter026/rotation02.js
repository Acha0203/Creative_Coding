let angle, r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();

  angle = 0;
  r = 0;
}

function draw() {
  background(0, 0.03);

  translate(width / 2, height / 2);
  // clear();
  rotate(angle);

  // for (let i = 0; i < 300; i++) {
  const x = cos(angle) * r;
  const y = sin(angle) * r;
  fill(x, y, 100);
  circle(x, y, 10);

  angle += 0.1;

  r = r > width / 2 ? 0 : r + 1;
  // }
}

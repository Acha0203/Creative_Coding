let angle, r;

function setup() {
  createCanvas(windowWidth, windowHeight);

  angle = 0;
  r = 0;
}

function draw() {
  translate(width / 2, height / 2);
  // clear();
  rotate(angle);

  // for (let i = 0; i < 300; i++) {
  const x = cos(angle) * r;
  const y = sin(angle) * r;
  circle(x, y, 10);

  angle += 0.1;
  r++;
  // }
}

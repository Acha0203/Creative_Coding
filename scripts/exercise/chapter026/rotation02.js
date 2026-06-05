let angle, r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  angle = 0;
  r = 0;
}

function draw() {
  background(0, 10);

  translate(width / 2, height / 2);

  for (let i = 0; i < 100; i++) {
    const x = cos(angle) * r;
    const y = sin(angle) * r;
    fill(200);
    circle(x, y, 10);

    angle += 0.1;

    r = r > width / 2 ? 0 : r + 1;
  }
}

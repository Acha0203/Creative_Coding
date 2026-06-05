let s = 0.9;
let a;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  a = 0;
}

function draw() {
  clear();
  translate(width / 2, height / 2);

  const r = 200;

  for (let angle = 0; angle < 360; angle += 10) {
    scale(s);
    rotate(a);
    const x = cos(angle) * r;
    const y = sin(angle) * r;
    fill(angle + 1, 100, 100);
    circle(x, y, 10);
  }

  a += 0.5;
}

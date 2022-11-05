function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);
  blendMode(ADD);
}

function draw() {
  const n = 50 * random(-1, 1);
  const o = 255;
  const r = n * PI;
  translate(o, o);
  for (let i = 50; i < 160; i++) {
    rotate(PI / o);
    ellipse(r * sin((r * 5) / i), r * cos((r * PI) / i), 1, 1);
    fill(i, o, o, 50);
  }
}

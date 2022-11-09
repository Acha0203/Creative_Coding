let a = 0;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  noFill();
}

function draw() {
  const r = 250;
  clear();

  translate(r, r);
  for (let i = 0; i < 10; i++) {
    rotate(a);
    const w = map(sin(a + 0.2 * i), -1, 1, 1, 20);
    stroke(i * 36, r, r);
    circle(w * 20, w * 5, 5);
    ellipse(0, 0, w * 20, w * 5);
  }

  a += 0.02;
}
